import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <span className="section-tag">PROJECTS</span>
        <h2>Recent Work</h2>
      </div>
      <div className="projects-grid">
        
        <div className="project-card featured">
          <div className="project-img">
            <img src="/project_job_portal.png" alt="Job Portal" />
            <div className="overlay">
              <a href="#" className="view-btn">Visit Site</a>
            </div>
          </div>
          <div className="project-info">
            <div className="project-header">
              <h3>Job Portal</h3>
              <span className="featured-badge">Featured</span>
            </div>
            <p>A comprehensive platform connecting job seekers with employers, featuring advanced search filters and user dashboards.</p>
          </div>
        </div>

        <div className="project-card billing">
          <div className="project-img">
            <img src="/project_billing.png" alt="Billing Application" />
            <div className="overlay">
              <a href="#" className="view-btn">Visit Site</a>
            </div>
          </div>
          <div className="project-info">
            <h3>Billing Application</h3>
            <p>An efficient invoicing and billing tracker with analytics dashboards for managing financial transactions.</p>
          </div>
        </div>

        <div className="project-card featured-alt">
          <div className="project-img">
            <img src="/project_certificate.png" alt="Certificate Verification" />
            <div className="overlay">
              <a href="#" className="view-btn">Visit Site</a>
            </div>
          </div>
          <div className="project-info">
            <div className="project-header">
              <h3>Certificate Verification</h3>
              <span className="featured-badge alt">Security</span>
            </div>
            <p>A secure platform designed to validate and verify authentic certificates, preventing forgery and ensuring trust.</p>
          </div>
        </div>

        <div className="project-card ac-engineers">
          <div className="project-img">
            <img src="/project_ac_engineers.png" alt="AC Engineers Website" />
            <div className="overlay">
              <a href="#" className="view-btn">Visit Site</a>
            </div>
          </div>
          <div className="project-info">
            <h3>Maheswaran AC Engineers</h3>
            <p>A professional business website showcasing HVAC services, booking capabilities, and company portfolio.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
