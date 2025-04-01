import React from 'react';
import './Contact.css';

const Contact = ({ socialLinks }) => {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-links">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa fa-github"></i>
            <span>GitHub</span>
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
            <i className="fa fa-twitter"></i>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;