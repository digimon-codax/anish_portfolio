'use client';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { useEffect, useState } from 'react';

export default function GithubContributions() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatch since calendar relies on browser painting

  // Specific brutalist yellow scheme matching your site's primary (#f59e0b)
  const brutalistTheme = {
    light: ['hsl(240, 10%, 90%)', '#fef08a', '#facc15', '#eab308', '#a16207'],
    dark: ['hsl(0, 0%, 15%)', '#fef08a', '#facc15', '#eab308', '#a16207'],
  };

  return (
    <section id="github-stats" className="py-20 w-full scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tighter inline-block relative">
          Git Contributions
          <div className="absolute -bottom-2 right-0 w-3/4 h-3 bg-primary -z-10 -rotate-1 hidden md:block"></div>
        </h2>
        
        <div className="bg-background border-[4px] border-[var(--border-color)] p-6 md:p-10 shadow-[8px_8px_0px_var(--border-color)] hover:shadow-[12px_12px_0px_var(--primary)] transition-all duration-300 w-full overflow-hidden flex flex-col items-center">
          <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
            <div className="min-w-[800px] flex justify-center mt-2 px-4">
              <GitHubCalendar 
                username="digimon-codax" 
                year={new Date().getFullYear()}
                blockSize={18}
                blockMargin={5}
                theme={brutalistTheme}
                style={{
                  color: 'inherit',
                  fontFamily: 'inherit',
                  fontWeight: 'bold',
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
