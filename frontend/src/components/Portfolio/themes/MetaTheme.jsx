import React, { useEffect } from 'react';
import './MetaTheme.css';

const MetaTheme = ({ portfolioData }) => {
  // Meta-specific animations and effects
  useEffect(() => {
    // Fade in sections on scroll
    const fadeInElements = document.querySelectorAll('.meta-fade-in');
    
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
    
    // Initialize skill progress bars
    const skillItems = document.querySelectorAll('.meta-skill-item');
    skillItems.forEach(item => {
      const progressBar = item.querySelector('.meta-skill-progress');
      if (progressBar) {
        const level = progressBar.getAttribute('data-level') || 0;
        setTimeout(() => {
          progressBar.style.width = `${level}%`;
        }, 300);
      }
    });
    
    return () => {
      fadeInElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="meta-portfolio">
      {/* Navigation */}
      <nav className="meta-nav">
        <div className="meta-nav-container">
          <div className="meta-logo">
            <svg viewBox="0 0 36 36" height="32" width="32">
              <path fill="currentColor" d="M31.8,33.7c0,0,0-3.6,0-6.8c0-2.5,0.3-5-0.7-7.3c-0.8-1.7-2.3-2.9-4.1-3.1c-2.5-0.3-6.1,0-8.6,0c-0.3,0-0.3,0-0.7,0C15.1,16.5,11.3,16,9,16c-2.1,0-3.5,1.1-4.4,3c-1.2,2.5-0.9,5.3-0.9,8c0,2.2,0,4.4,0,6.6C2.4,33.7,1,33.7,0,33.7V19.4c0-5.5,0-11,1.9-16.1c1.3-3.5,3.4-1.9,6.1-2.1c1.1-0.1,2.3,0,3.5,0c3.1,0,6.3,0,9.4,0c1.9,0,3.8,0,5.7,0.1c2,0.1,4.2-0.3,6.1,0.1c5.7,1.2,6.2,6.3,6.2,11.5c0,6.9,0,13.9,0,20.8C36,33.7,33.9,33.7,31.8,33.7z"/>
              <path fill="currentColor" d="M15.3,16.5c-1.5,0-2.8-0.5-3.9-1.6c-1.1-1-1.6-2.4-1.6-3.9V8.5c0-1.5,0.5-2.8,1.6-3.9c1-1.1,2.4-1.6,3.9-1.6h5.4c1.5,0,2.8,0.5,3.9,1.6c1.1,1,1.6,2.4,1.6,3.9V11c0,1.5-0.5,2.8-1.6,3.9c-1,1.1-2.4,1.6-3.9,1.6H15.3z"/>
            </svg>
          </div>
          <div className="meta-nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="meta-hero" id="profile">
        <div className="meta-hero-content meta-fade-in">
          <h1 className="meta-hero-title">{portfolioData.fullName}</h1>
          <h2 className="meta-hero-subtitle">{portfolioData.title}</h2>
          <p className="meta-hero-description">{portfolioData.bio}</p>
          <div className="meta-buttons">
            <a href="#contact" className="meta-button-primary">Connect</a>
            <a href="#projects" className="meta-button-secondary">View Projects</a>
          </div>
        </div>
        {portfolioData.profileImage && (
          <div className="meta-hero-image meta-fade-in">
            <img src={portfolioData.profileImage} alt={portfolioData.fullName} />
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section className="meta-section meta-section-gray" id="skills">
        <div className="meta-container">
          <h2 className="meta-section-title meta-fade-in">Skills & Expertise</h2>
          
          <div className="meta-skills">
            {portfolioData.skills && Object.entries(portfolioData.skills).map(([skill, level], index) => (
              <div key={index} className="meta-skill-item meta-fade-in">
                <div className="meta-skill-icon">
                  <i className={`fab fa-${skill.toLowerCase()}`}></i>
                </div>
                <div className="meta-skill-content">
                  <h3>{skill}</h3>
                  <div className="meta-skill-bar">
                    <div className="meta-skill-progress" data-level={level} style={{ width: '0%' }}></div>
                  </div>
                  <span className="meta-skill-level">{level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="meta-section" id="experience">
        <div className="meta-container">
          <h2 className="meta-section-title meta-fade-in">Professional Experience</h2>
          
          <div className="meta-timeline">
            {portfolioData.workExperience && portfolioData.workExperience.map((work, index) => (
              <div key={index} className="meta-timeline-item meta-fade-in">
                <div className="meta-timeline-content">
                  <span className="meta-timeline-date">
                    {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                  </span>
                  <h3 className="meta-timeline-title">{work.position}</h3>
                  <h4 className="meta-timeline-subtitle">{work.company}</h4>
                  <p className="meta-timeline-description">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <h2 className="meta-section-title meta-fade-in">Education</h2>
          
          <div className="meta-timeline">
            {portfolioData.education && portfolioData.education.map((edu, index) => (
              <div key={index} className="meta-timeline-item meta-fade-in">
                <div className="meta-timeline-content">
                  <span className="meta-timeline-date">
                    {edu.startDate} - {edu.currentlyStudying ? 'Present' : edu.endDate}
                  </span>
                  <h3 className="meta-timeline-title">{edu.institution}</h3>
                  <h4 className="meta-timeline-subtitle">{edu.degree} in {edu.fieldOfStudy}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="meta-section meta-section-gray" id="projects">
        <div className="meta-container">
          <h2 className="meta-section-title meta-fade-in">Featured Projects</h2>
          
          <div className="meta-grid">
            {portfolioData.projects && portfolioData.projects.map((project, index) => (
              <div key={index} className="meta-card meta-fade-in">
                {project.imageUrl && (
                  <div className="meta-card-image">
                    <img src={project.imageUrl} alt={project.title} />
                  </div>
                )}
                <div className="meta-card-content">
                  <h3 className="meta-card-title">{project.title}</h3>
                  <p className="meta-card-description">{project.description}</p>
                  <div className="meta-card-techs">
                    {project.technologies && project.technologies.split(',').map((tech, i) => (
                      <span key={i} className="meta-tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} className="meta-link" target="_blank" rel="noopener noreferrer">
                      View project <span>→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="meta-section" id="contact">
        <div className="meta-container">
          <h2 className="meta-section-title meta-fade-in">Let's Connect</h2>
          
          <div className="meta-contact">
            <div className="meta-contact-info meta-fade-in">
              <div className="meta-contact-item">
                <div className="meta-contact-icon">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="meta-contact-content">
                  <h3>Email</h3>
                  <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                </div>
              </div>
              
              {portfolioData.phone && (
                <div className="meta-contact-item">
                  <div className="meta-contact-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="meta-contact-content">
                    <h3>Phone</h3>
                    <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                  </div>
                </div>
              )}
              
              {portfolioData.location && (
                <div className="meta-contact-item">
                  <div className="meta-contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="meta-contact-content">
                    <h3>Location</h3>
                    <span>{portfolioData.location}</span>
                  </div>
                </div>
              )}
              
              <div className="meta-social-links">
                {portfolioData.social && portfolioData.social.github && (
                  <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" className="meta-social-link">
                    <i className="fab fa-github"></i>
                  </a>
                )}
                
                {portfolioData.social && portfolioData.social.linkedin && (
                  <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" className="meta-social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                )}
                
                {portfolioData.social && portfolioData.social.twitter && (
                  <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer" className="meta-social-link">
                    <i className="fab fa-twitter"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="meta-footer">
        <div className="meta-container">
          <div className="meta-footer-content">
            <p>&copy; {new Date().getFullYear()} {portfolioData.fullName}. All rights reserved.</p>
            <p>Design inspired by Meta</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MetaTheme;