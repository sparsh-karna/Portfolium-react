import React, { useState, useEffect } from 'react';
import './PortfolioForm.css';

const TABS = [
  { id: 'personal', label: 'Personal Info' },
  { id: 'professional', label: 'Professional' },
  { id: 'experience', label: 'Experience' },
  { id: 'additional', label: 'Additional' },
  { id: 'themes', label: 'Theme & Layout' }
];

const PortfolioForm = ({ onSubmit }) => {
  const [activeTab, setActiveTab] = useState('personal');
  const [formProgress, setFormProgress] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Info
    profileImage: '',
    fullName: '',
    title: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    languages: '',
    
    // Professional
    website: '',
    linkedin: '',
    github: '',
    twitter: '',
    skills: '',
    interests: '',
    
    // Experience
    workExperience: [],
    education: [],
    projects: [],
    
    // Additional Information
    achievements: '',
    certifications: '',
    
    // Theme
    selectedTheme: 'netflix' // Default theme
  });

  // Companies for theme selection
  const companies = [
    { id: 'netflix', name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' },
    { id: 'google', name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' },
    { id: 'apple', name: 'Apple', logo: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg' },
    { id: 'microsoft', name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
    { id: 'amazon', name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { id: 'meta', name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
    { id: 'twitter', name: 'Twitter', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg' },
    { id: 'spotify', name: 'Spotify', logo: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png' },
  ];

  // Update progress bar when tab changes
  useEffect(() => {
    const currentTabIndex = TABS.findIndex(tab => tab.id === activeTab);
    const progressPercentage = ((currentTabIndex) / (TABS.length - 1)) * 100;
    setFormProgress(progressPercentage);
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleThemeSelection = (themeId) => {
    setFormData({
      ...formData,
      selectedTheme: themeId
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      workExperience: [
        ...formData.workExperience,
        { id: Date.now(), company: '', position: '', startDate: '', endDate: '', currentlyWorking: false, description: '' }
      ]
    });
  };

  const updateExperience = (id, field, value) => {
    setFormData({
      ...formData,
      workExperience: formData.workExperience.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    });
  };

  const removeExperience = (id) => {
    setFormData({
      ...formData,
      workExperience: formData.workExperience.filter(exp => exp.id !== id)
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { id: Date.now(), institution: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', currentlyStudying: false }
      ]
    });
  };

  const updateEducation = (id, field, value) => {
    setFormData({
      ...formData,
      education: formData.education.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    });
  };

  const removeEducation = (id) => {
    setFormData({
      ...formData,
      education: formData.education.filter(edu => edu.id !== id)
    });
  };

  const addProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        { id: Date.now(), title: '', link: '', imageUrl: '', technologies: '', description: '' }
      ]
    });
  };

  const updateProject = (id, field, value) => {
    setFormData({
      ...formData,
      projects: formData.projects.map(proj => 
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    });
  };

  const removeProject = (id) => {
    setFormData({
      ...formData,
      projects: formData.projects.filter(proj => proj.id !== id)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Process skills into format expected by Portfolio component
    const skillsArray = formData.skills.split(',').map(skill => skill.trim());
    const skillsObject = {};
    
    // Assign a random proficiency level to each skill (between 75-95)
    skillsArray.forEach(skill => {
      skillsObject[skill] = Math.floor(Math.random() * 20) + 75;
    });
    
    // Prepare data structure with all form information
    const portfolioData = {
      // Personal info
      fullName: formData.fullName,
      title: formData.title,
      about: formData.bio,
      profileImage: formData.profileImage,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      languages: formData.languages.split(',').map(lang => lang.trim()),
      
      // Professional info
      skills: skillsObject,
      interests: formData.interests.split(',').map(interest => interest.trim()),
      
      // Social links
      social: {
        website: formData.website,
        github: formData.github,
        linkedin: formData.linkedin,
        twitter: formData.twitter
      },
      
      // Experience sections
      workExperience: formData.workExperience,
      education: formData.education,
      projects: formData.projects,
      
      // Additional info
      achievements: formData.achievements,
      certifications: formData.certifications,
      
      // Theme
      theme: formData.selectedTheme
    };
    
    // Pass the complete data to parent component
    onSubmit(portfolioData);
  };

  const navigateTab = (direction) => {
    const currentIndex = TABS.findIndex(tab => tab.id === activeTab);
    if (direction === 'next' && currentIndex < TABS.length - 1) {
      setActiveTab(TABS[currentIndex + 1].id);
    } else if (direction === 'prev' && currentIndex > 0) {
      setActiveTab(TABS[currentIndex - 1].id);
    }
  };

  return (
    <div className="initial-form-screen">
      {/* Progress Bar */}
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${formProgress}%` }}></div>
      </div>
      
      {/* Form Header with Tabs */}
      <div className="form-header">
        <div className="tabs-container">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="form-container">
        <h1>Create Your Portfolio</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Personal Info Section */}
          <div className={`form-section ${activeTab === 'personal' ? 'active' : ''}`}>
            <div className="form-group">
              <input
                type="url"
                id="profileImage"
                name="profileImage"
                value={formData.profileImage}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="profileImage">Profile Image URL</label>
              <span className="helper-text">Link to your profile picture (optional)</span>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="fullName">Full Name</label>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="title">Professional Title</label>
            </div>
            
            <div className="form-group">
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="bio">Bio</label>
              <span className="helper-text">Tell us about yourself</span>
            </div>
            
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="phone">Phone (Optional)</label>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="location">Location (Optional)</label>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                id="languages"
                name="languages"
                value={formData.languages}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="languages">Languages (Optional)</label>
              <span className="helper-text">Languages you speak, separated by commas</span>
            </div>
          </div>
          
          {/* Professional Section */}
          <div className={`form-section ${activeTab === 'professional' ? 'active' : ''}`}>
            <h3 style={{marginBottom: "30px"}}>Social Links</h3>
            <div className="form-group">
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="website">Website/Portfolio URL</label>
            </div>
            
            <div className="form-group">
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="linkedin">LinkedIn</label>
            </div>
            
            <div className="form-group">
              <input
                type="url"
                id="github"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="github">GitHub</label>
            </div>
            
            <div className="form-group">
              <input
                type="url"
                id="twitter"
                name="twitter"
                value={formData.twitter}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="twitter">Twitter</label>
            </div>
            
            <h3 style={{marginBottom: "30px"}}>Skills & Interests</h3>
            <div className="form-group">
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="skills">Skills</label>
              <span className="helper-text">List your skills, separated by commas</span>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label htmlFor="interests">Interests</label>
              <span className="helper-text">List your interests, separated by commas</span>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className={`form-section ${activeTab === 'experience' ? 'active' : ''}`}>
            <h3>Work Experience</h3>
            <button 
              type="button" 
              className="add-item-button" 
              onClick={addExperience}
            >
              <i className="fas fa-plus"></i> Add Experience
            </button>
            
            {formData.workExperience.map((exp) => (
              <div key={exp.id} className="item-card">
                <button 
                  type="button" 
                  className="remove-button" 
                  onClick={() => removeExperience(exp.id)}
                >
                  &times;
                </button>
                
                <div className="form-group">
                  <input
                    type="text"
                    id={`company-${exp.id}`}
                    value={exp.company}
                    onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`company-${exp.id}`}>Company</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    id={`position-${exp.id}`}
                    value={exp.position}
                    onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`position-${exp.id}`}>Position</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="date"
                    id={`startDate-${exp.id}`}
                    value={exp.startDate}
                    onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`startDate-${exp.id}`}>Start Date</label>
                </div>
                
                {!exp.currentlyWorking && (
                  <div className="form-group">
                    <input
                      type="date"
                      id={`endDate-${exp.id}`}
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                      placeholder=" "
                      required={!exp.currentlyWorking}
                    />
                    <label htmlFor={`endDate-${exp.id}`}>End Date</label>
                  </div>
                )}
                
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id={`currentlyWorking-${exp.id}`}
                    checked={exp.currentlyWorking}
                    onChange={(e) => updateExperience(exp.id, 'currentlyWorking', e.target.checked)}
                  />
                  <label htmlFor={`currentlyWorking-${exp.id}`}>I currently work here</label>
                </div>
                
                <div className="form-group">
                  <textarea
                    id={`description-${exp.id}`}
                    value={exp.description}
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor={`description-${exp.id}`}>Description</label>
                  <span className="helper-text">Describe your responsibilities and achievements</span>
                </div>
              </div>
            ))}
            
            <h3>Education</h3>
            <button 
              type="button" 
              className="add-item-button" 
              onClick={addEducation}
            >
              <i className="fas fa-plus"></i> Add Education
            </button>
            
            {formData.education.map((edu) => (
              <div key={edu.id} className="item-card">
                <button 
                  type="button" 
                  className="remove-button" 
                  onClick={() => removeEducation(edu.id)}
                >
                  &times;
                </button>
                
                <div className="form-group">
                  <input
                    type="text"
                    id={`institution-${edu.id}`}
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`institution-${edu.id}`}>Institution</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    id={`degree-${edu.id}`}
                    value={edu.degree}
                    onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`degree-${edu.id}`}>Degree</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    id={`fieldOfStudy-${edu.id}`}
                    value={edu.fieldOfStudy}
                    onChange={(e) => updateEducation(edu.id, 'fieldOfStudy', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`fieldOfStudy-${edu.id}`}>Field of Study</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="date"
                    id={`eduStartDate-${edu.id}`}
                    value={edu.startDate}
                    onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`eduStartDate-${edu.id}`}>Start Date</label>
                </div>
                
                {!edu.currentlyStudying && (
                  <div className="form-group">
                    <input
                      type="date"
                      id={`eduEndDate-${edu.id}`}
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                      placeholder=" "
                      required={!edu.currentlyStudying}
                    />
                    <label htmlFor={`eduEndDate-${edu.id}`}>End Date</label>
                  </div>
                )}
                
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id={`currentlyStudying-${edu.id}`}
                    checked={edu.currentlyStudying}
                    onChange={(e) => updateEducation(edu.id, 'currentlyStudying', e.target.checked)}
                  />
                  <label htmlFor={`currentlyStudying-${edu.id}`}>I am currently studying here</label>
                </div>
              </div>
            ))}
            
            <h3>Projects</h3>
            <button 
              type="button" 
              className="add-item-button" 
              onClick={addProject}
            >
              <i className="fas fa-plus"></i> Add Project
            </button>
            
            {formData.projects.map((project) => (
              <div key={project.id} className="item-card">
                <button 
                  type="button" 
                  className="remove-button" 
                  onClick={() => removeProject(project.id)}
                >
                  &times;
                </button>
                
                <div className="form-group">
                  <input
                    type="text"
                    id={`projectTitle-${project.id}`}
                    value={project.title}
                    onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`projectTitle-${project.id}`}>Project Title</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="url"
                    id={`projectLink-${project.id}`}
                    value={project.link}
                    onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                    placeholder=" "
                  />
                  <label htmlFor={`projectLink-${project.id}`}>Project Link (Optional)</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="url"
                    id={`projectImageUrl-${project.id}`}
                    value={project.imageUrl}
                    onChange={(e) => updateProject(project.id, 'imageUrl', e.target.value)}
                    placeholder=" "
                  />
                  <label htmlFor={`projectImageUrl-${project.id}`}>Project Image URL (Optional)</label>
                </div>
                
                <div className="form-group">
                  <input
                    type="text"
                    id={`technologies-${project.id}`}
                    value={project.technologies}
                    onChange={(e) => updateProject(project.id, 'technologies', e.target.value)}
                    placeholder=" "
                    required
                  />
                  <label htmlFor={`technologies-${project.id}`}>Technologies Used</label>
                  <span className="helper-text">React, Node.js, MongoDB, etc.</span>
                </div>
                
                <div className="form-group">
                  <textarea
                    id={`projectDescription-${project.id}`}
                    value={project.description}
                    onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                    placeholder=" "
                    required
                  ></textarea>
                  <label htmlFor={`projectDescription-${project.id}`}>Project Description</label>
                  <span className="helper-text">Describe your project, its purpose, and your role</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Information Section */}
          <div className={`form-section ${activeTab === 'additional' ? 'active' : ''}`}>
            <h3 style={{marginBottom: "30px"}}>Additional Information</h3>
            <div className="form-group">
              <textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleInputChange}
                placeholder=" "
              ></textarea>
              <label htmlFor="achievements">Achievements</label>
              <span className="helper-text">Awards, recognitions, or other notable accomplishments</span>
            </div>
            
            <div className="form-group">
              <textarea
                id="certifications"
                name="certifications"
                value={formData.certifications}
                onChange={handleInputChange}
                placeholder=" "
              ></textarea>
              <label htmlFor="certifications">Certifications</label>
              <span className="helper-text">Professional certifications, courses, or training</span>
            </div>
          </div>
          
          {/* Theme & Layout Section */}
          <div className={`form-section ${activeTab === 'themes' ? 'active' : ''}`}>
            <h3>Choose a Theme</h3>
            <p>Select a company-inspired theme for your portfolio. Each theme comes with custom animations and styling.</p>
            
            <div className="theme-grid">
              {companies.map(company => (
                <div 
                  key={company.id}
                  className={`theme-card ${formData.selectedTheme === company.id ? 'selected' : ''}`}
                  onClick={() => handleThemeSelection(company.id)}
                >
                  <div className="theme-card-image">
                    <img src={company.logo} alt={`${company.name} logo`} />
                  </div>
                  <div className="theme-card-content">
                    <h3>{company.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="form-navigation">
            {activeTab !== TABS[0].id && (
              <button
                type="button"
                className="nav-button prev"
                onClick={() => navigateTab('prev')}
              >
                Previous
              </button>
            )}
            
            {activeTab !== TABS[TABS.length - 1].id ? (
              <button
                type="button"
                className="nav-button next"
                onClick={() => navigateTab('next')}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="nav-button submit-button"
              >
                Generate Portfolio
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PortfolioForm;