import React from 'react';
import './Portfolio.css';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skills from './sections/Skills/Skills';
import Contact from './sections/Contact/Contact';
import ThemeManager from './ThemeManager';

const Portfolio = ({ portfolioData }) => {
  // If the portfolioData has a theme property, use it; otherwise, default to 'netflix'
  const theme = portfolioData.theme || 'netflix';

  // For Netflix theme, we'll use the existing components
  if (theme === 'netflix') {
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
  }
  
  // For other themes, use the ThemeManager
  return <ThemeManager theme={theme} portfolioData={portfolioData} />;
};

export default Portfolio;