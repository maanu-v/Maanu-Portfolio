import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript"]
  },
  {
    title: "Web Technologies",
    skills: ["FastAPI", "Flask", "React", "NextJS", "SpringBoot"]
  },
  {
    title: "AI & ML",
    skills: ["PyTorch", "LangChain", "LangGraph", "TensorFlow", "Scikit-learn"]
  },
  {
    title: "Database Systems",
    skills: ["Firebase", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Git", "Kubernetes", "Linux", "ROS2", "Raspberry Pi", "Arduino"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-tag"
                    whileHover={{ scale: 1.1, backgroundColor: "var(--primary-color)", color: "#000" }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          padding: 8rem 2rem;
          background: var(--bg-color);
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3rem;
        }

        .skill-category {
          background: var(--surface-color);
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          border-color: var(--secondary-color);
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #fff;
          text-align: center;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }

        .skill-tag {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
      `}</style>
    </section>
  );
};

export default Skills;