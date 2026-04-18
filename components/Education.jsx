'use client';
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <section id="education" className="py-20 w-full scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter inline-block border-b-[6px] border-primary pb-2">
          Education
        </h2>
        
        <div className="bg-background border-[3px] border-[var(--border-color)] p-6 md:p-10 shadow-[8px_8px_0px_var(--border-color)] group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
          {/* Decorative background shape */}
          <div className="absolute -right-16 -top-16 w-40 h-40 bg-primary/10 rotate-45 border-[3px] border-primary group-hover:bg-primary/40 group-hover:scale-110 transition-all duration-500 hidden sm:block"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b-[3px] border-[var(--border-color)] lg:border-dashed pb-8 mb-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors duration-300 max-w-2xl">
                RCC Institute of Information Technology
              </h3>
              <p className="text-xl font-bold opacity-80 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Kolkata, West Bengal, India
              </p>
            </div>
            <span className="inline-block px-5 py-3 bg-foreground text-background font-black uppercase text-sm md:text-base border border-transparent group-hover:border-[var(--border-color)] transition-colors self-start lg:self-auto neo-brutal whitespace-nowrap">
              Present (2nd Year)
            </span>
          </div>
          
          <div className="relative z-10 pt-2">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              Bachelor of Technology
            </h4>
            <p className="text-lg md:text-xl font-medium leading-relaxed max-w-4xl opacity-90 border-l-[4px] border-primary pl-4">
              Currently pursuing a degree with a strong focus on backend systems, full-stack development, and modern software engineering practices. Regular participant in technical clubs and community-driven events.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
