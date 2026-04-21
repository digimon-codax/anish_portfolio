'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql } from 'react-icons/si';

const iconMap = {
  'React.js': <FaReact className="text-[#61DAFB] text-2xl group-hover:rotate-12 transition-transform" />,
  'Next.js': <SiNextdotjs className="text-[var(--foreground)] text-2xl group-hover:rotate-12 transition-transform" />,
  'TailwindCSS': <SiTailwindcss className="text-[#38B2AC] text-2xl group-hover:rotate-12 transition-transform" />,
  'Node.js': <FaNodeJs className="text-[#339933] text-2xl group-hover:rotate-12 transition-transform" />,
  'Express.js': <SiExpress className="text-[var(--foreground)] text-2xl group-hover:rotate-12 transition-transform" />,
  'Python': <FaPython className="text-[#3776AB] text-2xl group-hover:rotate-12 transition-transform" />,
  'MongoDB': <SiMongodb className="text-[#47A248] text-2xl group-hover:rotate-12 transition-transform" />,
  'PostgreSQL': <SiPostgresql className="text-[#336791] text-2xl group-hover:rotate-12 transition-transform" />,
  'Docker': <FaDocker className="text-[#2496ED] text-2xl group-hover:rotate-12 transition-transform" />,
  'Git': <FaGitAlt className="text-[#F05032] text-2xl group-hover:rotate-12 transition-transform" />,
  'GitHub': <FaGithub className="text-[var(--foreground)] text-2xl group-hover:rotate-12 transition-transform" />,
};

const skillCategories = [
  {
    label: 'Frontend',
    color: 'bg-primary',
    textColor: 'text-black',
    skills: ['React.js', 'Next.js', 'TailwindCSS'],
  },
  {
    label: 'Backend',
    color: 'bg-foreground',
    textColor: 'text-background',
    skills: ['Node.js', 'Express.js', 'Python'],
  },
  {
    label: 'Database',
    color: 'bg-primary',
    textColor: 'text-black',
    skills: ['MongoDB', 'PostgreSQL'],
  },
  {
    label: 'DevOps & Tools',
    color: 'bg-foreground',
    textColor: 'text-background',
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
        <h2 className="text-4xl md:text-6xl font-black mb-14 uppercase tracking-tighter inline-block relative">
          Skills Lab
          <div className="absolute bottom-1 left-0 w-full h-3 bg-primary -z-10 rotate-1 hidden md:block" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="border-[3px] border-[var(--border-color)] bg-[var(--card-bg)] shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[8px_8px_0px_var(--primary)] hover:-translate-y-1 transition-all duration-300 glow-hover overflow-hidden"
            >
              {/* Category header */}
              <div className={`${cat.color} ${cat.textColor} px-6 py-3 border-b-[3px] border-[var(--border-color)]`}>
                <span className="font-black uppercase tracking-widest text-sm">{cat.label}</span>
              </div>

              {/* Skills chips */}
              <div className="p-5 flex flex-wrap gap-3">
                {cat.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    className="px-5 py-3 bg-background border-[3px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--border-color)] hover:shadow-[4px_4px_0px_var(--primary)] text-lg font-bold cursor-crosshair select-none transition-shadow flex items-center gap-3 group"
                  >
                    {iconMap[skill] || <span className="text-primary group-hover:rotate-12 transition-transform inline-block">#</span>}
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
