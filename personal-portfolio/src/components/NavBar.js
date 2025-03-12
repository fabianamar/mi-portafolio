import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.png'; // Para WhatsApp
import navIcon2 from '../assets/img/nav-icon2.png'; // Para GitHub
import navIcon3 from '../assets/img/nav-icon3.svg'; // Para Instagram
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
              <Nav.Link href="#proyectos" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* WhatsApp Link */}
                <a href="https://wa.me/0999656285?text=Hola,%20me%20interesa%20tu%20portafolio" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="WhatsApp" />
                </a>
                {/* GitHub Link */}
                <a href="https://github.com/fabianamar" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                {/* Instagram Link */}
                <a href="https://www.instagram.com/fabimolinnaa/" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Instagram" />
                </a>
              </div>      
              <button className="vvd" onClick={() => {
          const section = document.getElementById("connect");
            if (section) {
          section.scrollIntoView({ behavior: "smooth" });
            }
            }}>
          <span>Conectemos</span>
          </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
