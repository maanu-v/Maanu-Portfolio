import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    MANASA <span className="highlight">V</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    AI Engineer & Data Scientist
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Transforming raw data into actionable intelligence through AI, Machine Learning, and Robotics.
                </motion.p>

                <motion.div
                    className="cta-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#projects" className="btn primary">View Projects</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                </motion.div>

                <motion.div
                    className="social-links"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="https://github.com/maanu-v" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/manasa-v" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="mailto:manuvenke06@gmail.com"><FaEnvelope /></a>
                </motion.div>
            </div>

            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <style jsx>{`
        .hero-section {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 0 2rem;
        }

        .hero-content {
          text-align: center;
          z-index: 10;
          max-width: 800px;
        }

        h1 {
          font-size: 5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          letter-spacing: -2px;
          line-height: 1.1;
        }

        .highlight {
          color: var(--primary-color);
        }

        h2 {
          font-size: 2rem;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        p {
          font-size: 1.2rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .btn {
          padding: 0.8rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .btn.primary {
          background: var(--primary-color);
          color: #000;
          box-shadow: 0 0 20px rgba(0, 243, 255, 0.3);
        }

        .btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(0, 243, 255, 0.5);
        }

        .btn.secondary {
          border: 2px solid var(--secondary-color);
          color: #fff;
        }

        .btn.secondary:hover {
          background: var(--secondary-color);
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(189, 0, 255, 0.3);
        }

        .social-links {
          display: flex;
          gap: 2rem;
          justify-content: center;
          font-size: 1.5rem;
        }

        .social-links a {
          color: var(--text-secondary);
        }

        .social-links a:hover {
          color: var(--primary-color);
          transform: scale(1.1);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
        }

        .orb-1 {
          width: 400px;
          height: 400px;
          background: var(--primary-color);
          top: -100px;
          left: -100px;
          animation: float 10s infinite ease-in-out;
        }

        .orb-2 {
          width: 300px;
          height: 300px;
          background: var(--secondary-color);
          bottom: -50px;
          right: -50px;
          animation: float 8s infinite ease-in-out reverse;
        }

        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(30px, 50px); }
          100% { transform: translate(0, 0); }
        }

        @media (max-width: 768px) {
          h1 { font-size: 3.5rem; }
          h2 { font-size: 1.5rem; }
          .cta-buttons { flex-direction: column; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
