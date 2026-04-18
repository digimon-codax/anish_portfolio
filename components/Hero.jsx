'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-24 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-block">
          <motion.div 
            initial={{ rotate: -10, scale: 0.8 }}
            animate={{ rotate: -3, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="border-[3px] border-[var(--border-color)] px-5 py-2 bg-primary text-black font-extrabold text-xl md:text-2xl"
          >
            Hi, I'm Anish Chatterjee
          </motion.div>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
          Backend <br /> Developer<span className="text-primary animate-pulse">.</span>
        </h1>
        
        <p className="text-xl md:text-3xl font-medium mb-12 max-w-2xl text-foreground/80 leading-relaxed">
          Enthusiastic learner about Full Stack development.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-5 items-center"
        >
          <a href="#projects" className="px-8 py-4 bg-foreground text-background font-bold text-lg md:text-xl neo-brutal hover:bg-primary hover:text-black">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-4 bg-background text-foreground font-bold text-lg md:text-xl neo-brutal hover:bg-foreground hover:text-background border-[3px] border-foreground">
            Contact Me
          </a>
          
          <div className="flex gap-4 ml-2 md:ml-6 mt-4 md:mt-0">
            <a href="https://github.com/digimon-codax" target="_blank" rel="noreferrer" className="p-3 bg-background border-[3px] border-[var(--border-color)] neo-brutal hover:bg-primary hover:text-black group">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors group-hover:stroke-black">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/anish-chatterjee-683316317" target="_blank" rel="noreferrer" className="p-3 bg-background border-[3px] border-[var(--border-color)] neo-brutal hover:bg-primary hover:text-black group">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors group-hover:stroke-black">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
