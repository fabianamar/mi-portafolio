import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.png"; // WhatsApp
import navIcon2 from "../assets/img/nav-icon2.png"; // GitHub
import navIcon3 from "../assets/img/nav-icon3.svg"; // Instagram

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright 2025 Paula Marín. Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
