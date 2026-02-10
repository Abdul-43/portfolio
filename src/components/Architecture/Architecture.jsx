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

const strengths = [
    {
        icon: "🔌",
        title: "REST API Design",
        desc: "I design clean, versioned RESTful APIs with consistent error handling, proper HTTP status codes, and structured response formats. Every endpoint follows predictable conventions.",
        items: [
            "Resource-oriented URL design",
            "Centralized error handling middleware",
            "Joi/Zod request validation",
            "Pagination & filtering patterns",
        ],
    },
    {
        icon: "📡",
        title: "Real-Time Systems",
        desc: "I build bi-directional communication layers using Socket.IO for web clients and MQTT for IoT device integration, ensuring reliable event-driven architectures.",
        items: [
            "Socket.IO room-based communication",
            "AWS IoT Core MQTT integration",
            "Event-driven device control",
            "Connection state management",
        ],
    },
    {
        icon: "🔒",
        title: "Security Practices",
        desc: "Security is built into every application from day one. I implement authentication, authorization, and protection layers aligned with OWASP Top 10 guidelines.",
        items: [
            "JWT authentication & refresh tokens",
            "Role-based access control (RBAC)",
            "Helmet HTTP header hardening",
            "CSRF protection & rate limiting",
        ],
    },
    {
        icon: "🗃️",
        title: "Database Optimization",
        desc: "I design MongoDB schemas for performance and consistency — using indexes, aggregation pipelines, and transactions to handle complex data operations efficiently.",
        items: [
            "Strategic index creation",
            "Aggregation pipeline optimization",
            "Multi-document transactions",
            "Schema design for query patterns",
        ],
    },
    {
        icon: "✅",
        title: "Code Quality Standards",
        desc: "I maintain clean, maintainable codebases through consistent patterns, meaningful code reviews, and automated CI checks that catch issues before deployment.",
        items: [
            "Feature module ownership",
            "Collaborative code reviews",
            "GitHub Actions / GitLab CI pipelines",
            "Consistent project structure",
        ],
    },
    {
        icon: "🐳",
        title: "Deployment & DevOps",
        desc: "From local Docker containers to cloud deployment on AWS and CloudJiffy, I manage the full path from development to production environments.",
        items: [
            "Docker containerization",
            "AWS EC2 & S3 deployment",
            "CloudJiffy hosting management",
            "CI/CD pipeline automation",
        ],
    },
];

function Architecture() {
    return (
        <div className="section">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                >
                    <span className="section-label">Technical Strengths</span>
                    <h2 className="section-title">How I build software.</h2>
                    <p className="section-subtitle">
                        Core engineering practices I apply across every project to ensure
                        reliability, security, and maintainability.
                    </p>
                </motion.div>

                <div className="arch-grid" style={{ marginTop: 48 }}>
                    {strengths.map((item, index) => (
                        <motion.div
                            className="arch-card"
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={fadeUp}
                            custom={index}
                        >
                            <div className="arch-card-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <ul className="arch-card-list">
                                {item.items.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Architecture;
