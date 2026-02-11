import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Dapen Assistant", a professional and helpful virtual assistant for Dana Pensiun Jasa Marga (Pension Fund). 
Your tone should be polite, corporate, professional, and reassuring (Indonesian Language).

Key Context about Dapen Jasa Marga:
- Focus: Managing pension funds for Jasa Marga employees to ensure prosperity in retirement.
- Services: Defined Benefit Plan (PPMP) and Defined Contribution Plan (PPIP).
- Values: Integrity, Professionalism, Service Excellence.
- If asked about specific personal account balances, apologize and explain you cannot access personal data for security reasons, and direct them to the "Layanan Peserta" login portal.

Your goal is to answer general inquiries about:
1. Procedures for retirement claims.
2. General investment outlooks (keep it general).
3. Office hours and contact information.
4. Updates or news related to the pension fund.

Keep answers concise (under 150 words) unless asked for details.
`;

// Changed to return Chat | null to handle missing configuration gracefully
export const createChatSession = (): Chat | null => {
  const apiKey = process.env.API_KEY;
  
  // Guard clause to prevent crash if API Key is missing
  if (!apiKey) {
    console.warn("Gemini API Key is missing or empty. Chat feature will be disabled.");
    return null;
  }

  try {
    // Initialize only when called
    const ai = new GoogleGenAI({ apiKey });
    return ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Gemini client:", error);
    return null;
  }
};

export const sendMessageToGemini = async (chat: Chat | null, message: string): Promise<string> => {
  if (!chat) {
    return "Maaf, layanan asisten virtual sedang tidak tersedia saat ini (Masalah Konfigurasi Sistem).";
  }

  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan pada sistem. Silakan coba lagi nanti.";
  }
};