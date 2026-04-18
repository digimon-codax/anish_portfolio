'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Web Associate',
    company: 'RCC Techz',
    duration: 'Present',
    type: 'Club',
    description:
      'Developing and maintaining web applications for the technical club of RCC Institute of Information Technology. Collaborating with peers to implement modern web designs and scale application features.',
  },
  {
    role: 'Backend Developer',
    company: 'Freelance / Personal Builder',
    duration: '2023 – Present',
    type: 'Freelance',
    description:
      'Designing RESTful APIs and building robust, scalable server-side systems using Node.js, Express, MongoDB, and PostgreSQL. Focused on writing clean, maintainable code for real-world scenarios.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 w-full scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-14 uppercase tracking-tighter inline-block border-b-[6px] border-primary pb-2">
          Experience
        </h2>

        <div className="relative flex flex-col gap-10">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-4 bottom-4 w-[3px] bg-[var(--border-color)] hidden sm:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative group sm:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-11 h-11 bg-primary border-[3px] border-[var(--border-color)] shadow-[3px_3px_0px_var(--border-color)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 z-10 hidden sm:flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div className="bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] group-hover:shadow-[10px_10px_0px_var(--primary)] group-hover:-translate-y-1 transition-all duration-300 glow-hover overflow-hidden">
                {/* Top colour bar */}
                <div className="h-1.5 w-full bg-primary" />

                <div className="p-6 md:p-8">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg md:text-xl font-bold text-primary mt-1">{exp.company}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                      <span className="px-3 py-1 bg-foreground text-background font-bold text-xs uppercase tracking-widest border-[2px] border-[var(--border-color)] neo-brutal whitespace-nowrap self-start">
                        {exp.duration}
                      </span>
                      <span className="px-3 py-1 bg-primary text-black font-bold text-xs uppercase tracking-widest border-[2px] border-[var(--border-color)] self-start">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-foreground/80 font-medium leading-relaxed border-l-[4px] border-primary pl-4">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
