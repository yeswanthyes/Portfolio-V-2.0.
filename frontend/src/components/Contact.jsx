import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' }); // Reset form
        setTimeout(() => setStatus({ loading: false, success: false, error: '' }), 5000); // Clear message
      } else {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <span className="section-tag">CONTACT</span>
        <h2>Get in Touch</h2>
      </div>
      <div className="contact-container" style={{ alignItems: 'flex-start' }}> {/* Ensure tall form doesn't squish info */}
        
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:yesyesWanth232@gmail.com">yesyesWanth232@gmail.com</a></p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fab fa-linkedin"></i>
            <div>
              <h4>LinkedIn</h4>
              <p><a href="https://www.linkedin.com/in/yeswanth-s-aa500b280/" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fab fa-github"></i>
            <div>
              <h4>GitHub</h4>
              <p><a href="https://github.com/yeswanthyes" target="_blank" rel="noopener noreferrer">View my repos</a></p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name"
            placeholder="Your Name" 
            required 
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Your Email" 
            required 
            value={formData.email}
            onChange={handleChange}
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows="5" 
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          
          <button type="submit" className="btn primary submit-btn" disabled={status.loading}>
            {status.loading ? 'Sending...' : 'Send Message'}
          </button>

          {status.success && <p style={{ color: '#4ade80', fontSize: '0.9rem', marginTop: '0.5rem' }}>Message sent successfully!</p>}
          {status.error && <p style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>{status.error}</p>}
        </form>

      </div>
    </section>
  );
};

export default Contact;
