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

const skillCategories = [
  {
    icon: "🎨",
    title: "Frontend",
    skills: [
      "React.js",
      "Context API / Redux / Zustand",
      "Material-UI / Bootstrap / Tailwind",
      "HTML5 / CSS3",
      "Responsive UI Development",
      "Framer Motion",
    ],
  },
  {
    icon: "⚙️",
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "JWT Authentication & Authorization",
      "Socket.IO (Real-Time)",
      "MQTT (IoT Integration)",
      "Joi / Zod Validation",
      "Centralized Error Handling",
    ],
  },
  {
    icon: "🗄️",
    title: "Databases",
    skills: [
      "MongoDB",
      "Schema Design & Data Modeling",
      "Aggregation Pipelines",
      "Indexing & Query Optimization",
      "Transactions & Sessions",
      "MySQL (Basic)",
    ],
  },
  {
    icon: "☁️",
    title: "DevOps & Cloud",
    skills: [
      "AWS (EC2, S3)",
      "CloudJiffy Hosting",
      "Docker (Containerization)",
      "GitHub Actions (CI/CD)",
      "GitLab CI",
      "Netlify / Render",
    ],
  },
  {
    icon: "🔐",
    title: "Security",
    skills: [
      "JWT-Based Access Control",
      "Helmet (HTTP Header Hardening)",
      "CSRF Protection",
      "API Rate Limiting",
      "RBAC Implementation",
      "OWASP Top 10 Alignment",
    ],
  },
  {
    icon: "🧰",
    title: "Tools & Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript (Basic)",
      "Git / GitHub / GitLab",
      "Postman",
      "VS Code",
      "Recharts / Data Visualization",
    ],
  },
];

function Skills() {
  return (
    <div className="section">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical toolkit.</h2>
          <p className="section-subtitle">
            Technologies and tools I use daily to build, secure, and deploy
            production applications.
          </p>
        </motion.div>

        <div className="skills-grid" style={{ marginTop: 48 }}>
          {skillCategories.map((cat, index) => (
            <motion.div
              className="skill-category"
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={index}
            >
              <div className="skill-category-icon">{cat.icon}</div>
              <h3>{cat.title}</h3>
              <div className="skill-items">
                {cat.skills.map((skill, i) => (
                  <div className="skill-item" key={i}>
                    <span className="skill-dot" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;