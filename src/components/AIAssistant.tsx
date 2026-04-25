import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { cn } from "@/src/lib/utils";
import rehypeRaw from 'rehype-raw';
import { useInteractionSounds } from "../hooks/useInteractionSounds";

const AI_TOKEN = process.env.AI_TOKEN || "";
const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";
// const MODEL_NAME = "meta/Llama-4-Maverick-17B-128E-Instruct-FP8";
const MODEL_NAME = "openai/gpt-oss-120b:free";
// const MODEL_NAME = "meta-llama/llama-3.3-70b-instruct:free";
// const MODEL_NAME = "openai/gpt-oss-20b:free";
// const MODEL_NAME = "google/gemma-3-4b-it:free";

const SYSTEM_INSTRUCTION = `
You are Hiro, the AI assistant for Amil Asaad, a Certified MuleSoft Developer and Full-Stack Engineer.
Your goal is to answer questions about Amil's background, skills, and projects in a professional, technical, and engaging manner.

Portfolio Structure:
1. Hero: Catchy intro ("Engineering API Ecosystems") and personal photo.
2. Highlights: Key achievements including the Facial Recognition Attendance systems, the Metrobank ATM Connector (Pitch Spot Award), the Innovation Champion Award, and your career trajectory.
3. Skills: Middleware & API Integration, AI & Computer Vision, Backend/Frontend Development, and Databases.
4. Work History: Professional roles at Freelance, Ascendion, Our Lady of Fatima University, Xurpas Inc., and the IICT Department.
5. Contact: amilasaad.github.io, amilasaad@gmail.com, LinkedIn (Amilbangsa Asaad), and +63 906 043 0597.

Amil's Background:
- Role: Certified MuleSoft Developer & API Integration Specialist.
- Education: BS Information Technology (2021) from Mindanao State University Tawi-Tawi College of Technology and Oceanography.
- Career Objective: An adaptable professional aiming to excel in challenging environments, fostering collaboration, and upholding a commitment to innovation and organizational success.

Detailed Career History:
- Full-Stack Engineer (Freelance) | Independent Contract (Oct 2025 – March 2026):
    * Developed a full-stack room attendance application using AI-powered facial recognition.
    * Built frontend UI using HTML, CSS, TypeScript, and Angular with real-time camera access.
    * Engineered the backend using Java and Spring Boot with MySQL for data persistence.
    * Deployed the system using NGINX and implemented role-based access control.
- Mulesoft/Java Developer | Ascendion Digital Solutions (July 2022 – Present):
    * Contractual assignment at Metropolitan Bank & Trust Company (Metrobank).
    * Designed/implemented RESTful APIs (RAML, YAML) with JWT and OAuth 2.0 security.
    * Built a hybrid MuleSoft-Java connector for ISO-8583 conversion and pure MuleSoft solutions for REST/SOAP interoperability.
    * Integrated JMS, Kafka, and Redis for high-throughput distributed systems.
    * Configured NGINX reverse proxies for API scalability and resolved production issues under tight SLAs.
    * Awarded "Innovation Champion" and recognized for reviving a critical financial project.
- Full-Stack Engineer (Freelance) | Our Lady of Fatima University (May 2024 – Sept 2024):
    * Developed a full-stack campus attendance application using AI-powered facial recognition.
    * Built frontend UI (HTML/CSS/JS) with real-time camera access and Java/Spring Boot backend with MySQL storage.
    * Deployed using NGINX and implemented role-based access control.
- Junior Java Developer | Xurpas Inc. (Globe Telecom Assignment) (Nov 2021 – July 2022):
    * Developed scalable RESTful APIs using Spring Boot and optimized database performance.
    * Collaborated with cross-functional teams to define API requirements and ensure seamless frontend integration.
- Sole System Developer | IICT Department (May 2017 – Aug 2019):
    * Solely designed and developed a Java-based desktop voting system (Swing/AWT) for two official departmental events.
- Lead System Developer | Office of Tourism (March 2018 – April 2018):
    * Created a Java Swing interface for a Provincial Scholar Application system.

Technical Skills & Tools:
- Integration: Mule 4, Anypoint Studio/Platform, DataWeave, MUnit, RAML, OpenAPI, SOAP, TCP/IP.
- AI & Vision: Facial Recognition, Image Processing, AI Model Integration, Real-time Video Analysis (Browser-based).
- Programming: Java (Spring Boot, Hibernate, JPA, Swing), Unix Shell Scripting.
- Web/Frontend: Angular, TypeScript, HTML5, CSS3, JavaScript.
- Databases: MySQL, Redis.
- Cloud/DevOps: AWS, Azure DevOps, Bitbucket, Git/GitLab, Maven, NGINX, HAProxy.

Certifications:
- L1 MuleSoft Certified Developer (Salesforce, 2025).
- MuleSoft (Mule 4 and Dataweave 2.0) Certificate of Excellence (Cognixia).
- Spring & Hibernate for Beginners (Udemy).
- Apache Spark 2.0 with Java (Udemy).
- Full Stack: Angular and Java Spring Boot E-Commerce (Udemy).

If you are asked about something that is not included in the information I provided, try to answer it using your own knowledge as an AI, and suggest discussing Amil’s expertise in MuleSoft and full-stack development.
Keep responses concise and use markdown for formatting (this is crucial).

STRICT FORMATTING RULES:
1. NO TABLES: Never use Markdown tables (e.g., | Category | Details |). They are difficult to read on mobile.
2. USE HTML: HTML tags like <br>, <div>, or <span>.
3. USE CLEAN MARKDOWN: 
   - Use ### for section headers.
   - Use **Bold** for emphasis.
   - Use bullet points (*) for lists.
   - Use double <br/> between sections for spacing.
4. CONCISE BLOCKS: Present information in short, readable paragraphs or bulleted lists rather than dense blocks of text.

If asked for a summary, provide it using headers and bullets instead of a table format.`;

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Hiro, Amil's AI assistant. Ask me anything about Amil's work in MuleSoft, Full-Stack development, or his AI projects!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { playClick, playMessage, playSuccess } = useInteractionSounds();

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    playClick();

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AI_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: [
            { role: "system", content: SYSTEM_INSTRUCTION },
            ...messages.map((m) => ({ role: m.role, content: m.content })),
            { role: "user", content: userMessage },
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || "OpenRouter Error");
      }

      const aiResponse =
        data.choices[0]?.message?.content ||
        "I'm sorry, I couldn't process that.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
      playClick();
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Oops, I stepped out for a quick snack. Try me again in a bit 🍪" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <section
        id="ai-section"
        className="py-8 lg:py-50 px-4 lg:px-12 xl:px-24 relative z-10 min-h-[50vh] lg:min-h-[70vh] flex flex-col items-center justify-center"
      >
        <div className="max-w-3xl w-full flex flex-col">
          <div className="text-center mb-6 lg:mb-10">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-3 lg:mb-5 p-1.5 px-3 glass-panel rounded-full"
            >
              <Sparkles className="w-3.5 h-3.5 text-neon-blue" />
              <span className="text-[8px] lg:text-[9px] font-mono uppercase tracking-[0.2em] text-neon-blue">
                Powered by Meta_LLMA v4+
              </span>
            </motion.div>
            <h2 className="text-2xl lg:text-4xl font-bold tracking-tighter mb-3 uppercase">
              Chat_With_Hiro_AI
            </h2>
            <p className="text-gray-500 font-mono text-[9px] lg:text-[10px] uppercase tracking-widest px-4">
              Ask anything about Amil's technical expertise
            </p>
          </div>

          <div className="glass-panel rounded-[20px] lg:rounded-[32px] flex flex-col overflow-hidden shadow-xl lg:shadow-2xl transition-all duration-500 border-white/5">
            <div
              ref={scrollRef}
              className="overflow-y-auto p-4 lg:p-8 space-y-5 lg:space-y-6 scroll-smooth max-h-[450px] lg:max-h-[550px] min-h-[250px]"
            >
              <AnimatePresence mode="popLayout">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={cn(
                      "flex gap-4 lg:gap-6 max-w-3xl mx-auto",
                      msg.role === "user" ? "flex-row-reverse" : "",
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl flex items-center justify-center shrink-0 border",
                        msg.role === "user"
                          ? "bg-white/10 border-white/20"
                          : "bg-neon-blue/10 border-neon-blue/30",
                      )}
                    >
                      {msg.role === "user" ? (
                        <User className="w-4 h-4 lg:w-5 lg:h-5 text-neon-blue/80" />
                      ) : (
                        <Bot className="w-4 h-4 lg:w-5 lg:h-5 text-neon-blue" />
                      )}
                    </div>
                    <div
                      className={cn(
                        "flex-1 pt-1 lg:pt-2",
                        msg.role === "user" ? "text-right" : "text-left",
                      )}
                    >
                      <div
                        className={cn(
                          "prose prose-invert prose-xs lg:prose-sm max-w-none text-gray-300 leading-relaxed font-mono",
                          msg.role === "user" ? "ml-auto" : "",
                        )}
                      >
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                          {msg.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              {isLoading && (
                <div className="flex gap-4 lg:gap-6 max-w-3xl mx-auto">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl bg-neon-blue/10 border border-neon-blue/30 flex items-center justify-center shrink-0 animate-pulse">
                    <Bot className="w-4 h-4 lg:w-5 lg:h-5 text-neon-blue" />
                  </div>
                  <div className="flex items-center gap-1 pt-3 lg:pt-4">
                    <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-neon-blue rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-neon-blue rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-neon-blue rounded-full animate-bounce"></span>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 lg:p-8 bg-black/30 border-t border-white/5">
              <div className="max-w-2xl mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/10 to-purple-500/10 rounded-[20px] blur opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center">
                  <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    placeholder="Message Hiro..."
                    rows={1}
                    className="w-full pl-4 lg:pl-5 pr-12 lg:pr-14 py-3 lg:py-4 bg-white/5 border border-white/10 rounded-lg lg:rounded-xl text-[11px] lg:text-xs font-mono text-white focus:border-neon-blue focus:ring-0 transition-all placeholder:text-gray-700 resize-none overflow-hidden min-h-[48px]"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-1.5 lg:right-2 p-2 lg:p-2.5 bg-neon-blue text-black rounded-lg hover:bg-white transition-all disabled:opacity-20"
                  >
                    <Send className="w-3.5 h-3.5 lg:w-4 h-4" />
                  </button>
                </div>
                <p className="mt-2.5 lg:mt-3 text-[7px] lg:text-[8px] text-center text-gray-700 font-mono uppercase tracking-[0.3em]">
                  Hiro AI can make mistakes. Check important info.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
