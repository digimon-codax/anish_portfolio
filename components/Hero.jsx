'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-24 w-full relative overflow-hidden">

      {/* ── Live clock ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-[10px] font-bold tracking-widest opacity-40 mb-6"
      >
        {time}
      </motion.p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-4"
      >
        {/* ── Sticky label: College (inline, not absolute) ── */}
        <motion.div
          initial={{ opacity: 0, rotate: -8 }}
          animate={{ opacity: 1, rotate: -4 }}
          transition={{ delay: 0.55, type: 'spring', stiffness: 100 }}
          className="sticky-label bg-[#a8d8a8] text-black mb-5 self-start"
        >
          Student @ RCCIIT, Kolkata
        </motion.div>

        {/* ── "my name is" ── */}
        <motion.p variants={itemVariants} className="text-sm md:text-base font-bold opacity-40 italic tracking-widest mb-1">
          my name is
        </motion.p>

        {/* ── NAME with selection box ── */}
        <div className="relative inline-block my-1 px-4 sm:px-8 md:px-12 py-2">
          {/* Dashed selection frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="absolute inset-0 border-2 border-dashed border-[var(--selection-blue)] pointer-events-none z-20"
          >
            {[
              'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
              'top-0 right-0 translate-x-1/2 -translate-y-1/2',
              'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
              'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
              'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
              'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
              'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
              'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
            ].map((pos, i) => (
              <div key={i} className={`absolute w-2.5 h-2.5 bg-white border-2 border-[var(--selection-blue)] ${pos}`} />
            ))}
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[clamp(3.5rem,16vw,10rem)] font-black uppercase tracking-tighter leading-none"
          >
            Anish
          </motion.h1>
        </div>

        {/* ── Available status ── */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] opacity-50 mt-4 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          Backend Developer · Full Stack Enthusiast
        </motion.div>

        {/* ── Tagline ── */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl md:text-3xl font-bold max-w-md leading-snug text-foreground/75 mb-10"
        >
          I build{' '}
          <span className="font-black text-foreground underline decoration-wavy decoration-primary underline-offset-4">
            robust
          </span>{' '}
          systems & ship{' '}
          <span className="font-black text-foreground">real products.</span>
        </motion.p>

        {/* ── CTA buttons ── */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:w-auto">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-background font-black text-base border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--primary)] hover:shadow-[2px_2px_0px_var(--primary)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="5 12 19 12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center px-7 py-3.5 bg-primary text-black font-black text-base border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[2px_2px_0px_var(--border-color)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            Download CV
          </a>
        </motion.div>

        {/* ── Social icons ── */}
        <motion.div variants={itemVariants} className="flex gap-4 mt-8">
          <a href="https://github.com/digimon-codax" target="_blank" rel="noreferrer" aria-label="GitHub"
            className="p-2.5 bg-[var(--card-bg)] border-[2px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--border-color)] hover:bg-primary transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
              <path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/anish-chatterjee-683316317" target="_blank" rel="noreferrer" aria-label="LinkedIn"
            className="p-2.5 bg-[var(--card-bg)] border-[2px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--border-color)] hover:bg-primary transition-all group">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </motion.div>

        {/* ── Web Associate sticky (inline flow, right-aligned) ── */}
        <motion.div
          initial={{ opacity: 0, rotate: 6 }}
          animate={{ opacity: 1, rotate: 4 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
          className="sticky-label bg-[#fde68a] text-black mt-6 self-end"
        >
          Web Associate @ RCC Techz
        </motion.div>


      </motion.div>
    </section>
  );
}
