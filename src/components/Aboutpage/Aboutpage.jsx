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

function Aboutpage() {
    return (
        <div className="section">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                >
                    <span className="section-label">About</span>
                    <h2 className="section-title">
                        Turning complex requirements
                        <br />
                        into reliable software.
                    </h2>
                </motion.div>

                <div className="about-grid" style={{ marginTop: 48 }}>
                    <motion.div
                        className="about-text"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={fadeUp}
                        custom={1}
                    >
                        <p>
                            I am a <strong>Full Stack Engineer</strong> specializing in scalable web architecture. I engineer production-grade applications across diverse domains — from real-time fleet tracking and IoT systems to interactive kiosk platforms.
                        </p>
                        <p>
                            Leveraging the <strong>MERN stack</strong>, I build end-to-end solutions: designing normalized database schemas, architecting secure RESTful APIs, and implementing low-latency communication via <strong>Socket.IO and MQTT</strong>.
                        </p>
                        <p>
                            I prioritize <strong>clean architecture</strong>, security-first design principles (OWASP, RBAC), and maintainable codebases. My focus is on delivering robust software that solves complex business problems efficiently.
                        </p>

                        <div className="about-highlights">
                            <div className="about-highlight-card">
                                <div className="about-highlight-icon">⚡</div>
                                <div className="about-highlight-title">Full-Stack Delivery</div>
                                <div className="about-highlight-desc">
                                    Frontend to backend to deployment — I own the entire
                                    feature lifecycle.
                                </div>
                            </div>
                            <div className="about-highlight-card">
                                <div className="about-highlight-icon">🔒</div>
                                <div className="about-highlight-title">Security-First</div>
                                <div className="about-highlight-desc">
                                    JWT auth, RBAC, API rate limiting, OWASP Top 10 aligned
                                    practices.
                                </div>
                            </div>
                            <div className="about-highlight-card">
                                <div className="about-highlight-icon">📡</div>
                                <div className="about-highlight-title">Real-Time Systems</div>
                                <div className="about-highlight-desc">
                                    Socket.IO & MQTT for live communication with IoT devices
                                    and dashboards.
                                </div>
                            </div>
                            <div className="about-highlight-card">
                                <div className="about-highlight-icon">🚀</div>
                                <div className="about-highlight-title">Cloud Deployment</div>
                                <div className="about-highlight-desc">
                                    AWS (EC2, S3), CloudJiffy hosting, Docker containerization,
                                    CI/CD.
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-60px" }}
                        variants={fadeUp}
                        custom={2}
                    >
                        <ul className="about-info-list">
                            <li className="about-info-item">
                                <div className="about-info-icon">💼</div>
                                <div className="about-info-content">
                                    <h4>Professional Role</h4>
                                    <p>Full Stack Engineer</p>
                                </div>
                            </li>
                            <li className="about-info-item">
                                <div className="about-info-icon">🎓</div>
                                <div className="about-info-content">
                                    <h4>Education</h4>
                                    <p>
                                        B.Tech in Information Technology
                                        <br />
                                        Manakula Vinayagar Institute of Technology, Pondicherry
                                        (2018–2022)
                                    </p>
                                </div>
                            </li>
                            <li className="about-info-item">
                                <div className="about-info-icon">📜</div>
                                <div className="about-info-content">
                                    <h4>Certification</h4>
                                    <p>
                                        Full Stack Developer — Zen Class
                                        <br />
                                        GUVI Geek Network Pvt. Ltd.
                                    </p>
                                </div>
                            </li>
                            <li className="about-info-item">
                                <div className="about-info-icon">🛠️</div>
                                <div className="about-info-content">
                                    <h4>Core Stack</h4>
                                    <p>React · Node.js · Express · MongoDB · Socket.IO</p>
                                </div>
                            </li>
                            <li className="about-info-item">
                                <div className="about-info-icon">📍</div>
                                <div className="about-info-content">
                                    <h4>Location</h4>
                                    <p>India</p>
                                </div>
                            </li>
                            <li className="about-info-item">
                                <div className="about-info-icon">🤝</div>
                                <div className="about-info-content">
                                    <h4>Collaboration</h4>
                                    <p>
                                        Experienced in code reviews, feature ownership, and guiding
                                        team members during development.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Aboutpage;