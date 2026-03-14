import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-tag">TECHNICAL</span>
        <h2>My Skills</h2>
      </div>
      <div className="skills-container">
        
        <div className="skill-category frontend">
          <div className="skill-header">
            <h3><i className="fas fa-palette" style={{ color: '#ff7eb3' }}></i> Frontend</h3>
            <p className="skill-desc">Pixel-perfect UIs that perform</p>
          </div>
          <div className="skill-ingredients">
            <h4>INGREDIENTS</h4>
            <div className="skill-tags">
              <span className="skill-icon" data-name="HTML5"><i className="devicon-html5-plain"></i></span>
              <span className="skill-icon" data-name="CSS3"><i className="devicon-css3-plain"></i></span>
              <span className="skill-icon" data-name="JavaScript"><i className="devicon-javascript-plain"></i></span>
              <span className="skill-icon" data-name="React"><i className="devicon-react-original"></i></span>
              <span className="skill-icon" data-name="Electron"><i className="devicon-electron-original"></i></span>
            </div>
          </div>
        </div>
        
        <div className="skill-category backend">
          <div className="skill-header">
            <h3><i className="fas fa-cog" style={{ color: '#a78bfa' }}></i> Backend & APIs</h3>
            <p className="skill-desc">Robust server-side systems at scale</p>
          </div>
          <div className="skill-ingredients">
            <h4>INGREDIENTS</h4>
            <div className="skill-tags">
              <span className="skill-icon" data-name="Node.js"><i className="devicon-nodejs-plain"></i></span>
              <span className="skill-icon" data-name="Express"><i className="devicon-express-original"></i></span>
              <span className="skill-icon" data-name="FastAPI"><i className="devicon-fastapi-plain"></i></span>
              <span className="skill-icon" data-name="GraphQL"><i className="devicon-graphql-plain"></i></span>
              <span className="skill-icon" data-name="REST API"><i className="fas fa-network-wired"></i></span>
              <span className="skill-icon" data-name="npm"><i className="devicon-npm-original-wordmark"></i></span>
            </div>
          </div>
        </div>

        <div className="skill-category cloud">
          <div className="skill-header">
            <h3><i className="fas fa-cloud" style={{ color: '#bae6fd' }}></i> Cloud & MLOps</h3>
            <p className="skill-desc">Infrastructure, pipelines & deployment</p>
          </div>
          <div className="skill-ingredients">
            <h4>INGREDIENTS</h4>
            <div className="skill-tags">
              <span className="skill-icon" data-name="AWS"><i className="devicon-amazonwebservices-original"></i></span>
              <span className="skill-icon" data-name="Docker"><i className="devicon-docker-plain"></i></span>
              <span className="skill-icon" data-name="Kubernetes"><i className="devicon-kubernetes-plain"></i></span>
              <span className="skill-icon" data-name="Dialogflow"><i className="fas fa-robot"></i></span>
            </div>
          </div>
        </div>

        <div className="skill-category llm">
          <div className="skill-header">
            <h3><i className="fas fa-robot" style={{ color: '#f472b6' }}></i> LLM & Agents</h3>
            <p className="skill-desc">Multi-agent AI systems & RAG pipelines</p>
          </div>
          <div className="skill-ingredients">
            <h4>INGREDIENTS</h4>
            <div className="skill-tags">
              <span className="skill-icon" data-name="HuggingFace"><i className="fas fa-smile-beam"></i></span>
              <span className="skill-icon" data-name="FastAPI (AI)"><i className="devicon-fastapi-plain"></i></span>
            </div>
          </div>
        </div>

        <div className="skill-category db">
          <div className="skill-header">
            <h3><i className="fas fa-database" style={{ color: '#818cf8' }}></i> Databases</h3>
            <p className="skill-desc">Relational, document & vector stores</p>
          </div>
          <div className="skill-ingredients">
            <h4>INGREDIENTS</h4>
            <div className="skill-tags">
              <span className="skill-icon" data-name="PostgreSQL"><i className="devicon-postgresql-plain"></i></span>
              <span className="skill-icon" data-name="MongoDB"><i className="devicon-mongodb-plain"></i></span>
              <span className="skill-icon" data-name="Oracle"><i className="devicon-oracle-original"></i></span>
              <span className="skill-icon" data-name="phpMyAdmin"><i className="devicon-php-plain"></i></span>
            </div>
          </div>
        </div>

        <div className="skill-category security">
          <div className="skill-header">
            <h3><i className="fas fa-shield-alt" style={{ color: '#fbbf24' }}></i> Auth & Security</h3>
            <p className="skill-desc">Zero-trust, compliant access</p>
          </div>
          <div className="skill-ingredients">
            <h4>INGREDIENTS</h4>
            <div className="skill-tags">
              <span className="skill-icon" data-name="AWS IAM"><i className="fas fa-users-cog"></i></span>
              <span className="skill-icon" data-name="JWT"><i className="fas fa-key"></i></span>
              <span className="skill-icon" data-name="OAuth 2.0"><i className="fas fa-lock"></i></span>
              <span className="skill-icon" data-name="Secrets Mgr"><i className="fas fa-user-secret"></i></span>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Skills;
