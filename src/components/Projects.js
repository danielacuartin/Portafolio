import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import { ProjectCard3 } from "./ProjectCard3";
import projImg1 from "../assets/img/Programacion/1.png";
import projImg2 from "../assets/img/Programacion/2.png";
import projImg3 from "../assets/img/Programacion/3.png";
import projImg4 from "../assets/img/Programacion/4.png";
import projImg5 from "../assets/img/Programacion/5.png";
import projImg6 from "../assets/img/Programacion/6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      ProjectCard3
    },
   
   
  ];
  const projects2 = [
    {
      ProjectCard2
    },
  ];
  const projects3 = [
    {
      title: "Inicio (Tienda de ropa CARA)",
      description: "Vainilla",
      imgUrl: projImg1,
    },
    {
      title: "Shop (Tienda de ropa CARA)",
      description: "Vainilla",
      imgUrl: projImg2,
    },
    {
      title: "Banners (Tienda de ropa CARA)",
      description: "Vainilla",
      imgUrl: projImg3,
    },
    {
      title: "Pokedex inicio",
      description: "React",
      imgUrl: projImg4,
    },
    {
      title: "To do list",
      description: "Vainilla",
      imgUrl: projImg5,
    },
    {
      title: "Pokedex resultados",
      description: "React",
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
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <br/> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Diseño</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Ilustración</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Programación</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Desde branding y diseño de logotipos hasta material promocional y diseño de interfaces, mi enfoque se centra en transmitir mensajes claros y atractivos a través de una estética cuidadosamente elaborada. Explora mi trabajo y descubre cómo el diseño puede transformar la forma en que percibimos y nos relacionamos con el mundo.</p>
                      <Row>
                        {
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard3
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p> Soy una artista especializada en capturar la esencia de cada individuo y transformarla en ilustraciones únicas y memorables. Ya sea que busques un retrato personalizado, un héroe de fantasía o un avatar digital, estoy aquí para dar vida a tus ideas y brindarte un personaje que refleje tu identidad y personalidad. Explora mi trabajo y déjate sorprender por la combinación de creatividad y detalle en cada ilustración.</p>
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard2
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> Desde el diseño de la interfaz hasta la implementación del código, mi enfoque se centra en brindar soluciones intuitivas y optimizadas que impulsen el éxito en línea de mis clientes. Explora mi trabajo y descubre cómo puedo llevar tu presencia en la web al siguiente nivel.</p>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
