import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';

import IntroScreen  from './components/IntroScreen';
import CustomCursor from './components/CustomCursor';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import MoodBoard    from './components/MoodBoard';
import Education    from './components/Education';
import Experience   from './components/Experience';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Contact      from './components/Contact';

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useLenis() {
  useEffect(() => {
    let lenis;
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
      const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }).catch(() => {});
    return () => lenis?.destroy();
  }, []);
}

function App() {
  const [intro, setIntro] = useState(false); // starts with intro
  useLenis();
  useReveal();

  return (
    <div className="app-container">
      <IntroScreen onComplete={() => setIntro(true)} />

      <CustomCursor />

      <div style={{ opacity: intro ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Navbar />

        <main>
          <Hero />
          <About />
          <MoodBoard />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </main>

        {/* FOOTER */}
        <footer>
          <div style={{ borderTop: '1px solid rgba(255, 0, 127, 0.08)', position: 'relative', zIndex: 1, background: 'rgba(9, 4, 18, 0.9)' }}>
            <div className="site-footer" style={{ borderTop: 'none' }}>
              <div className="footer-inner">
                <div>
                  <div className="footer-logo gta-text-gradient" style={{ fontSize: '1.8rem', fontWeight: 900 }}>YS.</div>
                  <div className="footer-tag" style={{ color: 'rgba(255, 255, 255, 0.25)' }}>FULL STACK · CLOUD · AI — BUILDING THINGS THAT MATTER</div>
                </div>
                <div className="footer-socials">
                  {[
                    { href: 'https://github.com/yeswanthyes', icon: 'fab fa-github', label: 'GitHub' },
                    { href: 'https://www.linkedin.com/in/yeswanth-s-aa500b280/', icon: 'fab fa-linkedin', label: 'LinkedIn' },
                    { href: 'mailto:yesyesWanth232@gmail.com', icon: 'fas fa-envelope', label: 'Email' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer" className="social-btn" aria-label={s.label} style={{ borderColor: 'rgba(255, 0, 127, 0.2)' }} onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.color = 'var(--cyan)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255, 0, 127, 0.2)'; e.currentTarget.style.color = 'rgba(255, 255, 255, 0.4)'; }}>
                      <i className={s.icon} />
                    </a>
                  ))}
                  <a href="/YESWANTH_S_Resume.pdf" download className="nav-resume-btn" style={{ marginLeft: '0.5rem', borderColor: 'var(--cyan)', color: 'var(--cyan)' }} onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--glow-cyan)'; }} onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}>
                    DOWNLOAD CV
                  </a>
                </div>
              </div>
              <p className="footer-copy" style={{ color: 'rgba(255, 255, 255, 0.12)' }}>© 2026 YESWANTH S · ALL RIGHTS RESERVED · LEONIDA COVER STYLE Redesign</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
