import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">
            <span className="wave">👋</span> Hi, I'm
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">Emile Dimas</span>
          </h1>
          <h2 className="hero-subtitle">
            Polyvalent Technologist & Problem Solver
          </h2>
          <p className="hero-description">
            Bridging the worlds of Machine Learning, Data Science, Software Engineering, 
            Data Engineering, and DevOps to build innovative solutions.
          </p>
          
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/emiled16" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/emile-dimas" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin />
            </a>
            <a href="mailto:emile.dimas@example.com" className="social-link">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">ML</div>
          <div className="floating-card card-2">Data</div>
          <div className="floating-card card-3">DevOps</div>
          <div className="floating-card card-4">Software</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
