'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Web Associate",
    company: "RCC Techz",
    duration: "Present",
    description: "Developing and maintaining web applications for the technical club of RCC Institute of Information Technology. Collaborating with peers to implement modern web designs and scale application features.",
  },
  {
    role: "Backend Developer",
    company: "Freelance / Personal Builder",
    duration: "2023 - Present",
    description: "Designing RESTful APIs and building robust, scalable server-side systems using Node.js, Express, MongoDB, and PostgreSQL. Focused on writing clean, maintainable code for real-world scenarios.",
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 w-full scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter inline-block border-b-[6px] border-primary pb-2">
          Experience
        </h2>
        
        <div className="flex flex-col gap-8 md:gap-10 border-l-[4px] border-[var(--border-color)] ml-4 md:ml-8 pl-8 md:pl-12 relative">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[45px] md:-left-[61px] top-4 w-6 h-6 md:w-8 md:h-8 bg-primary border-[3px] border-[var(--border-color)] group-hover:scale-125 transition-transform duration-300 z-10"></div>
              
              <div className="bg-background border-[3px] border-[var(--border-color)] p-6 md:p-8 shadow-[6px_6px_0px_var(--border-color)] group-hover:shadow-[8px_8px_0px_var(--primary)] group-hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-2xl md:text-3xl font-bold uppercase">{exp.role}</h3>
                  <span className="inline-block px-3 py-1 bg-foreground text-background font-bold text-sm neo-brutal whitespace-nowrap self-start md:self-auto">
                    {exp.duration}
                  </span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-primary mb-4">{exp.company}</h4>
                <p className="text-lg text-foreground/80 font-medium leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
