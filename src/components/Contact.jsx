import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Form submission functionality needs to be connected to a backend service!');
    console.log('Form data:', formData);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        
        <p className="contact-intro">
          Interested in collaborating, discussing ideas, or just want to say hello? 
          I'd love to hear from you!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Whether you have a project in mind, want to explore potential collaborations, 
              or simply wish to discuss technology, philosophy, or finance — feel free to reach out!
            </p>

            <div className="contact-methods">
              <a href="mailto:emile.dimas@example.com" className="contact-method">
                <FaEnvelope className="method-icon" />
                <div>
                  <h4>Email</h4>
                  <p>emile.dimas@example.com</p>
                </div>
              </a>

              <a href="https://linkedin.com/in/emile-dimas" target="_blank" rel="noopener noreferrer" className="contact-method">
                <FaLinkedin className="method-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/emile-dimas</p>
                </div>
              </a>

              <a href="https://github.com/emiled16" target="_blank" rel="noopener noreferrer" className="contact-method">
                <FaGithub className="method-icon" />
                <div>
                  <h4>GitHub</h4>
                  <p>github.com/emiled16</p>
                </div>
              </a>

              <a href="https://twitter.com/emile_dimas" target="_blank" rel="noopener noreferrer" className="contact-method">
                <FaTwitter className="method-icon" />
                <div>
                  <h4>Twitter</h4>
                  <p>@emile_dimas</p>
                </div>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

            <p className="form-note">
              Note: Connect this form to a backend service like Formspree, EmailJS, 
              or your own API endpoint to receive messages.
            </p>
          </form>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2026 Emile Dimas. Built with React & Vite. Deployed via GitHub Pages.</p>
      </footer>
    </section>
  );
};

export default Contact;
