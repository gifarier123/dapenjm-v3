
export const config = {
  runtime: 'edge',
};

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

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  try {
    const { message, history } = await req.json();
    const apiKey = process.env.API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Server configuration error: API Key missing' }), { status: 500 });
    }

    // Convert frontend history format to Gemini REST API format
    // Filter out initial system-like messages from frontend if any, or just take user/model turns
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Add the new message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: contents,
          systemInstruction: {
            parts: [{ text: SYSTEM_INSTRUCTION }]
          },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500,
          }
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Gemini API Error:', data);
      throw new Error(data.error?.message || 'Failed to fetch from Gemini');
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Maaf, saya tidak dapat menjawab saat ini.";

    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Server Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
