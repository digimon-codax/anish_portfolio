'use client';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'EnvSync',
    description: 'An intelligent dependency analysis and security scanning platform with AI-powered troubleshooting. Helps developers identify vulnerabilities, config issues, and conflicts through automated scans.',
    tech: ['React', 'Node', 'Docker'],
    github: 'https://github.com/InstincT-07/EnvSync',
    live: 'https://env-sync-xi.vercel.app/',
  },
  {
    name: 'Disaster Mesh Backend',
    description: 'Robust Node.js backend for hybrid disaster communication. Designed with PostGIS, secure API endpoints, robust rate limiting, and mesh network synchronization capabilities.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    github: '#',
    live: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="py-20 w-full scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter inline-block relative">
          Featured Works
          <div className="absolute bottom-0 left-0 w-full h-4 bg-primary -z-10 -rotate-1 hidden md:block" />
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="group bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] p-6 md:p-8 flex flex-col justify-between shadow-[8px_8px_0px_var(--border-color)] hover:shadow-[12px_12px_0px_var(--primary)] hover:-translate-y-2 hover:-translate-x-2 transition-all duration-300 h-full glow-hover"
            >
              <div>
                <h3 className="text-3xl font-black uppercase mb-4 tracking-tight group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <p className="text-lg text-foreground/80 font-medium mb-8 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--muted)] text-foreground text-sm font-bold border-[2px] border-[var(--border-color)] group-hover:bg-primary group-hover:text-black transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex gap-2 items-center justify-center py-3 bg-background border-[3px] border-[var(--border-color)] font-bold text-lg neo-brutal hover:bg-primary hover:text-black transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    Code
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex gap-2 items-center justify-center py-3 bg-foreground text-background border-[3px] border-foreground font-bold text-lg neo-brutal hover:bg-primary hover:text-black hover:border-[var(--border-color)] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
