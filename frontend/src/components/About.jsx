import React from 'react';
import SectionBg from './SectionBg';

const About = () => (
  <section id="about">
    <SectionBg variant="about" />
    <div className="section">
      <div className="reveal">
        <div className="section-tag" style={{ color: 'var(--cyan)' }}>01 // PROFILE</div>
        <h2 className="section-title">ABOUT <span>ME</span></h2>
        <div className="section-id" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>SYSTEMS::YS_2026 — COMPILE_SUCCESSFUL</div>
      </div>

      <div className="about-grid">
        <div className="reveal d1">
          <div className="about-bio" style={{ color: 'rgba(255, 255, 255, 0.75)', fontFamily: 'var(--font-body)' }}>
            <p>
              I'm <span className="bio-hl" style={{ color: 'var(--cyan)' }}>Yeswanth S</span> — a Full Stack Engineer, Cloud Architect,
              and AI Developer operating out of Tamil Nadu, India. I focus on engineering clean, 
              scalable, and high-performance digital systems.
            </p>
            <p>
              Founder of <span className="bio-hl" style={{ color: 'var(--cyan)' }}>VisualX Technologies</span>, where I lead the building
              of next-generation software platforms. Previously, I shipped production-ready systems at{' '}
              <span className="bio-hl" style={{ color: 'var(--cyan)' }}>Scaplet</span> (Full Stack Lead) and{' '}
              <span className="bio-hl" style={{ color: 'var(--cyan)' }}>Amdox Technologies</span> (Web Dev Intern).
            </p>
            <p>
              Graduating with a <span className="bio-hl" style={{ color: 'var(--cyan)' }}>BE in Computer Science</span> from Erode Sengunthar
              Engineering College (May 2026). My technical stack leverages React, Node.js, Python, and 
              advanced <span className="bio-hl" style={{ color: 'var(--cyan)' }}>AI-driven workflows</span>.
            </p>
          </div>
        </div>

        <div className="reveal d2">
          <div className="stats-grid">
            {[
              { num: '2+', lbl: 'YEARS DEVELOPING' },
              { num: '5+', lbl: 'SYSTEMS SHIPPED' },
              { num: '2',  lbl: 'TEAMS JOINED' },
              { num: '∞',  lbl: 'ENGINEERING GOAL' },
            ].map(({ num, lbl }) => (
              <div key={lbl} className="stat-block" style={{ background: 'rgba(10, 10, 12, 0.9)', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
                <span className="stat-num" style={{ color: 'var(--cyan)', textShadow: 'var(--glow-cyan)' }}>{num}</span>
                <span className="stat-lbl" style={{ fontSize: '0.62rem', letterSpacing: '1px' }}>{lbl}</span>
              </div>
            ))}
          </div>

          <div className="quick-facts" style={{ background: 'rgba(10, 10, 12, 0.9)', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
            {[
              { icon: 'fa-map-marker-alt', key: 'BASE LOCATION',  val: 'Tamil Nadu, India' },
              { icon: 'fa-graduation-cap', key: 'ACADEMIC DEGREE', val: 'B.E. Computer Science' },
              { icon: 'fa-terminal',       key: 'CURRENT ROLE',    val: 'VisualX Technologies — Founder' },
              { icon: 'fa-code',           key: 'CORE EXPERTISE',  val: 'Full Stack · Cloud · AI' },
            ].map(({ icon, key, val }) => (
              <div key={key} className="fact-row" style={{ borderBottomColor: 'rgba(255, 255, 255, 0.05)' }}>
                <div className="fact-icon" style={{ color: 'var(--cyan)', borderColor: 'rgba(255, 255, 255, 0.15)', background: 'rgba(255, 255, 255, 0.03)' }}><i className={`fas ${icon}`} /></div>
                <div>
                  <div className="fact-key" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{key}</div>
                  <div className="fact-val" style={{ color: '#fff' }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
