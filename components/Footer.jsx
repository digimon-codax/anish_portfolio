export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full border-t-[4px] border-[var(--border-color)] bg-[var(--border-color)] text-background py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start group">
          <div className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-300">
            Anish<span className="text-primary">.dev</span>
          </div>
          <p className="text-lg font-bold mt-2 opacity-80 decoration-2 underline-offset-4 group-hover:underline">
            Backend-Focused Full Stack Developer
          </p>
          <p className="font-bold border-[3px] border-transparent mt-4 uppercase text-sm tracking-widest opacity-80">
            © {currentYear} All rights reserved.
          </p>
        </div>
        
        {/* Right Side */}
        <div className="text-center md:text-right font-medium flex flex-col items-center md:items-end mt-8 md:mt-0">
          <div className="text-xl md:text-2xl font-black bg-background text-foreground px-6 py-3 border-[3px] border-[var(--border-color)] inline-block mb-5 shadow-[5px_5px_0px_var(--primary)] rotate-1 hover:-rotate-1 transition-transform select-none">
            Stay Bold. <span className="underline decoration-4 underline-offset-4 decoration-primary">Ship Fast.</span> ⚡
          </div>
          <div className="flex items-center gap-3 text-lg font-bold opacity-90 transition-colors cursor-crosshair">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>
        </div>
        
      </div>
    </footer>
  );
}
