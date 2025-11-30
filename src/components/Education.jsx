import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    school: "Amrita Vishwa Vidyapeetham",
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    year: "2023 - Expected 2027",
    location: "Coimbatore, Tamil Nadu",
    grade: "CGPA: 9.23/10"
  },
  {
    school: "Indian Institute of Technology Madras",
    degree: "Bachelor of Science in Data Science and Applications",
    year: "2024 - Present",
    location: "Centre for Outreach and Digital Education",
    grade: "CGPA: 7.41/10"
  }
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="icon">
                <FaGraduationCap />
              </div>
              <div className="content">
                <h3>{edu.school}</h3>
                <p className="degree">{edu.degree}</p>
                <div className="details">
                  <span>{edu.year}</span>
                  <span>{edu.location}</span>
                </div>
                <div className="grade">{edu.grade}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education-section {
          padding: 8rem 2rem;
          background: rgba(18, 18, 18, 0.7);
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 5rem;
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .education-grid {
          display: grid;
          gap: 2rem;
        }

        .education-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 2rem;
          display: flex;
          gap: 2rem;
          align-items: center;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          border-color: var(--secondary-color);
          background: rgba(255, 255, 255, 0.05);
        }

        .icon {
          font-size: 3rem;
          color: var(--secondary-color);
          background: rgba(189, 0, 255, 0.1);
          padding: 1rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .content {
          flex: 1;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: #fff;
        }

        .degree {
          color: var(--primary-color);
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .details {
          display: flex;
          gap: 2rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }

        .grade {
          font-weight: 600;
          color: #fff;
        }

        @media (max-width: 768px) {
          .education-card {
            flex-direction: column;
            text-align: center;
          }

          .details {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
