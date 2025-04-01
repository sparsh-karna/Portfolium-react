import React, { useEffect } from 'react';
import './AmazonTheme.css';

const AmazonTheme = ({ portfolioData }) => {
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.amazon-fade-in');
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
    <div className="amazon-portfolio">
      <nav className="amazon-nav">
        <div className="amazon-nav-container">
          <div className="amazon-logo">amazon</div>
          <div className="amazon-nav-links">
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section className="amazon-hero" id="profile">
        <div className="amazon-hero-content amazon-fade-in">
          <h1 className="amazon-hero-title">{portfolioData.fullName}</h1>
          <h2 className="amazon-hero-subtitle">{portfolioData.title}</h2>
          <p className="amazon-hero-description">{portfolioData.bio}</p>
          <div className="amazon-buttons">
            <a href="#contact" className="amazon-button-primary">Get in Touch</a>
            <a href="#projects" className="amazon-button-secondary">View Projects</a>
          </div>
        </div>
        {portfolioData.profileImage && (
          <div className="amazon-hero-image amazon-fade-in">
            <img src={portfolioData.profileImage} alt={portfolioData.fullName} />
          </div>
        )}
      </section>

      <section className="amazon-section amazon-section-gray" id="skills">
        <div className="amazon-container">
          <h2 className="amazon-section-title amazon-fade-in">Skills</h2>
          <div className="amazon-skills">
            {portfolioData.skills &&
              Object.entries(portfolioData.skills).map(([skill, level], index) => (
                <div key={index} className="amazon-skill-item amazon-fade-in">
                  <div className="amazon-skill-icon">
                    <i className={`fab fa-${skill.toLowerCase()}`}></i>
                  </div>
                  <div className="amazon-skill-content">
                    <h3>{skill}</h3>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="amazon-section" id="experience">
        <div className="amazon-container">
          <h2 className="amazon-section-title amazon-fade-in">Experience</h2>
          <div className="amazon-timeline">
            {portfolioData.workExperience &&
              portfolioData.workExperience.map((work, index) => (
                <div key={index} className="amazon-timeline-item amazon-fade-in">
                  <span className="amazon-timeline-date">
                    {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                  </span>
                  <h3 className="amazon-timeline-title">{work.position}</h3>
                  <h4 className="amazon-timeline-subtitle">{work.company}</h4>
                  <p>{work.description}</p>
                </div>
              ))}
          </div>
          <h2 className="amazon-section-title amazon-fade-in">Education</h2>
          <div className="amazon-timeline">
            {portfolioData.education &&
              portfolioData.education.map((edu, index) => (
                <div key={index} className="amazon-timeline-item amazon-fade-in">
                  <span className="amazon-timeline-date">
                    {edu.startDate} - {edu.currentlyStudying ? 'Present' : edu.endDate}
                  </span>
                  <h3 className="amazon-timeline-title">{edu.institution}</h3>
                  <h4 className="amazon-timeline-subtitle">
                    {edu.degree} in {edu.fieldOfStudy}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="amazon-section amazon-section-gray" id="projects">
        <div className="amazon-container">
          <h2 className="amazon-section-title amazon-fade-in">Projects</h2>
          <div className="amazon-grid">
            {portfolioData.projects &&
              portfolioData.projects.map((project, index) => (
                <div key={index} className="amazon-card amazon-fade-in">
                  {project.imageUrl && (
                    <div className="amazon-card-image">
                      <img src={project.imageUrl} alt={project.title} />
                    </div>
                  )}
                  <div className="amazon-card-content">
                    <h3 className="amazon-card-title">{project.title}</h3>
                    <p className="amazon-card-description">{project.description}</p>
                    <div className="amazon-card-techs">
                      {project.technologies &&
                        project.technologies.split(',').map((tech, i) => (
                          <span key={i} className="amazon-tech-tag">
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

      <section className="amazon-section" id="contact">
        <div className="amazon-container">
          <h2 className="amazon-section-title amazon-fade-in">Get in Touch</h2>
          <div className="amazon-contact-info amazon-fade-in">
            <div className="amazon-contact-item">
              <div className="amazon-contact-icon">
                <i className="far fa-envelope"></i>
              </div>
              <div className="amazon-contact-content">
                <h3>Email</h3>
                <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
              </div>
            </div>
            {portfolioData.phone && (
              <div className="amazon-contact-item">
                <div className="amazon-contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="amazon-contact-content">
                  <h3>Phone</h3>
                  <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                </div>
              </div>
            )}
            <div className="amazon-social-links">
              {portfolioData.social?.github && (
                <a href={portfolioData.social.github} className="amazon-social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {portfolioData.social?.linkedin && (
                <a href={portfolioData.social.linkedin} className="amazon-social-link" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="amazon-footer">
        <p>© {new Date().getFullYear()} {portfolioData.fullName}. Inspired by Amazon.</p>
      </footer>
    </div>
  );
};

export default AmazonTheme;