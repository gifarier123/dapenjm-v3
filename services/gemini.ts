
import { ChatMessage } from '../types';

export const sendMessageToGemini = async (history: ChatMessage[], message: string): Promise<string> => {
  try {
    // Call our own backend API (Vercel Serverless Function)
    // This keeps the API Key hidden on the server
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        // Send only the last few messages to save context window and bandwidth, 
        // or send all if conversation is short.
        history: history.slice(-10) 
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error("Chat Error:", error);
    return "Maaf, terjadi gangguan koneksi ke server. Silakan coba lagi nanti.";
  }
};
