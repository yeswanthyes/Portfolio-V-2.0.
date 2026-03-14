import React from 'react';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="section-header">
        <span className="section-tag">ACADEMIC</span>
        <h2>Education</h2>
      </div>
      <div className="skills-container">
        <div className="skill-category education-box" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <img 
            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://erode-sengunthar.ac.in/&size=128" 
            alt="ESEC Logo" 
            style={{ width: '50px', height: '50px', borderRadius: '8px', background: 'white', padding: '2px', objectFit: 'contain' }}
          />
          <div>
            <h3 style={{ marginBottom: '0.5rem' }}>
              <i className="fas fa-graduation-cap"></i> BE - Computer Science and Engineering
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '8px', fontSize: '0.95rem' }}>
              Erode Sengunthar Engineering College
            </p>
            <span className="featured-badge">May 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
