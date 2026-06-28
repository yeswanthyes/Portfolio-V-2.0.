import React, { useState } from 'react';
import SectionBg from './SectionBg';

const exps = [
  {
    company: 'Amdox Technologies',
    loc: 'Remote',
    role: 'Web Developer',
    period: 'Jan 2026 – Mar 2026',
    type: 'Intern',
    logo: '/amdox.png',
    skills: ['JavaScript', 'MongoDB', 'Express', 'Redux', 'REST APIs'],
    xp: 4,
  },
  {
    company: 'Scaplet',
    loc: 'Remote',
    role: 'Head Developer — Full Stack',
    period: 'Jun 2025 – Dec 2025',
    type: 'Full-time',
    logo: '/scaplet-logo.jpg',
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'WebSockets'],
    xp: 5,
  },
];

const Experience = () => {
  const [idx, setIdx] = useState(0);
  const exp = exps[idx];

  return (
    <section id="experience">
      <SectionBg variant="experience" />
      <div className="section">
        <div className="reveal">
          <div className="section-tag" style={{ color: 'var(--cyan)' }}>03 // EXPERIENCE</div>
          <h2 className="section-title">EXPERI<span>ENCE</span></h2>
          <div className="section-id" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>EXPERIENCE_LOG::COMPILE_SUCCESSFUL</div>
        </div>

        <div className="reveal d1">
          {/* Controls */}
          <div className="exp-controls">
            <button className="exp-nav-btn" onClick={() => setIdx(i => (i - 1 + exps.length) % exps.length)} aria-label="Previous" style={{ color: 'var(--cyan)', borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              <i className="fas fa-chevron-left" />
            </button>
            <button className="exp-nav-btn" onClick={() => setIdx(i => (i + 1) % exps.length)} aria-label="Next" style={{ color: 'var(--cyan)', borderColor: 'rgba(255, 255, 255, 0.15)' }}>
              <i className="fas fa-chevron-right" />
            </button>
            <div className="exp-dots">
              {exps.map((_, i) => (
                <button
                  key={i}
                  className={`exp-dot${i === idx ? ' active' : ''}`}
                  onClick={() => setIdx(i)}
                  style={{
                    backgroundColor: i === idx ? 'var(--cyan)' : 'rgba(255, 255, 255, 0.15)',
                    boxShadow: i === idx ? 'var(--glow-cyan)' : 'none'
                  }}
                />
              ))}
            </div>
            <span className="exp-counter" style={{ color: 'rgba(255, 255, 255, 0.3)', fontFamily: 'var(--font-mono)' }}>
              {String(idx + 1).padStart(2, '0')} / {String(exps.length).padStart(2, '0')}
            </span>
          </div>

          {/* Card */}
          <div
            className="ang-card clip exp-card-inner"
            key={idx}
            style={{
              borderColor: 'rgba(255, 255, 255, 0.08)',
              animation: 'cardIn 0.4s ease',
              background: 'rgba(10, 10, 12, 0.9)'
            }}
          >
            <div className="br-tr" style={{ borderColor: 'var(--cyan)' }} />
            <div className="br-bl" style={{ borderColor: 'var(--cyan)' }} />

            <div className="exp-header">
              <div className="exp-logo-box" style={{ borderColor: 'rgba(255, 255, 255, 0.12)' }}>
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div style={{ flex: 1 }}>
                <div className="exp-company" style={{ fontFamily: 'var(--font-hud)', fontSize: '1.1rem' }}>{exp.company}</div>
                <div className="exp-loc"><i className="fas fa-map-marker-alt" style={{ marginRight: 5, color: 'var(--cyan)' }} />{exp.loc}</div>
              </div>
              <div className="exp-pills">
                <span className="exp-pill" style={{ color: 'var(--cyan)', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>{exp.period}</span>
                <span className="exp-pill" style={{ color: 'var(--cyan)', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>{exp.type}</span>
              </div>
            </div>

            <div className="exp-separator" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)' }} />
            <div className="exp-role" style={{ fontFamily: 'var(--font-hud)', fontSize: '1.3rem' }}>{exp.role}</div>
            <div className="exp-period" style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>WORK PERIOD — {exp.period}</div>

            <div className="exp-skills">
              {exp.skills.map(s => (
                <span
                  key={s}
                  className="exp-skill"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    color: 'rgba(255,255,255,0.5)',
                    fontFamily: 'var(--font-mono)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--cyan)';
                    e.currentTarget.style.color = 'var(--cyan)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {s}
                </span>
              ))}
            </div>

            {/* XP bar */}
            <div className="xp-row">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="xp-seg"
                  style={{
                    background: i < exp.xp ? 'var(--cyan)' : 'rgba(255,255,255,0.05)',
                    boxShadow: i < exp.xp ? 'var(--glow-cyan)' : 'none',
                    opacity: i < exp.xp ? (0.4 + i * 0.12) : 1,
                  }}
                />
              ))}
              <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.58rem', color: 'var(--cyan)', letterSpacing: '2px', marginLeft: 8, alignSelf: 'center' }}>
                PROFICIENCY DEPTH
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes cardIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: none; } }
      `}</style>
    </section>
  );
};

export default Experience;
