import React, { useEffect } from 'react';
import './Hero.css';

const Hero = ({ name, title, onLearnMore }) => {
  // Parallax effect for the hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector('.hero');
      if (hero) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1 className="billboard-title">{name}</h1>
        <h2 className="billboard-subtitle">{title}</h2>
        <button className="netflix-button play-button" onClick={onLearnMore}>
          <span className="play-icon">▶</span> Learn More
        </button>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;