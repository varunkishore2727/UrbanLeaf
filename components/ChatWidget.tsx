import { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { askGemini } from "../services/gemini";
import {tools} from "../services/tools";
type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi 👋 I'm your UrbanLeaf AI co-browsing assistant. Ask me anything!",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => setOpen((prev) => !prev);

  const executeTool = (result: any) => {
    if (!result || !result.type) return;
  
    switch (result.type) {
  
      case "navigate":
        navigate(result.path);
        addAssistantMessage("Taking you there...");
        break;
  
      case "scroll":
        window.scrollBy({
          top: result.direction === "down" ? 600 : -600,
          behavior: "smooth",
        });
        addAssistantMessage("Scrolling...");
        break;
  
      case "highlight":
        if (result.target) {
          const target = result.target.toLowerCase().trim();
  
          const element = document.querySelector(
            `[data-product*="${target}"]`
          ) as HTMLElement | null;
  
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
  
            element.classList.add("ai-highlight");
  
            setTimeout(() => {
              element.classList.remove("ai-highlight");
            }, 2500);
  
            addAssistantMessage("Here it is ✨");
          } else {
            addAssistantMessage("I couldn't find that product.");
          }
        }
        break;
  
      case "text":
      default:
        addAssistantMessage(result.content || "I'm not sure how to respond to that.");
        break;
    }
  };
  

  const addAssistantMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content },
    ]);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const result = await askGemini([...messages, userMessage]);
      executeTool(result);
    } catch (error) {
      console.error("Gemini error:", error);
      addAssistantMessage("⚠️ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-full shadow-xl transition-all"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-96 h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50 border border-slate-200">

          <div className="bg-emerald-600 text-white p-4 font-semibold">
            UrbanLeaf AI Assistant
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[80%] px-4 py-2 rounded-xl text-sm ${
                  msg.role === "user"
                    ? "bg-emerald-600 text-white ml-auto"
                    : "bg-white text-slate-800 shadow-sm"
                }`}
              >
                {msg.content}
              </div>
            ))}

            {loading && (
              <div className="bg-white text-slate-500 px-4 py-2 rounded-xl text-sm shadow-sm w-fit">
                Thinking...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t flex gap-2">
            <input
              type="text"
              placeholder="Ask me something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              onClick={sendMessage}
              className="bg-emerald-600 text-white px-4 rounded-xl hover:bg-emerald-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
