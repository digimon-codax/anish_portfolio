'use client';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import { useEffect, useState } from 'react';

export default function GithubContributions() {
  const [isMounted, setIsMounted] = useState(false);
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    setIsMounted(true);
    
    if (document.documentElement.classList.contains('dark')) {
      setThemeMode('dark');
    }

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setThemeMode(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  if (!isMounted) return null; // Prevents hydration mismatch

  // A vibrant, lighter yellow scheme (no dark muddy browns)
  const brutalistTheme = {
    light: ['#ebedf0', '#fef08a', '#fde047', '#eab308', '#ca8a04'],
    dark:  ['#262626', '#fef08a', '#fde047', '#eab308', '#ca8a04'],
  };

  return (
    <section id="github-stats" aria-label="GitHub Contributions" className="py-20 w-full scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-6 mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter inline-block relative">
            Git Activity
            <div className="absolute -bottom-2 right-0 w-3/4 h-3 bg-primary -z-10 -rotate-1 hidden md:block"></div>
          </h2>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-full border-[3px] border-[var(--border-color)] border-dashed hidden md:flex items-center justify-center opacity-60"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </motion.div>
        </div>
        
        <div className="relative group w-full">
          {/* Decorative background blocks for premium neo-brutalist feel */}
          <div className="absolute -inset-2 bg-primary border-[3px] border-[var(--border-color)] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 translate-y-2 -z-10" />
          <div className="absolute -inset-2 bg-[var(--foreground)] border-[3px] border-[var(--border-color)] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 -translate-y-2 -z-20" />

          {/* Main Card Container */}
          <div className="bg-[var(--card-bg)] border-[4px] border-[var(--border-color)] shadow-[8px_8px_0px_var(--border-color)] group-hover:shadow-[0_0_0_0] group-hover:translate-x-[8px] group-hover:translate-y-[8px] transition-all duration-300 w-full overflow-hidden flex flex-col relative z-10">
            
            {/* Custom Terminal Header */}
            <div className="h-12 bg-[var(--border-color)] w-full flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border-[2px] border-[#000]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border-[2px] border-[#000]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border-[2px] border-[#000]" />
              </div>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[11px] font-mono font-bold uppercase text-background tracking-[0.2em] opacity-90">
                  Live Feed
                </span>
              </div>
            </div>

            {/* Inner Dashboard Area */}
            <div className="p-6 md:p-10 relative bg-[radial-gradient(circle_at_center,var(--grid-color)_1px,transparent_1px)] [background-size:24px_24px]">
              
              {/* Massive subtle background icon */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none transition-transform duration-700 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>

              {/* The Calendar Wrapper */}
              <div className="relative z-10 w-full overflow-x-auto pb-6 custom-scrollbar">
                <div className="w-max mx-auto mt-2 px-6 py-8 bg-[var(--background)] border-[3px] border-[var(--border-color)] shadow-[4px_4px_0px_var(--border-color)]">
                  <GitHubCalendar 
                    username="digimon-codax" 
                    year={new Date().getFullYear()}
                    blockSize={18}
                    blockMargin={6}
                    blockRadius={0}
                    colorScheme={themeMode}
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}
