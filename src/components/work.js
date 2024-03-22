import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import images
import home4 from "../assets/images/home/home-4.png";
import img1 from "../assets/images/user/img-1.jpg"
import img2 from "../assets/images/user/img-2.jpg"
import img3 from "../assets/images/user/img-3.jpg"
import img4 from "../assets/images/user/img-4.jpg"
import img5 from "../assets/images/user/img-5.jpg"
 
AOS.init({
  duration: 1800,
});


const work = () => {
  return (
    <React.Fragment>
    <section className="section work bg-light">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Como trabajamos</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="work-pra">
                <p className="text-muted"></p>
                <h4 className="my-4">PASOS</h4>
                <ul className="inline-item">
                  <li className="list-inline-item">
                  <i className="uil uil-envelope-minus"></i>
                    <h4 className="my-4">Definimos:</h4>
                    <p className="text-muted">Primero nos reunimos para debatir sobre los detalles de su proyecto y establecer objetivos.</p>
                  </li>
                  <li className="list-inline-item">
                  <i class="uil uil-palette"></i>
                    <h4 className="my-4">Desarrollo y diseño:</h4>
                    <p className="text-muted">Desarrollamos y diseñamos su sitio web a su gusto.</p>
                  </li>
                  <li className="list-inline-item">
                  <i class="uil uil-setting"></i>
                    <h4 className="my-4">Perfeccionamos:</h4>
                    <p className="text-muted">Ajustamos y perfeccionamos cada detalle hasta que quede un sitio web increible.</p>
                  </li>
                  {/* <li className="list-inline-item">
                    <i className="uil uil-heart-alt"></i>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.</p>
                  </li> */}
                </ul>
              </div>
            </Col>
            <Col lg={6} data-aos="fade-right">
              <div className="testimonial-contaent">
                <div className="testimonial-right">
                  <div className="testimonial-circle">
                    <div className="media">
                      <img src={home4} className="img-fluid" alt="" />
                    </div>
                    <span className="ring1 animate-v2">
                      <img src={img1} className="img-fluid" alt="" />
                    </span>
                    <span className="ring2 animate-v3">
                      <img src={img2} className="img-fluid" alt="" />
                    </span>
                    <span className="ring3 animate-v2">
                      <img src={img3} className="img-fluid" alt="" />
                    </span>
                    <span className="ring4 animate-v3">
                      <img src={img4} className="img-fluid" alt="" />
                    </span>
                    <span className="ring5 animate-v2">
                      <img src={img5} className="img-fluid" alt="" />
                    </span>
                    <span className="ring6 animate-v3"></span>
                    <span className="ring7 animate-v2"></span>
                    <span className="ring8 animate-v3"></span>
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

export default work;