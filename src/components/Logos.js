import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Logo1 from "../assets/img/Logos/1.png";
import Logo2 from "../assets/img/Logos/2.png";
import Logo3 from "../assets/img/Logos/3.png";
import Logo4 from "../assets/img/Logos/4.png";
import Logo5 from "../assets/img/Logos/5.png";
import Logo6 from "../assets/img/Logos/6.png";
import Logo7 from "../assets/img/Logos/7.png";
import Logo8 from "../assets/img/Logos/8.png";
import Logo9 from "../assets/img/Logos/9.png";
import Logo10 from "../assets/img/Logos/10.png";
import Logo11 from "../assets/img/Logos/11.png";
import Logo12 from "../assets/img/Logos/12.png";
import Logo13 from "../assets/img/Logos/13.png";
import Logo14 from "../assets/img/Logos/14.png";
import Logo15 from "../assets/img/Logos/15.png";
import Logo16 from "../assets/img/Logos/16.png";
import Logo17 from "../assets/img/Logos/17.png";
import Logo18 from "../assets/img/Logos/18.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Logos = () => {

  const projects3 = [
    {
      title: "",
      description: "",
      imgUrl: Logo1,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo2,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo3,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo4,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo5,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo6,
    },
  ];
  const projects2 = [
    {
      title: "",
      description: "",
      imgUrl: Logo7,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo8,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo9,
    }
  ];
  const projects1 = [
    {
      title: "",
      description: "",
      imgUrl: Logo10,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo11,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo12,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo13,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo17,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo18,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo16,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo14,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo15,
    },
  ];



  return (
    <section className="project" id="Logos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Programas</h2>
               <br/> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Diseño</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Marketing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Program.</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p> Utilizo herramientas como Adobe Photoshop, Illustrator e InDesign para crear diseños gráficos impresionantes, ilustraciones cautivadoras y material promocional impactante. Además, cuento con experiencia en software de edición de video como Adobe Premiere Pro y After Effects, permitiéndome dar vida a historias visuales envolventes y efectos especiales cautivadores. </p>
                      <Row>
                        {
                          projects1.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                      <p>Como profesional de marketing digital, utilizo una amplia gama de programas y plataformas para optimizar campañas publicitarias, analizar datos y crear contenido relevante. Manejo herramientas como Google Analytics, Google Ads y Meta, entre otros, para impulsar el crecimiento, aumentar la visibilidad en línea y conectar de manera efectiva con el público objetivo.</p>
                      <Row>
                        {
                          projects2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <p>Tengo experiencia en lenguajes de programación como HTML, CSS y JavaScript, así como en frameworks como React, puedo crear sitios web interactivos y modernos. Además, utilizo herramientas como Visual Studio Code, y GitHub para optimizar mi flujo de trabajo y colaboración.</p>
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
