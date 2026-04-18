export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="w-full bg-[var(--border-color)] text-background pt-24 pb-12 scroll-mt-0 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Massive Contact Card */}
        <div className="bg-background text-foreground border-[4px] border-[var(--border-color)] shadow-[12px_12px_0px_var(--primary)] hover:shadow-[16px_16px_0px_var(--primary)] transition-all duration-300 flex flex-col lg:flex-row overflow-hidden relative group translate-y-[-50px]">
          
          {/* Left Pane - Message */}
          <div className="flex-1 p-10 md:p-16 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-[var(--border-color)] relative bg-foreground text-background">
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--background)_2px,transparent_2px)] [background-size:24px_24px]"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-center">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-primary drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Let's Talk.
              </h2>
              <p className="text-2xl md:text-4xl font-bold leading-snug">
                I&apos;m currently looking for new <span className="underline decoration-primary decoration-[6px] underline-offset-[6px]">opportunities.</span>
              </p>
              <p className="text-xl md:text-2xl font-medium mt-6 opacity-80 leading-relaxed max-w-lg">
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>
          </div>

          {/* Right Pane - Socials */}
          <div className="flex-[0.8] p-8 md:p-16 flex flex-col justify-center gap-6 bg-background">
            
            <a href="mailto:chatterjeeanish49@gmail.com" className="group flex items-center justify-between p-5 border-[4px] border-[var(--border-color)] hover:bg-primary transition-all shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[8px_8px_0px_var(--foreground)] hover:-translate-y-1 bg-background">
              <div className="flex items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span className="text-xl md:text-2xl font-black truncate max-w-[180px] sm:max-w-[300px]">Email Me</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-foreground"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>

            <a href="https://linkedin.com/in/anish-chatterjee-683316317" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-5 border-[4px] border-[var(--border-color)] hover:bg-[#0a66c2] hover:text-white transition-all shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[8px_8px_0px_var(--foreground)] hover:-translate-y-1 bg-background">
              <div className="flex items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="text-xl md:text-2xl font-black">LinkedIn</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>

            <a href="https://github.com/digimon-codax" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-5 border-[4px] border-[var(--border-color)] hover:bg-[#333] hover:text-white transition-all shadow-[6px_6px_0px_var(--border-color)] hover:shadow-[8px_8px_0px_var(--foreground)] hover:-translate-y-1 bg-background">
              <div className="flex items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                <span className="text-xl md:text-2xl font-black">GitHub</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </a>

          </div>
        </div>

        {/* Bottom Copyright line */}
        <div className="flex justify-center items-center pt-8 border-t-[3px] border-[var(--border-color)]/20 mt-4">
          <p className="font-black uppercase text-sm tracking-widest opacity-60">
            © {currentYear} Anish Chatterjee. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
