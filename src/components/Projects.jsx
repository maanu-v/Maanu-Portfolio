import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Debiasing in Small Language Models",
    tools: ["BERT", "LoRA", "NLP"],
    description: "Applied LoRA fine-tuning on BERT masked language models to mitigate gender bias using Winobias dataset. Benchmarked debiased models on bias and accuracy metrics.",
    link: "#"
  },
  {
    title: "Confidence-Aware Sensor Fusion via HRL for Robot Autonomous Driving",
    tools: ["CARLA", "PPO", "SAC", "HRL"],
    description: "Designed a Hierarchical RL architecture integrating camera and LiDAR inputs with real-time confidence estimation for robust autonomous driving.",
    link: "#"
  },
  {
    title: "LLM-Based Controlled Bot on CROBOT",
    tools: ["ROS2", "SLAM", "LLMs", "LangGraph"],
    description: "Developed a LangGraph-powered multimodal pipeline to enable context-aware robotic control and navigation. Integrated with ROS2 for real-time communication.",
    link: "#"
  },
  {
    title: "Deep Learning-Infused RSMA for URLLC",
    tools: ["RSMA", "ML", "RL"],
    description: "Applied deep neural networks to enhance Rate-Splitting Multiple Access (RSMA) for 5G & 6G URLLC scenarios. Optimized rate allocation and throughput.",
    link: "#"
  },
  {
    title: "Optimizing Alloy Composition Using ML",
    tools: ["Bayesian Optimization", "ML"],
    description: "Trained regression and Bayesian optimization models to predict alloy performance under impact. Identified optimal compositions achieving higher strength-to-weight ratios.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="card-content">
                <h3>{project.title}</h3>
                <div className="tags">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tag">{tool}</span>
                  ))}
                </div>
                <p>{project.description}</p>
                <div className="card-footer">
                  <a href={project.link} className="project-link"><FaGithub /> Code</a>
                  {/* <a href="#" className="project-link"><FaExternalLinkAlt /> Demo</a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-section {
          padding: 8rem 2rem;
          background: rgba(18, 18, 18, 0.7);
        }

        .container {
          max-width: 1200px;
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 10px 30px rgba(0, 243, 255, 0.1);
        }

        .card-content {
          padding: 2rem;
        }

        h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: #fff;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: rgba(0, 243, 255, 0.1);
          color: var(--primary-color);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .card-footer {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #fff;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .project-link:hover {
          color: var(--primary-color);
        }
      `}</style>
    </section>
  );
};

export default Projects;
