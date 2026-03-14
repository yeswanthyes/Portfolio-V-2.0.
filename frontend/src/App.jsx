import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  // Add dark theme glow elements to body
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
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-tertiary)', fontSize: '0.9rem', borderTop: '1px solid var(--border-color)' }}>
        <p>&copy; 2026 Yeswanth. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
