import React, { useEffect } from 'react';
import './SpotifyTheme.css';

const SpotifyTheme = ({ portfolioData }) => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.spotify-fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    fadeInElements.forEach((el) => observer.observe(el));
    return () => fadeInElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="spotify-portfolio">
      <nav className="spotify-nav">
        <div className="spotify-nav-container">
          <div className="spotify-logo">Spotify</div>
          <div className="spotify-nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="spotify-hero" id="profile">
        <div className="spotify-hero-content spotify-fade-in">
          <h1 className="spotify-hero-title">{portfolioData.fullName}</h1>
          <h2 className="spotify-hero-subtitle">{portfolioData.title}</h2>
          <p className="spotify-hero-description">{portfolioData.bio}</p>
          <div className="spotify-buttons">
            <a href="#contact" className="spotify-button-primary">Get in Touch</a>
            <a href="#projects" className="spotify-button-secondary">View Projects</a>
          </div>
        </div>
        {portfolioData.profileImage && (
          <div className="spotify-hero-image spotify-fade-in">
            <img src={portfolioData.profileImage} alt={portfolioData.fullName} />
          </div>
        )}
      </section>

      <section className="spotify-section spotify-section-gray" id="skills">
        <div className="spotify-container">
          <h2 className="spotify-section-title spotify-fade-in">Skills</h2>
          <div className="spotify-skills">
            {portfolioData.skills &&
              Object.entries(portfolioData.skills).map(([skill, level], index) => (
                <div key={index} className="spotify-skill-item spotify-fade-in">
                  <div className="spotify-skill-icon">
                    <i className={`fab fa-${skill.toLowerCase()}`}></i>
                  </div>
                  <div className="spotify-skill-content">
                    <h3>{skill}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="spotify-section" id="experience">
        <div className="spotify-container">
          <h2 className="spotify-section-title spotify-fade-in">Experience</h2>
          <div className="spotify-timeline">
            {portfolioData.workExperience &&
              portfolioData.workExperience.map((work, index) => (
                <div key={index} className="spotify-timeline-item spotify-fade-in">
                  <span className="spotify-timeline-date">
                    {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                  </span>
                  <h3 className="spotify-timeline-title">{work.position}</h3>
                  <h4 className="spotify-timeline-subtitle">{work.company}</h4>
                  <p>{work.description}</p>
                </div>
              ))}
          </div>
          <h2 className="spotify-section-title spotify-fade-in">Education</h2>
          <div className="spotify-timeline">
            {portfolioData.education &&
              portfolioData.education.map((edu, index) => (
                <div key={index} className="spotify-timeline-item spotify-fade-in">
                  <span className="spotify-timeline-date">
                    {edu.startDate} - {edu.currentlyStudying ? 'Present' : edu.endDate}
                  </span>
                  <h3 className="spotify-timeline-title">{edu.institution}</h3>
                  <h4 className="spotify-timeline-subtitle">
                    {edu.degree} in {edu.fieldOfStudy}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="spotify-section spotify-section-gray" id="projects">
        <div className="spotify-container">
          <h2 className="spotify-section-title spotify-fade-in">Projects</h2>
          <div className="spotify-grid">
            {portfolioData.projects &&
              portfolioData.projects.map((project, index) => (
                <div key={index} className="spotify-card spotify-fade-in">
                  {project.imageUrl && (
                    <div className="spotify-card-image">
                      <img src={project.imageUrl} alt={project.title} />
                    </div>
                  )}
                  <div className="spotify-card-content">
                    <h3 className="spotify-card-title">{project.title}</h3>
                    <p className="spotify-card-description">{project.description}</p>
                    <div className="spotify-card-techs">
                      {project.technologies &&
                        project.technologies.split(',').map((tech, i) => (
                          <span key={i} className="spotify-tech-tag">
                            {tech.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="spotify-section" id="contact">
        <div className="spotify-container">
          <h2 className="spotify-section-title spotify-fade-in">Get in Touch</h2>
          <div className="spotify-contact-info spotify-fade-in">
            <div className="spotify-contact-item">
              <div className="spotify-contact-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="spotify-contact-content">
                <h3>Email</h3>
                <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              </div>
            </div>
            {portfolioData.phone && (
              <div className="spotify-contact-item">
                <div className="spotify-contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="spotify-contact-content">
                  <h3>Phone</h3>
                  <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                </div>
              </div>
            )}
            <div className="spotify-social-links">
              {portfolioData.social?.github && (
                <a href={portfolioData.social.github} className="spotify-social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {portfolioData.social?.linkedin && (
                <a href={portfolioData.social.linkedin} className="spotify-social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="spotify-footer">
        <p>© {new Date().getFullYear()} {portfolioData.fullName}. Inspired by Spotify.</p>
      </footer>
    </div>
  );
};

export default SpotifyTheme;