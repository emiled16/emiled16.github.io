import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Project Title',
      category: 'Category',
      description: 'Project description goes here. Describe what the project does and its key features.',
      tech: ['Tech1', 'Tech2', 'Tech3', 'Tech4', 'Tech5'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section className="projects section no-min-height">
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Featured Projects</h2>
          <span style={{ 
            padding: '0.4rem 0.8rem', 
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
            color: 'white', 
            borderRadius: '6px', 
            fontSize: '0.8rem', 
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Work in Progress
          </span>
        </div>
        
        <p className="projects-intro">
          A selection of projects showcasing my multidisciplinary approach to solving complex problems.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header" style={{ background: project.gradient }}>
                <span className="project-category">{project.category}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} className="project-link" aria-label="GitHub Repository">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} className="project-link" aria-label="Live Demo">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
