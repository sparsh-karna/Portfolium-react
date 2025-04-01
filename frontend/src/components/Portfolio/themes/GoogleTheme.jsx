import React, { useEffect } from 'react';
import './GoogleTheme.css';

const GoogleTheme = ({ portfolioData }) => {
  useEffect(() => {
    // Initialize animation for elements
    const animateElements = document.querySelectorAll('.google-animate-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
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
    <div className="google-portfolio">
      {/* Google Search Bar Navigation */}
      <header className="google-header">
        <div className="google-search-container">
          <div className="google-logo">
            <span style={{ color: '#4285F4' }}>P</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>r</span>
            <span style={{ color: '#4285F4' }}>t</span>
            <span style={{ color: '#34A853' }}>f</span>
            <span style={{ color: '#EA4335' }}>o</span>
            <span style={{ color: '#FBBC05' }}>l</span>
            <span style={{ color: '#4285F4' }}>i</span>
            <span style={{ color: '#34A853' }}>o</span>
          </div>
          <div className="google-search-bar">
            <i className="fas fa-search"></i>
            <span>{portfolioData.fullName}</span>
          </div>
          <nav className="google-nav">
            <ul>
              <li className="active"><i className="fas fa-user-alt"></i> Profile</li>
              <li><i className="fas fa-code"></i> Skills</li>
              <li><i className="fas fa-briefcase"></i> Work</li>
              <li><i className="fas fa-graduation-cap"></i> Education</li>
              <li><i className="fas fa-address-card"></i> Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="google-main">
        {/* Profile Section */}
        <section className="google-section google-profile-section">
          <div className="google-section-container">
            <div className="google-profile-header">
              <div className="google-profile-image google-animate-in">
                {portfolioData.profileImage && (
                  <img src={portfolioData.profileImage} alt={portfolioData.fullName} />
                )}
              </div>
              <div className="google-profile-info google-animate-in">
                <h1>{portfolioData.fullName}</h1>
                <h2>{portfolioData.title}</h2>
                {portfolioData.location && <p><i className="fas fa-map-marker-alt"></i> {portfolioData.location}</p>}
              </div>
            </div>
            
            <div className="google-card google-animate-in">
              <div className="google-card-header">
                <h3><i className="fas fa-info-circle google-blue"></i> About</h3>
              </div>
              <div className="google-card-content">
                <p>{portfolioData.bio}</p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="google-card google-animate-in">
              <div className="google-card-header">
                <h3><i className="fas fa-envelope google-red"></i> Contact Information</h3>
              </div>
              <div className="google-card-content">
                <div className="google-contact-grid">
                  {portfolioData.email && (
                    <div className="google-contact-item">
                      <div className="google-contact-icon google-blue">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div>
                        <h4>Email</h4>
                        <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a>
                      </div>
                    </div>
                  )}
                  
                  {portfolioData.phone && (
                    <div className="google-contact-item">
                      <div className="google-contact-icon google-green">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div>
                        <h4>Phone</h4>
                        <a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a>
                      </div>
                    </div>
                  )}
                  
                  {portfolioData.website && (
                    <div className="google-contact-item">
                      <div className="google-contact-icon google-yellow">
                        <i className="fas fa-globe"></i>
                      </div>
                      <div>
                        <h4>Website</h4>
                        <a href={portfolioData.website} target="_blank" rel="noopener noreferrer">{portfolioData.website}</a>
                      </div>
                    </div>
                  )}
                  
                  {portfolioData.social && portfolioData.social.linkedin && (
                    <div className="google-contact-item">
                      <div className="google-contact-icon google-blue">
                        <i className="fab fa-linkedin-in"></i>
                      </div>
                      <div>
                        <h4>LinkedIn</h4>
                        <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                      </div>
                    </div>
                  )}
                  
                  {portfolioData.social && portfolioData.social.github && (
                    <div className="google-contact-item">
                      <div className="google-contact-icon" style={{ backgroundColor: '#333' }}>
                        <i className="fab fa-github"></i>
                      </div>
                      <div>
                        <h4>GitHub</h4>
                        <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                      </div>
                    </div>
                  )}
                  
                  {portfolioData.social && portfolioData.social.twitter && (
                    <div className="google-contact-item">
                      <div className="google-contact-icon" style={{ backgroundColor: '#1DA1F2' }}>
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div>
                        <h4>Twitter</h4>
                        <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer">Twitter Profile</a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="google-section google-skills-section">
          <div className="google-section-container">
            <div className="google-card google-animate-in">
              <div className="google-card-header">
                <h3><i className="fas fa-code google-green"></i> Skills</h3>
              </div>
              <div className="google-card-content">
                <div className="google-skills-grid">
                  {portfolioData.skills && Object.entries(portfolioData.skills).map(([skill, level], index) => (
                    <div key={index} className="google-skill-item">
                      <div className="google-skill-info">
                        <h4>{skill}</h4>
                        <span>{level}%</span>
                      </div>
                      <div className="google-skill-bar">
                        <div className="google-skill-progress" style={{ width: `${level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="google-section google-experience-section">
          <div className="google-section-container">
            <div className="google-card google-animate-in">
              <div className="google-card-header">
                <h3><i className="fas fa-briefcase google-yellow"></i> Work Experience</h3>
              </div>
              <div className="google-card-content">
                {portfolioData.workExperience && portfolioData.workExperience.length > 0 ? (
                  <div className="google-timeline">
                    {portfolioData.workExperience.map((work, index) => (
                      <div key={index} className="google-timeline-item">
                        <div className="google-timeline-marker"></div>
                        <div className="google-timeline-content">
                          <h4>{work.position}</h4>
                          <h5>{work.company}</h5>
                          <p className="google-timeline-period">
                            {work.startDate} - {work.currentlyWorking ? 'Present' : work.endDate}
                          </p>
                          <p className="google-timeline-description">{work.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="google-no-content">No work experience listed.</p>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="google-section google-education-section">
          <div className="google-section-container">
            <div className="google-card google-animate-in">
              <div className="google-card-header">
                <h3><i className="fas fa-graduation-cap google-blue"></i> Education</h3>
              </div>
              <div className="google-card-content">
                {portfolioData.education && portfolioData.education.length > 0 ? (
                  <div className="google-timeline">
                    {portfolioData.education.map((edu, index) => (
                      <div key={index} className="google-timeline-item">
                        <div className="google-timeline-marker"></div>
                        <div className="google-timeline-content">
                          <h4>{edu.institution}</h4>
                          <h5>{edu.degree} in {edu.fieldOfStudy}</h5>
                          <p className="google-timeline-period">
                            {edu.startDate} - {edu.currentlyStudying ? 'Present' : edu.endDate}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="google-no-content">No education listed.</p>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="google-section google-projects-section">
          <div className="google-section-container">
            <div className="google-card google-animate-in">
              <div className="google-card-header">
                <h3><i className="fas fa-project-diagram google-red"></i> Projects</h3>
              </div>
              <div className="google-card-content">
                {portfolioData.projects && portfolioData.projects.length > 0 ? (
                  <div className="google-projects-grid">
                    {portfolioData.projects.map((project, index) => (
                      <div key={index} className="google-project-card">
                        {project.imageUrl && (
                          <div className="google-project-image">
                            <img src={project.imageUrl} alt={project.title} />
                          </div>
                        )}
                        <div className="google-project-content">
                          <h4>{project.title}</h4>
                          <p>{project.description}</p>
                          <div className="google-project-technologies">
                            {project.technologies && project.technologies.split(',').map((tech, i) => (
                              <span key={i} className="google-tech-chip">{tech.trim()}</span>
                            ))}
                          </div>
                          {project.link && (
                            <a 
                              href={project.link} 
                              className="google-button" 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              View Project
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="google-no-content">No projects listed.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="google-footer">
        <div className="google-footer-container">
          <div className="google-footer-info">
            <p>© {new Date().getFullYear()} {portfolioData.fullName}</p>
            <p>Design inspired by Google</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleTheme;