import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <a href="#" className="logo">Manasa</a>
                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#contact" className="contact-btn">Contact</a></li>
                </ul>
            </div>

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(10px);
          padding: 1rem 0;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          font-family: var(--font-heading);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: var(--primary-color);
        }

        .contact-btn {
          padding: 0.5rem 1.2rem;
          border: 1px solid var(--primary-color);
          border-radius: 20px;
          color: var(--primary-color) !important;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          background: var(--primary-color);
          color: #000 !important;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
        </motion.nav>
    );
};

export default Navbar;
