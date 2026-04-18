import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 sm:px-12 md:px-24 max-w-7xl mx-auto space-y-32 py-24">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}
