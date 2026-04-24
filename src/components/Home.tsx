import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Target } from "lucide-react";
import { useInteractionSounds } from "../hooks/useInteractionSounds";

export default function Hero({
  showChatButton = true
}: {
  showChatButton?: boolean;
}) {
  const { playClick, playHover } = useInteractionSounds();
  const INTROS: string[] = [
    "I don’t just build APIs, I architect the high-speed neural pathways of global enterprises. Certified MuleSoft specialist turning technical complexity into pure digital performance.",
    "I bridge the gap between legacy friction and future-proof flow. Certified MuleSoft Engineer crafting high-velocity API ecosystems that empower enterprises to move at the speed of thought.",
    "Stop fighting your data and start fuelng your growth. I engineer high-performance MuleSoft integrations that transform tangled enterprise systems into streamlined digital engines.",
    "I build the bridges legacy systems can't—and the neural pathways they never imagined. Certified MuleSoft specialist engineering the connectivity that turns complexity into your competitive advantage.",
    "Where enterprise architecture meets elite execution. I specialize in turning fragmented systems into unified, high-performance API ecosystems that power global scale.",
    "I don't just connect systems, I engineer digital synergy. A Certified MuleSoft Specialist transforming enterprise complexity into the high-velocity architecture of the future.",
    "Your data shouldn't be trapped in silos. I architect the API ecosystems that break down barriers, turning technical debt into digital momentum and pure business performance.",
    "Architecting the seamless digital backbone of the modern enterprise. I turn high-stakes integration puzzles into scalable, high-performance pathways for global data.",
    "I don't just build bridges, I engineer digital gravity. Certified MuleSoft specialist crafting the high-velocity API ecosystems that pull disparate systems into one powerful, unified force.",
    "I engineer the invisible infrastructure that powers the world’s leading enterprises. Certified MuleSoft expert turning technical complexity into a high-performance digital edge.",
  ];
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      <div className="flex flex-col justify-center p-6 lg:p-12 xl:p-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="glass-panel p-6 lg:p-10 rounded-[28px] lg:rounded-[36px] border-white/5 shadow-xl lg:shadow-2xl"
        >
          <div className="flex items-center gap-2 mb-4 lg:mb-6">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[1px] bg-neon-blue neon-bg"
            ></motion.span>
            <span className="text-[10px] lg:text-xs uppercase tracking-[0.4em] font-mono neon-text">
              Amil Asaad
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl xl:text-[88px] leading-[0.95] font-bold tracking-tighter mb-6 lg:mb-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="block"
            >
              ENGINEERING
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="neon-text block"
            >
              API
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="block"
            >
              ECOSYSTEMS.
            </motion.span>
          </h1>

          <p className="max-w-md text-[11px] lg:text-xs font-mono text-gray-400 mb-6 lg:mb-10 leading-relaxed uppercase tracking-wider">
            {INTROS[Math.floor(Math.random() * INTROS.length)]}
          </p>

          <div className="flex flex-wrap gap-3 lg:gap-5 items-center">
            {showChatButton && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => playHover()}
                initial={{ scale: 0.85 }}
                animate={{
                  scale: 1.2,
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 2.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onClick={() => {
                  playClick();
                  document
                    .getElementById("ai-section")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 px-5 lg:px-7 py-2.5 lg:py-3.5 neon-bg text-black rounded-full transition-all duration-300 uppercase text-[9px] lg:text-[11px] tracking-widest font-extrabold"
              >
                <span>Talk with Hiro AI</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            )}

            <div className="flex gap-2.5 lg:gap-3.5">
              {[
                {
                  icon: <Github className="w-3.5 h-3.5 lg:w-4.5 h-4.5" />,
                  href: "https://github.com/amilasaad",
                  Target: "_blank",
                },
                {
                  icon: <Linkedin className="w-3.5 h-3.5 lg:w-4.5 h-4.5" />,
                  href: "https://www.linkedin.com/in/amilbangsaasaad8866",
                  Target: "_blank",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onMouseEnter={() => playHover()}
                  onClick={() => playClick()}
                  className="p-2 lg:p-2.5 glass-panel rounded-full hover:border-neon-blue hover:neon-text transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative flex items-center justify-center p-6 lg:p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 w-full max-w-sm lg:max-w-md aspect-square"
        >
          <div className="absolute inset-0 border border-neon-blue/20 rounded-[40px] lg:rounded-[60px] animate-[pulse_4s_infinite]"></div>
          <div className="absolute inset-[-10px] lg:inset-[-20px] border border-white/5 rounded-[40px] lg:rounded-[60px] animate-[pulse_6s_infinite_reverse]"></div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full h-full rounded-[40px] lg:rounded-[60px] overflow-hidden glass-panel shadow-[0_0_50px_rgba(0,242,255,0.1)]"
          >
            <img
              src="/images/amil-1.jpg"
              alt="Amil Asaad"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm">
              <p className="text-neon-blue font-mono text-[8px] lg:text-[10px] uppercase tracking-[0.4em]">
                Senior MuleSoft Developer // Amil_Asaad
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute translate-x-[%] right-8 top-1/3 -translate-y-1/2 hidden lg:block overflow-hidden h-64">
          <motion.p
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            className="writing-vertical-rl rotate-180 text-[10px] text-neon-blue/40 uppercase tracking-[0.8em] font-mono"
          >
            MULESOFT • FULLSTACK • AI • VISION
          </motion.p>
        </div>
      </div>
    </section>
  );
}
