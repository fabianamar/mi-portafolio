import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "E-Commerce Slyline IVy",
      description: "Desarrollo Ux Ui",
      imgUrl: projImg1,
    },
    {
      title: "App de Música",
      description: "Desarrollo Front-end",
      imgUrl: projImg2,
    },
    {
      title: "Simulación de Instagram con Flutter",
      description: "Desarrollo Full Stack",
      imgUrl: projImg3,
    },
  ];

  const projects2 = [
    {
      title: "Web en Wordpress",
      description: "Desarrollo",
      imgUrl: projImg4,
    },
    {
      title: "Sitio Web WebDevine",
      description: "Desarrollo en Wordpress",
      imgUrl: projImg5,
    },
    {
      title: "Probet 593",
      description: "Desarrollo Full Stack",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Proyectos</h2>
                  <p> En esta sección, podrás explorar algunos de los proyectos más representativos en los que he trabajado, demostrando mis habilidades en desarrollo web y diseño. </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects1.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects2.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div style={{ textAlign: "center", fontSize: "1.2rem", fontFamily: "Arial, sans-serif" }}>
                          <h3>Proyectos Destacados</h3>
                          <p>Estos proyectos representan algunos de los desafíos más emocionantes en los que he trabajado, combinando innovación, diseño y tecnología para ofrecer experiencias únicas.</p>
                          <ul style={{ listStyle: "none", padding: 0 }}>
                            <li><a href="https://front.probet593.com/" target="_blank" rel="noopener noreferrer">Probet 593</a> - Plataforma de apuestas en línea con una interfaz optimizada para usuarios.</li>
                            <li><a href="https://www.umwrecordingsinc.com/es" target="_blank" rel="noopener noreferrer">UMW Recordings Inc.</a> - Sitio web para una compañía musical con integración de contenido dinámico.</li>
                          </ul>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
