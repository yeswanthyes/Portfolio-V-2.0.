import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';

const Experience = () => {
  const experiences = [
    {
      company: 'Amdox Technologies',
      location: 'Remote',
      role: 'Web Developer',
      period: 'Jan 2026 – Mar 2026',
      type: 'Intern',
      logo: '/amdox.png',
      skills: ['JavaScript', 'MongoDB', 'Express', 'Redux', 'REST APIs']
    },
    {
      company: 'Scaplet',
      location: 'Remote',
      role: 'Head Developer – Full Stack',
      period: 'Jun 2025 – Dec 2025',
      type: 'Full-time',
      logo: '/scaplet-logo.jpg',
      skills: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'WebSockets']
    }
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="experience">
      <div className="experience-glow"></div>

      <div className="section-header" style={{ position: 'relative', zIndex: 10 }}>
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-tag"
          style={{ color: '#7c5cff', opacity: 1 }}
        >
          CAREER
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Experience
        </motion.h2>

        <div className="experience-nav-wrapper">
          <div ref={prevRef} className="replica-nav-btn">
            <i className="fas fa-arrow-left"></i>
          </div>
          <div ref={nextRef} className="replica-nav-btn">
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="section-timeline">
        <div className={`timeline-dot dot-1 ${activeIndex === 0 ? 'active' : ''}`}></div>
        <div className={`timeline-dot dot-2 ${activeIndex === 1 ? 'active' : ''}`}></div>
      </div>

      <div className="experience-carousel-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="experience-swiper"
        >
          {experiences.map((exp, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="experience-card"
              >
                <div className="exp-top-section">
                  <div className="exp-logo-square">
                    <img src={exp.logo} alt={exp.company} />
                  </div>
                  <div className="exp-header-text">
                    <h3>{exp.company}</h3>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>

                <div className="exp-divider"></div>

                <h4 className="exp-role-title">{exp.role}</h4>

                <div className="exp-badge-row">
                  <span className="exp-period-text">{exp.period}</span>
                  <span className="exp-type-badge">{exp.type}</span>
                </div>

                <div className="exp-skills-grid">
                  {exp.skills.map((skill, sIndex) => (
                    <span key={sIndex} className="exp-skill-pill">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="experience-counter">
          <span className="counter-num">{activeIndex + 1} / {experiences.length}</span>
          <span className="counter-desc">{experiences[activeIndex].company} — {experiences[activeIndex].role}</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
