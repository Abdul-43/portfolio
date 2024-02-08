import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../pages/style.css";
import { HashLink } from "react-router-hash-link";
function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Navbar.Brand className="logotext" as={HashLink} to="#home">
        <div className="logo"></div>
      </Navbar.Brand>

      <Navbar.Toggle
        className="navbar-toggler"
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
        <Nav className="ms-auto" defaultActiveKey="#home">
          <Nav.Item>
            <HashLink
              className="nav-link"
              to="#home"
              onClick={() => updateExpanded(false)}
              smooth
            >
              Home
            </HashLink>
          </Nav.Item>
          <Nav.Item>
            <HashLink
              className="nav-link"
              to="#about"
              onClick={() => updateExpanded(false)}
              smooth
            >
              About
            </HashLink>
          </Nav.Item>

          <Nav.Item>
            <HashLink
              className="nav-link"
              to="#project"
              onClick={() => updateExpanded(false)}
              smooth
            >
              Projects
            </HashLink>
          </Nav.Item>

          <Nav.Item>
            <HashLink
              className="nav-link"
              to="#contact"
              onClick={() => updateExpanded(false)}
              smooth
            >
              Contact
            </HashLink>
          </Nav.Item>

          <Button
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/12S8oecif8gfOlP2KwJySv-Iw5FVgzJm8/view?usp=drive_link"
              );
            }}
            className="resumebtn"
          >
            <span>Resume</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
