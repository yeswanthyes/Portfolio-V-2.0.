import React, { useEffect, useState } from 'react';

const BOOT_TEXT = '> INITIALIZING PORTS... ESTABLISHING SECURE SYSTEMS... PORTFOLIO COMPILED SUCCESSFULLY... SYSTEMS ONLINE...';

const IntroScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('ys'); // 'ys' | 'name' | 'done'
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('name'), 1400);
    const t2 = setTimeout(() => { setOpacity(0); }, 2800);
    const t3 = setTimeout(() => { onComplete(); }, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <div
      className="intro-screen"
      style={{
        opacity,
        transition: 'opacity 0.4s ease',
        pointerEvents: opacity < 0.1 ? 'none' : 'all',
        background: '#000000'
      }}
    >
      <div className="intro-scanlines" style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.015) 3px, rgba(255,255,255,0.015) 6px)' }} />
      <div className="intro-line" style={{ background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)', boxShadow: '0 0 20px rgba(255,255,255,0.2)' }} />

      {phase === 'ys' ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            animation: 'introYSIn 0.5s ease forwards'
          }}
        >
          {/* Logo Terminal Icon */}
          <div style={{ position: 'relative', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #fff', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.03)', filter: 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.25))', animation: 'hatGlitch 0.15s infinite alternate' }}>
            <i className="fas fa-terminal" style={{ fontSize: '2.2rem', color: '#ffffff' }} />
          </div>
          <div
            style={{
              fontFamily: 'var(--font-hud)',
              fontSize: '1.2rem',
              fontWeight: 900,
              color: 'var(--cyan)',
              letterSpacing: '8px',
              textShadow: 'var(--glow-cyan)',
              textTransform: 'uppercase',
              marginTop: '0.5rem'
            }}
          >
            INITIALIZING
          </div>
        </div>
      ) : (
        <div style={{ textAlign: 'center', zIndex: 3, position: 'relative' }}>
          <div
            style={{
              fontFamily: 'var(--font-hud)',
              fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              textShadow: '0 0 20px rgba(255,255,255,0.3)',
              animation: 'nameReveal 0.4s ease forwards',
              lineHeight: 1.1,
            }}
          >
            YESWANTH S
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: '#ffffff',
              letterSpacing: '4px',
              marginTop: '1rem',
              opacity: 0,
              animation: 'fadeUpIn 0.4s ease 0.3s forwards',
              textTransform: 'uppercase',
            }}
          >
            FULL STACK · CLOUD · AI ENGINEER
          </div>
        </div>
      )}

      {/* Boot text */}
      <div className="intro-boot-text" style={{ color: 'var(--cyan)' }}>{BOOT_TEXT}</div>

      {/* Progress bar */}
      <div className="intro-progress-bar" style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.03)' }}>
        <div className="intro-progress-fill" style={{ background: 'linear-gradient(90deg, #888888, #ffffff)', boxShadow: '0 0 10px rgba(255,255,255,0.3)' }} />
      </div>

      {/* Corner brackets */}
      <div style={{ position: 'absolute', top: 20, left: 20, width: 40, height: 40, borderTop: '2px solid var(--cyan)', borderLeft: '2px solid var(--cyan)', zIndex: 5 }} />
      <div style={{ position: 'absolute', top: 20, right: 20, width: 40, height: 40, borderTop: '2px solid var(--cyan)', borderRight: '2px solid var(--cyan)', zIndex: 5 }} />
      <div style={{ position: 'absolute', bottom: 20, left: 20, width: 40, height: 40, borderBottom: '2px solid var(--cyan)', borderLeft: '2px solid var(--cyan)', zIndex: 5 }} />
      <div style={{ position: 'absolute', bottom: 20, right: 20, width: 40, height: 40, borderBottom: '2px solid var(--cyan)', borderRight: '2px solid var(--cyan)', zIndex: 5 }} />

      {/* HUD Coords */}
      <div style={{ position: 'absolute', top: 24, left: 70, fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '2px', zIndex: 5 }}>
        SYS::PORTFOLIO_LOADER
      </div>

      <style>{`
        @keyframes introYSIn {
          0%  { opacity: 0; transform: scale(0.3); filter: blur(20px); }
          60% { opacity: 1; transform: scale(1.08); filter: blur(0); }
          100%{ opacity: 1; transform: scale(1);    filter: blur(0); }
        }
        @keyframes hatGlitch {
          0%  { transform: rotate(-2deg); }
          100%{ transform: rotate(2deg) skewX(1deg); }
        }
        @keyframes nameReveal {
          0%  { opacity: 0; transform: scaleX(0.6) translateY(20px); filter: blur(10px); }
          100%{ opacity: 1; transform: scaleX(1)   translateY(0);    filter: blur(0); }
        }
        @keyframes fadeUpIn {
          0%  { opacity: 0; transform: translateY(10px); }
          100%{ opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default IntroScreen;
