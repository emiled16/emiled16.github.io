import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'ML Model Deployment Platform',
      category: 'Machine Learning & DevOps',
      description: 'End-to-end platform for deploying and monitoring machine learning models in production with auto-scaling and A/B testing capabilities.',
      tech: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'TensorFlow', 'Prometheus'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-time Data Pipeline',
      category: 'Data Engineering',
      description: 'Scalable streaming data pipeline processing millions of events per second with fault tolerance and exactly-once semantics.',
      tech: ['Apache Kafka', 'Spark Streaming', 'Airflow', 'PostgreSQL', 'Redis', 'Python'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      github: '#',
      demo: '#'
    },
    {
      title: 'NLP Sentiment Analyzer',
      category: 'Data Science & ML',
      description: 'Advanced sentiment analysis system using transformer models for multi-language support and real-time social media monitoring.',
      tech: ['PyTorch', 'Transformers', 'BERT', 'Flask', 'React', 'MongoDB'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      github: '#',
      demo: '#'
    },
    {
      title: 'Financial Portfolio Optimizer',
      category: 'Finance & Data Science',
      description: 'Quantitative investment tool using modern portfolio theory and machine learning to optimize asset allocation strategies.',
      tech: ['Python', 'NumPy', 'Pandas', 'Scikit-learn', 'Plotly', 'FastAPI'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      github: '#',
      demo: '#'
    },
    {
      title: 'Cloud Infrastructure Automation',
      category: 'DevOps & Software Engineering',
      description: 'Infrastructure as Code solution for multi-cloud deployments with automated security compliance and cost optimization.',
      tech: ['Terraform', 'Ansible', 'AWS', 'GCP', 'Python', 'GitHub Actions'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      github: '#',
      demo: '#'
    },
    {
      title: 'Data Visualization Dashboard',
      category: 'Data Science & Software Engineering',
      description: 'Interactive analytics dashboard for exploring complex datasets with custom visualizations and real-time updates.',
      tech: ['React', 'D3.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'WebSocket'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
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

        <div className="projects-note">
          <p>
            💡 These are sample projects. Replace the links with your actual GitHub repositories 
            and live demos to showcase your real work!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
