'use client';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Built', value: '5+' },
  { label: 'Tech Stack', value: '10+' },
  { label: 'Year', value: '2nd' },
];

export default function About() {
  return (
    <section id="about" className="py-20 w-full scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row gap-16 items-start"
      >
        {/* Left: Avatar + Stats */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
          {/* Avatar card */}
          <div className="relative group w-full max-w-sm mx-auto lg:mx-0 cursor-pointer">
            <div className="absolute inset-0 bg-primary translate-x-5 translate-y-5 border-[3px] border-[var(--border-color)] transition-transform duration-300 group-hover:translate-x-8 group-hover:translate-y-8" />
            <div className="relative bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] z-10 flex flex-col items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2 aspect-square">
              {/* Dot pattern inside */}
              <div className="dot-grid absolute inset-0 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center gap-3">
                <div className="w-20 h-20 border-[3px] border-[var(--border-color)] bg-primary flex items-center justify-center shadow-[6px_6px_0px_var(--border-color)] mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="text-2xl font-black tracking-tight">Anish Chatterjee</div>
                <div className="px-4 py-1 bg-foreground text-background text-sm font-bold uppercase tracking-widest border-[2px] border-[var(--border-color)]">
                  Backend Dev
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {stats.map((s) => (
              <div key={s.label} className="border-[3px] border-[var(--border-color)] bg-[var(--card-bg)] p-4 text-center shadow-[5px_5px_0px_var(--primary)] hover:shadow-[7px_7px_0px_var(--primary)] hover:-translate-y-1 transition-all">
                <div className="text-3xl font-black text-primary">{s.value}</div>
                <div className="text-xs font-bold uppercase tracking-wider opacity-60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase tracking-tighter inline-block relative">
            About Me
            <div className="absolute -bottom-2 left-0 w-2/3 h-3 bg-primary -z-10 -rotate-1 hidden md:block" />
          </h2>

          <div className="space-y-5 text-lg md:text-xl font-medium leading-relaxed text-foreground/85">
            <div className="border-[3px] border-[var(--border-color)] p-6 md:p-8 bg-[var(--card-bg)] shadow-[6px_6px_0px_var(--border-color)] glow-hover relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary border-[3px] border-[var(--border-color)]" />
              <p className="text-justify">
                I&apos;m Anish Chatterjee, a 2nd-year student at RCC Institute of Information Technology (RCCIIT) and a backend-focused developer with a strong command of the modern web stack.
              </p>
            </div>
            <div className="border-[3px] border-[var(--border-color)] p-6 md:p-8 bg-[var(--card-bg)] shadow-[6px_6px_0px_var(--primary)] glow-hover relative">
              <p className="text-justify">
                I build robust, scalable server-side systems while staying fluent across the full stack — working with Node.js, Express.js, MongoDB, and PostgreSQL on the backend, and React.js and Next.js on the frontend.
              </p>
            </div>
            <div className="border-[3px] border-[var(--border-color)] p-6 md:p-8 bg-[var(--card-bg)] shadow-[6px_6px_0px_var(--border-color)] glow-hover">
              <p className="text-justify">
                I care deeply about writing clean, maintainable code and engineering solutions that hold up in the real world.
              </p>
            </div>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-primary text-black font-extrabold text-lg md:text-xl border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[2px_2px_0px_var(--border-color)] hover:translate-x-1 hover:translate-y-1 transition-all w-max group glow-hover"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
