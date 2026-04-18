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
        <div className="text-center md:text-right font-medium flex flex-col items-center md:items-end">
          <p className="text-xl md:text-2xl font-bold bg-background text-foreground px-4 py-2 border-[3px] border-[var(--border-color)] inline-block mb-4 shadow-[4px_4px_0px_var(--primary)] -rotate-1 hover:rotate-1 transition-transform">
            Built with <span className="underline decoration-4 underline-offset-4 decoration-primary">Next.js</span> & <span className="underline decoration-4 underline-offset-4 decoration-[#38bdf8]">Tailwind</span>
          </p>
          <p className="text-lg font-bold opacity-80 hover:text-primary transition-colors cursor-crosshair">
            Designed with Neobrutalism in mind.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
