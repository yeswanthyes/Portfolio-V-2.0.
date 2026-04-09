import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(prev => !prev);

  // Apply theme class to <html> so all CSS vars cascade correctly (including body bg)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  useEffect(() => {
    const glow1 = document.createElement('div');
    glow1.className = 'ambient-glow glow-1';
    const glow2 = document.createElement('div');
    glow2.className = 'ambient-glow glow-2';
    document.body.appendChild(glow1);
    document.body.appendChild(glow2);

    return () => {
      document.body.removeChild(glow1);
      document.body.removeChild(glow2);
    };
  }, []);

  return (
    <div className="app">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">YS<span className="footer-dot">.</span></span>
            <p className="footer-tagline">Full Stack Developer · Building things that matter.</p>
          </div>
          <div className="footer-links">
            <a href="https://github.com/yeswanthyes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/yeswanth-s-aa500b280/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:yesyesWanth232@gmail.com" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <a href="/YESWANTH_S_Resume.pdf" download="YESWANTH_S_Resume.pdf" className="footer-resume-btn">
            <i className="fas fa-download"></i> Download Resume
          </a>
        </div>
        <p className="footer-copy">&copy; 2026 Yeswanth S. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
