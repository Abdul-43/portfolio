import React from "react";
import { motion } from "framer-motion";
import Text from "./Text";

function Homepage() {
  return (
    <div className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Abdul Rahman H
          <br />
          <span className="accent-text">Full Stack Developer</span>
        </motion.h1>

        <motion.p
          className="hero-subheadline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Full Stack Developer based in Dubai, UAE specializing in React.js, Node.js, TypeScript,
          and AWS IoT Core. Designing and shipping end-to-end solutions for fleet management,
          kiosk platforms, and real-time enterprise web applications.
        </motion.p>

        <motion.div
          className="hero-typewriter-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text />
        </motion.div>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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
          transition={{ duration: 0.5, delay: 0.6 }}
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