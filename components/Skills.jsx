'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';

const iconMap = {
  'React.js': <FaReact className="text-[#61DAFB] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'Next.js': <SiNextdotjs className="text-[var(--foreground)] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'TailwindCSS': <SiTailwindcss className="text-[#38B2AC] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'Node.js': <FaNodeJs className="text-[#339933] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'Express.js': <SiExpress className="text-[var(--foreground)] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'Python': <FaPython className="text-[#3776AB] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'MongoDB': <SiMongodb className="text-[#47A248] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'PostgreSQL': <SiPostgresql className="text-[#336791] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'Docker': <FaDocker className="text-[#2496ED] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'Git': <FaGitAlt className="text-[#F05032] text-2xl group-hover/skill:rotate-12 transition-transform" />,
  'GitHub': <FaGithub className="text-[var(--foreground)] text-2xl group-hover/skill:rotate-12 transition-transform" />,
};

const skillCategories = [
  {
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'TailwindCSS'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'Python'],
  },
  {
    label: 'Database',
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Docker', 'Git', 'GitHub'],
  },
];

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills" className="py-20 w-full scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        {/* Figma-style header */}
        <div className="flex items-center gap-4 mb-20 md:mb-24">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter inline-block relative text-[var(--selection-blue)]">
            Skills Canvas
            <div className="absolute -bottom-2 right-0 w-1/2 h-1 bg-[var(--selection-blue)] opacity-40" />
          </h2>
          <span className="px-3 py-1 bg-[var(--selection-blue)] text-white text-xs font-bold font-mono tracking-widest hidden sm:block pointer-events-none">
            100%
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="relative w-full group cursor-crosshair"
            >
              {/* Figma Frame Label */}
              <div className="absolute -top-7 left-0 text-[14px] font-bold font-mono text-[var(--selection-blue)] flex items-center gap-2 pointer-events-none transition-transform group-hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21V3"/><path d="M19 21V3"/><path d="M3 5h18"/><path d="M3 19h18"/></svg>
                {cat.label}
              </div>

              {/* The Figma Canvas Box */}
              <div className="relative border-[2px] border-dashed border-[var(--selection-blue)] p-8 md:p-10 bg-[var(--card-bg)] transition-colors duration-300">
                
                {/* 4 Corner Anchors */}
                {[
                  'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
                  'top-0 right-0 translate-x-1/2 -translate-y-1/2',
                  'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
                  'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
                ].map((pos, i) => (
                  <div key={i} className={`absolute w-3 h-3 bg-white border-[2px] border-[var(--selection-blue)] ${pos} z-10 transition-transform duration-300 group-hover:scale-[1.3]`} />
                ))}

                {/* Hover Grid Guides (Red measurement lines) */}
                <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-red-400 opacity-0 group-hover:opacity-40 pointer-events-none transition-opacity" />
                <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-red-400 opacity-0 group-hover:opacity-40 pointer-events-none transition-opacity" />

                {/* Skills Component Instances */}
                <div className="flex flex-wrap gap-5 relative z-20">
                  {cat.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + index * 0.05, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-5 py-3 bg-[var(--background)] border-[2px] border-dashed border-[#a855f7] text-lg font-bold flex items-center gap-3 relative group/skill hover:bg-[#a855f7]/10 transition-colors shadow-[4px_4px_0px_rgba(168,85,247,0.15)] hover:shadow-[6px_6px_0px_rgba(168,85,247,0.3)]"
                    >
                      {/* Purple Figma Component Diamond icon */}
                      <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-[2px] border-[#a855f7] rotate-45 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                      
                      {iconMap[skill] || <span className="text-[#a855f7] text-xl">❖</span>}
                      <span className="text-foreground tracking-tight">{skill}</span>
                    </motion.div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
