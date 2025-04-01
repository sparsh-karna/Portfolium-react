import React, { useEffect } from 'react';
import './AppleTheme.css';

const AppleTheme = ({ portfolioData }) => {
  // Apple-specific animations and effects
  useEffect(() => {
    // Fade in sections on scroll
    const fadeInElements = document.querySelectorAll('.apple-fade-in');
    
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
    
    fadeInElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      fadeInElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="apple-portfolio">
      {/* Navigation */}
      <nav className="apple-nav">
        <div className="apple-nav-container">
          <div className="apple-logo">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M17.05,20.28c-.98.95-2.05.86-3.09.38A4.76,4.76,0,0,0,10.83,21a4.07,4.07,0,0,1-2.3-.41C4.93,18.5,5.5,13.72,8,11.78a4.51,4.51,0,0,1,3.92-.87c.82.22,1.5.27,2.43-.05A3.82,3.82,0,0,1,17.33,12c-1,1.21-.89,3.55.82,4.59C17.86,18.6,17.9,19.52,17.05,20.28ZM12.39,3.57c1.06.02,1.94.7,2.47,1.53a2.42,2.42,0,0,1-1.26,3.63,2.37,2.37,0,0,1-2.74-1.21l-.05-.08A2.39,2.39,0,0,1,12.39,3.57Z"/>
            </svg>
          </div>
          <div className="apple-nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="apple-hero" id="profile">
        <div className="apple-hero-content apple-fade-in">
          <h1 className="apple-hero-title">{portfolioData.fullName}</h1>
          <h2 className="apple-hero-subtitle">{portfolioData.title}</h2>
          <p className="apple-hero-description">{portfolioData.bio}</p>
          <div className="apple-buttons">
            <a href="#contact" className="apple-button-primary">Get in Touch</a>
            <a href="#projects" className="apple-button-secondary">View Projects</a>
          </div>
        </div>
        {portfolioData.profileImage && (
          <div className="apple-hero-image apple-fade-in">
            <img src={portfolioData.profileImage} alt={portfolioData.fullName} />
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section className="apple-section apple-section-gray" id="skills">
        <div className="apple-container">
          <h2 className="apple-section-title apple-fade-in">Skills</h2>
          
          <div className="apple-skills">
            {portfolioData.skills && Object.entries(portfolioData.skills).map(([skill, level], index) => (
              <div key={index} className="apple-skill-item apple-fade-in">
                <div className="apple-skill-icon">
                  <i className={`fab fa-${skill.toLowerCase()}`}></i>
                </div>
                <div className="apple-skill-content">
                  <h3>{skill}</h3>
                  <div className="apple-skill-bar">
                    <div className="apple-skill-progress" style={{ width: `${level}%` }}></div>
                  </div>
                  <span className="apple-skill-level">{level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="apple-section" id="experience">
        <div className="apple-container">
          <h2 className="apple-section-title apple-fade-in">Experience</h2>
          
          <div className="apple-timeline">
            {portfolioData.workExperience && portfolioData.workExperience.map((work, index) => (
              <div key={index} className="apple-timeline-item apple-fade-in">
                <div className="apple-timeline-content">
                  <span className="apple-timeline-date">
                    {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                  </span>
                  <h3 className="apple-timeline-title">{work.position}</h3>
                  <h4 className="apple-timeline-subtitle">{work.company}</h4>
                  <p className="apple-timeline-description">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="apple-section-title apple-fade-in">Education</h2>
          
          <div className="apple-timeline">
            {portfolioData.education && portfolioData.education.map((edu, index) => (
              <div key={index} className="apple-timeline-item apple-fade-in">
                <div className="apple-timeline-content">
                  <span className="apple-timeline-date">
                    {edu.startDate} - {edu.currentlyStudying ? 'Present' : edu.endDate}
                  </span>
                  <h3 className="apple-timeline-title">{edu.institution}</h3>
                  <h4 className="apple-timeline-subtitle">{edu.degree} in {edu.fieldOfStudy}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="apple-section apple-section-gray" id="projects">
        <div className="apple-container">
          <h2 className="apple-section-title apple-fade-in">Projects</h2>
          
          <div className="apple-grid">
            {portfolioData.projects && portfolioData.projects.map((project, index) => (
              <div key={index} className="apple-card apple-fade-in">
                {project.imageUrl && (
                  <div className="apple-card-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                )}
                <div className="apple-card-content">
                  <h3 className="apple-card-title">{project.title}</h3>
                  <p className="apple-card-description">{project.description}</p>
                  <div className="apple-card-techs">
                    {project.technologies && project.technologies.split(',').map((tech, i) => (
                      <span key={i} className="apple-tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className="apple-link" target="_blank" rel="noopener noreferrer">
                      Learn more <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="apple-section" id="contact">
        <div className="apple-container">
          <h2 className="apple-section-title apple-fade-in">Get in Touch</h2>
          
          <div className="apple-contact">
            <div className="apple-contact-info apple-fade-in">
              <div className="apple-contact-item">
                <div className="apple-contact-icon">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="apple-contact-content">
                  <h3>Email</h3>
                  <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                </div>
              </div>
              
              {portfolioData.phone && (
                <div className="apple-contact-item">
                  <div className="apple-contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="apple-contact-content">
                    <h3>Phone</h3>
                    <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                  </div>
                </div>
              )}
              
              {portfolioData.location && (
                <div className="apple-contact-item">
                  <div className="apple-contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="apple-contact-content">
                    <h3>Location</h3>
                    <span>{portfolioData.location}</span>
                  </div>
                </div>
              )}
              
              <div className="apple-social-links">
                {portfolioData.social && portfolioData.social.github && (
                  <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="apple-social-link">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                
                {portfolioData.social && portfolioData.social.linkedin && (
                  <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="apple-social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                
                {portfolioData.social && portfolioData.social.twitter && (
                  <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className="apple-social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="apple-footer">
        <div className="apple-container">
          <div className="apple-footer-content">
            <p>&copy; {new Date().getFullYear()} {portfolioData.fullName}. All rights reserved.</p>
            <p>Design inspired by Apple</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppleTheme;