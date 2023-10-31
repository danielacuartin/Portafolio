import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCardCer";
import Logo10 from "../assets/img/Certificado/1.jpg";
import Logo11 from "../assets/img/Certificado/2.jpg";
import Logo12 from "../assets/img/Certificado/3.jpg";
import Logo13 from "../assets/img/Certificado/4.jpg";
import Logo14 from "../assets/img/Certificado/5.jpg";
import Logo15 from "../assets/img/Certificado/6.jpg";
import Logo16 from "../assets/img/Certificado/7.jpg";
import Logo17 from "../assets/img/Certificado/8.jpg";
import Logo18 from "../assets/img/Certificado/9.jpg";
import Logo19 from "../assets/img/Certificado/10.jpg";
import Logo20 from "../assets/img/Certificado/11.jpg";
import Logo21 from "../assets/img/Certificado/12.jpg";
import Logo22 from "../assets/img/Certificado/13.jpg";
import Logo23 from "../assets/img/Certificado/14.jpg";
import Logo24 from "../assets/img/Certificado/15.jpg";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificados = () => {

 
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
      imgUrl: Logo14,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo15,
    }, {
      title: "",
      description: "",
      imgUrl: Logo16,
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
    
  ];
  // const projects2 = [
  //   {
  //     title: "",
  //     description: "",
  //     imgUrl: Logo10,
  //   },
  //   {
  //     title: "",
  //     description: "",
  //     imgUrl: Logo11,
  //   },
  //   {
  //     title: "",
  //     description: "",
  //     imgUrl: Logo12,
  //   },
  //   {
  //     title: "",
  //     description: "",
  //     imgUrl: Logo13,
  //   },
  //   {
  //     title: "",
  //     description: "",
  //     imgUrl: Logo14,
  //   },
  //   {
  //     title: "",
  //     description: "",
  //     imgUrl: Logo15,
  //   }, {
  //     title: "",
  //     description: "",
  //     imgUrl: Logo16,
  //   },
    
  // ];
  const projects3 = [
    {
      title: "",
      description: "",
      imgUrl: Logo19,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo20,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo21,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo22,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo23,
    },
    {
      title: "",
      description: "",
      imgUrl: Logo24,
    },
 
  
    
    
  ];



  return (
    <section className="project" id="Certificados">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Certificados</h2>
               <br/> 
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills nav-pills2 mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Diseño</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="second">Marketing</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="third">Program.</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p> Con certificaciones destacadas en diseño, he perfeccionado mi capacidad para crear soluciones visuales impactantes y funcionales. </p>
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
                    {/* <Tab.Pane eventKey="second">
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
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="third">
                      <p>Respaldado por una sólida formación y certificaciones clave en el ámbito de la programación, he demostrado un compromiso firme con la excelencia técnica y la innovación. </p>
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
