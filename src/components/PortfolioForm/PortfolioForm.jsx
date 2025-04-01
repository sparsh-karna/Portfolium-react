import React, { useState } from 'react';
import './PortfolioForm.css';

const PortfolioForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    about: '',
    profileImage: '',
    skills: {
      react: 0,
      javascript: 0,
      nodejs: 0,
      python: 0
    },
    social: {
      github: '',
      linkedin: '',
      twitter: ''
    }
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    if (['reactSkill', 'jsSkill', 'nodeSkill', 'pythonSkill'].includes(id)) {
      const skillName = id === 'reactSkill' ? 'react' : 
                        id === 'jsSkill' ? 'javascript' :
                        id === 'nodeSkill' ? 'nodejs' : 'python';
      
      setFormData({
        ...formData,
        skills: {
          ...formData.skills,
          [skillName]: value
        }
      });
    } else if (['github', 'linkedin', 'twitter'].includes(id)) {
      setFormData({
        ...formData,
        social: {
          ...formData.social,
          [id]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="initial-form-screen">
      <div className="form-container">
        <h1>Create Your Portfolio</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              id="fullName" 
              value={formData.fullName}
              onChange={handleChange}
              required 
            />
            <label htmlFor="fullName">Full Name</label>
          </div>
          
          <div className="form-group">
            <input 
              type="text" 
              id="title" 
              value={formData.title}
              onChange={handleChange}
              required 
            />
            <label htmlFor="title">Professional Title</label>
          </div>
          
          <div className="form-group">
            <textarea 
              id="about" 
              value={formData.about}
              onChange={handleChange}
              required
            ></textarea>
            <label htmlFor="about">About You</label>
          </div>
          
          <div className="form-group">
            <input 
              type="url" 
              id="profileImage" 
              value={formData.profileImage}
              onChange={handleChange}
              required 
            />
            <label htmlFor="profileImage">Profile Image URL</label>
          </div>
          
          <div className="skills-input">
            <h3>Skills (Rate from 0-100)</h3>
            <div className="form-group">
              <input 
                type="number" 
                id="reactSkill" 
                min="0" 
                max="100" 
                value={formData.skills.react}
                onChange={handleChange}
                required 
              />
              <label htmlFor="reactSkill">React</label>
            </div>
            
            <div className="form-group">
              <input 
                type="number" 
                id="jsSkill" 
                min="0" 
                max="100" 
                value={formData.skills.javascript}
                onChange={handleChange}
                required 
              />
              <label htmlFor="jsSkill">JavaScript</label>
            </div>
            
            <div className="form-group">
              <input 
                type="number" 
                id="nodeSkill" 
                min="0" 
                max="100" 
                value={formData.skills.nodejs}
                onChange={handleChange}
                required 
              />
              <label htmlFor="nodeSkill">Node.js</label>
            </div>
            
            <div className="form-group">
              <input 
                type="number" 
                id="pythonSkill" 
                min="0" 
                max="100" 
                value={formData.skills.python}
                onChange={handleChange}
                required 
              />
              <label htmlFor="pythonSkill">Python</label>
            </div>
          </div>
          
          <div className="social-input">
            <h3>Social Links</h3>
            <div className="form-group">
              <input 
                type="url" 
                id="github" 
                value={formData.social.github}
                onChange={handleChange}
                required 
              />
              <label htmlFor="github">GitHub URL</label>
            </div>
            
            <div className="form-group">
              <input 
                type="url" 
                id="linkedin" 
                value={formData.social.linkedin}
                onChange={handleChange}
                required 
              />
              <label htmlFor="linkedin">LinkedIn URL</label>
            </div>
            
            <div className="form-group">
              <input 
                type="url" 
                id="twitter" 
                value={formData.social.twitter}
                onChange={handleChange}
                required 
              />
              <label htmlFor="twitter">Twitter URL</label>
            </div>
          </div>
          
          <button type="submit" className="netflix-button">Create Portfolio</button>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;