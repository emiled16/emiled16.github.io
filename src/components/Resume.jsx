import React from 'react';
import { FaDownload, FaBriefcase, FaGraduationCap, FaAward, FaTools, FaLightbulb } from 'react-icons/fa';
import './Resume.css';

const Resume = () => {
  const experience = [
    {
      title: 'Machine Learning Engineer/Data Scientist',
      company: 'Maxa AI',
      period: 'Jul. 2022 - Present',
      description: 'Designing and deploying end-to-end ML systems for enterprise clients.',
      achievements: [
        'Designed and deployed forecasting and ML systems as Snowflake-native applications generating ~$500M in daily operational savings for a major bank and $200K/month in cost reductions',
        'Built an internal data science SDK and Snowflake-native ML platform with fully automated CI/CD pipelines, reducing model development cycles from months to days',
        'Developed scalable DBT based ETL pipelines on Snowflake, integrating data from 10+ systems of record',
        'Led adoption of MLOps best practices across the data science team, standardizing tooling and ensuring reliable production deployments',
        'Prototyped and shipped internal ML tools and MVPs, including AI agents (QA testing, data analysis), LLM fine-tuning pipelines on GCP, and automated data discovery tools',
        'Engineered a scalable, fault-tolerant, stateful MCP server deployed on GCP for reproducible AI-agent workflows'
      ]
    },
    {
      title: 'Machine Learning Intern',
      company: 'Research Institute of Hydro-Québec',
      period: 'May 2021 - Apr. 2022',
      description: 'Developed advanced forecasting systems for electricity consumption.',
      achievements: [
        'Built distributed Spark pipelines processing multi-year, high-volume electricity consumption data on cloud cluster',
        'Implemented and trained state-of-the-art deep learning models for time series forecasting using PyTorch',
        'Designed a reinforcement learning framework to dynamically select forecasting models, improving accuracy by 6% over baseline'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'McGill University - Department of Biomedical Engineering',
      period: 'Jan. 2020 - Apr. 2021',
      description: 'Conducted large-scale modeling on diverse datasets for neuroscience research.',
      achievements: [
        'Conducted large-scale modeling on datasets ranging from genomic cohorts (850K samples) to behavioral data',
        'Contributed to peer-reviewed publications through advanced statistical and machine learning analyses',
        'Managed team\'s data and modeling infrastructure on Google Cloud Platform (GCP)'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master in Machine Learning',
      school: 'Université de Montréal & Montreal Institute of Learning Algorithms',
      period: 'Graduated May 2022',
      details: 'GPA: 4.22/4.3 - Received Mitacs scholarship award'
    },
    {
      degree: 'Bachelor in Mechanical Engineering',
      school: 'Polytechnique Montréal',
      period: 'Graduated Dec. 2019',
      details: 'GPA: 3.98/4 - Received three scholarship awards'
    }
  ];

  const skills = {
    'ML & Data Science': ['Python', 'PyTorch', 'TensorFlow', 'SciKit-Learn', 'PyMC3', 'Pandas', 'NumPy', 'MLflow'],
    'Data Engineering': ['Spark', 'Snowflake', 'Snowpark', 'DBT', 'Airflow', 'SQL'],
    'Infrastructure & Cloud': ['Kubernetes', 'Docker', 'Helm', 'Terraform', 'Ansible', 'AWS', 'GCP'],
    'Backend & Tools': ['FastAPI', 'Celery', 'Redis', 'MongoDB', 'Postgres', 'Langchain', 'FastMCP', 'Bash']
  };

  const publications = [
    '"Pattern learning reveals brain asymmetry to be linked to socioeconomic status." Cerebral Cortex Communications (in press)',
    '"The default network of the human brain is associated with perceived social isolation." Nature Communications (2020)',
    '"Measuring the dynamic engagement with a system of equations—Theory demonstration and initial analysis." IEEE (2019)'
  ];

  const projects = [
    'Implemented a webscraper SDK orchestrated using Airflow Helm charts on a Kubernetes cluster hosted on a home lab VMs managed by Terraform and set up by Ansible playbooks',
    'Proposed and implemented CoopNet, a deep learning speech enhancement model, integrated into the SpeechBrain framework'
  ];

  return (
    <section className="resume section no-min-height">
      <div className="container">
        <div className="resume-header">
          <h2 className="section-title">Resume</h2>
          <a 
            href="/resume.pdf" 
            download="Emile_Dimas_Resume.pdf"
            className="download-btn"
          >
            <FaDownload /> Download PDF
          </a>
        </div>

        {/* Summary Section */}
        <div className="resume-summary">
          <p>
            Machine Learning Engineer with 5+ years of experience designing, implementing, and deploying 
            end-to-end production ML systems. Experienced across the full pipeline ranging from data engineering 
            and modeling to system design, I've consistently turned ideas into reliable solutions, including 
            forecasting systems, ML tools and AI agents that drove major customer acquisitions and increased 
            team productivity. Collaborative and multidisciplinary, I am committed to delivering impactful, 
            business-focused results.
          </p>
        </div>

        {/* Experience Section */}
        <div className="resume-section">
          <div className="section-header">
            <FaBriefcase className="section-icon" />
            <h3>Professional Experience</h3>
          </div>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="job-header">
                    <div>
                      <h4 className="job-title">{job.title}</h4>
                      <p className="job-company">{job.company}</p>
                    </div>
                    <span className="job-period">{job.period}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <ul className="achievements">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section">
          <div className="section-header">
            <FaGraduationCap className="section-icon" />
            <h3>Education</h3>
          </div>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <h4 className="degree">{edu.degree}</h4>
                <p className="school">{edu.school}</p>
                <p className="edu-period">{edu.period}</p>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <div className="section-header">
            <FaTools className="section-icon" />
            <h3>Technical Skills</h3>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="skill-group">
                <h4 className="skill-category">{category}</h4>
                <div className="skill-tags">
                  {items.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Projects Section */}
        <div className="resume-section">
          <div className="section-header">
            <FaLightbulb className="section-icon" />
            <h3>Technical Projects</h3>
          </div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <span className="project-bullet">▹</span>
                <p>{project}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="resume-section">
          <div className="section-header">
            <FaAward className="section-icon" />
            <h3>Publications</h3>
          </div>
          <div className="publications">
            {publications.map((pub, index) => (
              <div key={index} className="publication-item">
                <FaAward className="pub-icon" />
                <span>{pub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="resume-section">
          <div className="additional-info">
            <div className="info-card">
              <h4>🌍 Languages</h4>
              <p>French, English, Arabic, Russian (learning)</p>
            </div>
            <div className="info-card">
              <h4>📧 Contact</h4>
              <p>emiled16@gmail.com</p>
              <p>+1 (514) 942-0806</p>
            </div>
            <div className="info-card">
              <h4>📚 Interests</h4>
              <p>Love to read a Dostoevsky book in the sun after a strenuous hike.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
