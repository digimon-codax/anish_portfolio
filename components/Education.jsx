'use client';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 w-full scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-14 uppercase tracking-tighter inline-block border-b-[6px] border-primary pb-2">
          Education
        </h2>

        <motion.div
          whileHover={{ y: -4 }}
          className="bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] shadow-[10px_10px_0px_var(--border-color)] hover:shadow-[14px_14px_0px_var(--primary)] transition-all duration-300 glow-hover relative overflow-hidden group"
        >
          {/* Decorative corner diamond */}
          <div className="absolute -right-10 -top-10 w-36 h-36 bg-primary/15 rotate-45 border-[3px] border-primary/30 group-hover:bg-primary/30 transition-all duration-500 hidden sm:block" />
          {/* Top accent bar */}
          <div className="h-2 w-full bg-primary" />

          <div className="p-8 md:p-12 relative z-10">
            {/* Institution row */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b-[3px] border-dashed border-[var(--border-color)]">
              <div>
                <div className="inline-block px-3 py-1 bg-primary text-black text-xs font-black uppercase tracking-widest border-[2px] border-[var(--border-color)] mb-4">
                  Currently Enrolled
                </div>
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight group-hover:text-primary transition-colors duration-300 max-w-2xl leading-tight">
                  RCC Institute of Information Technology
                </h3>
                <p className="text-lg font-bold opacity-70 flex items-center gap-2 mt-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Kolkata, West Bengal, India
                </p>
              </div>
              <span className="self-start lg:self-center px-6 py-3 bg-foreground text-background font-black uppercase text-sm border-[3px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--primary)] whitespace-nowrap">
                2nd Year
              </span>
            </div>

            {/* Degree row */}
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-14 h-14 shrink-0 bg-primary border-[3px] border-[var(--border-color)] flex items-center justify-center shadow-[4px_4px_0px_var(--border-color)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl md:text-2xl font-black uppercase mb-3">Bachelor of Technology</h4>
                <p className="text-base md:text-lg font-medium leading-relaxed max-w-3xl opacity-85 border-l-[4px] border-primary pl-4">
                  Currently pursuing a degree with a strong focus on backend systems, full-stack development, and modern software engineering practices. Regular participant in technical clubs and community-driven events.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
