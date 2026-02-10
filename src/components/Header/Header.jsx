import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE_LINKS } from "../../constants";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <motion.nav
      className={`nav-container ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5 }}
    >
      <div className="nav-inner">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("home");
          }}
        >
          <span className="nav-logo-dot" />
          Abdul Rahman
        </a>

        <ul className={`nav-links ${mobileOpen ? "mobile-open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-link-item">
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-cta">
            <a
              href={PROFILE_LINKS.RESUME}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume ↗
            </a>
          </li>
        </ul>

        <button
          className={`nav-mobile-toggle ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </motion.nav>
  );
}

export default Header;
