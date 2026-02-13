export async function askGemini(messages: any[]) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!messages || messages.length === 0) {
    throw new Error("No messages provided.");
  }

  const lastUserMessage = messages[messages.length - 1].content;

  const pageContent = document.body.innerText.slice(0, 6000);

  const prompt = `
You are an AI co-browsing assistant for the UrbanLeaf website.

Website visible content:
${pageContent}

User message:
${lastUserMessage}

IMPORTANT:
Respond ONLY in valid JSON.
No markdown.
No triple backticks.
No explanation.

Allowed formats:

1) Normal reply:
{
  "type": "text",
  "content": "your response"
}

2) Navigate:
{
  "type": "navigate",
  "path": "/products"
}

3) Scroll:
{
  "type": "scroll",
  "direction": "down"
}

4) Highlight product:
{
  "type": "highlight",
  "target": "broccoli"
}

If it is normal conversation → use type "text".
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();
  const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!rawText) {
    return { type: "text", content: "No response generated." };
  }
  
  // 🔥 CLEAN MARKDOWN WRAPPING
  let cleaned = rawText.trim();
  
  // Remove ```json and ```
  if (cleaned.startsWith("```")) {
    cleaned = cleaned.replace(/```json/g, "")
                     .replace(/```/g, "")
                     .trim();
  }
  
  try {
    return JSON.parse(cleaned);
  } catch {
    return { type: "text", content: cleaned };
  }
}  
