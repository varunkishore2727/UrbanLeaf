require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // 👈 ADD THIS
const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

/* ================================
   🔥 GEMINI CHAT ROUTE
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

    const lastUserMessage = messages[messages.length - 1].content;

    const prompt = `
You are an AI co-browsing assistant for the UrbanLeaf website.

User message:
${lastUserMessage}

Respond ONLY in JSON format.

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await geminiResponse.json();

    const rawText =
      data.candidates?.[0]?.content?.parts?.[0]?.text;

    let parsed;

    try {
      parsed = JSON.parse(rawText);
    } catch {
      parsed = { type: "text", content: rawText };
    }

    res.json(parsed);

  } catch (error) {
    console.error("Gemini Backend Error:", error);
    res.status(500).json({
      type: "text",
      content: "Server error occurred.",
    });
  }
});

/* ================================
   BASIC ROUTES
================================ */

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
