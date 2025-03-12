import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Proyectos = () => {

  const proyectos = [
    {
      titulo: "E-commerce de una zapatería",
      descripcion: "Diseño y Desarrollo",
      imgUrl: projImg1,
    },
    {
      titulo: "App de Música",
      descripcion: "Diseño y Desarrollo",
      imgUrl: projImg2,
    },
    {
      titulo: "Simulación de Instagram",
      descripcion: "Diseño y Desarrollo",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="proyecto" id="proyectos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Proyectos</h2>
                <p>
                  En esta sección te presento algunos de mis proyectos más destacados, 
                  los cuales reflejan mi experiencia y habilidades en el diseño y desarrollo web. 
                  Cada uno de estos proyectos fue creado con un enfoque en la calidad, la funcionalidad 
                  y la experiencia del usuario. Desde la creación de sitios de comercio electrónico hasta 
                  aplicaciones móviles innovadoras, cada proyecto es una muestra de mi pasión por el 
                  desarrollo tecnológico y mi compromiso con la excelencia.
                </p>
                <Tab.Container id="tabs-proyectos" defaultActiveKey="primero">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="primero">Pestaña 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="segundo">Pestaña 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="tercero">Pestaña 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="primero">
                      <Row>
                        {
                          proyectos.map((proyecto, indice) => {
                            return (
                              <ProjectCard
                                key={indice}
                                {...proyecto}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="seccion">
                      <p>Este es un ejemplo de cómo se pueden presentar los proyectos en diferentes pestañas. Aquí puedes mostrar más detalles sobre tus otros trabajos.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tercero">
                      <p>En esta sección, puedes agregar cualquier otra información relevante sobre tus proyectos o incluso un portafolio expandido de trabajos anteriores.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="fondo" />
    </section>
  )
}

