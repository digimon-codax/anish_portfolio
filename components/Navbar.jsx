'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm border-b-[3px] border-[var(--border-color)]' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform">
          Anish<span className="text-primary">_</span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:-translate-y-1 hover:text-primary transition-transform">
              {link.name}
            </a>
          ))}
        </div>
        
        <a href="#contact" className="hidden md:inline-block px-5 py-2 bg-primary text-black font-bold neo-brutal hover:bg-black hover:text-primary transition-colors">
          Let's Talk
        </a>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50 relative" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-8 h-1 bg-foreground transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-8 h-1 bg-foreground transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-8 h-1 bg-foreground transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-background border-b-[3px] border-[var(--border-color)] flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold hover:text-primary transition-colors hover:-translate-y-1"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="mt-6 px-10 py-4 bg-primary text-black text-2xl font-bold neo-brutal"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
