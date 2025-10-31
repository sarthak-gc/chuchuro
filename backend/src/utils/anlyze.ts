import { Octokit } from "@octokit/rest";
import { config } from "dotenv";
import { Request, Response } from "express";
import puppeteer from "puppeteer";
import { getPersonalDetailsFromGithub } from "./scrape";
config();

export async function getPublicRepos(url: string, req: Request) {
  console.log(req.session.access_token);
  console.log("");
  const octokit = new Octokit({
    auth: req.session.access_token || process.env.GITHUB_TOKEN,
  });

  const username = url.split("/")[url.split("/").length - 1];
  try {
    const response = await octokit.rest.repos.listForUser({
      username,
      sort: "updated",
      per_page: 16,
    });

    console.log(
      `Success! Status: ${response.status}. Rate limit remaining: ${response.headers["x-ratelimit-remaining"]}`
    );

    const repos = response.data;

    if (!repos || repos.length == 0) {
      return [];
    }
    const requiredData: repoDetailsI[] | undefined = await Promise.all(
      repos.map(async (repo) => {
        return {
          repoName: repo.name,
          contentUrl: repo.url + "/contents",
          url: repo.url,
          languages: repo.languages_url,
          language: repo.language,
          owner: repo.owner.login,
          default_branch: repo.default_branch ? repo.default_branch : "main",
        };
      })
    );
    return requiredData;
  } catch {
    return [];
  }
}
interface repoDetailsI {
  repoName: string;
  contentUrl: string;
  url: string;
  languages: string;
  language: string | undefined | null;
  owner: string;
  default_branch: string;
}

const analyzeGuestProfiles = async (req: Request, res: Response) => {
  try {
    let username = (req.query.u as string) || "";
    if (!username && req.session.userName) {
      username = req.session.userName;
    }
    if (
      !username.trim() ||
      username.trim().length > 30 ||
      username.includes("/")
    ) {
      res.json({
        msg: "Invalid username",
      });
      return;
    }
    const url = `https://github.com/${username}`;
    const personal_information = await getPersonalDetailsFromGithub(url);
    let moreInfo = {};
    if (personal_information.website) {
      function sanitizeUrl(url: string) {
        let sanitizedWebsite = url.replace(/^https?:\/\//, "");

        sanitizedWebsite = sanitizedWebsite.replace(/^www\./, "");

        if (!/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(sanitizedWebsite)) {
          return null;
        }

        return sanitizedWebsite;
      }
      const url = sanitizeUrl(personal_information.website);
      if (url) {
        moreInfo = await scrapePersonalWebsite(`https://${url}`);
      }
    }
    const repos = await getPublicRepos(url, req);
    if (repos.length == 0) {
      res.json({
        msg: "No repo found",
      });
      return;
    }

    console.log("REPS:", repos.length);

    const packages = await getPackages(req, repos);
    const response = await callAi(
      { ...moreInfo, ...personal_information },
      packages
    );
    res.json({
      response,
    });
  } catch (e: any) {
    res.json({
      msg: e.message,
    });
  }
};
export default analyzeGuestProfiles;
const getPackages = async (req: Request, repos: repoDetailsI[]) => {
  const tree = await Promise.all(
    repos.map(async (repo) => {
      try {
        const packagePath = await getPathTrees(req, repo);
        const a = packagePath.languages.data;
        const languages = Object.keys(a);

        const relevantLanguages = [
          "JavaScript",
          "TypeScript",
          "Go",
          "Rust",
          "PHP",
          "Python",
        ];
        if (languages.some((lang) => relevantLanguages.includes(lang))) {
          console.log("path", packagePath);
          return packagePath;
        }
        return null;
      } catch {
        return null;
      }
    })
  );
  const allPaths = tree.filter((t) => t !== null);

  const allRelevantRepos = allPaths
    .map((path) => {
      const packagesPaths = path.tree
        .filter((p) => {
          const isJsTs = p.path.includes("package.json");
          const isGo = p.path.endsWith("go.mod");
          const isRust = p.path.endsWith("Cargo.toml");
          const isPhp = p.path.endsWith("composer.json");
          const isPython =
            p.path.endsWith("requirements.txt") || p.path.endsWith("setup.py");

          return isJsTs || isGo || isRust || isPhp || isPython;
        })
        .map((p) => {
          return p.path;
        });
      const languages = path.languages.data;
      const repoName = path.repoName;
      return {
        [repoName]: { languages, packagesPaths },
      };
    })
    .filter((p) => {
      return Object.keys(p).some((key) => {
        const value = p[key];
        return value.packagesPaths.length > 0;
      });
    });
  const packageContents = await Promise.all(
    allRelevantRepos.map(async (repo) => {
      const packages = await getPackageContents(req, repo, repos[0].owner);
      const uniquePackages = new Set(packages);
      return [...uniquePackages];
    })
  );
  return [...new Set(packageContents.flat(2))];
};

export async function getPackageContents(
  req: Request,
  repo: {
    [x: string]: {
      languages: {
        [key: string]: number;
      };
      packagesPaths: string[];
    };
  },
  owner: string
) {
  const octokit = new Octokit({
    auth: req.session.access_token || process.env.GITHUB_TOKEN,
  });

  const keys = Object.keys(repo);

  const repoName = keys[0];

  const repoDetails = repo[repoName];
  const path = repoDetails.packagesPaths;
  const x = await Promise.all(
    path.map(async (p) => {
      const file = await octokit.rest.repos.getContent({
        owner: owner,
        repo: repoName,
        path: p,
      });
      const fileContent = file.data as { content: Base64URLString };
      const isJsTs = p.endsWith("package.json");
      const isGo = p.endsWith("go.mod");
      const isRust = p.endsWith("Cargo.toml");
      const isPhp = p.endsWith("composer.json");
      const isPython = p.endsWith("requirements.txt") || p.endsWith("setup.py");
      const content = atob(fileContent.content);
      if (isJsTs) {
        const dependencies = getTsJsDependencies(content);
        if (dependencies.length > 0) return dependencies;
      }
      if (isGo) {
        const dependencies = getGoDependencies(content);
        if (dependencies.length > 0) return dependencies;
      }
      if (isRust) {
        const dependencies = getRustDependencies(content);
        if (dependencies.length > 0) return dependencies;
      }
      if (isPhp) {
        const dependencies = getPhpDependencies(content);
        if (dependencies.length > 0) return dependencies;
      }
      if (isPython) {
        const dependencies = getPythonDependencies(content);
        if (dependencies.length > 0) return dependencies;
      }
    })
  );

  const f = x.filter((item) => item != undefined);

  return new Set(f.flat(2));
}
async function getPathTrees(req: Request, repo: repoDetailsI) {
  const octokit = new Octokit({
    auth: req.session.access_token || process.env.GITHUB_TOKEN,
  });

  const files = await octokit.rest.git.getTree({
    owner: repo.owner,
    repo: repo.repoName,
    recursive: "1",
    tree_sha: repo.default_branch,
  });

  const languages = await octokit.rest.repos.listLanguages({
    owner: repo.owner,
    repo: repo.repoName,
  });
  const updatedTree = {
    repoName: repo.repoName,
    owner: repo.owner,
    tree: files.data.tree,
    languages,
  };
  return updatedTree;
}

export async function scrapePersonalWebsite(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, {
      waitUntil: "networkidle2",
    });
    const innerText = await page.evaluate(() => {
      const text = document.body.innerText.split("\n").join(" ");
      const links = Array.from(document.querySelectorAll("a"))
        .map((a) => a)
        .join(", ");

      console.log("TEXT: ", text);
      console.log("\nLINKS: ", links);
      return { text, links };
    });
    return innerText;
  } catch (error: any) {
    console.log(error);
    if (error.message.includes("net::ERR_NAME_NOT_RESOLVED")) {
      throw new Error("invalid url");
    }
    throw new Error(error);
  }
}

const getTsJsDependencies = (packageJsonContent: string) => {
  const parsedContent = JSON.parse(packageJsonContent) as {
    devDependencies?: { [key: string]: string };
    dependencies?: { [key: string]: string };
  };
  const allDependencies = [
    ...(parsedContent.dependencies
      ? Object.keys(parsedContent.dependencies)
      : []),
    ...(parsedContent.devDependencies
      ? Object.keys(parsedContent.devDependencies)
      : []),
  ];
  return allDependencies;
};

const getGoDependencies = (goModContent: string) => {
  const regex = /require\s*\(\s*([\s\S]*?)\s*\)/;
  const match = goModContent.match(regex);

  let dependencies = [];
  if (match && match[1]) {
    const cleanedContent = match[1]
      .replace(/\s*\/\/\s*(indirect|direct)/g, "")
      .replace(/\s+/g, " ")
      .trim();

    const dependencyNames = cleanedContent
      .split(/\s+/)
      .filter((_, index) => index % 2 === 0);
    dependencies.push(...dependencyNames);
  }

  return dependencies;
};

const getRustDependencies = (cargoTomlContent: string) => {
  const regex = /(\w+)\s*=\s*\{[^}]*features\s*=\s*\[([^\]]*)\]/g;
  let match;
  const result = [];

  while ((match = regex.exec(cargoTomlContent)) !== null) {
    result.push([
      match[1],
      match[2].split(",").map((feature) => feature.trim().replace(/"/g, "")),
    ]);
  }
  const uniqueDependencies = Array.from(new Set(result.flat(2)));

  return uniqueDependencies;
};

const getPhpDependencies = (composerJsonContent: string) => {
  const parsedContent = JSON.parse(composerJsonContent) as {
    "require-dev"?: { [key: string]: string };
    require?: { [key: string]: string };
  };
  const allDependencies = [
    ...(parsedContent.require ? Object.keys(parsedContent.require) : []),
    ...(parsedContent["require-dev"]
      ? Object.keys(parsedContent["require-dev"])
      : []),
  ];
  return allDependencies;
};
const getPythonDependencies = (requirementsTxtContent: string) => {
  const dependencies: string[] = [];

  requirementsTxtContent.split("\n").forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine && !trimmedLine.startsWith("#")) {
      dependencies.push(trimmedLine.split("==")[0]);
    }
  });

  return dependencies;
};
