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

export const createChatSession = (): Chat | null => {
  const apiKey = process.env.API_KEY;
  
  // Basic validation
  if (!apiKey) {
    console.error("Gemini API Key is missing. Please check your environment variables.");
    return null;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    console.log("Gemini Chat Session Initialized Successfully");
    return chat;
  } catch (error) {
    console.error("Failed to initialize Gemini client:", error);
    return null;
  }
};

export const sendMessageToGemini = async (chat: Chat | null, message: string): Promise<string> => {
  if (!chat) {
    // Attempt to recover if chat was not initialized
    return "Maaf, koneksi ke asisten virtual belum tersedia. Silakan muat ulang halaman atau coba lagi nanti.";
  }

  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan saat menghubungi server. Silakan coba lagi nanti.";
  }
};