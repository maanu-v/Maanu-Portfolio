import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm currently looking for new opportunities. Whether you have a question or want to collaborate,
              contact me and I'll try my best to get back to you!
            </p>

            <div className="contact-details">
              <div className="detail-item">
                <FaEnvelope style={{ color: '#64ffda', fontSize: '1.5rem', minWidth: '1.5rem' }} />
                <a href="mailto:manuvenke06@gmail.com" target='_blank' rel='noopener noreferrer'>manuvenke06@gmail.com</a>
              </div>
              <div className="detail-item">
                <FaPhone style={{ color: '#64ffda', fontSize: '1.5rem', minWidth: '1.5rem' }} />
                <a href="tel:+917358776136" target='_blank' rel='noopener noreferrer'>+91 7358776136</a>
              </div>
              <div className="detail-item">
                <FaMapMarkerAlt style={{ color: '#64ffda', fontSize: '1.5rem', minWidth: '1.5rem' }} />
                <a href="https://www.google.com/maps/place/Coimbatore,+Tamil+Nadu,+India" target='_blank' rel='noopener noreferrer'>Coimbatore, Tamil Nadu, India</a>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/maanu-v" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://linkedin.com/in/manasa-v" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
          </motion.div>
        </div>

        <footer className="footer">
          <p>Designed & Built by Manasa V</p>
        </footer>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 8rem 2rem 2rem;
          background: var(--bg-color);
          text-align: center;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 3rem;
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-info p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 3rem;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          color: #fff;
        }

        .icon {
          color: #64ffda;
          font-size: 1.5rem;
          min-width: 1.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .social-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-bottom: 5rem;
        }

        .social-links a {
          font-size: 2rem;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          color: var(--primary-color);
          transform: translateY(-5px);
        }

        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 2rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </section>
  );
};

export default Contact;
