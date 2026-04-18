'use client';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: 'Web Associate',
    organization: 'RCC Techz',
    year: '2025 – Present',
    description:
      'Serving as a core Web Associate for the official technical club of RCCIIT, focusing on developing modern web experiences and community building.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l8-3.5-8-3.5-8 3.5Z" />
        <path d="M12 15v7" />
        <path d="M4 11.5v6.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5" />
      </svg>
    ),
  },
];

export default function Achievements() {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 w-full scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-14 uppercase tracking-tighter inline-block relative">
          Achievements
          <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-3/4 h-4 bg-primary -z-10 rotate-1 hidden sm:block" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[10px_10px_0px_var(--primary)] hover:-translate-y-1 transition-all duration-300 glow-hover overflow-hidden"
            >
              {/* Top bar */}
              <div className="h-2 w-full bg-foreground group-hover:bg-primary transition-colors duration-300" />

              <div className="p-7 flex flex-col sm:flex-row gap-6 items-start">
                {/* Icon box */}
                <div className="w-16 h-16 shrink-0 bg-primary border-[3px] border-[var(--border-color)] flex items-center justify-center text-black shadow-[4px_4px_0px_var(--border-color)] group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-black uppercase group-hover:text-primary transition-colors">{item.title}</h3>
                    <span className="px-3 py-1 bg-primary text-black text-xs font-black uppercase tracking-widest border-[2px] border-[var(--border-color)] shrink-0">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold opacity-60 mb-3 border-b-[2px] border-foreground/10 pb-2">{item.organization}</h4>
                  <p className="text-base font-medium leading-relaxed opacity-85">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
