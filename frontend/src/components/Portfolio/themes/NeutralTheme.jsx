import React, { useEffect } from 'react';
import './NeutralTheme.css';

const NeutralTheme = ({ portfolioData }) => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.neutral-fade-in');
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
    <div className="neutral-portfolio">
      <nav className="neutral-nav">
        <div className="neutral-nav-container">
          <div className="neutral-logo">{portfolioData.fullName}</div>
          <div className="neutral-nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="neutral-hero" id="profile">
        <div className="neutral-hero-content neutral-fade-in">
          <h1 className="neutral-hero-title">{portfolioData.fullName}</h1>
          <h2 className="neutral-hero-subtitle">{portfolioData.title}</h2>
          <p className="neutral-hero-description">{portfolioData.bio}</p>
          <div className="neutral-buttons">
            <a href="#contact" className="neutral-button-primary">Get in Touch</a>
            <a href="#projects" className="neutral-button-secondary">View Projects</a>
          </div>
        </div>
        {portfolioData.profileImage && (
          <div className="neutral-hero-image neutral-fade-in">
            <img src={portfolioData.profileImage} alt={portfolioData.fullName} />
          </div>
        )}
      </section>

      <section className="neutral-section neutral-section-gray" id="skills">
        <div className="neutral-container">
          <h2 className="neutral-section-title neutral-fade-in">Skills</h2>
          <div className="neutral-skills">
            {portfolioData.skills &&
              Object.entries(portfolioData.skills).map(([skill, level], index) => (
                <div key={index} className="neutral-skill-item neutral-fade-in">
                  <div className="neutral-skill-icon">
                    <i className={`fab fa-${skill.toLowerCase()}`}></i>
                  </div>
                  <div className="neutral-skill-content">
                    <h3>{skill}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="neutral-section" id="experience">
        <div className="neutral-container">
          <h2 className="neutral-section-title neutral-fade-in">Experience</h2>
          <div className="neutral-timeline">
            {portfolioData.workExperience &&
              portfolioData.workExperience.map((work, index) => (
                <div key={index} className="neutral-timeline-item neutral-fade-in">
                  <span className="neutral-timeline-date">
                    {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                  </span>
                  <h3 className="neutral-timeline-title">{work.position}</h3>
                  <h4 className="neutral-timeline-subtitle">{work.company}</h4>
                  <p>{work.description}</p>
                </div>
              ))}
          </div>
          <h2 className="neutral-section-title neutral-fade-in">Education</h2>
          <div className="neutral-timeline">
            {portfolioData.education &&
              portfolioData.education.map((edu, index) => (
                <div key={index} className="neutral-timeline-item neutral-fade-in">
                  <span className="neutral-timeline-date">
                    {edu.startDate} - {edu.currentlyStudying ? 'Present' : edu.endDate}
                  </span>
                  <h3 className="neutral-timeline-title">{edu.institution}</h3>
                  <h4 className="neutral-timeline-subtitle">
                    {edu.degree} in {edu.fieldOfStudy}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="neutral-section neutral-section-gray" id="projects">
        <div className="neutral-container">
          <h2 className="neutral-section-title neutral-fade-in">Projects</h2>
          <div className="neutral-grid">
            {portfolioData.projects &&
              portfolioData.projects.map((project, index) => (
                <div key={index} className="neutral-card neutral-fade-in">
                  {project.imageUrl && (
                    <div className="neutral-card-image">
                      <img src={project.imageUrl} alt={project.title} />
                    </div>
                  )}
                  <div className="neutral-card-content">
                    <h3 className="neutral-card-title">{project.title}</h3>
                    <p className="neutral-card-description">{project.description}</p>
                    <div className="neutral-card-techs">
                      {project.technologies &&
                        project.technologies.split(',').map((tech, i) => (
                          <span key={i} className="neutral-tech-tag">
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

      <section className="neutral-section" id="contact">
        <div className="neutral-container">
          <h2 className="neutral-section-title neutral-fade-in">Get in Touch</h2>
          <div className="neutral-contact-info neutral-fade-in">
            <div className="neutral-contact-item">
              <div className="neutral-contact-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="neutral-contact-content">
                <h3>Email</h3>
                <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              </div>
            </div>
            {portfolioData.phone && (
              <div className="neutral-contact-item">
                <div className="neutral-contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="neutral-contact-content">
                  <h3>Phone</h3>
                  <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                </div>
              </div>
            )}
            <div className="neutral-social-links">
              {portfolioData.social?.github && (
                <a href={portfolioData.social.github} className="neutral-social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {portfolioData.social?.linkedin && (
                <a href={portfolioData.social.linkedin} className="neutral-social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="neutral-footer">
        <p>© {new Date().getFullYear()} {portfolioData.fullName}</p>
      </footer>
    </div>
  );
};

export default NeutralTheme;