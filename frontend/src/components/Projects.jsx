import React, { useState } from 'react';

const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState('antares');

  const handleCardClick = (id) => {
    setActiveProjectId(id);
  };

  const smallProjects = [
    {
      id: 'job-portal',
      title: 'Job Portal',
      description: 'Connecting job seekers with top employers through AI-driven matching.',
      icon: 'fas fa-graduation-cap',
      iconColor: '#3b82f6',
      glowColor: 'rgba(59, 130, 246, 0.5)',
      glowColorTransparent: 'rgba(59, 130, 246, 0.1)',
      tags: ['Academic', 'React', 'Node.js']
    },
    {
      id: 'billing-system',
      title: 'Billing System',
      description: 'Automated invoicing and financial tracking for small businesses.',
      icon: 'fas fa-wallet',
      iconColor: '#10b981',
      glowColor: 'rgba(16, 185, 129, 0.5)',
      glowColorTransparent: 'rgba(16, 185, 129, 0.1)',
      tags: ['Academic', 'Express', 'MongoDB']
    },
    {
      id: 'certiverify',
      title: 'CertiVerify',
      description: 'Blockchain-based certificate verification and storage platform.',
      icon: 'fas fa-fingerprint',
      iconColor: '#8b5cf6',
      glowColor: 'rgba(139, 92, 246, 0.5)',
      glowColorTransparent: 'rgba(139, 92, 246, 0.1)',
      tags: ['Academic', 'Security', 'Solidity']
    },
    {
      id: 'ac-engineers',
      title: 'Maheswaran AC Engineers',
      description: 'Business portfolio for HVAC services with scheduling and CRM features.',
      icon: 'fas fa-wind',
      iconColor: '#f59e0b',
      glowColor: 'rgba(245, 158, 11, 0.5)',
      glowColorTransparent: 'rgba(245, 158, 11, 0.1)',
      tags: ['Academic', 'React', 'Firebase']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-tag">PROJECTS</span>
        <h2>Recent Work</h2>
      </div>

      {/* Featured Project - Antares */}
      <div
        className={`featured-project-card ${activeProjectId === 'antares' ? 'active-glow' : ''}`}
        onClick={() => {
          handleCardClick('antares');
          window.open('https://antares-web.vercel.app/', '_blank');
        }}
        style={{
          cursor: 'pointer',
          '--glow-color': 'rgba(234, 166, 70, 0.5)',
          '--glow-color-transparent': 'rgba(234, 166, 70, 0.1)',
          '--glow-color-heavy': 'rgba(234, 166, 70, 0.3)',
          '--glow-color-light': 'rgba(234, 166, 70, 0.2)'
        }}
      >
        <div className="featured-project-content">
          <div className="featured-project-info">
            <div className="project-status">
              <span className="status-tag">Featured</span>
              <span className="status-tag in-progress">In Progress</span>
            </div>

            <h3>Antares – AI Integrated Optimized Browser</h3>
            <p className="project-subtitle">Browse smarter. Powered by AI.</p>

            <p className="project-description">
              Antares is an AI-integrated optimized web browser built on the Chromium engine.
              It enhances browsing with intelligent search assistance, performance optimization,
              and privacy-focused architecture. Designed for developers and power users,
              Antares combines speed, AI automation, and a modern browsing experience.
            </p>

            <div className="tech-tags-list">
              <span className="tech-tag-amber">Chromium</span>
              <span className="tech-tag-amber">Electron</span>
              <span className="tech-tag-amber">Node.js</span>
              <span className="tech-tag-amber">AI Integration</span>
              <span className="tech-tag-amber">Privacy Engine</span>
            </div>
          </div>

          <div className="featured-project-visual">
            <div className="visual-inner-card">
              <div className="glowing-icon-container">
                <i className="fas fa-lock"></i>
              </div>
              <p className="visual-text">Sealed untill opened</p>
              <a 
                href="https://antares-web.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="visit-btn-amber"
                onClick={(e) => e.stopPropagation()}
              >
                Visit Project <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Smaller Projects Grid */}
      <div className="other-projects-grid">
        {smallProjects.map((project) => (
          <div
            key={project.id}
            className={`small-project-card ${activeProjectId === project.id ? 'active-glow' : ''}`}
            onClick={() => handleCardClick(project.id)}
            style={{
              cursor: 'pointer',
              '--glow-color': project.glowColor,
              '--glow-color-transparent': project.glowColorTransparent,
              '--glow-color-heavy': project.glowColor.replace('0.5', '0.3'),
              '--glow-color-light': project.glowColor.replace('0.5', '0.2')
            }}
          >
            <div className="small-card-header">
              <div className="small-card-logo">
                <i className={project.icon} style={{ color: project.iconColor }}></i>
              </div>
              <div className="small-card-links">
                <a href="#"><i className="fab fa-github"></i></a>
                <a href="#"><i className="fas fa-external-link-alt"></i></a>
              </div>
            </div>
            <div className="small-project-info">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
            <div className="small-card-footer">
              {project.tags.map((tag, index) => (
                <span key={index} className={`small-tag ${tag === 'Academic' ? 'academic' : ''}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

