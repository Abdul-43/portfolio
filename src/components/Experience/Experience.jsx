import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12 },
    }),
};

const experiences = [
    {
        icon: "🚛",
        type: "Enterprise App",
        title: "Fleet Management Application",
        problem:
            "Businesses needed a centralized platform to track vehicles, manage trip lifecycles, and visualize fleet performance in real time — replacing fragmented spreadsheet-based tracking.",
        role: "Full Stack Developer — Architected and delivered the complete solution from database schema to responsive frontend dashboards.",
        stack: ["React.js", "Node.js", "Express", "MongoDB", "REST API", "Recharts"],
        features: [
            "React-based dashboards with dynamic data visualization",
            "Backend APIs for vehicle tracking and trip lifecycle management",
            "MongoDB schema design with aggregation pipelines for analytics",
            "Role-based access for fleet managers and operators",
        ],
        impact:
            "Enabled real-time fleet visibility, replacing manual tracking and reducing trip management overhead.",
    },
    {
        icon: "📸",
        type: "Kiosk System",
        title: "Photo Booth Kiosk Application",
        problem:
            "Photo booth operators needed an automated system to capture, process, and print photos on-site — coordinating cameras, printers, and user workflows in a single kiosk interface.",
        role: "Full Stack Developer — Engineered complex hardware integration protocols for seamless camera-to-printer workflows.",
        stack: ["React.js", "Node.js", "Express", "MongoDB", "WebUSB", "Socket.IO", "REST API"],
        features: [
            "Camera capture and printer integration via coordinated frontend/backend workflows",
            "Image processing, metadata storage, and print queue management",
            "Device status monitoring and health checks via WebSocket",
            "Multi-format print support (6x8, 4x6, 6x2) with orientation detection",
        ],
        impact:
            "Delivered a production kiosk system handling live events with real-time camera-to-print pipeline and zero manual intervention.",
    },
    {
        icon: "🎓",
        type: "SaaS Platform",
        title: "Learning Management System",
        problem:
            "Educational institutions required a full-featured platform for course management, student enrollment, progress tracking, and secure content delivery.",
        role: "Full Stack Developer — Spearheaded the full-cycle development of the platform, including secure authentication and content delivery systems.",
        stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "REST API", "Zustand"],
        features: [
            "User authentication with role-based access control (Admin, Instructor, Student)",
            "Course creation, student enrollment, and progress tracking modules",
            "Secure file upload system for course materials",
            "Optimized REST APIs with JWT-based session management",
        ],
        impact:
            "Shipped a production-ready LMS with secure multi-role access, serving real students and instructors.",
    },
    {
        icon: "🔊",
        type: "IoT Integration",
        title: "Real-Time Audio Streaming (MQTT + IoT)",
        problem:
            "IoT speaker devices needed a web-based control interface for remote audio playback, volume management, and real-time status monitoring via AWS IoT Core.",
        role: "Full Stack Developer — Designed the event-driven communication layer enabling sub-second latency for device control.",
        stack: ["React.js", "Node.js", "Socket.IO", "AWS IoT Core", "MQTT", "Express"],
        features: [
            "Socket.IO integration for live bi-directional communication",
            "AWS IoT Core MQTT for device-level command/control",
            "Remote audio playback control and volume management",
            "Event-driven architecture for reliable device interaction",
        ],
        impact:
            "Enabled web-to-device audio control with low-latency MQTT messaging, serving connected speaker deployments.",
    },
    {
        icon: "🏠",
        type: "Business App",
        title: "Rental Management Application",
        problem:
            "Property managers needed a digital platform to handle bookings, availability logic, and tenant management — replacing paper-based tracking.",
        role: "Full Stack Developer — built the responsive UI, booking workflows, and secure backend services.",
        stack: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
        features: [
            "Responsive React UI with booking calendar and availability logic",
            "Secure backend services with JWT-based authentication",
            "Booking workflow automation with conflict detection",
            "Tenant and property management dashboards",
        ],
        impact:
            "Digitized the rental management workflow, eliminating double-bookings with automated availability checks.",
    },
    {
        icon: "📹",
        type: "Streaming Platform",
        title: "Camera Management Platform",
        problem:
            "Organizations with multi-camera deployments needed a centralized platform to manage permissions, stream access, and session control across admin and operator roles.",
        role: "Full Stack Developer — implemented RBAC, live streaming integration, and device status management.",
        stack: ["React.js", "Node.js", "Express", "MongoDB", "RBAC", "Socket.IO", "REST API"],
        features: [
            "Role-based access control (RBAC) for admins and operators",
            "Live camera streaming integration with session control",
            "Device status monitoring and real-time updates",
            "Permission management for stream access and operations",
        ],
        impact:
            "Delivered secure multi-camera management with granular access control, supporting live stream operations.",
    },
];

function Experience() {
    return (
        <div className="section">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                >
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">
                        Production applications I've built.
                    </h2>
                    <p className="section-subtitle">
                        Real-world systems shipped at Sieora — each solving tangible
                        business problems with full-stack implementations.
                    </p>
                </motion.div>

                <motion.div
                    className="experience-company-header"
                    style={{ marginTop: 48 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={fadeUp}
                    custom={1}
                >
                    <div className="experience-company-logo">S</div>
                    <div className="experience-company-info">
                        <h3>Sieora</h3>
                        <p>Full Stack Engineer</p>
                    </div>
                </motion.div>

                <div className="experience-cards">
                    {experiences.map((exp, index) => (
                        <motion.div
                            className="exp-card"
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            variants={fadeUp}
                            custom={index * 0.5}
                        >
                            <div className="exp-card-header">
                                <div className="exp-card-icon">{exp.icon}</div>
                                <span className="exp-card-type">{exp.type}</span>
                            </div>

                            <h3>{exp.title}</h3>

                            <p className="exp-card-problem">{exp.problem}</p>

                            <div className="exp-card-stack">
                                {exp.stack.map((tech, i) => (
                                    <span className="exp-card-tag" key={i}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <ul className="exp-card-features">
                                {exp.features.map((feat, i) => (
                                    <li key={i}>{feat}</li>
                                ))}
                            </ul>

                            <div className="exp-card-impact">
                                <div className="exp-card-impact-label">Impact</div>
                                <p>{exp.impact}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
