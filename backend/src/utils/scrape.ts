import puppeteer, { Browser, Page } from "puppeteer";

export async function getPersonalDetailsFromGithub(url: string) {
  let browser: Browser | null = null;
  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const githubDetails = await scrapeGitHubProfile(page, url);
    if (githubDetails) {
      return { ...githubDetails };
    } else {
      throw new Error("Failed to scrape profile details");
    }
  } catch (err) {
    console.log("While getPersonalDetailsFromGithub", err);
    throw new Error("Failed to scrape profile details");
  } finally {
    if (browser) {
      browser.close();
    }
  }
}

export async function scrapeGitHubProfile(page: Page, url: string) {
  try {
    await page.goto(url, { waitUntil: "networkidle0" });

    const profileDetails = await page.evaluate(() => {
      const normalizeContent = (elem: Element | null | undefined) => {
        if (!elem) {
          return null;
        }
        let text = elem.textContent;
        if (!text) {
          return null;
        }

        text = text.trim();
        text = text.replace(/\s+/g, " ");
        text = text.replace(/\n+/g, "\n");
        return text;
      };

      const readMeElem = document.querySelector(".Box-body");
      const nameElem = document.querySelector('[itemprop="name"]');
      const bioElem = document.querySelector(".js-user-profile-bio");

      const locationElem = document.querySelector('[itemprop="homeLocation"]');
      const companyElem = document.querySelector('[itemprop="worksFor"]');
      const websiteElem = document.querySelector(
        '[data-test-selector="profile-website-url"]'
      );

      let links: string[] = [];
      const socialProfiles = document.querySelectorAll('[itemprop="social"]');

      socialProfiles.forEach((pf) => {
        if (pf.textContent) {
          const url = normalizeContent(pf);
          if (url) links.push(url);
        }
      });

      return {
        name: normalizeContent(nameElem),
        bio: normalizeContent(bioElem),
        location: normalizeContent(locationElem),
        company: normalizeContent(companyElem),
        website: normalizeContent(websiteElem),
        readMe: normalizeContent(readMeElem),
        socialProfiles: links,
      };
    });

    await page.close();
    return profileDetails;
  } catch (e) {
    console.log(e, "while scrapeGitHubProfile");
    return null;
  }
}
