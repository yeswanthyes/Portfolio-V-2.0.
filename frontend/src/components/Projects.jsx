import React from 'react';
import SectionBg from './SectionBg';

const small = [
  {
    id: 'job-portal',
    title: 'JOB PORTAL',
    desc: 'AI-driven job matching platform for seekers and employers.',
    icon: 'fas fa-graduation-cap',
    color: '#ffffff',
    tags: ['React', 'Node.js', 'MongoDB'],
    status: 'COMPLETED',
    github: 'https://github.com/yeswanthyes',
  },
  {
    id: 'billing',
    title: 'AC BILLING',
    desc: 'Automated HVAC invoicing system for Maheswaran AC Engineers.',
    icon: 'fas fa-wind',
    color: '#ffffff',
    tags: ['React', 'Firebase', 'Finance'],
    status: 'DEPLOYED',
    github: 'https://github.com/yeswanthyes',
  },
  {
    id: 'certiverify',
    title: 'CERTIVERIFY',
    desc: 'Blockchain-based tamper-proof academic certificate verification.',
    icon: 'fas fa-fingerprint',
    color: '#ffffff',
    tags: ['Security', 'Solidity', 'Ethereum'],
    status: 'COMPLETED',
    github: 'https://github.com/yeswanthyes',
  },
  {
    id: 'cloud-ai',
    title: 'CLOUD AI BOT',
    desc: 'Multi-modal AI assistant with RAG pipeline deployed on Google Cloud.',
    icon: 'fas fa-robot',
    color: '#ffffff',
    tags: ['GCP', 'FastAPI', 'Gemini API'],
    status: 'ACTIVE',
    github: 'https://github.com/yeswanthyes',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <SectionBg variant="projects" />
      <div className="section">
        <div className="reveal">
          <div className="section-tag" style={{ color: 'var(--cyan)' }}>05 // PORTFOLIO</div>
          <h2 className="section-title">RECENT <span>WORK</span></h2>
          <div className="section-id" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>PROJECT_LOG::COMPILE_SUCCESSFUL — 5 SYSTEMS SHIPPED</div>
        </div>

        {/* Featured Project */}
        <div
          className="featured-wanted-poster reveal d1"
          style={{
            marginBottom: '3rem',
            background: 'rgba(10, 10, 12, 0.9)',
            borderColor: 'rgba(255, 255, 255, 0.08)'
          }}
        >
          {/* Left Column: Visual Casing */}
          <div
            className="ang-card clip"
            style={{
              cursor: 'default',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2.5rem 1.5rem',
              background: 'rgba(5, 5, 8, 0.95)',
              borderColor: 'rgba(255, 255, 255, 0.12)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', zIndex: 1 }}>
              <i className="fas fa-code-branch" style={{ fontSize: '3.5rem', color: 'var(--cyan)', filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.25))' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-mono)' }}>SYSTEM_TYPE::AI_AGENT</span>
            </div>
          </div>

          {/* Right Column: Specifications / Details */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.2rem' }}>
              <span className="fp-pill featured" style={{ color: 'var(--cyan)', borderColor: 'rgba(255, 255, 255, 0.25)', background: 'rgba(255, 255, 255, 0.04)' }}>FEATURED SYSTEM</span>
              <span className="fp-pill live" style={{ color: 'var(--green)', borderColor: 'rgba(0, 255, 102, 0.25)', background: 'rgba(0, 255, 102, 0.04)' }}>ONLINE</span>
            </div>
            
            <h3 style={{ fontFamily: 'var(--font-hud)', fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
              ANTARES AI BROWSER
            </h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', marginBottom: '1.2rem', letterSpacing: '1px' }}>
              // SECURE CHROMIUM BROWSER DRIVEN BY AI PIPELINES
            </div>
            
            <p style={{ color: 'rgba(255, 255, 255, 0.65)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.8rem', fontFamily: 'var(--font-body)' }}>
              Antares is an AI-integrated optimized web browser built on the Chromium engine. Features intelligent search assistance, performance optimization, and privacy-focused architecture. Engineered for lightning-fast speeds and seamless developer workflows.
            </p>

            <div className="fp-tags" style={{ marginBottom: '2rem' }}>
              {['Chromium', 'Electron', 'Node.js', 'AI Agent', 'RAG Engine'].map(t => (
                <span key={t} className="fp-tag" style={{ color: 'var(--cyan)', borderColor: 'rgba(255, 255, 255, 0.15)', background: 'rgba(255, 255, 255, 0.04)' }}>{t}</span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://antares-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="fp-visit-btn"
                style={{ color: '#fff', borderColor: 'rgba(255, 255, 255, 0.25)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                VISIT SYSTEM <i className="fas fa-external-link-alt" />
              </a>
              <a
                href="https://github.com/yeswanthyes"
                target="_blank"
                rel="noopener noreferrer"
                className="fp-visit-btn"
                style={{ color: 'rgba(255, 255, 255, 0.6)', borderColor: 'rgba(255, 255, 255, 0.15)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                CODEBASE <i className="fab fa-github" />
              </a>
            </div>
          </div>
        </div>

        {/* Small Projects Grid */}
        <div className="small-projs">
          {small.map((p, i) => (
            <div
              key={p.id}
              className="ang-card clip reveal"
              onClick={() => p.github && window.open(p.github, '_blank')}
              style={{
                transitionDelay: `${i * 0.08}s`,
                background: 'rgba(10, 10, 12, 0.9)',
                borderColor: 'rgba(255, 255, 255, 0.08)',
                padding: '1.8rem 1.4rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <div className="br-tr" style={{ borderColor: 'var(--cyan)' }} />
              <div className="br-bl" style={{ borderColor: 'var(--cyan)' }} />
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.03)',
                    color: 'var(--cyan)',
                    fontSize: '1.1rem'
                  }}
                >
                  <i className={p.icon} />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    padding: '2px 8px',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: 'rgba(255,255,255,0.4)',
                    background: 'rgba(255,255,255,0.02)'
                  }}
                >
                  {p.status}
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-hud)',
                  fontSize: p.title.length > 12 ? '0.85rem' : '0.95rem',
                  fontWeight: 700,
                  color: '#fff',
                  textTransform: 'uppercase',
                  marginBottom: '0.4rem'
                }}
              >
                {p.title}
              </div>

              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', lineHeight: '1.5', marginBottom: '1.2rem' }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: 'auto' }}>
                {p.tags.map(t => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      padding: '2px 7px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: 'rgba(255,255,255,0.4)',
                      background: 'transparent'
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
