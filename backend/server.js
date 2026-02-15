require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

/* ================================
   GEMINI CHAT ROUTE (SAFE VERSION)
================================ */

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || messages.length === 0) {
      return res.status(400).json({
        type: "text",
        content: "No messages provided.",
      });
    }

    const lastUserMessage =
      messages[messages.length - 1]?.content || "";

    const prompt = `
You are an AI co-browsing assistant for the UrbanLeaf website.

User message:
${lastUserMessage}

Respond ONLY in valid JSON.

Normal reply:
{
  "type": "text",
  "content": "your response"
}

Navigate:
{
  "type": "navigate",
  "path": "/products"
}

Scroll:
{
  "type": "scroll",
  "direction": "down"
}

Highlight:
{
  "type": "highlight",
  "target": "broccoli"
}
`;

    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error("Gemini API Error:", errorText);
      return res.status(500).json({
        type: "text",
        content: "AI service error.",
      });
    }

    const data = await geminiResponse.json();

    const rawText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return res.json({
        type: "text",
        content: "No response generated.",
      });
    }

    let parsed;

    try {
      parsed = JSON.parse(rawText.trim());
    } catch {
      parsed = { type: "text", content: rawText };
    }

    return res.json(parsed);

  } catch (error) {
    console.error("Gemini Backend Error:", error);
    return res.status(500).json({
      type: "text",
      content: "Server error occurred.",
    });
  }
});

/* ================================
   BASIC ROUTES
================================ */

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
};

startServer();
