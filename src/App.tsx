import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Hero from "./components/Home";
import Highlights from "./components/Highlights";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import AIAssistant from "./components/AIAssistant";

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8],
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [15, 0, 0, -15],
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, scale, rotateX, perspective: 1000 }}
      className="transition-all duration-500"
    >
      {children}
    </motion.div>
  );
}

const SHOW_HIRO_ORB = false;
const SHOW_CHAT_SECTION = true;

export default function App() {
  return (
    <main className="min-h-screen selection:bg-neon-blue selection:text-black relative">
      <div className="bg"></div>
      <Hero showChatButton={SHOW_CHAT_SECTION} />

      <div className="space-y-16 lg:space-y-24 pb-32">
        <ScrollReveal>
          <Highlights />
        </ScrollReveal>
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <ScrollReveal>
          <Experience />
        </ScrollReveal>
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
        {SHOW_CHAT_SECTION && (
          <ScrollReveal>
            <AIAssistant />
          </ScrollReveal>
        )}
      </div>

      <footer className="py-12 px-4 lg:px-24 border-t border-white/5 bg-black/20 backdrop-blur-md relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-blue neon-bg rounded-full"></div>
            <span className="font-bold tracking-[0.2em] text-xl uppercase neon-text">
              Amil Asaad
            </span>
          </div>
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
            © {new Date().getFullYear()} Amil Asaad • System_v2.0 • HIRO AI
          </p>
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-[0.3em]">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1BlANI4367Wlj39qfohj6ZKpohpGYBKZl/view?usp=sharing"
              className="hover:neon-text transition-colors"
            >
              Get_Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
