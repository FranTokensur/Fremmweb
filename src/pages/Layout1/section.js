import React from 'react'
import {
  Container,
  Row,
  Col,
  Badge,
} from 'react-bootstrap';

// import Images
import home1 from "../../assets/images/home/imagen-principal.png"
import home2 from "../../assets/images/home/imagen-principal.png"
// import { Link } from 'react-router-dom';


const section = () => {
  return (
    <React.Fragment>
      <section className="home-1 bg-home d-flex align-items-center bg-light" id="home" style={{ height: 'auto' }}>
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
              <div className="home-heading">
                <Badge bg="soft-primary" className="rounded-pill mb-3">Especialistas en diseño de paginas web</Badge>
                {/* <h2 className="home-title">FREMM WEB</h2> */}
                <p className="text-muted para-desc">En Fremm Web ofrecemos servicios de diseño web premium.</p>
                <p>Nos destacamos en el desarrollo de páginas web impactantes que están diseñadas para potenciar los resultados de nuestros clientes. Nuestro equipo está especializado en desarrollar soluciones personalizadas y diseños a medida que se adaptan a las necesidades específicas de cada cliente.</p>
                <ul className="mt-4 list-unstyled mb-0 align-items-center">
                  <li className="list-inline-item">
                    {/* <Button className="btn bg-gradiant me-2">
                      <i className="uil uil-envelope me-1"></i>
                      Request a Demo
                    </Button> */}
                  </li>
                  {/* <li className="list-inline-item text-muted me-2 h6">Or</li> */}
                  <li className="list-inline-item">
                    {/* <Link to="#" className="text-primary fw-bold">
                      Try it for Free <i className="uil uil-angle-right-b align-middle"></i>
                    </Link> */}
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={12}>
              <div className="home-circle">
                <div className="position-relative">
                  <div className="home-img">
                    <img src={home1} className="img-fluid light-img mx-auto" alt="" />
                    <img src={home2} className="img-fluid dark-img mx-auto" alt="" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default section;