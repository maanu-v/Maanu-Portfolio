import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>
              I am a curious and focused learner with a solid background in <span className="highlight">Artificial Intelligence</span> and <span className="highlight">Software Development</span>.
              Currently pursuing my B.Tech in AI & Data Science at Amrita Vishwa Vidyapeetham and a BS in Data Science at IIT Madras.
            </p>
            <p>
              My passion lies in applying technical and analytical skills to solve real-world challenges.
              I am committed to continuous learning and practical innovation, constantly exploring new technologies
              to build efficient, scalable solutions.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>9.23</h3>
                <span>CGPA (B.Tech)</span>
              </div>
              <div className="stat-item">
                <h3></h3>
                <span></span>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <span>Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="card-stack">
              <div className="card card-1"></div>
              <div className="card card-2"></div>
              <div className="card card-3">
                <div className="code-snippet">
                  <pre>
                    <code>
                      {`class AI_Engineer:
  def __init__(self):
    self.skills = ["ML", "DL", "NLP"]
    self.passion = "Innovation"

  def solve(self, problem):
    return optimized_solution`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about-section {
          padding: 8rem 2rem;
          background: rgba(18, 18, 18, 0.7);
          position: relative;
          z-index: 1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 12rem;
          margin-right: 2rem;
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .about-text {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          backdrop-filter: blur(5px);
        }

        .about-text p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .highlight {
          color: var(--primary-color);
          font-weight: 600;
        }

        .stats {
          display: flex;
          gap: 3rem;
          margin-top: 3rem;
        }

        .stat-item h3 {
          font-size: 2.5rem;
          color: var(--secondary-color);
          margin-bottom: 0.5rem;
        }

        .stat-item span {
          color: var(--text-secondary);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .about-visual {
          display: flex;
          justify-content: center;
        }

        .card-stack {
          position: relative;
          width: 300px;
          height: 400px;
        }

        .card {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease;
        }

        .card-1 {
          background: rgba(0, 243, 255, 0.1);
          transform: rotate(-10deg) translate(-20px, -20px);
          z-index: 1;
        }

        .card-2 {
          background: rgba(189, 0, 255, 0.1);
          transform: rotate(5deg) translate(20px, 20px);
          z-index: 2;
        }

        .card-3 {
          background: #1a1a1a;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .card-stack:hover .card-1 {
          transform: rotate(-15deg) translate(-30px, -30px);
        }

        .card-stack:hover .card-2 {
          transform: rotate(10deg) translate(30px, 30px);
        }

        .code-snippet {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          color: #a0a0a0;
        }

        @media (max-width: 968px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-visual {
            margin-top: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
