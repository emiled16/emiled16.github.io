import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="hero-container">
        {/* Left Side - Image */}
        <div className="hero-image-side">
          <img src="/images/profile_pic.jpeg" alt="Emile Dimas" className="hero-profile-image" />
        </div>

        {/* Right Side - Content */}
        <div className="hero-content-side">
          <h1 className="hero-title">
            <span className="gradient-text">Emile Dimas</span>
          </h1>
          <h2 className="hero-subtitle">
            Machine Learning Engineer & Polyvalent Technologist
          </h2>
          
          <p className="hero-description">
            5+ years building end-to-end ML systems spanning Machine Learning, Data Science, 
            Software Engineering, Data Engineering, and DevOps. When I'm not deploying production 
            models, you'll find me exploring <strong>philosophy</strong>, <strong>finance</strong>, 
            and <strong>geopolitics</strong> — or reading Dostoevsky after a long hike.
          </p>
          
          <div className="hero-cta">
            <Link to="/resume" className="btn btn-primary">View Resume</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/emiled16" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/emile-dimas" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:emiled16@gmail.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
