import React from 'react';
import SectionBg from './SectionBg';

const Education = () => (
  <section id="education">
    <SectionBg variant="education" />
    <div className="section">
      <div className="reveal">
        <div className="section-tag" style={{ color: 'var(--cyan)' }}>02 // EDUCATION</div>
        <h2 className="section-title">EDUCA<span>TION</span></h2>
        <div className="section-id" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>ACADEMIC_RECORD::COMPILE_SUCCESSFUL</div>
      </div>

      <div className="ang-card clip edu-card reveal d1" style={{ background: 'rgba(10, 10, 12, 0.9)', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
        <div className="br-tr" style={{ borderColor: 'var(--cyan)' }} />
        <div className="br-bl" style={{ borderColor: 'var(--cyan)' }} />
        <div className="edu-logo" style={{ borderColor: 'rgba(255, 255, 255, 0.15)', background: '#fff' }}>
          <img
            src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://erode-sengunthar.ac.in/&size=128"
            alt="ESEC"
          />
        </div>
        <div>
          <div className="edu-degree" style={{ fontFamily: 'var(--font-hud)', fontSize: '1rem', fontWeight: 700 }}>BE — Computer Science &amp; Engineering</div>
          <div className="edu-school" style={{ color: 'var(--cyan)', fontFamily: 'var(--font-body)', fontSize: '0.85rem' }}>Erode Sengunthar Engineering College</div>
          <span className="edu-pill" style={{ color: 'var(--cyan)', borderColor: 'rgba(255, 255, 255, 0.25)', background: 'rgba(255, 255, 255, 0.03)' }}><i className="fas fa-graduation-cap" style={{ marginRight: 5 }} /> GRADUATING MAY 2026</span>
        </div>
      </div>

      <div className="ang-card courses-panel reveal d2" style={{ marginTop: '2px', background: 'rgba(10, 10, 12, 0.9)', borderColor: 'rgba(255, 255, 255, 0.08)' }}>
        <div className="courses-label" style={{ color: 'var(--cyan)' }}>// CORE ACADEMIC COURSES</div>
        <div className="courses-wrap">
          {[
            'Data Structures & Algorithms', 'Operating Systems',
            'Computer Networks', 'Database Management',
            'Machine Learning', 'Cloud Computing',
            'Cryptography & Security', 'Software Engineering',
          ].map(c => (
            <span key={c} className="course-tag" style={{ borderColor: 'rgba(255, 255, 255, 0.08)', color: 'rgba(255, 255, 255, 0.7)' }}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
