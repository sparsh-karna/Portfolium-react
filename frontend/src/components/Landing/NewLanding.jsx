import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, Code, Database, Braces, FileCode, LucideGithub } from 'lucide-react';
import './NewLanding.css';

const NewLanding = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = ['hero', 'features', 'team', 'about'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGenerateClick = () => {
    navigate('/create');
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          <div className="logo">
            <span className="logo-text">Portfolium</span>
          </div>
          <div className="nav-links">
            <button 
              className={`nav-link ${activeSection === 'hero' ? 'active' : ''}`}
              onClick={() => scrollToSection('hero')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
              onClick={() => scrollToSection('features')}
            >
              Features
            </button>
            <button 
              className={`nav-link ${activeSection === 'team' ? 'active' : ''}`}
              onClick={() => scrollToSection('team')}
            >
              Team
            </button>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
          </div>
          <button className="cta-button" onClick={handleGenerateClick}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title">
              Create Your <span className="highlight">Professional</span> Portfolio in Minutes
            </h1>
            <p className="hero-subtitle">
              Showcase your skills, experience, and projects with a customized professional portfolio
              designed to impress potential employers and clients.
            </p>
            <div className="hero-buttons">
              <button className="landing-primary-button" onClick={handleGenerateClick}>
                Generate Portfolio <ArrowRight size={18} />
              </button>
              <button className="landing-secondary-button" onClick={() => scrollToSection('features')}>
                Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <div className="floating-element code-block">
                &lt;div class="portfolio"&gt;<br />
                &nbsp;&nbsp;&lt;h1&gt;My Skills&lt;/h1&gt;<br />
                &lt;/div&gt;
              </div>
              <div className="floating-element skills-element">
                <div className="skill-item">
                  <div className="skill-name">React</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-name">Node.js</div>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              <div className="main-screenshot"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('features')}>
          <p>Scroll down</p>
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to create an impressive portfolio</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Code size={28} />
            </div>
            <h3>No Coding Required</h3>
            <p>Our intuitive form allows you to create a professional portfolio without writing a single line of code.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Database size={28} />
            </div>
            <h3>Company Themes</h3>
            <p>Choose from a variety of company-inspired themes to make your portfolio stand out.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <Braces size={28} />
            </div>
            <h3>Customizable Sections</h3>
            <p>Add your experience, education, projects, and skills with full customization options.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FileCode size={28} />
            </div>
            <h3>Responsive Design</h3>
            <p>Your portfolio will look great on all devices, from mobile phones to desktop computers.</p>
          </div>
        </div>
        
        <div className="features-cta">
          <button className="primary-button" onClick={handleGenerateClick}>
            Create Your Portfolio <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section">
        <div className="section-header">
          <h2>Meet Our Team</h2>
          <p>The developers behind Portfolium</p>
        </div>
        
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">
              <img src="https://xsgames.co/randomusers/assets/avatars/male/67.jpg" alt="Sparsh Karna" />
            </div>
            <div className="team-info">
              <h3>Sparsh Karna</h3>
              <p className="team-role">Frontend Developer</p>
              <p className="team-id">23BDS1172</p>
            </div>
          </div>
          
          <div className="team-card">
            <div className="team-avatar">
              <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" alt="Lavanaya Malhotra" />
            </div>
            <div className="team-info">
              <h3>Lavanaya Malhotra</h3>
              <p className="team-role">UX Designer</p>
              <p className="team-id">23BDS1169</p>
            </div>
          </div>
          
          <div className="team-card">
            <div className="team-avatar">
              <img src="https://xsgames.co/randomusers/assets/avatars/female/45.jpg" alt="Stuti" />
            </div>
            <div className="team-info">
              <h3>Stuti</h3>
              <p className="team-role">Backend Developer</p>
              <p className="team-id">23BDS1167</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-content">
            <h2>About Portfolium</h2>
            <div className="about-detail">
              <h3>Course Project</h3>
              <p>This project was developed as part of the Web Development course at VIT University.</p>
            </div>
            
            <div className="about-detail">
              <h3>Academic Information</h3>
              <div className="academic-info">
                <div className="info-item">
                  <span className="info-label">Subject:</span>
                  <span className="info-value">Web Development</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Branch:</span>
                  <span className="info-value">CSE Data Science</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Year:</span>
                  <span className="info-value">2nd Year</span>
                </div>
              </div>
            </div>
            
            <div className="about-detail">
              <h3>Project Overview</h3>
              <p>Portfolium is a portfolio generator that helps students and professionals create impressive portfolios to showcase their skills and experience.</p>
            </div>
          </div>
          <div className="about-image">
            <div className="tech-stack">
              <div className="tech-item">React</div>
              <div className="tech-item">Node.js</div>
              <div className="tech-item">MongoDB</div>
              <div className="tech-item">Express</div>
              <div className="tech-item">Tailwind CSS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">Portfolium</span>
            <p>Create impressive portfolios in minutes</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <button onClick={() => scrollToSection('hero')}>Home</button>
              <button onClick={() => scrollToSection('features')}>Features</button>
              <button onClick={() => scrollToSection('team')}>Team</button>
              <button onClick={() => scrollToSection('about')}>About</button>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <LucideGithub size={16} /> GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Portfolium. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewLanding;