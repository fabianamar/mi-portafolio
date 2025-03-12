import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Habilidades y Estudios</h2>
                        <p>Estudiante de Desarrollo de Software con enfoque en Inteligencia Artificial en el Instituto Superior Tecnológico “Los Andes”, ubicado en Santo Domingo, Ecuador. Soy una persona apasionada por el aprendizaje continuo y tengo experiencia en diversas tecnologías como PHP, JavaScript, Laravel, Wordpress y seguridad informática.

Mi experiencia profesional incluye el desarrollo y mantenimiento de sitios web, así como la implementación de aplicaciones web utilizando Laravel e Inertia. Además, he completado cursos especializados en ciberseguridad y tengo un gran interés en la creación de soluciones innovadoras en tecnología.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Desarrollo Web" />
                                <h5>Desarrollo Web</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Identidad de Marca" />
                                <h5>Identidad de Marca</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Diseño de Logos" />
                                <h5>Diseño de Logos</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Desarrollo Móvil" />
                                <h5>Desarrollo Móvil</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Imagen" />
    </section>
  );
}
