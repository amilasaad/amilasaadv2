import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { useInteractionSounds } from '../hooks/useInteractionSounds';

const EXPERIENCES = [
  {
    company: 'Ascendion Inc.',
    role: 'Senior MuleSoft Developer',
    period: 'July 2022 - Present',
    description: 'Technical contributor for Metrobank integration projects. Guide junior developers through complex implementations and collaborate directly with Business Analysts (BA), System Architects (SA), System Integration (SI), SQD/Testers, and stakeholders to align technical solutions with business requirements. Engineered custom ISO-8583 connectors and high-throughput messaging architectures.',
    skills: ['MuleSoft', 'Mentorship', 'Stakeholder Management', 'Architecture Integration', 'Java', 'ISO-8583', 'RAML', 'JWT', 'Kafka', 'Redis', 'NGINX', 'OAUTH', 'Apache JMeter', 'MuleSoft Custom Connecter'],
    logo: 'src/images/ascendion-work.jpg'
  },
  {
    company: 'Independent Contract',
    role: 'Full-Stack Engineer (Freelance)',
    period: 'Oct 2025 - March 2026',
    description: 'Developed a full-stack room attendance application using AI-powered facial recognition. Built the frontend with Angular and real-time camera access, while engineering the backend with Spring Boot and NGINX for secure deployment.',
    skills: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Facial Recognition', 'MySQL', 'NGINX', 'HTML', 'CSS'],
    logo: 'src/images/freelance-2.png'
  },
  {
    company: 'Our Lady of Fatima University',
    role: 'Full-Stack Engineer (Freelance)',
    period: 'May 2024 - Sept 2024',
    description: 'Developed a full-stack campus attendance application using AI-powered facial recognition with real-time camera access and role-based access control, deployed via NGINX.',
    skills: ['Java', 'Spring Boot', 'TypeScript', 'Angular', 'Facial Recognition', 'MySQL', 'NGINX', 'HTML', 'CSS'],
    logo: 'src/images/olfu-work.jpg'
  },
  {
    company: 'Xurpas Inc.',
    role: 'Junior Java Developer',
    period: 'Nov 2021 - July 2022',
    description: 'Developed scalable RESTful APIs using Spring Boot for Globe Telecom. Optimized database performance and collaborated with cross-functional teams to ensure seamless frontend integration.',
    skills: ['Java', 'Spring Boot', 'MySQL', 'Angular', 'RESTful APIs', 'API Design'],
    logo: 'src/images/xurpas-work.jpg'
  },
  {
    company: 'IICT Department',
    role: 'Sole Software Developer (Institutional Project)',
    period: 'May 2017 - Aug 2019',
    description: 'Solely designed and developed a Java-based desktop voting system using Swing for two official departmental events.',
    skills: ['Java', 'Swing', 'MySQL'],
    logo: 'src/images/iict-work.jpg'
  },
  {
    company: 'Provincial Tawi-Tawi',
    role: 'Lead Software Developer (Freelance)',
    period: 'March 2018 - April 2018',
    description: 'Created a Java Swing interface for a Provincial Scholar Application system to streamline data management.',
    skills: ['Java', 'Swing', 'MySQL'],
    logo: 'src/images/provincial-tt-work.jpg'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const experienceVariants = {
  hidden: { 
    opacity: 0, 
    x: -50,
    filter: 'blur(10px)'
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    } as const
  }
};

export default function Experience() {
  const { playHover, playClick } = useInteractionSounds();

  return (
    <section className="py-8 lg:py-16 px-4 lg:px-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 lg:mb-12"
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4 neon-text uppercase">Career_History</h2>
        <div className="h-1 w-24 bg-neon-blue neon-bg"></div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6 lg:space-y-8"
      >
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            variants={experienceVariants}
            onMouseEnter={() => playHover()}
            className="glass-panel p-6 lg:p-12 rounded-[24px] lg:rounded-[40px] hover:bg-white/5 transition-all group grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-center cursor-default"
          >
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-16 h-16 lg:w-20 lg:h-20 glass-panel rounded-2xl overflow-hidden mb-4 lg:mb-6 group-hover:scale-110 group-hover:border-neon-blue transition-all duration-500">
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-neon-blue mb-2 justify-center lg:justify-start">
                <Calendar className="w-4 h-4" />
                <span className="text-[10px] lg:text-xs font-mono uppercase tracking-widest">{exp.period}</span>
              </div>
              <h3 className="text-lg lg:text-xl font-bold uppercase tracking-tight">{exp.company}</h3>
            </div>
            
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-3 lg:mb-4 justify-center lg:justify-start">
                <Briefcase className="w-4 h-4 lg:w-5 lg:h-5 text-neon-blue/60" />
                <h4 className="text-xl lg:text-2xl font-bold text-white group-hover:neon-text transition-all duration-300">{exp.role}</h4>
              </div>
              <p className="text-gray-400 font-mono text-[11px] lg:text-sm leading-relaxed mb-6 lg:mb-8 uppercase tracking-wide">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 lg:gap-3 justify-center lg:justify-start">
                {exp.skills.map(skill => (
                  <motion.span 
                    key={skill}
                    whileHover={{ scale: 1.1, color: '#00f2ff' }}
                    className="px-3 lg:px-4 py-1 glass-panel rounded-full text-[9px] lg:text-[10px] font-mono text-neon-blue/80 uppercase tracking-widest transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
