import { GoogleGenAI } from "@google/genai";

export const callAi = async (info: any, packages: string[]) => {
  try {
    const ai = new GoogleGenAI({
      googleAuthOptions: {
        apiKey: process.env.GEMINI_API,
      },
    });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: `
     Task:

Skills Extraction from Packages: You will receive a list of  package names from various programming languages, including scoped and non-scoped names. The goal is to extract unique, relevant skills from these packages. These skills will be directly related to the functionalities of the packages.

The output should categorize the skills by technology type (Frontend, Backend, etc.).

Filter out generic or high-level skills like "Code Quality" or "Design Systems".

Ensure the skills are tangible and suitable for a mid-to-senior level engineer role, excluding simple or auto-generated tasks.

Personal Information Structuring: You will also receive personal details like name, contact info, social links, education, and project details. Your job is to extract these details and structure them in a JSON format suited for a professional resume.

Input Format:
Packages: ${packages.toLocaleString()},
Personal Information: ${JSON.stringify(info)}

Output Format: 
{
  "skills": {
    "Frontend": ["React.js", "ESLint"],
    "Backend": ["Node.js"],
    "Tools": ["Webpack"]
  },
  "details": {
    "personal_info": {
      "name": "John Doe",
      "contact": "",
      "email": "johndoe@example.com",
      "location": "New York",
      "socials": {
        "LinkedIn": "https://linkedin.com/in/johndoe",
        "GitHub": "https://github.com/johndoe"
      }
    },
    "education": [
      {
        "institute": "XYZ University",
        "subject": "Computer Science",
        "duration": "2015-2019",
        "field": "CS"
      }
    ],
    "projects": [
      {
        "name": "My Portfolio",
        "description": "A personal portfolio website.",
        "live": "https://johndoe.dev",
        "code": "https://github.com/johndoe/portfolio"
      }
    ]
  }
}

Explanation:

Skills:

Extract the unique skills from the package list based on what the package provides (e.g., react => React.js, eslint => ESLint).

Group skills into categories like "Frontend", "Backend", etc., based on the technology type.

Personal Information:

The personal details are structured under personal_info with fields such as name, contact, email, location, and social links.

Extract education and project information, including institute, subject, project description, live link, and code link.

If any information is missing or cannot be determined, return null for that field.`,
    });
    if (response.text) {
      const jsonData = extractJsonFromMarkdown(response.text);
      return { ...jsonData };
    }
    return { skills: [], personal_info: null };
  } catch {
    throw new Error("Error during AI API call");
  }
};

function extractJsonFromMarkdown(response: string) {
  const markdownStr = response.replace(/```json\n|\n```/g, "");
  const json = JSON.parse(markdownStr);
  return json;
}

export async function aiMatcher() {
  try {
    const ai = new GoogleGenAI({
      googleAuthOptions: {
        apiKey: process.env.GEMINI_API_KEY,
      },
    });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: ``,
    });
  } catch {}
}
