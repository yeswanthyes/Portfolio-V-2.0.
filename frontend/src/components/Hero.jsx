import React, { useRef, useEffect, Suspense } from 'react';
import HeroSphere from './HeroSphere';
import SectionBg from './SectionBg';

const ROLES = [
  'FULL STACK DEVELOPER',
  'CLOUD ENGINEER',
  'AI DEVELOPER',
  'FOUNDER — VISUALX TECH',
];

const BADGES = ['React', 'Node.js', 'FastAPI', 'Python', 'AWS', 'Docker', 'AI/LLM', 'PostgreSQL'];

const Hero = () => {
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX - window.innerWidth / 2, y: e.clientY - window.innerHeight / 2 };
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className="hero-section">
      <SectionBg variant="hero" />
      {/* Big background text */}
      <div className="hero-bg-text" aria-hidden="true" style={{ opacity: 0.03, WebkitTextStroke: '1px var(--cyan)', filter: 'blur(1px)' }}>PORTFOLIO</div>

      <div className="hero-grid">
        {/* LEFT TEXT */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Status */}
          <div className="hero-status reveal visible" style={{ borderColor: 'rgba(255, 255, 255, 0.15)', background: 'rgba(255, 255, 255, 0.03)', color: 'var(--cyan)' }}>
            FULL STACK DEVELOPER — OPEN FOR WORK
          </div>

          {/* Name - Unbounded Minimalist Typography */}
          <h1 className="hero-name reveal visible" style={{ marginBottom: '1.2rem', fontFamily: 'var(--font-hud)', textTransform: 'uppercase' }}>
            <span className="gta-text-gradient" style={{ fontSize: 'clamp(2.3rem, 7vw, 6.2rem)', display: 'block', fontWeight: 900, letterSpacing: '-2px', textShadow: '0 0 30px rgba(255, 255, 255, 0.2)', lineHeight: 0.95, background: 'linear-gradient(135deg, #ffffff 0%, #888888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>YESWANTH</span>
            <span style={{ fontSize: 'clamp(1.8rem, 5vw, 4.2rem)', color: '#fff', fontWeight: 900, letterSpacing: '-1px', textShadow: '0 0 20px rgba(255,255,255,0.1)', lineHeight: 0.95 }}>S</span>
          </h1>

          {/* HUD data line */}
          <div className="hero-data reveal visible d1" style={{ color: 'rgba(255, 255, 255, 0.4)', fontFamily: 'var(--font-mono)' }}>
            ENGINEER // YESWANTH S &nbsp;|&nbsp; STATUS // COMPILING SOLUTIONS
          </div>

          {/* Roles */}
          <div className="hero-role-wrap reveal visible d2" style={{ borderLeftColor: 'var(--cyan)' }}>
            <div className="hero-role-label" style={{ color: 'var(--gold)' }}>CURRENT OBJECTIVE</div>
            <div className="hero-roles-container">
              <div style={{ animation: 'roleScroll 12s ease-in-out infinite' }}>
                {[...ROLES, ROLES[0]].map((r, i) => (
                  <div key={i} className="hero-role" style={{ color: '#fff', fontFamily: 'var(--font-hud)', fontSize: 'clamp(0.9rem, 2vw, 1.3rem)' }}>{r}</div>
                ))}
              </div>
            </div>
          </div>

          <p className="hero-desc reveal visible d3" style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
            Building scalable web applications, cloud-native systems, and intelligent AI pipelines.
            Crafting seamless digital experiences that push the boundaries of what's possible.
          </p>

          {/* Buttons */}
          <div className="hero-btns reveal visible d3">
            <a href="#projects" className="btn-hud btn-hud-primary">
              <i className="fas fa-code" />
              Explore Projects
            </a>
            <a href="/YESWANTH_S_Resume.pdf" download className="btn-hud btn-hud-secondary" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'var(--cyan)' }} onMouseEnter={e => e.currentTarget.style.boxShadow = 'var(--glow-cyan)'} onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              <i className="fas fa-file-download" />
              Download CV
            </a>
            <a href="#contact" className="btn-hud btn-hud-ghost" onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--cyan)'; e.currentTarget.style.boxShadow = 'var(--glow-cyan)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <i className="fas fa-paper-plane" />
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="hero-socials reveal visible d4">
            <a href="https://github.com/yeswanthyes" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/yeswanth-s-aa500b280/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
            <a href="mailto:yesyesWanth232@gmail.com" className="social-btn" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>

        {/* RIGHT: 3D Sphere */}
        <div className="hero-visual">
          <div className="sphere-outer">
            {/* HUD Rings */}
            <div className="hud-ring hud-ring-1" style={{ borderColor: 'rgba(255, 255, 255, 0.15)' }} />
            <div className="hud-ring hud-ring-2" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
            <div className="hud-ring hud-ring-3" style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }} />

            {/* Targeting corners */}
            <div className="sphere-target st-tl" style={{ borderColor: 'var(--cyan)' }} />
            <div className="sphere-target st-tr" style={{ borderColor: 'var(--cyan)' }} />
            <div className="sphere-target st-bl" style={{ borderColor: 'var(--cyan)' }} />
            <div className="sphere-target st-br" style={{ borderColor: 'var(--cyan)' }} />

            <div className="sphere-canvas">
              <Suspense fallback={null}>
                <HeroSphere mousePos={mousePos} />
              </Suspense>
            </div>

            {/* Orbit badges */}
            <div className="orbit-badges" aria-hidden="true">
              {BADGES.map((b, i) => (
                <div key={b} className="orbit-badge" style={{ animationDelay: `${i * 0.45}s`, borderColor: 'rgba(255, 255, 255, 0.12)', color: 'var(--cyan)', background: 'rgba(10, 10, 12, 0.9)', boxShadow: '0 0 12px rgba(255, 255, 255, 0.08)' }}>{b}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes roleScroll {
          0%,18%  { transform: translateY(0); }
          25%,43% { transform: translateY(-2.2rem); }
          50%,68% { transform: translateY(-4.4rem); }
          75%,93% { transform: translateY(-6.6rem); }
          100%    { transform: translateY(-8.8rem); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
