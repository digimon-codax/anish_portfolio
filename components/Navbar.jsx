'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navItems = [
    {
      name: 'Home',
      href: '#',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: 'https://github.com/digimon-codax',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/anish-chatterjee-683316317',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      name: 'Email',
      href: 'mailto:chatterjeeanish49@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    }
  ];

  return (
    <>
      {/* ── Fixed Logo ── */}
      <motion.a
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="hidden md:block fixed top-10 left-12 z-50 text-3xl font-black tracking-wide [font-family:var(--font-display)] hover:scale-105 transition-transform origin-left"
      >
        Anish<span className="text-primary animate-pulse">_</span>
      </motion.a>

      <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, translateX: '-50%' }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
      className="fixed top-6 md:top-8 left-1/2 z-50 flex items-center gap-3 px-6 py-3 bg-[var(--card-bg)] border-[3px] border-[var(--border-color)] rounded-full shadow-[4px_4px_0px_var(--primary)] hover:shadow-[6px_6px_0px_var(--primary)] transition-shadow duration-300 pointer-events-auto"
    >
      {/* Home link */}
      <a
        href="#"
        aria-label="Home"
        className="p-2 hover:bg-primary rounded-full group transition-colors"
      >
        <span className="group-hover:stroke-black stroke-[var(--foreground)] transition-colors block">
          {navItems[0].icon}
        </span>
      </a>

      {/* Divider */}
      <div className="w-[3px] h-6 bg-[var(--border-color)] opacity-70 block rounded-full" />

      {/* Social Links */}
      <div className="flex items-center gap-1">
        {navItems.slice(1).map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.name}
            className="p-2 hover:bg-primary rounded-full group transition-colors"
          >
            <span className="group-hover:stroke-black stroke-[var(--foreground)] transition-colors block">
              {item.icon}
            </span>
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="w-[3px] h-6 bg-[var(--border-color)] opacity-70 block rounded-full" />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 hover:bg-primary rounded-full group transition-colors flex items-center justify-center"
        aria-label="Toggle Theme"
      >
        <span className="group-hover:stroke-black stroke-[var(--foreground)] transition-colors block">
          {isDark ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </span>
      </button>
    </motion.nav>
    </>
  );
}
