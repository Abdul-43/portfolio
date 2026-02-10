import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function Projectlist() {
  return (
    <div className="section">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">Side projects & open source.</h2>
          <p className="section-subtitle">
            Independent projects that showcase specific technical capabilities
            beyond my professional work.
          </p>
        </motion.div>

        <div
          className="experience-cards"
          style={{ marginTop: 48 }}
        >
          <motion.div
            className="exp-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
          >
            <div className="exp-card-header">
              <div className="exp-card-icon">📊</div>
              <span className="exp-card-type">Dashboard</span>
            </div>
            <h3>Admin Dashboard</h3>
            <p className="exp-card-problem">
              Built a responsive admin dashboard for monitoring deals, users,
              products, and revenue analytics with dynamic data visualization
              using Recharts — designed for quick decision-making.
            </p>
            <div className="exp-card-stack">
              {["React.js", "Recharts", "Vite", "Responsive Design"].map(
                (t, i) => (
                  <span className="exp-card-tag" key={i}>{t}</span>
                )
              )}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <a
                href="https://react-dashboard-vite.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-sm"
              >
                Live Demo ↗
              </a>
              <a
                href="https://github.com/Abdul-43/react-dashboard.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-sm"
              >
                Source Code
              </a>
            </div>
          </motion.div>

          <motion.div
            className="exp-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={1}
          >
            <div className="exp-card-header">
              <div className="exp-card-icon">💬</div>
              <span className="exp-card-type">Real-Time App</span>
            </div>
            <h3>Real-Time Chat Application</h3>
            <p className="exp-card-problem">
              Developed a full-stack real-time chat application with instant
              messaging, online presence detection, and persistent message
              history — demonstrating Socket.IO and MongoDB integration.
            </p>
            <div className="exp-card-stack">
              {["React.js", "Node.js", "Express", "MongoDB", "Socket.IO"].map(
                (t, i) => (
                  <span className="exp-card-tag" key={i}>{t}</span>
                )
              )}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <a
                href="https://github.com/Abdul-43/chatApp-client.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-sm"
              >
                Frontend Code
              </a>
              <a
                href="https://github.com/Abdul-43/chatApp-server.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-sm"
              >
                Backend Code
              </a>
            </div>
          </motion.div>

          <motion.div
            className="exp-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={2}
          >
            <div className="exp-card-header">
              <div className="exp-card-icon">📅</div>
              <span className="exp-card-type">MERN Full-Stack</span>
            </div>
            <h3>Event Management System</h3>
            <p className="exp-card-problem">
              Comprehensive event management application with user-friendly
              event creation, registration workflows, and real-time updates —
              built to practice full MERN stack patterns end-to-end.
            </p>
            <div className="exp-card-stack">
              {["React.js", "Node.js", "Express", "MongoDB", "REST API"].map(
                (t, i) => (
                  <span className="exp-card-tag" key={i}>{t}</span>
                )
              )}
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              <a
                href="https://github.com/Abdul-43/Zen-class-Event-Management-for-students-frontend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-sm"
              >
                Frontend Code
              </a>
              <a
                href="https://github.com/Abdul-43/Zen-class-Event-Management-for-students-backend.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-sm"
              >
                Backend Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projectlist;