'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" aria-label="About Me" className="py-20 w-full scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row gap-16 items-start"
      >
        {/* Left: Avatar + Stats */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
          {/* Terminal Box Graphic */}
          <div className="relative group w-full max-w-sm mx-auto lg:mx-0 cursor-crosshair">
            <div className="absolute inset-0 bg-primary translate-x-5 translate-y-5 border-[3px] border-[var(--border-color)] transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6" />
            <div className="relative bg-foreground border-[3px] border-[var(--border-color)] z-10 flex flex-col overflow-hidden h-72">
              
              {/* Terminal Header */}
              <div className="h-10 bg-[var(--card-bg)] border-b-[3px] border-[var(--border-color)] flex items-center px-4 gap-2 shrink-0">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400 border-[2px] border-[var(--border-color)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#fbbf24] border-[2px] border-[var(--border-color)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-green-400 border-[2px] border-[var(--border-color)]" />
                <span className="font-black text-xs uppercase tracking-widest text-[var(--border-color)] ml-auto opacity-50 block sm:hidden md:block">bash</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm md:text-base flex flex-col gap-3 text-background">
                <p className="text-green-400">anish@sys:~$ <span className="text-background/80">whoami</span></p>
                <p className="text-primary font-bold pl-4">&gt; Backend Engineer</p>
                
                <p className="text-green-400 mt-2">anish@sys:~$ <span className="text-background/80">uptime</span></p>
                <p className="text-primary font-bold pl-4">&gt; Shipping code 24/7</p>

                <p className="text-green-400 mt-2 flex items-center gap-1.5">
                  anish@sys:~$ <span className="w-2.5 h-5 bg-primary animate-pulse inline-block" />
                </p>
              </div>

              {/* Decorative faint overlay icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="absolute bottom-[-10px] right-[-20px] text-background opacity-5 pointer-events-none -rotate-12">
                <polyline points="4 17 10 11 4 5"></polyline><line x1="12" x2="20" y1="19" y2="19"></line>
              </svg>

            </div>
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
