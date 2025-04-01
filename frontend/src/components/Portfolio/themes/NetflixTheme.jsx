import React, { useEffect } from 'react';
import './NetflixTheme.css';

const NetflixTheme = ({ portfolioData }) => {
  // Netflix-specific animation effects
  useEffect(() => {
    // Add Netflix hover animations to cards
    const cards = document.querySelectorAll('.netflix-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });

    // Staggered animation for card appearance
    setTimeout(() => {
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show');
        }, 100 * index);
      });
    }, 500);
  }, []);

  return (
    <div className="netflix-portfolio">
      {/* Hero Section with Billboard-style */}
      <section className="netflix-hero">
        <div className="netflix-hero-backdrop"></div>
        <div className="netflix-hero-vignette"></div>
        <div className="netflix-hero-content">
          <h1 className="netflix-title">{portfolioData.fullName}</h1>
          <h2 className="netflix-tagline">{portfolioData.title}</h2>
          <p className="netflix-synopsis">{portfolioData.bio}</p>
          <div className="netflix-buttons">
            <button className="netflix-button-primary">
              <i className="fas fa-play"></i> View Projects
            </button>
            <button className="netflix-button-secondary">
              <i className="fas fa-info-circle"></i> More Info
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section with Netflix-style categories */}
      <section className="netflix-section">
        <h2 className="netflix-section-title">My Skills</h2>
        <div className="netflix-row">
          {portfolioData.skills.split(',').map((skill, index) => (
            <div key={index} className="netflix-card skill-card">
              <div className="netflix-card-content">
                <h3>{skill.trim()}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section with Netflix-style cards */}
      <section className="netflix-section">
        <h2 className="netflix-section-title">Work Experience</h2>
        <div className="netflix-row">
          {portfolioData.workExperience && portfolioData.workExperience.map((work, index) => (
            <div key={index} className="netflix-card">
              <div className="netflix-card-content">
                <h3>{work.position}</h3>
                <h4>{work.company}</h4>
                <p className="netflix-period">
                  {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                </p>
                <p className="netflix-description">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with Netflix-style thumbnails */}
      <section className="netflix-section">
        <h2 className="netflix-section-title">Projects</h2>
        <div className="netflix-row">
          {portfolioData.projects && portfolioData.projects.map((project, index) => (
            <div key={index} className="netflix-card">
              {project.imageUrl && (
                <div className="netflix-card-img">
                  <img src={project.imageUrl} alt={project.title} />
                </div>
              )}
              <div className="netflix-card-content">
                <h3>{project.title}</h3>
                <p className="netflix-tech">{project.technologies}</p>
                <p className="netflix-description">{project.description}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="netflix-link">
                    <i className="fas fa-external-link-alt"></i> View Project
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section with Netflix buttons */}
      <section className="netflix-section netflix-dark">
        <h2 className="netflix-section-title">Contact</h2>
        <div className="netflix-contact">
          <a href={`mailto:${portfolioData.email}`} className="netflix-contact-button">
            <i className="fas fa-envelope"></i> Email
          </a>
          {portfolioData.linkedin && (
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="netflix-contact-button">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          )}
          {portfolioData.github && (
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="netflix-contact-button">
              <i className="fab fa-github"></i> GitHub
            </a>
          )}
          {portfolioData.twitter && (
            <a href={portfolioData.twitter} target="_blank" rel="noopener noreferrer" className="netflix-contact-button">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          )}
        </div>
      </section>

      {/* Netflix-style footer */}
      <footer className="netflix-footer">
        <div className="netflix-footer-content">
          <p>&copy; {new Date().getFullYear()} {portfolioData.fullName}</p>
          <p>Inspired by Netflix UI</p>
        </div>
      </footer>
    </div>
  );
};

export default NetflixTheme;