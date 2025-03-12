import { useState } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Ingrese un correo válido.");
      return;
    }
    setError("");
    setMessage("Se ha enviado");
    setEmail("");

    setTimeout(() => {
      setMessage('');
    }, 1000);
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Suscríbete a nuestro boletín<br></br> y nunca te pierdas las últimas actualizaciones</h3>
            {message && <Alert variant="success">{message}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Dirección de correo electrónico"
                />
                <button type="submit">Enviar</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
