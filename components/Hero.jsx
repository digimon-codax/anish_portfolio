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
  const [isHovered, setIsHovered] = useState(false);
  const [autoPulse, setAutoPulse] = useState(false);

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true,
      }));
    };
    update();
    const id = setInterval(update, 1000);

    const pulseLoop = setInterval(() => {
      if (window.innerWidth < 768) {
        setAutoPulse(true);
        setTimeout(() => setAutoPulse(false), 2000);
      }
    }, 4000);

    return () => {
      clearInterval(id);
      clearInterval(pulseLoop);
    };
  }, []);

  const isActive = isHovered || autoPulse;

  return (
    <section id="hero" aria-label="Introduction" className="min-[85vh] flex flex-col justify-start w-full relative overflow-visible mt-0">

      {/* ── Main content ── */}
      <div className="flex flex-col items-center justify-start text-center px-4 pt-4 pb-4">

        {/* Clock + location row */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.25em] opacity-40 mb-16"
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
        <div 
          className="relative inline-block px-4 sm:px-10 md:px-16 py-1 mb-4 cursor-crosshair"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Sticky Badges (Appear on Hover or Pulse) */}
          <div className={`absolute -top-8 -left-4 md:-left-12 z-30 transition-all duration-500 delay-75 ease-out pointer-events-none ${isActive ? 'opacity-100 scale-100 -rotate-3' : 'opacity-0 scale-50 -rotate-6'}`}>
            <span className="sticky-label bg-[#a8d8a8] text-black inline-block shadow-lg">
              Student @ RCCIIT
            </span>
          </div>
          <div className={`absolute -bottom-6 -right-4 md:-right-8 z-30 transition-all duration-500 delay-100 ease-out pointer-events-none ${isActive ? 'opacity-100 scale-100 rotate-6' : 'opacity-0 scale-50 rotate-12'}`}>
            <span className="sticky-label bg-[#fde68a] text-black inline-block shadow-lg">
              Web Associate @ RCC Techz
            </span>
          </div>

          {/* Selection frame (Appears on Hover or Pulse) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.45, ease: 'easeOut' }}
            className={`absolute inset-0 border-[2px] border-dashed border-[var(--selection-blue)] pointer-events-none z-20 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
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
            className={`text-[clamp(5rem,20vw,12rem)] font-bold capitalize leading-tight [font-family:var(--font-cursive)] pb-4 pr-4 transition-all duration-500 ease-out ${isActive ? 'skew-x-[-4deg] scale-[1.02]' : ''}`}
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
          className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none sm:w-auto mb-2"
        >
          <a href="#projects"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-black text-base border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--primary)] hover:shadow-[2px_2px_0px_var(--primary)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            View Projects
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="5 12 19 12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-black text-base border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[2px_2px_0px_var(--border-color)] hover:translate-x-1 hover:translate-y-1 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            Download CV
          </a>
        </motion.div>


      </div>

      {/* ── Marquee ticker strip at the very bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="w-[100vw] relative left-1/2 -translate-x-1/2 border-y-[3px] border-black bg-primary overflow-hidden py-3 flex select-none shrink-0"
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
