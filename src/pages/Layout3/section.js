import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';


// import images
import home1 from "../../assets/images/home/home1-1.png"

AOS.init({
  duration: 1800,
});

const section = () => {

  return (
    <React.Fragment>
      <div className="section home-3" id="home">
        <svg style={{ display: "none" }}>

          <symbol id="circle" width="20px" height="20px" viewBox="0 0 20 20">
            <circle fill="none" stroke-width="2" stroke-miterlimit="10" cx="10" cy="10" r="7.699" />
          </symbol>

          <symbol id="triangle" width="20px" height="20px" viewBox="0 0 20 20">
            <polygon fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              stroke-miterlimit="10" points="
              10.5,2.707 14.711,10.002 18.922,17.294 10.5,17.294 2.078,17.294 6.289,10.002 " />
          </symbol>

          <symbol id="square" width="20px" height="20px" viewBox="0 0 20 20">
            <rect x="3.5" y="3.5" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              stroke-miterlimit="10" width="13" height="13" />
          </symbol>

          <symbol id="cross" width="20px" height="20px" viewBox="0 0 20 20">
            <g>
              <line fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="10" x1="4.666" y1="10" x2="15.334" y2="10" />
              <line fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                stroke-miterlimit="10" x1="10" y1="4.666" x2="10" y2="15.334" />
            </g>
          </symbol>
        </svg>

        <div className="stage">

          <svg width="20" height="20">
            <use href="#triangle" />
          </svg>

          <svg width="20" height="20">
            <use href="#circle" />
          </svg>

          <svg width="20" height="20">
            <use href="#square" />
          </svg>

          <svg width="20" height="20">
            <use href="#cross" />
          </svg>

          <svg width="20" height="20">
            <use href="#triangle" />
          </svg>

          <svg width="20" height="20">
            <use href="#circle" />
          </svg>

          <svg width="20" height="20">
            <use href="#square" />
          </svg>

          <svg width="20" height="20">
            <use href="#cross" />
          </svg>

        </div>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={7}>
              <div className="home-heading">
                <h3 className="text-uppercase">Appspery</h3>
                <h4 className="home-title">The Perfect Choice for your Mobile App Presentation</h4>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore.</p>
                <ul className="list-unstyled mb-0 mt-3 social-icon">
                  <li className="list-inline-item">
                    <div className="aos-init aos-animate" data-aos="fade-up" >
                      <div className="icon-text">
                        <div className="icon android">
                          <span> <i className="uil uil-android"> </i></span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="aos-init aos-animate" data-aos="fade-up">
                      <div className="icon-text">
                        <div className="icon apple">
                          <span> <i className="uil uil-apple"> </i></span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-inline-item">
                    <div className="aos-init aos-animate" data-aos="fade-up" >
                      <div className="icon-text">
                        <div className="icon instagram">
                          <span> <i className="uil uil-windows"> </i></span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <div className="col-md-5">
              <img src={home1} alt="" className="img-fluid" />
            </div>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default section;
