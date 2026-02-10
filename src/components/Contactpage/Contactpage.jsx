import React from "react";
import { motion } from "framer-motion";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { PROFILE_LINKS } from "../../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

function Contactpage() {
  return (
    <div className="section">
      <div className="container-custom">
        <div className="contact-wrapper">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <span className="section-label">Contact</span>
          </motion.div>

          <motion.h2
            className="contact-headline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={1}
          >
            Let's build something
            <br />
            <span style={{
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              together.
            </span>
          </motion.h2>

          <motion.p
            className="contact-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={2}
          >
            I'm open to Full Stack Developer opportunities where I can contribute
            to production applications, work with talented teams, and continue
            growing as an engineer. If you have a role or project in mind, let's
            connect.
          </motion.p>

          <motion.div
            className="contact-actions"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={3}
          >
            <a
              href={`mailto:${PROFILE_LINKS.EMAIL}`}
              className="btn-primary"
            >
              <AiOutlineMail /> Send an Email
            </a>
            <a
              href={PROFILE_LINKS.RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download Resume ↗
            </a>
          </motion.div>

          <motion.div
            className="contact-links"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            custom={4}
          >
            <a
              href={PROFILE_LINKS.GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
            <a
              href={PROFILE_LINKS.LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={`mailto:${PROFILE_LINKS.EMAIL}`}
              className="contact-link"
              aria-label="Email"
            >
              <AiOutlineMail />
            </a>
            <a
              href={`tel:${PROFILE_LINKS.PHONE}`}
              className="contact-link"
              aria-label="Phone"
            >
              <FaPhoneAlt />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
