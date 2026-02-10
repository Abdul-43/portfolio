import './App.css';
import { useEffect, useState } from 'react';
import Preloader from './components/Pre';
import Navbar from './components/Header/Header';
import Hero from './components/Homepage/Homepage';
import About from './components/Aboutpage/Aboutpage';
import Experience from './components/Experience/Experience';
import Skills from './components/Aboutpage/Skills';
import Architecture from './components/Architecture/Architecture';
import Projects from './components/Projectlist/Projectlist';
import Contact from './components/Contactpage/Contactpage';

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [load]);

  // Mouse move effect for background
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      <Preloader load={load} />
      <div id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <div className="section-divider" />
        <section id="about">
          <About />
        </section>
        <div className="section-divider" />
        <section id="experience">
          <Experience />
        </section>
        <div className="section-divider" />
        <section id="skills">
          <Skills />
        </section>
        <div className="section-divider" />
        <section id="architecture">
          <Architecture />
        </section>
        <div className="section-divider" />
        <section id="projects">
          <Projects />
        </section>
        <div className="section-divider" />
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
