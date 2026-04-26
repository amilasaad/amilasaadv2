import React from "react";
import { motion } from "motion/react";
import {
  ExternalLink,
  Zap,
  Shield,
  Award,
  CheckCircle,
  RefreshCw,
  Trophy,
} from "lucide-react";
import { useInteractionSounds } from "../hooks/useInteractionSounds";

const HIGHLIGHTS = [
  {
    id: "01",
    title: "Facial Recognition Attendance",
    description:
      "Developed an AI-based biometric attendance tracking system as my bachelor thesis using Angular, integrating a facial recognition API for real-time identity matching and SMS notifications to parents for attendance updates.",
    icon: <Zap className="w-6 h-6" />,
    stats: "99.2% Accuracy",
    image: "/images/thesis.png",
  },
  {
    id: "02",
    title: "Banking Integration Connector",
    description:
      'Outstanding recognition with the Pitch Spot Award for engineering a custom ISO-based MuleSoft connector that prevented potential project termination and is now powering all ATM transactions in real time at scale.',
    icon: <Shield className="w-6 h-6" />,
    stats: "Pitch Spot Award",
    image: "/images/pitch-spot-award.png",
  },
  {
    id: "03",
    title: "Innovation Champion",
    description:
      "Recognized as an Innovation Champion for outstanding technical contributions that improved team productivity and accelerated project delivery.",
    icon: <Trophy className="w-6 h-6" />,
    stats: "Innovation Champion Award",
    image: "/images/innovation-champion-award.png",
  },
  {
    id: "04",
    title: "SOAP ↔ REST Transformer",
    description:
      "Developed a reusable MuleSoft connector/library enabling seamless bidirectional SOAP–REST payload transformation, bridging legacy systems with modern API architectures. Widely adopted across 20+ integration projects, improving reusability and reducing development effort.",
    icon: <RefreshCw className="w-6 h-6" />,
    stats: "20+ Projects Adopted",
    image: "/images/mbtc-logo.jpg",
  },
  {
    id: "05",
    title: "MuleSoft Certified Developer",
    description:
      "MuleSoft Certified Developer certification validating expertise in designing, building, and managing complex APIs and integrations.",
    icon: <Award className="w-6 h-6" />,
    stats: "MCD - L1",
    image: "/images/mcd-lvl-1-cert.jpg",
  },
  {
    id: "06",
    title: "Junior Java Developer",
    description:
      "Started as a contractual Junior Java Developer at Globe Telecom Philippines under Xurpas Enterprise, and earned regular employment in under six months through consistent high performance and strong contributions to project delivery.",
    icon: <CheckCircle className="w-6 h-6" />,
    stats: "Rated Superb",
    image: "/images/globe-logo.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 15,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    } as const,
  },
};

export default function Highlights() {
  const { playHover, playClick } = useInteractionSounds();

  return (
    <section className="py-8 lg:py-16 px-4 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-6 lg:mb-12"
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4 neon-text uppercase">
          Key_Highlights
        </h2>
        <div className="h-1 w-24 bg-neon-blue neon-bg"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {HIGHLIGHTS.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            onMouseEnter={() => playHover()}
            onClick={() => playClick()}
            className="glass-panel rounded-[24px] lg:rounded-[40px] hover:bg-white/5 transition-all group relative overflow-hidden flex flex-col cursor-pointer"
          >
            <div className="relative h-40 lg:h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000 opacity-50 group-hover:opacity-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute top-4 right-4 text-white/10 font-mono text-3xl lg:text-4xl font-bold group-hover:text-neon-blue/40 transition-colors">
                {item.id}
              </div>
            </div>

            <div className="p-6 lg:p-10 pt-6">
              <div className="text-neon-blue mb-4 lg:mb-6 p-3 lg:p-4 glass-panel rounded-2xl w-fit group-hover:scale-110 group-hover:neon-bg transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 tracking-tight group-hover:neon-text transition-all">
                {item.title}
              </h3>
              <p className="text-[11px] lg:text-xs text-gray-400 mb-6 lg:mb-8 font-mono leading-relaxed uppercase tracking-wider group-hover:text-gray-300">
                {item.description}
              </p>

              <div className="flex items-center justify-between pt-4 lg:pt-6 border-t border-white/5">
                <span className="text-[9px] lg:text-[10px] font-mono text-neon-blue uppercase tracking-[0.2em] font-bold">
                  {item.stats}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
