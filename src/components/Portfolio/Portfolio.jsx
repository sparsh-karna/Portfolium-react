import React from 'react';
import './Portfolio.css';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';

const Portfolio = ({ portfolioData }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-content">
      <Hero 
        name={portfolioData.fullName} 
        title={portfolioData.title}
        onLearnMore={() => scrollToSection('about')}
      />
      
      <About 
        profileImage={portfolioData.profileImage} 
        aboutText={portfolioData.about}
      />
      
      <Skills skills={portfolioData.skills} />
      
      <Contact socialLinks={portfolioData.social} />
    </div>
  );
};

export default Portfolio;