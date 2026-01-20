import React from 'react';
import { FaBrain, FaDatabase, FaCode, FaServer, FaDocker } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Machine Learning',
      icon: <FaBrain />,
      color: '#667eea',
      skills: ['Deep Learning', 'NLP', 'Computer Vision', 'MLOps', 'Model Deployment', 'PyTorch', 'TensorFlow', 'Scikit-learn']
    },
    {
      title: 'Data Science',
      icon: <FaDatabase />,
      color: '#f093fb',
      skills: ['Statistical Analysis', 'Data Visualization', 'Predictive Modeling', 'A/B Testing', 'Pandas', 'NumPy', 'Jupyter', 'R']
    },
    {
      title: 'Software Engineering',
      icon: <FaCode />,
      color: '#4facfe',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'React', 'Node.js', 'System Design', 'API Development']
    },
    {
      title: 'Data Engineering',
      icon: <FaServer />,
      color: '#43e97b',
      skills: ['ETL Pipelines', 'Apache Spark', 'Airflow', 'SQL', 'NoSQL', 'Data Warehousing', 'Stream Processing', 'Kafka']
    },
    {
      title: 'DevOps',
      icon: <FaDocker />,
      color: '#f5576c',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'GCP', 'Terraform', 'Monitoring', 'GitOps']
    }
  ];

  return (
    <section className="skills section no-min-height">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category" style={{ '--category-color': category.color }}>
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
