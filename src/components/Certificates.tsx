import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { useInteractionSounds } from '../hooks/useInteractionSounds';

const CERTIFICATES = [
  {
    title: 'MuleSoft Certified Developer',
    subtitle: 'Salesforce',
    issuer: 'MuleSoft',
    date: '2025',
    id: '*******552',
    description: 'Validated expertise in designing, building, and managing complex APIs and integrations using Anypoint Platform.',
    verifyUrl: 'https://trailhead.salesforce.com/en/credentials/verification/',
    icon: <Award className="w-8 h-8 text-neon-blue" />,
    image: '/images/mcd-lvl-1-cert.jpg'
  },
  {
    title: 'PITCH SPOT AWARD',
    subtitle: 'Metropolitan Bank & Trust Company',
    issuer: 'MuleSoft',
    date: '2023',
    id: '***********',
    description: 'Recognition for innovative problem-solving and excellence in technical presentation within banking technology initiatives.',
    verifyUrl: '#',
    icon: <Award className="w-8 h-8 text-neon-blue" />,
    image: '/images/pitch-spot-award.jpg'
  },
  {
    title: 'MuleSoft Mastery Certification',
    subtitle: 'Cognixia',
    issuer: 'MuleSoft',
    date: '2022',
    id: '********rFTF',
    description: 'Comprehensive training covering end-to-end MuleSoft integration, Anypoint Studio, and advanced API lifecycle management.',
    verifyUrl: 'https://lms.cognixia.com/moodle/mod/customcert/verify_certificate.php',
    icon: <Award className="w-8 h-8 text-neon-blue" />,
    image: '/images/mulesoft-training-cert.png'
  },
  {
    title: 'Innovation Champion',
    subtitle: 'Ascendion',
    issuer: 'MuleSoft',
    date: '2024',
    id: '***********',
    description: 'Awarded for driving transformative digital solutions and fostering a culture of technical innovation within the organization.',
    verifyUrl: '#',
    icon: <Award className="w-8 h-8 text-neon-blue" />,
    image: '/images/innovation-champion-award.jpg'
  },
  {
    title: 'Spring & Hibernate (includes Spring Boot)',
    subtitle: 'Udemy',
    issuer: 'MuleSoft',
    date: '2021',
    id: '********1735',
    description: 'Deep dive into Java backend development, focusing on dependency injection, ORM mapping, and rapid application development with Spring Boot.',
    verifyUrl: 'https://www.udemy.com/certificate/UC-5694093c-c4af-4d72-9b11-d5c7c4d41735',
    icon: <Award className="w-8 h-8 text-neon-blue" />,
    image: '/images/spring-boot-cert.png'
  },
  {
    title: 'Faull Stack: Angular and Java Spring Boot',
    subtitle: 'Udemy',
    issuer: 'MuleSoft',
    date: '2021',
    id: '********59b9',
    description: 'Mastery of full-stack development involving responsive Angular frontends and robust Java-based RESTful microservices.',
    verifyUrl: 'https://www.udemy.com/certificate/UC-152cc4c0-2b47-4ee8-98ca-63fe588c59b9',
    icon: <Award className="w-8 h-8 text-neon-blue" />,
    image: '/images/fullstack-cert.png'
  },
  {
    title: 'Apache Spark 2.0 - Big Data',
    subtitle: 'Udemy',
    issuer: 'MuleSoft',
    date: '2022',
    id: '********4ab9',
    description: 'Implementation of large-scale data processing using the Spark framework, focusing on RDDs, DataFrames, and Big Data analytics.',
    verifyUrl: 'https://www.udemy.com/certificate/UC-6146b338-805a-4dd8-8ed9-da764df4ab9a',
    icon: <Award className="w-8 h-8 text-neon-blue" />,
    image: '/images/data-engineer-cert.png'
  },
  {
    title: 'CyberSecurity Essentials',
    subtitle: 'DICT PH',
    issuer: 'MuleSoft',
    date: '2021',
    id: '********0051',
    description: 'Foundational knowledge in network security, threat mitigation, and best practices for securing digital information and communications.',
    verifyUrl: '',
    icon: <Award className="w-8 h-8 text-neon-blue" />,
    image: '/images/cybersecurity-essentials-cert.png'
  }
];

export default function Certificates() {
  const { playHover, playClick } = useInteractionSounds();

  return (
    <section className="py-8 lg:py-16 px-4 lg:px-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8 lg:mb-12"
      >
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4 neon-text uppercase">Certifications</h2>
        <div className="h-1 w-24 bg-neon-blue neon-bg"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {CERTIFICATES.map((cert, i) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => playHover()}
            onClick={() => playClick()}
            className="glass-panel rounded-[24px] lg:rounded-[32px] hover:bg-white/5 transition-all group relative overflow-hidden flex flex-col border border-white/5 hover:border-neon-blue/30"
          >
            
            <div className="relative h-40 lg:h-48 overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title} 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 left-4 p-2 lg:p-3 glass-panel rounded-xl group-hover:scale-110 transition-transform duration-500 bg-black/40 backdrop-blur-md">
                {cert.icon}
              </div>

              <div className="absolute top-4 right-4 text-right">
                <span className="text-[8px] font-mono text-gray-900 uppercase tracking-widest block mb-0.5">Issue_Date</span>
                <span className="text-[10px] font-mono text-neon-blue font-bold">{cert.date}</span>
              </div>
            </div>

            <div className="p-6 lg:p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white mb-2 group-hover:neon-text transition-colors">{cert.title}</h3>
                <span className="inline-block px-2 py-0.5 bg-neon-blue/10 rounded border border-neon-blue/20 text-[9px] font-mono text-neon-blue uppercase tracking-widest">{cert.subtitle}</span>
              </div>
              
              <p className="text-[11px] lg:text-xs text-gray-400 font-mono leading-relaxed uppercase tracking-wider mb-8">
                {cert.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Credential_ID</span>
                  <span className="text-[10px] font-mono text-gray-400">{cert.id}</span>
                </div>
                
                <motion.a
                  href={cert.verifyUrl}
                  whileHover={{ scale: 1.05 }}
                  target='_blank'
                  className="flex items-center gap-2 px-4 py-2 glass-panel rounded-xl text-[9px] font-mono uppercase tracking-[0.2em] hover:neon-bg hover:text-black transition-all"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}