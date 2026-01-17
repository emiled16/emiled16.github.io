import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a <strong>polyvalent technologist</strong> who thrives at the intersection 
              of multiple disciplines. My journey through technology has equipped me with a 
              unique perspective that allows me to tackle complex problems from various angles.
            </p>
            
            <p className="about-detail">
              With expertise spanning <strong>Machine Learning</strong>, <strong>Data Science</strong>, 
              <strong>Software Engineering</strong>, <strong>Data Engineering</strong>, and <strong>DevOps</strong>, 
              I bring a holistic approach to building scalable, intelligent systems that drive 
              real-world impact.
            </p>

            <p className="about-philosophy">
              Beyond the technical realm, I'm deeply curious about <strong>philosophy</strong>, 
              <strong>finance</strong>, and <strong>geopolitics</strong> — areas that inform 
              my understanding of the broader context in which technology operates.
            </p>

            <p className="about-lifestyle">
              When I'm not coding or exploring data, you'll find me reading, enjoying the 
              outdoors, or working on personal projects that push the boundaries of what's possible.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>Mission-Driven</h3>
              <p>Focused on building solutions that create meaningful impact</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🔄</div>
              <h3>Versatile</h3>
              <p>Comfortable across the entire technology stack</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>Innovation-Focused</h3>
              <p>Constantly exploring new technologies and methodologies</p>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">🌍</div>
              <h3>Holistic Thinker</h3>
              <p>Connecting technology with broader societal contexts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
