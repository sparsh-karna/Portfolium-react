import React, { useEffect } from 'react';
import './MicrosoftTheme.css';

const MicrosoftTheme = ({ portfolioData }) => {
  // Microsoft-specific animations and effects
  useEffect(() => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.ms-reveal');
    
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    revealElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="ms-portfolio">
      {/* Navigation */}
      <nav className="ms-nav">
        <div className="ms-container">
          <div className="ms-logo">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M11.4 2H2v9.4h9.4V2zm0 10.6H2V22h9.4v-9.4zM22 2h-9.4v9.4H22V2zm0 10.6h-9.4V22H22v-9.4z"/>
            </svg>
          </div>
          <div className="ms-nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="ms-hero" id="profile">
        <div className="ms-container">
          <div className="ms-hero-content ms-reveal">
            <h1 className="ms-hero-title">{portfolioData.fullName}</h1>
            <h2 className="ms-hero-subtitle">{portfolioData.title}</h2>
            <p className="ms-hero-description">{portfolioData.bio}</p>
            <div className="ms-buttons">
              <a href="#contact" className="ms-button-primary">Get in Touch</a>
              <a href="#projects" className="ms-button-secondary">View Projects</a>
            </div>
          </div>
          {portfolioData.profileImage && (
            <div className="ms-hero-image ms-reveal">
              <img src={portfolioData.profileImage} alt={portfolioData.fullName} />
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section className="ms-section ms-section-alt" id="skills">
        <div className="ms-container">
          <h2 className="ms-section-title ms-reveal">My Skills</h2>
          
          <div className="ms-skills-grid">
            {portfolioData.skills && Object.entries(portfolioData.skills).map(([skill, level], index) => (
              <div key={index} className="ms-skill-item ms-reveal">
                <div className="ms-skill-header">
                  <h3>{skill}</h3>
                  <span className="ms-skill-level">{level}%</span>
                </div>
                <div className="ms-skill-bar">
                  <div className="ms-skill-progress" style={{ width: `${level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="ms-section" id="experience">
        <div className="ms-container">
          <h2 className="ms-section-title ms-reveal">Work Experience</h2>
          
          <div className="ms-timeline">
            {portfolioData.workExperience && portfolioData.workExperience.map((work, index) => (
              <div key={index} className="ms-timeline-item ms-reveal">
                <div className="ms-timeline-marker"></div>
                <div className="ms-timeline-content">
                  <div className="ms-timeline-header">
                    <h3 className="ms-timeline-title">{work.position}</h3>
                    <span className="ms-timeline-date">
                      {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                    </span>
                  </div>
                  <h4 className="ms-timeline-company">{work.company}</h4>
                  <p className="ms-timeline-description">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="ms-section-title ms-reveal">Education</h2>
          
          <div className="ms-timeline">
            {portfolioData.education && portfolioData.education.map((edu, index) => (
              <div key={index} className="ms-timeline-item ms-reveal">
                <div className="ms-timeline-marker"></div>
                <div className="ms-timeline-content">
                  <div className="ms-timeline-header">
                    <h3 className="ms-timeline-title">{edu.institution}</h3>
                    <span className="ms-timeline-date">
                      {edu.startDate} - {edu.currentlyStudying ? 'Present' : edu.endDate}
                    </span>
                  </div>
                  <h4 className="ms-timeline-company">{edu.degree} in {edu.fieldOfStudy}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="ms-section ms-section-alt" id="projects">
        <div className="ms-container">
          <h2 className="ms-section-title ms-reveal">Featured Projects</h2>
          
          <div className="ms-projects-grid">
            {portfolioData.projects && portfolioData.projects.map((project, index) => (
              <div key={index} className="ms-project-card ms-reveal">
                {project.imageUrl && (
                  <div className="ms-project-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                )}
                <div className="ms-project-content">
                  <h3 className="ms-project-title">{project.title}</h3>
                  <p className="ms-project-description">{project.description}</p>
                  <div className="ms-project-techs">
                    {project.technologies && project.technologies.split(',').map((tech, i) => (
                      <span key={i} className="ms-tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className="ms-link" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="ms-section" id="contact">
        <div className="ms-container">
          <h2 className="ms-section-title ms-reveal">Contact Me</h2>
          
          <div className="ms-contact">
            <div className="ms-contact-info ms-reveal">
              <div className="ms-contact-item">
                <div className="ms-contact-icon">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="ms-contact-details">
                  <h3>Email</h3>
                  <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                </div>
              </div>
              
              {portfolioData.phone && (
                <div className="ms-contact-item">
                  <div className="ms-contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="ms-contact-details">
                    <h3>Phone</h3>
                    <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                  </div>
                </div>
              )}
              
              {portfolioData.location && (
                <div className="ms-contact-item">
                  <div className="ms-contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="ms-contact-details">
                    <h3>Location</h3>
                    <span>{portfolioData.location}</span>
                  </div>
                </div>
              )}
              
              <div className="ms-social-links">
                {portfolioData.social && portfolioData.social.github && (
                  <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="ms-social-link">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                
                {portfolioData.social && portfolioData.social.linkedin && (
                  <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="ms-social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                
                {portfolioData.social && portfolioData.social.twitter && (
                  <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className="ms-social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ms-footer">
        <div className="ms-container">
          <div className="ms-footer-content">
            <p>&copy; {new Date().getFullYear()} {portfolioData.fullName}. All rights reserved.</p>
            <p>Design inspired by Microsoft</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MicrosoftTheme;