import React, { useEffect } from 'react';
import './TwitterTheme.css';

const TwitterTheme = ({ portfolioData }) => {
  // Twitter-specific animations and effects
  useEffect(() => {
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.twitter-animate');
    
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
    
    animateElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animateElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="twitter-portfolio">
      {/* Navigation */}
      <nav className="twitter-nav">
        <div className="twitter-nav-container">
          <div className="twitter-logo">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <div className="twitter-nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="twitter-hero" id="profile">
        <div className="twitter-card twitter-hero-card twitter-animate">
          <div className="twitter-hero-content">
            <div className="twitter-hero-header">
              <div className="twitter-profile-image">
                {portfolioData.profileImage && (
                  <img src={portfolioData.profileImage} alt={portfolioData.fullName} />
                )}
              </div>
              <div className="twitter-profile-details">
                <h1 className="twitter-profile-name">{portfolioData.fullName}</h1>
                <h2 className="twitter-profile-handle">@{portfolioData.fullName.replace(/\s+/g, '').toLowerCase()}</h2>
                <p className="twitter-profile-title">{portfolioData.title}</p>
              </div>
            </div>
            <p className="twitter-hero-bio">{portfolioData.bio}</p>
            <div className="twitter-hero-actions">
              <a href="#contact" className="twitter-button-primary">Get in Touch</a>
              <a href="#projects" className="twitter-button-secondary">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="twitter-section" id="skills">
        <div className="twitter-container">
          <h2 className="twitter-section-title twitter-animate">Skills</h2>
          
          <div className="twitter-skills-grid">
            {portfolioData.skills && Object.entries(portfolioData.skills).map(([skill, level], index) => (
              <div key={index} className="twitter-card twitter-animate" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="twitter-skill-header">
                  <div className="twitter-skill-icon">
                    <i className={`fab fa-${skill.toLowerCase()}`}></i>
                  </div>
                  <h3>{skill}</h3>
                </div>
                <div className="twitter-skill-bar">
                  <div className="twitter-skill-progress" style={{ width: `${level}%` }}></div>
                </div>
                <span className="twitter-skill-level">{level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="twitter-section twitter-section-alt" id="experience">
        <div className="twitter-container">
          <h2 className="twitter-section-title twitter-animate">Experience</h2>
          
          <div className="twitter-experience-container">
            {portfolioData.workExperience && portfolioData.workExperience.map((work, index) => (
              <div key={index} className="twitter-card twitter-experience-card twitter-animate">
                <div className="twitter-experience-content">
                  <div className="twitter-experience-header">
                    <h3 className="twitter-experience-title">{work.position}</h3>
                    <h4 className="twitter-experience-company">{work.company}</h4>
                  </div>
                  <span className="twitter-experience-date">
                    {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                  </span>
                  <p className="twitter-experience-description">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="twitter-section-title twitter-animate">Education</h2>
          
          <div className="twitter-education-container">
            {portfolioData.education && portfolioData.education.map((edu, index) => (
              <div key={index} className="twitter-card twitter-education-card twitter-animate">
                <div className="twitter-education-content">
                  <div className="twitter-education-header">
                    <h3 className="twitter-education-institution">{edu.institution}</h3>
                    <h4 className="twitter-education-degree">{edu.degree} in {edu.fieldOfStudy}</h4>
                  </div>
                  <span className="twitter-education-date">
                    {edu.startDate} - {edu.currentlyStudying ? 'Present' : edu.endDate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="twitter-section" id="projects">
        <div className="twitter-container">
          <h2 className="twitter-section-title twitter-animate">Projects</h2>
          
          <div className="twitter-projects-grid">
            {portfolioData.projects && portfolioData.projects.map((project, index) => (
              <div key={index} className="twitter-card twitter-project-card twitter-animate">
                {project.imageUrl && (
                  <div className="twitter-project-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                )}
                <div className="twitter-project-content">
                  <h3 className="twitter-project-title">{project.title}</h3>
                  <p className="twitter-project-description">{project.description}</p>
                  <div className="twitter-project-techs">
                    {project.technologies && project.technologies.split(',').map((tech, i) => (
                      <span key={i} className="twitter-tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className="twitter-link" target="_blank" rel="noopener noreferrer">
                      See project <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="twitter-section twitter-section-alt" id="contact">
        <div className="twitter-container">
          <h2 className="twitter-section-title twitter-animate">Get in Touch</h2>
          
          <div className="twitter-contact-container">
            <div className="twitter-card twitter-contact-card twitter-animate">
              <div className="twitter-contact-content">
                <div className="twitter-contact-item">
                  <div className="twitter-contact-icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="twitter-contact-details">
                    <h3>Email</h3>
                    <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                  </div>
                </div>
                
                {portfolioData.phone && (
                  <div className="twitter-contact-item">
                    <div className="twitter-contact-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="twitter-contact-details">
                      <h3>Phone</h3>
                      <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                    </div>
                  </div>
                )}
                
                {portfolioData.location && (
                  <div className="twitter-contact-item">
                    <div className="twitter-contact-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="twitter-contact-details">
                      <h3>Location</h3>
                      <span>{portfolioData.location}</span>
                    </div>
                  </div>
                )}
                
                <div className="twitter-social-links">
                  {portfolioData.social && portfolioData.social.github && (
                    <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="twitter-social-link">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  
                  {portfolioData.social && portfolioData.social.linkedin && (
                    <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="twitter-social-link">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  )}
                  
                  {portfolioData.social && portfolioData.social.twitter && (
                    <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className="twitter-social-link">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="twitter-footer">
        <div className="twitter-container">
          <div className="twitter-footer-content">
            <p>&copy; {new Date().getFullYear()} {portfolioData.fullName}. All rights reserved.</p>
            <p>Design inspired by Twitter (X)</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TwitterTheme;