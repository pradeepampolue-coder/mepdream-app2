
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getMaintenanceAdvice = async (query: string) => {
  if (!API_KEY) return "AI Assistant is currently unavailable.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: "You are the MEPDream Technical Assistant. You provide helpful, safety-first advice on electrical, plumbing, and mechanical maintenance. If a task sounds dangerous, always advise the user to contact a professional at Mepdream Operation Solutions (mepdreamoperations.25@gmail.com). Keep responses concise and professional.",
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please try contacting our support team directly.";
  }
};
