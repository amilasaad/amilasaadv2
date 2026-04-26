import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { cn } from '@/src/lib/utils';
import { useInteractionSounds } from '../hooks/useInteractionSounds';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [buttonText, setButtonText] = useState('Transmit Message');
  const [isSuccess, setIsSuccess] = useState(false);
  const { playClick, playHover, playSuccess } = useInteractionSounds();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    playClick();
    setIsSending(true);
    setButtonText('Sending...');

    const serviceID = 'service_ztzy2hb';
    const templateID = 'template_295ctro';
    const publicKey = 'AC_2iFnAVnmfCWqxy';
    
    const currentTimeInput = formRef.current.querySelector('#current-time') as HTMLInputElement;
    if (currentTimeInput) {
      currentTimeInput.value = new Date().toLocaleString();
    }

    emailjs.init(publicKey)
    emailjs.sendForm(serviceID, templateID, formRef.current)
    .then(() => {
      setButtonText('Message Sent!');
      setIsSuccess(true);
      setIsSending(false);
      playClick();
      formRef.current?.reset();
      
      setTimeout(() => {
        setButtonText('Transmit Message');
        setIsSuccess(false);
      }, 3000);
    }, (err) => {
      setButtonText('Transmit Message');
      setIsSending(false);
      alert('Failed to send: ' + JSON.stringify(err));
    });
  };

  return (
    <section className="py-8 lg:py-16 px-4 lg:px-24 relative z-10">
      <div className="mb-6 lg:mb-12">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter mb-4 neon-text uppercase">Contact_Me</h2>
        <div className="h-1 w-24 bg-neon-blue neon-bg"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-6 lg:p-12 rounded-[24px] lg:rounded-[40px] flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 tracking-tight">Let's build something <span className="neon-text">extraordinary</span> together.</h3>
            <p className="text-gray-400 font-mono text-[11px] lg:text-sm leading-relaxed mb-8 lg:mb-12 uppercase tracking-widest">
              Open for collaborations, architectural consultations, and new opportunities in the API and AI realm.
            </p>
          </div>
          
          <div className="space-y-4 lg:space-y-6">
            <a 
              href="mailto:amilasaad@gmail.com" 
              onMouseEnter={() => playHover()}
              onClick={() => playClick()}
              className="flex items-center gap-4 p-4 lg:p-6 glass-panel rounded-2xl lg:rounded-3xl hover:bg-neon-blue hover:text-black transition-all group"
            >
              <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-neon-blue group-hover:text-black" />
              <span className="font-mono text-[11px] lg:text-sm uppercase tracking-widest">amilasaad@gmail.com</span>
            </a>
            <div className="flex gap-4">
              <a 
                href="https://github.com/amilasaad" 
                onMouseEnter={() => playHover()}
                onClick={() => playClick()}
                target='_blank'
                className="flex-1 flex items-center justify-center gap-3 lg:gap-4 p-4 lg:p-6 glass-panel rounded-2xl lg:rounded-3xl hover:border-neon-blue transition-all group"
              >
                <Github className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-neon-blue" />
                <span className="font-mono text-[10px] lg:text-xs uppercase tracking-widest group-hover:neon-text">Github</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/amilbangsaasaad8866" 
                onMouseEnter={() => playHover()}
                onClick={() => playClick()}
                target='_blank'
                className="flex-1 flex items-center justify-center gap-3 lg:gap-4 p-4 lg:p-6 glass-panel rounded-2xl lg:rounded-3xl hover:border-neon-blue transition-all group"
              >
                <Linkedin className="w-5 h-5 lg:w-6 lg:h-6 text-gray-400 group-hover:text-neon-blue" />
                <span className="font-mono text-[10px] lg:text-xs uppercase tracking-widest group-hover:neon-text">Linkedin</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel p-6 lg:p-12 rounded-[24px] lg:rounded-[40px]"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            <input type="hidden" id="current-time" name="current_time" />
            <div className="space-y-2">
              <label className="text-[9px] lg:text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-4">Full_Name</label>
              <input 
                type="text" 
                name="from_name"
                required
                className="w-full p-4 lg:p-6 glass-panel rounded-2xl lg:rounded-3xl bg-transparent border-white/5 focus:border-neon-blue focus:ring-0 transition-all font-mono text-xs lg:text-sm" 
                placeholder="Your name" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] lg:text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-4">Email_Address</label>
              <input 
                type="email" 
                name="email"
                required
                className="w-full p-4 lg:p-6 glass-panel rounded-2xl lg:rounded-3xl bg-transparent border-white/5 focus:border-neon-blue focus:ring-0 transition-all font-mono text-xs lg:text-sm" 
                placeholder="you@mail.com" 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] lg:text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-4">Message_Payload</label>
              <textarea 
                name="message"
                required
                rows={4} 
                className="w-full p-4 lg:p-6 glass-panel rounded-2xl lg:rounded-3xl bg-transparent border-white/5 focus:border-neon-blue focus:ring-0 transition-all font-mono text-xs lg:text-sm" 
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <motion.button 
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => playHover()}
              className={cn(
                "w-full flex items-center justify-center gap-3 p-4 lg:p-6 rounded-2xl lg:rounded-3xl font-bold transition-all uppercase text-[10px] lg:text-xs tracking-[0.3em]",
                isSuccess ? "bg-green-500 text-white" : "bg-neon-blue text-black hover:bg-white",
                isSending && "opacity-50 cursor-not-allowed"
              )}
            >
              <span>{buttonText}</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
