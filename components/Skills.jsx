'use client';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', rotate: 2 },
  { name: 'Next.js', rotate: -2 },
  { name: 'React.js', rotate: 3 },
  { name: 'Node.js', rotate: -1 },
  { name: 'Python', rotate: 4 },
  { name: 'TailwindCSS', rotate: -3 },
  { name: 'MongoDB', rotate: 1 },
  { name: 'PostgreSQL', rotate: -2 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 w-full scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter inline-block relative">
          Skills Lab
          <div className="absolute bottom-1 left-0 w-full h-3 bg-primary -z-10 rotate-1 hidden md:block"></div>
        </h2>
        
        <div className="flex flex-wrap gap-4 md:gap-6 mt-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.05, 
                type: "spring", 
                stiffness: 150,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: skill.rotate * 2, // Exaggerates the angle slightly on hover
                y: -5
              }}
              style={{ rotate: `${skill.rotate}deg` }} // Applied a slight default tilt to all badges
              className="px-6 py-4 md:px-8 md:py-5 bg-background border-[3px] border-[var(--border-color)] shadow-[5px_5px_0px_var(--border-color)] hover:shadow-[5px_5px_0px_var(--primary)] text-xl md:text-2xl font-bold transition-shadow cursor-crosshair select-none flex items-center justify-center gap-2 group"
            >
              <span className="text-primary group-hover:text-foreground transition-colors">#</span>
              {skill.name}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
