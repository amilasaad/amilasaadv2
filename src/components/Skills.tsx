import React from 'react';
import { motion } from 'motion/react';
import { Code2, Palette, Cpu, Globe } from 'lucide-react';
import { useInteractionSounds } from '../hooks/useInteractionSounds';

const SKILL_GROUPS = [
  {
    title: 'Middleware',
    icon: <Globe className="w-6 h-6" />,
    skills: ['MuleSoft', 'NGINX', 'Kafka', 'JMS', 'Redis', 'Apache JMeter']
  },
  {
    title: 'Backend',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'Rust', 'Python', 'Django']
  },
  {
    title: 'Frontend',
    icon: <Palette className="w-6 h-6" />,
    skills: ['Angular', 'TypeScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Svelte']
  },
  {
    title: 'AI & Vision',
    icon: <Cpu className="w-6 h-6" />,
    skills: ['Computer Vision', 'Facial Recognition', 'LLM Integration']
  }
];

export default function Skills() {
  const { playHover } = useInteractionSounds();

  return (
    <section className="py-8 lg:py-16 px-4 lg:px-24 relative z-10">
      <div className="mb-6 lg:mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4 neon-text">TECH_STACK</h2>
        <div className="h-1 w-24 bg-neon-blue neon-bg"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_GROUPS.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40, perspective: 1000, rotateX: 25 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            onMouseEnter={() => playHover()}
            className="p-6 lg:p-10 glass-panel rounded-[24px] lg:rounded-[32px] hover:bg-white/5 transition-all group"
          >
            <div className="text-neon-blue mb-6 lg:mb-8 group-hover:scale-125 transition-transform duration-500">
              {group.icon}
            </div>
            <h3 className="text-xs lg:text-sm font-bold mb-6 lg:mb-8 uppercase tracking-[0.3em] font-mono group-hover:neon-text transition-colors">{group.title}</h3>
            <ul className="space-y-3 lg:space-y-4">
              {group.skills.map((skill, si) => (
                <motion.li 
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i * 0.1) + (si * 0.05) }}
                  className="flex items-center gap-3 text-gray-400 text-[10px] lg:text-[11px] font-mono uppercase tracking-wider group-hover:text-white transition-colors"
                >
                  <span className="w-1 h-1 bg-neon-blue rounded-full shadow-[0_0_8px_#00f2ff]"></span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
