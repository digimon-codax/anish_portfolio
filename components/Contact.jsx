'use client';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 w-full scroll-mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="w-full flex flex-col lg:flex-row gap-16 lg:gap-12 items-center lg:items-start"
      >
        {/* Left Column - Contact Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase tracking-tighter leading-none inline-block border-b-[8px] border-primary pb-4">
            Let's <br/> <span className="text-foreground">Connect.</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-foreground/80 mb-12 max-w-md border-l-[4px] border-primary pl-4">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-8">
            <a 
              href="mailto:chatterjeeanish49@gmail.com" 
              className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl font-bold group w-max"
            >
              <div className="w-14 h-14 bg-primary border-[3px] border-[var(--border-color)] flex items-center justify-center group-hover:-translate-y-1 group-hover:-translate-x-1 shadow-[4px_4px_0px_var(--border-color)] group-hover:shadow-[8px_8px_0px_var(--border-color)] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span className="group-hover:underline underline-offset-8 decoration-[4px] decoration-primary transition-all break-all sm:break-normal">
                chatterjeeanish49@gmail.com
              </span>
            </a>
            
            <a 
              href="https://linkedin.com/in/anish-chatterjee-683316317" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl font-bold group w-max"
            >
               <div className="w-14 h-14 bg-background border-[3px] border-[var(--border-color)] flex items-center justify-center group-hover:-translate-y-1 group-hover:-translate-x-1 shadow-[4px_4px_0px_var(--border-color)] group-hover:shadow-[8px_8px_0px_var(--primary)] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
              </div>
              <span className="group-hover:underline underline-offset-8 decoration-[4px] decoration-primary transition-all">
                LinkedIn
              </span>
            </a>
            
            <a 
              href="https://github.com/digimon-codax" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-4 md:gap-6 text-xl md:text-2xl font-bold group w-max"
            >
               <div className="w-14 h-14 bg-background border-[3px] border-[var(--border-color)] flex items-center justify-center group-hover:-translate-y-1 group-hover:-translate-x-1 shadow-[4px_4px_0px_var(--border-color)] group-hover:shadow-[8px_8px_0px_var(--primary)] transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
              </div>
              <span className="group-hover:underline underline-offset-8 decoration-[4px] decoration-primary transition-all">
                GitHub
              </span>
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <form className="bg-background border-[4px] border-[var(--border-color)] p-6 md:p-10 shadow-[12px_12px_0px_var(--primary)] flex flex-col gap-6 relative">
            {/* Striped tape deco */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--border-color)] border-[3px] border-primary hidden md:block"></div>
            
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Send a Message</h3>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xl font-bold">Your Name</label>
              <input type="text" id="name" placeholder="John Doe" className="p-4 bg-background border-[3px] border-[var(--border-color)] font-medium text-lg neo-brutal-focus focus:border-primary transition-all outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xl font-bold">Your Email</label>
              <input type="email" id="email" placeholder="john@example.com" className="p-4 bg-background border-[3px] border-[var(--border-color)] font-medium text-lg neo-brutal-focus focus:border-primary transition-all outline-none" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xl font-bold">Your Message</label>
              <textarea id="message" rows="5" placeholder="Hello Anish..." className="p-4 bg-background border-[3px] border-[var(--border-color)] font-medium text-lg neo-brutal-focus focus:border-primary transition-all resize-y outline-none"></textarea>
            </div>

            <button 
              type="button" 
              onClick={() => alert("This is a placeholder contact form! Connect this to an API like Formspree or EmailJS.")}
              className="mt-6 px-8 py-5 bg-primary text-black font-black text-2xl uppercase tracking-wider border-[3px] border-[var(--border-color)] shadow-[6px_6px_0px_var(--border-color)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
