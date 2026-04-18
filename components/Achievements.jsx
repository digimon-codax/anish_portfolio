'use client';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Web Associate",
    organization: "RCC Techz",
    description: "Serving as a core Web Associate for the official technical club of RCCIIT, focusing on developing modern web experiences and community building.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l8-3.5-8-3.5-8 3.5Z"></path>
        <path d="M12 15v7"></path>
        <path d="M4 11.5v6.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6.5"></path>
      </svg>
    )
  }
];

export default function Achievements() {
  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="py-20 w-full scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter inline-block relative">
          Achievements
          <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-3/4 h-4 bg-primary -z-10 rotate-1 hidden sm:block"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index}
              className="bg-background border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] p-8 hover:bg-primary hover:text-black transition-all group duration-300 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-16 h-16 shrink-0 bg-background border-[3px] border-[var(--border-color)] flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 group-hover:text-foreground text-primary">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-2 group-hover:text-black">{item.title}</h3>
                <h4 className="text-xl font-bold text-foreground/60 mb-4 group-hover:text-black/70 inline-block border-b-2 border-foreground/20 group-hover:border-black/20 pb-1">{item.organization}</h4>
                <p className="text-lg font-medium group-hover:text-black/90 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
