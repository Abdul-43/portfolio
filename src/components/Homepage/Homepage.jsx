import React from "react";
import { motion } from "framer-motion";
import Text from "./Text";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Homepage() {
  return (
    <div className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          <div className="hero-status">
            <span className="hero-status-dot" />
            <span className="hero-status-text">
              Full Stack Engineer
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="hero-headline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          I build production-grade
          <br />
          <span className="accent-text">web applications.</span>
        </motion.h1>

        <motion.p
          className="hero-subheadline"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.0 }}
        >
          Full Stack Developer specializing in React, Node.js, MongoDB,
          and real-time systems. I design and ship end-to-end solutions
          for fleet management, IoT platforms, and enterprise dashboards.
        </motion.p>

        <motion.div
          className="hero-typewriter-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2 }}
        >
          <Text />
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.4 }}
        >
          <a href="#experience" className="btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View My Work →
          </a>
          <a href="#contact" className="btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.6 }}
        >
          <div className="hero-stat">
            <div className="hero-stat-value">End-to-End</div>
            <div className="hero-stat-label">Product Delivery</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">6+</div>
            <div className="hero-stat-label">Enterprise Solutions</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">MERN</div>
            <div className="hero-stat-label">Scalable Architecture</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">IoT</div>
            <div className="hero-stat-label">Real-Time Systems</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Homepage;