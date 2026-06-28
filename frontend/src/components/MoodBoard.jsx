import React, { useState } from 'react';
import MusicPlayer from './MusicPlayer';
import SectionBg from './SectionBg';

const MOODS = [
  {
    image: '/onepiecevol1end-scaled.jpg',
    title: 'THE GRAND LINE',
    subtitle: 'DESTINATION: FREEDOM',
    desc: 'Sailing against the tide, charting the uncharted waters of engineering.',
    id: 'CORE.INSP.01'
  },
  {
    image: '/zoro.jpg',
    title: 'RORONOA ZORO',
    subtitle: 'THE PATH OF FOCUS',
    desc: 'Sharpening the blades of discipline, concentration, and absolute mastery.',
    id: 'CORE.INSP.02'
  },
  {
    image: '/zoro blood.png',
    title: 'NOTHING HAPPENED',
    subtitle: 'SCARRED BUT UNBROKEN',
    desc: 'Bearing the weight of silent dedication, sacrifice, and ultimate resolve.',
    id: 'CORE.INSP.03'
  },
  {
    image: '/gear 5.jpeg',
    title: 'GEAR 5',
    subtitle: 'SUN GOD NIKA',
    desc: 'Awakening complete freedom, joy, and the power to turn imagination into reality.',
    id: 'CORE.INSP.04'
  }
];

const MoodBoard = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  return (
    <section id="moodboard" className="section reveal">
      <SectionBg variant="moodboard" />
      <div className="section-tag">INSPIRATIONS</div>
      <h2 className="section-title">VISUAL <span>MOOD_BOARD</span></h2>
      <p className="section-id">SYS.LOG // CORE_IDEOLOGY</p>

      <div className="moodboard-container">
        {/* SVG lines between nodes (desktop only) - matching the staggered 4-node wire graph */}
        <svg className="mood-svg-lines" aria-hidden="true">
          <line x1="18%" y1="30%" x2="36%" y2="62%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
          <line x1="18%" y1="30%" x2="84%" y2="32%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
          <line x1="66%" y1="56%" x2="84%" y2="32%" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1.5" />
        </svg>

        {MOODS.map((mood, idx) => {
          const isClicked = clickedIndex === idx;
          return (
            <div 
              key={idx}
              className={`mood-node mood-node-${idx + 1} ${isClicked ? 'active' : ''}`}
              onClick={() => setClickedIndex(isClicked ? null : idx)}
            >
              {/* Speech-bubble styled tooltip popping up above the node */}
              <div className="mood-tooltip">
                <div className="mood-tooltip-title">{mood.title}</div>
                <div className="mood-tooltip-desc">"{mood.subtitle}"</div>
                <div className="mood-tooltip-sub">{mood.desc}</div>
                <div className="mood-tooltip-arrow" />
              </div>

              <div className="mood-img-wrap">
                <a href={mood.image} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ display: 'block', width: '100%', height: '100%' }}>
                  <img src={mood.image} alt={mood.title} className="mood-img" />
                  <div className="mood-scanline" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Render Music Player centered at the bottom of the section */}
      <MusicPlayer isStatic={true} />
    </section>
  );
};

export default MoodBoard;
