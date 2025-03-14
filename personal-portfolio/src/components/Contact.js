import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Enviando...");
  
    // Número de WhatsApp en formato internacional (sin el 0 inicial)
    const whatsappNumber = "593999656285"; 
  
    // Construimos el mensaje con los datos del formulario
    const message = `Hola, aquí tienes mis datos de contacto:
    - Nombre: ${formDetails.firstName} ${formDetails.lastName}
    - Correo: ${formDetails.email}
    - Teléfono: ${formDetails.phone}
    - Mensaje: ${formDetails.message}`;
  
    // Encode el mensaje para que se envíe correctamente en la URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  
    // Redirige al usuario a WhatsApp
    window.open(whatsappURL, "_blank");
  
    setButtonText("Enviar");
    setFormDetails(formInitialDetails);
  };
  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contáctanos"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>¡Pongámonos en contacto!</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="Nombre" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lasttName} placeholder="Apellido" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Correo electrónico" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Teléfono" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Mensaje" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

