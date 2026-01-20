import React from 'react';
import { FaBookOpen, FaChartLine, FaGlobeAmericas } from 'react-icons/fa';
import './Interests.css';

const Interests = () => {
  const interests = [
    {
      title: 'Philosophy',
      icon: <FaBookOpen />,
      color: '#667eea',
      description: 'Exploring fundamental questions about existence, knowledge, values, reason, mind, and ethics. Fascinated by epistemology and the nature of understanding.',
      topics: ['Epistemology', 'Ethics', 'Metaphysics', 'Logic', 'Philosophy of Mind', 'Existentialism']
    },
    {
      title: 'Finance',
      icon: <FaChartLine />,
      color: '#f093fb',
      description: 'Understanding markets, investment strategies, and the intersection of technology with financial systems. Interested in quantitative finance and algorithmic trading.',
      topics: ['Investment Strategies', 'Quantitative Finance', 'Market Analysis', 'Risk Management', 'FinTech', 'Behavioral Economics']
    },
    {
      title: 'Geopolitics',
      icon: <FaGlobeAmericas />,
      color: '#43e97b',
      description: 'Analyzing international relations, global power dynamics, and how they shape our world. Understanding the complex interplay between geography, politics, and economics.',
      topics: ['International Relations', 'Global Strategy', 'Economic Policy', 'Regional Conflicts', 'Trade Dynamics', 'Political Theory']
    }
  ];

  return (
    <section className="interests section no-min-height">
      <div className="container">
        <h2 className="section-title">Beyond Technology</h2>
        
        <p className="interests-intro">
          My curiosity extends far beyond code and data. These interests inform my worldview 
          and help me understand the broader context in which technology operates.
        </p>

        <div className="interests-grid">
          {interests.map((interest, index) => (
            <div key={index} className="interest-card" style={{ '--interest-color': interest.color }}>
              <div className="interest-icon-wrapper">
                <div className="interest-icon">{interest.icon}</div>
              </div>
              
              <h3 className="interest-title">{interest.title}</h3>
              
              <p className="interest-description">{interest.description}</p>
              
              <div className="interest-topics">
                <h4>Areas of Focus:</h4>
                <div className="topics-grid">
                  {interest.topics.map((topic, idx) => (
                    <span key={idx} className="topic-tag">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lifestyle-section">
          <h3 className="lifestyle-title">Personal Pursuits</h3>
          <div className="lifestyle-cards">
            <div className="lifestyle-card">
              <div className="lifestyle-emoji">📚</div>
              <h4>Reading</h4>
              <p>Constantly expanding my knowledge through books on technology, philosophy, history, and fiction</p>
            </div>
            <div className="lifestyle-card">
              <div className="lifestyle-emoji">🏞️</div>
              <h4>Outdoors</h4>
              <p>Finding balance and inspiration in nature through hiking, cycling, and exploration</p>
            </div>
            <div className="lifestyle-card">
              <div className="lifestyle-emoji">🛠️</div>
              <h4>Building</h4>
              <p>Working on personal projects that challenge me and push the boundaries of what's possible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
