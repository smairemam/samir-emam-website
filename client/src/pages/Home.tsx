import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';

import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Scroll progress indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-[100] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
