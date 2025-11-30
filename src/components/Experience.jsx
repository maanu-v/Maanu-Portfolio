import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const experiences = [
  {
    company: "Telesto",
    role: "Product Development Intern",
    date: "August 2025 - Present",
    type: "Remote",
    description: [
      "Building a multimodal agentic system combining text, numeric, and visual data for geologic interpretation.",
      "Designed a knowledge base with CLIP-based embeddings for cross-modal retrieval."
    ]
  },
  {
    company: "RoR Technologies",
    role: "Software Developer Intern",
    date: "May 2025 - Present",
    type: "Remote",
    description: [
      "Contributing to the development of EKOI, an AI-native enterprise platform enabling organizations to transform raw multimodal data into actionable intelligence.",
      "Designed and refined role-based, scalable UI workflows for data ingestion, analytics, and decision automation."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="header">
                  <h3>{exp.role}</h3>
                  <span className="company">{exp.company}</span>
                </div>
                <div className="meta">
                  <span><FaCalendarAlt /> {exp.date}</span>
                  <span><FaBriefcase /> {exp.type}</span>
                </div>
                <ul>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience-section {
          padding: 8rem 2rem;
          background: var(--bg-color);
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          text-align: left;
          margin-bottom: 5rem;
          margin-left: 2rem;
          background: linear-gradient(to right, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 5%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: rgba(255, 255, 255, 0.1);
          transform: translateX(-50%);
        }

        .timeline-item {
          display: flex;
          justify-content: flex-start;
          padding-bottom: 4rem;
          position: relative;
          width: 100%;
        }

        .timeline-content {
          width: 75%;
          background: var(--surface-color);
          padding: 2rem;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .timeline-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border-color: var(--primary-color);
        }

        .timeline-item:nth-child(odd) .timeline-content {
          margin-left: 17%;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: 17%;
        }

        .timeline-dot {
          position: absolute;
          left: 5%;
          top: 2rem;
          width: 20px;
          height: 20px;
          background: var(--primary-color);
          border-radius: 50%;
          transform: translateX(-50%);
          box-shadow: 0 0 10px var(--primary-color);
          z-index: 2;
        }

        .header h3 {
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .company {
          color: var(--primary-color);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .meta {
          display: flex;
          gap: 1.5rem;
          margin: 1rem 0;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .meta span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        ul {
          list-style: disc;
          padding-left: 1.5rem;
          color: var(--text-secondary);
        }

        li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 20px;
          }

          .timeline-item {
            justify-content: flex-start;
            padding-left: 50px;
          }

          .timeline-content {
            width: 100%;
          }

          .timeline-item:nth-child(odd) .timeline-content,
          .timeline-item:nth-child(even) .timeline-content {
            margin: 0;
          }

          .timeline-dot {
            left: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
