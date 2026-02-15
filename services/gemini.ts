export async function askGemini(messages: any[]) {
  if (!messages || messages.length === 0) {
    throw new Error("No messages provided.");
  }

  const response = await fetch(
    "https://urbanleaf-ixc9.onrender.com/api/chat", // 🔥 your Render backend
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages }),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText);
  }

  const result = await response.json();

  return result;
}
