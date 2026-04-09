import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title glitch" data-text="Yeswanth">Yeswanth</h1>
        <h2 className="role">Full Stack Developer</h2>
        <p className="hero-desc">
          Building scalable web applications, robust APIs, and intelligent systems with modern technologies. Crafting seamless digital experiences.
        </p>
        <div className="cta-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="/YESWANTH_S_Resume.pdf" download="YESWANTH_S_Resume.pdf" className="btn download-btn"><i className="fas fa-download"></i> Download Resume</a>
        </div>
        <div className="social-links">
          <a href="https://github.com/yeswanthyes" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/yeswanth-s-aa500b280/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:yesyesWanth232@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
