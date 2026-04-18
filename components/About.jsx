'use client';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 w-full scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row gap-16 items-center"
      >
        {/* Profile Image Column */}
        <div className="w-full lg:w-2/5 flex justify-center">
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 cursor-pointer">
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 border-[3px] border-[var(--border-color)] transition-transform duration-300 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <div className="absolute inset-0 bg-background border-[3px] border-[var(--border-color)] z-10 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 group-hover:-translate-x-2">
              {/* Replace with next/image later: <Image src="/profile.png" alt="Anish Chatterjee" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /> */}
              <div className="flex flex-col items-center justify-center p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-foreground/40">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span className="text-foreground/50 font-bold tracking-widest uppercase">Profile Image<br/>/public</span>
              </div>
            </div>
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full lg:w-3/5">
          <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase tracking-tighter inline-block relative">
            About Me
            <div className="absolute bottom-1 left-0 w-full h-3 bg-primary -z-10 -rotate-1 hidden md:block"></div>
          </h2>
          
          <div className="text-lg md:text-xl space-y-6 text-foreground/90 font-medium leading-relaxed border-[3px] border-[var(--border-color)] p-6 md:p-8 bg-background relative shadow-[4px_4px_0px_var(--primary)] text-justify">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary border-[3px] border-[var(--border-color)]"></div>
            <p>
              I'm Anish Chatterjee, a 2nd-year student at RCC Institute of Information Technology (RCCIIT) and a backend-focused developer with a strong command of the modern web stack.
            </p>
            <p>
              I build robust, scalable server-side systems while staying fluent across the full stack — working with Node.js, Express.js, MongoDB, and PostgreSQL on the backend, and React.js and Next.js on the frontend.
            </p>
            <p>
              I care deeply about writing clean, maintainable code and engineering solutions that hold up in the real world.
            </p>
          </div>
          
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 bg-primary text-black font-extrabold text-lg md:text-xl border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[2px_2px_0px_var(--border-color)] hover:translate-x-1 hover:translate-y-1 transition-all w-max group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
