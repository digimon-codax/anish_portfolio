import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import GithubContributions from '../components/GithubContributions';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Anish Chatterjee",
            "jobTitle": "Full Stack & Backend Developer",
            "url": "https://your-deployed-domain.com",
            "sameAs": [
              "https://github.com/digimon-codax",
              "https://www.linkedin.com/in/anish-chatterjee-583b4b281/"
            ],
            "alumniOf": "RCCIIT"
          })
        }}
      />
      <div className="flex flex-col items-center justify-center w-full px-6 sm:px-12 md:px-24 max-w-7xl mx-auto space-y-32 py-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GithubContributions />
        <Education />
        <Achievements />
      </div>
    </>
  );
}
