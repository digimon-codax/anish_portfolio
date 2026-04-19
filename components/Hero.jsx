'use client';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const marqueeItems = [
  'Backend Development', 'Node.js', 'React', 'Next.js',
  'PostgreSQL', 'MongoDB', 'Express', 'Full Stack',
  'Docker', 'REST APIs', 'Open to Work',
];

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
      }));
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="hero" aria-label="Introduction" className="min-[85vh] flex flex-col justify-between w-full relative overflow-hidden mt-0 md:-mt-8">

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col items-center justify-start text-center px-4 pt-2 sm:pt-4 pb-12">

        {/* Clock + location row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] opacity-40 mb-8"
        >
          <span>{time}</span>
          <span className="w-1 h-1 rounded-full bg-foreground opacity-60" />
          <span>Kolkata, India</span>
          <span className="w-1 h-1 rounded-full bg-foreground opacity-60" />
          <span className="flex items-center gap-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            Available
          </span>
        </motion.div>

        {/* Sticky label row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <motion.span
            initial={{ opacity: 0, rotate: -6, y: 10 }}
            animate={{ opacity: 1, rotate: -3, y: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 120 }}
            className="sticky-label bg-[#a8d8a8] text-black inline-block"
          >
            Student @ RCCIIT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, rotate: 6, y: 10 }}
            animate={{ opacity: 1, rotate: 3, y: 0 }}
            transition={{ delay: 0.55, type: 'spring', stiffness: 120 }}
            className="sticky-label bg-[#fde68a] text-black inline-block"
          >
            Web Associate @ RCC Techz
          </motion.span>
        </div>

        {/* "my name is" */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base font-bold italic opacity-35 tracking-widest mb-1"
        >
          my name is
        </motion.p>

        {/* ── NAME with Figma selection box ── */}
        <div className="relative inline-block px-4 sm:px-10 md:px-16 py-1 mb-4">
          {/* Selection frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.45, ease: 'easeOut' }}
            className="absolute inset-0 border-[2px] border-dashed border-[var(--selection-blue)] pointer-events-none z-20"
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
              <div key={i} className={`absolute w-2.5 h-2.5 bg-[var(--card-bg)] border-[2px] border-[var(--selection-blue)] ${pos}`} />
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6, ease: 'easeOut' }}
            className="text-[clamp(4rem,18vw,11rem)] font-black uppercase tracking-[0.05em] leading-none [font-family:var(--font-display)]"
          >
            Anish
            <span className="sr-only"> Chatterjee - Full Stack Developer</span>
          </motion.h1>
        </div>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground/60 mb-2 tracking-tight"
        >
          Backend Developer{' '}
          <span className="text-primary font-black">&</span>{' '}
          Full Stack Enthusiast
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl font-medium max-w-md text-foreground/50 leading-relaxed mb-10"
        >
          Building robust server-side systems while staying fluent across the full stack.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:w-auto mb-10"
        >
          <a href="#projects"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-black text-base border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--primary)] hover:shadow-[2px_2px_0px_var(--primary)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="5 12 19 12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-black text-base border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[2px_2px_0px_var(--border-color)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex gap-3"
        >
          {[
            {
              href: 'https://github.com/digimon-codax',
              label: 'GitHub',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              ),
            },
            {
              href: 'https://linkedin.com/in/anish-chatterjee-683316317',
              label: 'LinkedIn',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              ),
            },
            {
              href: 'mailto:chatterjeeanish49@gmail.com',
              label: 'Email',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              ),
            },
          ].map(({ href, label, icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="p-3 bg-[var(--card-bg)] border-[2px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--border-color)] hover:bg-primary hover:shadow-[1px_1px_0px_var(--border-color)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all group"
            >
              <span className="group-hover:[&_svg]:stroke-black">{icon}</span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Marquee ticker strip at the very bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="w-full border-t-[3px] border-[var(--border-color)] bg-primary overflow-hidden py-3 flex select-none shrink-0"
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          className="flex gap-0 whitespace-nowrap"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-black font-black uppercase tracking-widest text-sm px-6 flex items-center gap-6">
              {item}
              <span className="text-black/30 text-lg">✦</span>
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
