import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  googleAuthOptions: {
    apiKey: process.env.GEMINI_API_KEY,
  },
});

export async function aiToDB() {
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
