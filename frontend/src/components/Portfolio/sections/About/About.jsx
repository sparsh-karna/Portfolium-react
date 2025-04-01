import React from 'react';
import './About.css';

const About = ({ profileImage, aboutText }) => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="profile-image">
            <img src={profileImage} alt="Profile" loading="lazy" />
          </div>
          <div className="about-text">
            <h3>Overview</h3>
            <p>{aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;