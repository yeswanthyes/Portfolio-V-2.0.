import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const outerRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const smooth = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      smooth.current.x += (pos.current.x - smooth.current.x) * 0.18;
      smooth.current.y += (pos.current.y - smooth.current.y) * 0.18;
      if (outerRef.current) {
        outerRef.current.style.left = smooth.current.x + 'px';
        outerRef.current.style.top  = smooth.current.y + 'px';
      }
      raf.current = requestAnimationFrame(loop);
    };

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    document.addEventListener('mousemove', move);
    raf.current = requestAnimationFrame(loop);

    const els = document.querySelectorAll('button, a, .sm-proj, .skill-chip, .nav-link, .mood-node, .wanted-poster-card');
    els.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      document.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf.current);
      els.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <div
      ref={outerRef}
      style={{
        position: 'fixed',
        width: '40px',
        height: '40px',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: `translate(-50%, -50%) scale(${hovered ? 1.35 : 1}) rotate(${hovered ? '12deg' : '0deg'})`,
        transition: 'transform 0.15s ease-out',
        left: '-100px',
        top: '-100px',
      }}
    >
      {/* Straw Hat (Mugiwara) SVG */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Straw Hat base shadow */}
        <path d="M4 22C4 20 36 20 36 22C36 25 4 25 4 22Z" fill="#ffcc00" opacity="0.18" filter="blur(1px)"/>
        
        {/* Yellow Crown */}
        <path d="M12 21C12 11 28 11 28 21Z" fill="#e6c687" stroke="#b89b60" strokeWidth="1"/>
        
        {/* Red Ribbon */}
        <path d="M12.1 19C18 18 22 18 27.9 19L28 21C22 20 18 20 12 21Z" fill="#ff1e27"/>
        
        {/* Yellow Brim */}
        <path d="M3 22C3 19.5 37 19.5 37 22C37 24.5 3 24.5 3 22Z" fill="#e6c687" stroke="#b89b60" strokeWidth="1"/>
      </svg>
    </div>
  );
};

export default CustomCursor;
