import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = ({ skills }) => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const progressBars = document.querySelectorAll('.progress');
          progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0%';
            setTimeout(() => {
              bar.style.width = `${width}%`;
            }, 100);
          });
        }
      },
      { threshold: 0.5 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="skills section-padding" id="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-item">
              <span>React</span>
              <div className="progress-bar">
                <div className="progress" data-width={skills.react}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>JavaScript</span>
              <div className="progress-bar">
                <div className="progress" data-width={skills.javascript}></div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-item">
              <span>Node.js</span>
              <div className="progress-bar">
                <div className="progress" data-width={skills.nodejs}></div>
              </div>
            </div>
            <div className="skill-item">
              <span>Python</span>
              <div className="progress-bar">
                <div className="progress" data-width={skills.python}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;