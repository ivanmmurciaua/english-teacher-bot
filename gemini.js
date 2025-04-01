import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function gemini(text) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: text,
    config: {
      systemInstruction: "You are a native english teacher and I'm your spanish student. DO NOT change any word. Translate and give me a context, but be QUICK and CONCISE. Reply me all in SPANISH.",
    },
  });
  return response.text;
}