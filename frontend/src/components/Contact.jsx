import React, { useState } from 'react';
import SectionBg from './SectionBg';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus({ loading: false, success: false, error: '' }), 5000);
      } else throw new Error(data.error || 'TRANSMISSION FAILED');
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <section id="contact">
      <SectionBg variant="contact" />
      <div className="section">
        <div className="reveal">
          <div className="section-tag" style={{ color: 'var(--cyan)' }}>06 // COMMS</div>
          <h2 className="section-title">GET IN <span>TOUCH</span></h2>
          <div className="section-id" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>COMMUNICATION_TERMINAL::ONLINE — AWAITING TRANSMISSION</div>
        </div>

        <div className="terminal-wrap reveal d1" style={{ background: 'rgba(10, 10, 12, 0.92)', borderColor: 'rgba(255, 255, 255, 0.08)', boxShadow: '0 0 60px rgba(255, 255, 255, 0.02)' }}>
          {/* Terminal Header */}
          <div className="terminal-chrome" style={{ background: 'rgba(5, 5, 8, 0.9)', borderBottomColor: 'rgba(255, 255, 255, 0.08)' }}>
            <div className="tc-dot r" /><div className="tc-dot y" /><div className="tc-dot g" />
            <span className="tc-title" style={{ color: 'rgba(255, 255, 255, 0.35)', fontFamily: 'var(--font-mono)' }}>yeswanth@portfolio:~$ contact --send</span>
          </div>

          <div className="terminal-body">
            {/* Info */}
            <div className="t-info" style={{ borderRightColor: 'rgba(255, 255, 255, 0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem' }}>
                <i className="fas fa-terminal" style={{ color: 'var(--cyan)' }} />
                <h3 style={{ margin: 0, fontFamily: 'var(--font-hud)', fontSize: '1.2rem' }}>OPEN COMMS</h3>
              </div>
              <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '0.85rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Available for full-time roles, freelance opportunities, and high-performance system engineering operations. 
                Transmit your packet below — response within 24 hours.
              </p>
              
              <div className="t-links">
                {[
                  { href: 'mailto:yesyesWanth232@gmail.com', icon: 'fas fa-envelope', key: 'EMAIL', val: 'yesyesWanth232@gmail.com' },
                  { href: 'https://www.linkedin.com/in/yeswanth-s-aa500b280/', icon: 'fab fa-linkedin', key: 'LINKEDIN', val: 'Connect with me' },
                  { href: 'https://github.com/yeswanthyes', icon: 'fab fa-github', key: 'GITHUB', val: 'View my repositories' },
                ].map(({ href, icon, key, val }) => (
                  <a key={key} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="t-link" style={{ borderColor: 'rgba(255, 255, 255, 0.06)', background: 'rgba(10, 10, 12, 0.5)' }} onMouseEnter={e => { e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'; }} onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'; e.currentTarget.style.background = 'rgba(10, 10, 12, 0.5)'; }}>
                    <div className="t-link-icon" style={{ borderColor: 'rgba(255, 255, 255, 0.15)', color: 'var(--cyan)' }}><i className={icon} /></div>
                    <div>
                      <div className="t-link-key" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>{key}</div>
                      <div className="t-link-val" style={{ color: '#fff' }}>{val}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="t-form" onSubmit={onSubmit} noValidate>
              <div className="t-field">
                <label className="t-label" htmlFor="c-name" style={{ color: 'var(--cyan)' }}>SENDER IDENTIFICATION (NAME)</label>
                <input id="c-name" type="text" name="name" className="t-input"
                  placeholder="Enter your name..." required value={form.name} onChange={onChange} style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(5, 5, 8, 0.8)', caretColor: 'var(--cyan)' }} onFocus={e => { e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.background = 'rgba(10, 10, 12, 0.9)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.background = 'rgba(5, 5, 8, 0.8)'; }} />
              </div>
              <div className="t-field">
                <label className="t-label" htmlFor="c-email" style={{ color: 'var(--cyan)' }}>COMMS WAVEGUIDE (EMAIL)</label>
                <input id="c-email" type="email" name="email" className="t-input"
                  placeholder="Enter your email address..." required value={form.email} onChange={onChange} style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(5, 5, 8, 0.8)', caretColor: 'var(--cyan)' }} onFocus={e => { e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.background = 'rgba(10, 10, 12, 0.9)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.background = 'rgba(5, 5, 8, 0.8)'; }} />
              </div>
              <div className="t-field">
                <label className="t-label" htmlFor="c-msg" style={{ color: 'var(--cyan)' }}>MESSAGE CARRIER (MESSAGE)</label>
                <textarea id="c-msg" name="message" className="t-textarea"
                  placeholder="Enter your packet message..." rows={4} required value={form.message} onChange={onChange} style={{ borderColor: 'rgba(255, 255, 255, 0.1)', background: 'rgba(5, 5, 8, 0.8)', caretColor: 'var(--cyan)' }} onFocus={e => { e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.background = 'rgba(10, 10, 12, 0.9)'; }} onBlur={e => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'; e.currentTarget.style.background = 'rgba(5, 5, 8, 0.8)'; }} />
              </div>
              <button type="submit" className="t-submit" disabled={status.loading} id="contact-submit" style={{ borderColor: 'var(--cyan)', color: 'var(--cyan)' }} onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--glow-cyan)'; }} onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}>
                {status.loading
                  ? <><i className="fas fa-spinner fa-spin" /> TRANSMITTING PACKETS...</>
                  : <><i className="fas fa-satellite-dish" /> TRANSMIT MESSAGE</>
                }
              </button>
              {status.success && (
                <div className="t-status ok" style={{ fontFamily: 'var(--font-mono)' }}>
                  <i className="fas fa-check-circle" /> TRANSMISSION SUCCESSFUL — STANDING BY
                </div>
              )}
              {status.error && (
                <div className="t-status err" style={{ fontFamily: 'var(--font-mono)' }}>
                  <i className="fas fa-exclamation-triangle" /> {status.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
