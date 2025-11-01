import { Octokit } from "@octokit/rest";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import puppeteer from "puppeteer";
import { User } from "../../generated/prisma";
import { prisma } from "../utils/prisma";
import {
  aiMatcherNewJobToOldUsers,
  aiMatcherNewUserToOldJobs,
  callAi,
} from "./ai";
import { getPersonalDetailsFromGithub } from "./scrape";
config();

export async function getPublicRepos(url: string, req: Request) {
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

export const matchUserToExistingJobs = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  const user = await prisma.user.findFirst({
    where: {
      userId,
    },
  });
  const jobs = await prisma.job.findMany({
    select: {
      description: true,
    },
  });
  const response = await aiMatcherNewUserToOldJobs(user, jobs);
  res.json({ response });
};

export const applyForJob = async (req: Request, res: Response) => {
  const jobId = req.params.jobId;
  const userId = req.params.userId;
  const job = await prisma.job.findFirst({
    where: {
      id: jobId,
    },
  });
  const matchedPercentage = await prisma.matched.findFirst({
    where: {
      userIds: {
        some: {
          userId: userId,
        },
      },
    },
    select: {
      userIds: {
        where: {
          userId: userId,
        },
        select: {
          matchedPercentage: true,
        },
      },
    },
  });

  if (!matchedPercentage) {
    return res.status(404).json({
      msg: "No match found for this user",
    });
  }

  const percentage = matchedPercentage.userIds[0]?.matchedPercentage;
  if (percentage < 40) {
    res.json({
      msg: "you would be good applying for other roles",
    });
    return;
  }

  if (job) {
    await prisma.application.create({
      data: {
        matchedPercentage: percentage,
        jobId,
        userId: userId as string,
      },
    });
  }
  res.json({
    msg: "application sent",
  });
};
export const getAppliedJobs = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const applications = await prisma.application.findMany({
    where: {
      userId: userId as string,
    },
    include: {
      job: true,
    },
  });

  if (applications.length === 0) {
    return res.status(404).json({
      msg: "No applied jobs found",
    });
  }

  // Extract job details from applications
  const appliedJobs = applications.map((application) => application.job);

  res.json({
    appliedJobs,
  });
};

export const getApplicantsForJob = async (req: Request, res: Response) => {
  const { jobId } = req.params;
  const hrId = req.hr?.id;
  if (!hrId) {
    res.json({
      msg: "Unauthorized",
    });
    return;
  }

  console.log(jobId, "JOB ID");
  console.log(hrId, "HR ID");
  const job = await prisma.job.findFirst({
    where: {
      id: jobId,
      hrId: hrId as string,
    },
  });

  if (!job) {
    return res.status(403).json({
      msg: "You do not have access to this job or the job does not exist.",
    });
  }

  const applications = await prisma.application.findMany({
    where: {
      jobId: jobId,
    },
    include: {
      user: true,
    },
  });
  console.log(applications);

  if (applications.length === 0) {
    return res.status(404).json({
      msg: "No applicants for this job.",
    });
  }

  const applicants = applications.map((application) => ({
    userId: application.user.userId,
    firstName: application.user.firstName,
    lastName: application.user.lastName,
    email: application.user.email,
    status: application.status,
  }));

  res.json({
    applicants,
  });
};

export const getAllHrJobApplicants = async (req: Request, res: Response) => {
  const hrId = req.params.hrId;
  if (!hrId) {
    res.json({
      msg: "Unauthorized",
    });
    return;
  }

  const jobIds = await prisma.job.findMany({
    where: {
      hrId: hrId as string,
    },
    select: {
      id: true,
    },
  });
  if (jobIds.length === 0) {
    return res.status(403).json({
      msg: "You do not have access to any jobs.",
    });
  }

  const jobIdList = jobIds.map((job) => job.id);

  const applications = await prisma.application.findMany({
    where: {
      jobId: {
        in: jobIdList,
      },
    },
    include: {
      user: true,
    },
  });

  res.json({
    applications,
  });
};
export const createJob = async (req: Request, res: Response) => {
  try {
    const { title, description, salary } = req.body || {};
    const hrId = req.hr?.id;

    if (!hrId) {
      return res.status(401).json({ msg: "Unauthorized: User not logged in" });
    }

    const hr = await prisma.hR.findUnique({
      where: { id: hrId },
    });

    if (!hr) {
      return res
        .status(403)
        .json({ msg: "Unauthorized: Only HR can post jobs" });
    }

    if (!title || !description) {
      return res
        .status(400)
        .json({ msg: "Title and description are required" });
    }

    const newJob = await prisma.job.create({
      data: {
        title,
        description,
        salary,
        hr: { connect: { id: hr.id } },
      },
    });

    res.status(201).json({
      msg: "Job created successfully",
      job: newJob,
    });
    setImmediate(async () => {
      try {
        const response = await aiMatcherNewJobToOldUsers(newJob);
        const userIdsWithPercentages = response.userIds;
        console.log(userIdsWithPercentages);
        if (userIdsWithPercentages.length == 0) {
        } else {
          await prisma.matched.create({
            data: {
              jobId: newJob.id,
              userIds: {
                create: userIdsWithPercentages
                  .map((userPercentage: any) => {
                    return Object.entries(userPercentage).map(
                      ([userId, matchedPercentage]) => ({
                        userId: userId as string,
                        matchedPercentage: matchedPercentage as number,
                      })
                    );
                  })
                  .flat(),
              },
            },
          });
        }
      } catch (error) {
        console.error("Error during background AI matching process:", error);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error });
  }
};
export const getJobs = async (req: Request, res: Response) => {
  try {
    const hrId = req.hr?.id;

    if (!hrId) {
      return res.status(401).json({ msg: "Unauthorized: User not logged in" });
    }

    const hr = await prisma.hR.findUnique({
      where: { id: hrId },
    });

    if (!hr) {
      return res
        .status(403)
        .json({ msg: "Unauthorized: Only HR can post jobs" });
    }

    const jobs = await prisma.job.findMany({
      where: {
        hrId,
      },
    });

    res.json({
      msg: "Jobs fetched",
      jobs,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error", error });
  }
};
export async function registerHandler(req: Request, res: Response) {
  try {
    const { email, password } = req.body || {};
    if (!email.trim() || !password.trim()) {
      res.json({ msg: "Invalid inputs" });
      return;
    }

    // Check if the email is already taken
    const existingHR = await prisma.hR.findUnique({
      where: { email },
    });

    if (existingHR) {
      return res.status(400).json({ error: "Email is already taken" });
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate a unique userId (could be a UUID or another method)

    // Create the HR user in the database
    const newHR = await prisma.hR.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    // Return the user information (exclude password for security reasons)
    return res.status(201).json({
      email: newHR.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

export async function loginHandler(req: Request, res: Response) {
  try {
    const { email, password } = req.body || {};
    if (!email.trim() || !password.trim()) {
      res.json({ msg: "Invalid inputs" });
      return;
    }

    const existingHR = await prisma.hR.findUnique({
      where: { email },
    });

    if (!existingHR) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, existingHR.password);

    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: existingHR.id, email: existingHR.email },
      "your-secret-key",
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      userId: existingHR.id,
      email: existingHR.email,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
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
    const packages = await getPackages(req, repos);
    const response = await callAi(
      { ...moreInfo, ...personal_information },
      packages
    );
    const { skills } = response;
    const { projects, education, personal_info } = response.details;
    const {
      firstName,
      lastName,
      contact,
      email,
      location,
      socials,
      personalWebsite,
    } = personal_info;
    if (!url) {
      res.json({
        msg: "User not found",
      });
      return;
    }
    const existingUser = await prisma.user.findUnique({
      where: {
        githubProfile: url,
      },
      include: {
        socials: true,
        education: true,
        skills: {
          select: {
            title: true,
            skills: true,
          },
        },
        experiences: true,
        projects: true,
        resume: true,
      },
    });
    let user: User;
    if (existingUser) {
      res.json({
        response,
        id: existingUser.userId,
      });
      return;
    } else {
      console.log(socials, "HERE!@#");
      user = await prisma.user.create({
        data: {
          firstName: firstName || "",
          lastName: lastName || "",
          email: email || "",
          contact: contact || "",
          location: location || "",
          personalWebsite: personalWebsite || "",
          githubProfile: url,
          // socials: {
          //   create: Object.entries(socials).map(([name, url]) => ({
          //     websiteName: name || "", // Ensure name is not null
          //     url: url || "", // Ensure url is not null
          //   })),
          // },
          education: {
            create: education?.map((edu: any) => {
              return {
                college: edu.institute || "",
                field: edu.field || "Not specified",
                description: edu.subject || "", // Default to empty string if null
              };
            }),
          },
        },
      });
      await prisma.skill.createMany({
        data: Object.entries(skills).map(([title, skillArray]) => ({
          title: title || "",
          skills: (skillArray as string[]) || [],
          userId: user.userId,
        })),
      });
      res.json({
        response,
        id: user.userId,
      });
    }
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
