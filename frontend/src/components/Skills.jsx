import React from 'react';
import SectionBg from './SectionBg';

const mods = [
  {
    id: 'frontend',
    category: 'FRONTEND UI/UX',
    label: 'Frontend Development',
    icon: <i className="fas fa-eye" style={{ color: 'var(--cyan)' }} />,
    color: '#ffffff',
    desc: 'PIXEL-PERFECT INTERFACES & RESPONSIVE LAYOUTS',
    skills: [
      { i: 'devicon-html5-plain', n: 'HTML5' }, { i: 'devicon-css3-plain', n: 'CSS3' },
      { i: 'devicon-javascript-plain', n: 'JavaScript' }, { i: 'devicon-react-original', n: 'React' },
      { i: 'devicon-electron-original', n: 'Electron' },
    ],
  },
  {
    id: 'ai-agents',
    category: 'LLM & AI AGENTS',
    label: 'AI & Automations',
    icon: <i className="fas fa-brain" style={{ color: 'var(--cyan)' }} />,
    color: '#ffffff',
    desc: 'INTELLIGENT PREDICTION & RAG PIPELINES',
    skills: [
      { i: 'fas fa-smile-beam', n: 'HuggingFace' }, { i: 'devicon-fastapi-plain', n: 'FastAPI AI' },
      { i: 'fas fa-project-diagram', n: 'LangChain' }, { i: 'fas fa-microchip', n: 'Gemini API' },
    ],
  },
  {
    id: 'backend',
    category: 'BACKEND & APIS',
    label: 'Backend Operations',
    icon: <i className="fas fa-cog" style={{ color: 'var(--cyan)' }} />,
    color: '#ffffff',
    desc: 'HARDENED RUNTIMES & SCALABLE LOGIC',
    skills: [
      { i: 'devicon-nodejs-plain', n: 'Node.js' }, { i: 'devicon-express-original', n: 'Express' },
      { i: 'devicon-fastapi-plain', n: 'FastAPI' }, { i: 'devicon-graphql-plain', n: 'GraphQL' },
      { i: 'fas fa-network-wired', n: 'REST API' },
    ],
  },
  {
    id: 'database',
    category: 'DATABASES',
    label: 'Databases & Cache',
    icon: <i className="fas fa-database" style={{ color: 'var(--cyan)' }} />,
    color: '#ffffff',
    desc: 'OPTIMIZED DATA SCHEMAS & TRANSACTIONS',
    skills: [
      { i: 'devicon-postgresql-plain', n: 'PostgreSQL' }, { i: 'devicon-mongodb-plain', n: 'MongoDB' },
      { i: 'devicon-oracle-original', n: 'Oracle' }, { i: 'devicon-firebase-plain', n: 'Firebase' },
    ],
  },
  {
    id: 'devops',
    category: 'CLOUD & DEVOPS',
    label: 'Cloud & Infrastructure',
    icon: <i className="fas fa-cloud" style={{ color: 'var(--cyan)' }} />,
    color: '#ffffff',
    desc: 'DEPLOYMENT ORCHESTRATION & SCALING',
    skills: [
      { i: 'devicon-amazonwebservices-original', n: 'AWS' }, { i: 'devicon-docker-plain', n: 'Docker' },
      { i: 'devicon-kubernetes-plain', n: 'Kubernetes' }, { i: 'fas fa-robot', n: 'Dialogflow' },
    ],
  },
  {
    id: 'security',
    category: 'AUTH & SECURITY',
    label: 'Security Systems',
    icon: <i className="fas fa-shield-alt" style={{ color: 'var(--cyan)' }} />,
    color: '#ffffff',
    desc: 'ROBUST AUTHENTICATION & ACCESS SCHEMES',
    skills: [
      { i: 'fas fa-users-cog', n: 'AWS IAM' }, { i: 'fas fa-key', n: 'JWT' },
      { i: 'fas fa-lock', n: 'OAuth 2.0' }, { i: 'fas fa-user-secret', n: 'Secrets Mgr' },
    ],
  },
];

const Skills = () => (
  <section id="skills">
    <SectionBg variant="skills" />
    <div className="section">
      <div className="reveal">
        <div className="section-tag" style={{ color: 'var(--cyan)' }}>04 // CORE ENGINE</div>
        <h2 className="section-title">MY <span>SKILLS</span></h2>
        <div className="section-id" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>SKILLS_LOADED — 6 MODULES ACTIVE</div>
      </div>
      <div className="skills-grid">
        {mods.map((m, i) => (
          <div
            key={m.id}
            className={`skill-mod reveal`}
            style={{
              transitionDelay: `${i * 0.07}s`,
              background: 'rgba(10, 10, 12, 0.9)',
              borderColor: 'rgba(255, 255, 255, 0.08)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ffffff';
              e.currentTarget.style.boxShadow = `0 10px 40px rgba(255, 255, 255, 0.08)`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            {/* Top color indicator line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: m.color }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.55rem', fontWeight: 900, color: 'rgba(255, 255, 255, 0.5)', letterSpacing: '1px' }}>{m.category}</span>
              <span>{m.icon}</span>
            </div>

            <div className="skill-mod-hdr">
              <h3 style={{ fontSize: '0.9rem', fontFamily: 'var(--font-hud)' }}>{m.label}</h3>
            </div>
            <p className="skill-mod-desc" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: 'var(--font-mono)' }}>{m.desc}</p>
            <div className="skill-sep" style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)' }} />
            <div className="skill-chips">
              {m.skills.map(s => (
                <div
                  key={s.n}
                  className="skill-chip"
                  data-name={s.n}
                  role="img"
                  aria-label={s.n}
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                    color: 'rgba(255, 255, 255, 0.45)',
                    borderRadius: '4px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.boxShadow = `0 0 12px rgba(255, 255, 255, 0.25)`;
                    e.currentTarget.style.backgroundColor = `rgba(255, 255, 255, 0.04)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.45)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <i className={s.i} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
