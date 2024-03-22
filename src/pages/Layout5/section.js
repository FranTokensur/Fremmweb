import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import Typewriter from "typewriter-effect";


// import Images
import home1 from "../../assets/images/home/home1-5.png"
import home2 from "../../assets/images/home/home2-5.png"
import home3 from "../../assets/images/home/home3-5.png"
import home4 from "../../assets/images/home/home4-5.png"
import home5 from "../../assets/images/home/home5-5.png"
import home6 from "../../assets/images/home/home6-5.png"
import { Link } from 'react-router-dom';


const section = () => {
  return (
    <React.Fragment>
      <section className="home-5" id="home">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className="home-heading">
                <h3 className="home-title">Hello Android !</h3>
                <h3 className="sub-title mb-3">
                  Start your Successful Business With {' '}
                  <span className="typewrite text-primary d-none d-sm-inline-block"
                    data-period="2000">
                    <Typewriter
                      options={{
                        strings: ['Appspery'],
                        autoStart: true,
                        loop: true,
                      }} />
                    <span className="wrap"></span>
                  </span>
                </h3>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                  labore et dolore aliqua.
                </p>
                <ul className="mt-4 list-unstyled mb-0 align-items-center">
                  <li className="list-inline-item">
                    <Link to="#" className="btn bg-gradiant me-2">
                      Purchase Theme
                    </Link>
                  </li>
                  <li className="list-inline-item text-muted me-2 h6"> Or</li>
                  <li className="list-inline-item">
                    <Link to="#" className="text-primary fw-bold"> Learn More
                      
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <div className="home-img">
                <img src={home1} className="primary-img" alt="" />
                <img src={home2} className="blue-img" alt="" />
                <img src={home3} className="warning-img" alt="" />
                <img src={home4} className="orange-img" alt="" />
                <img src={home5} className="purple-img" alt="" />
                <img src={home6} className="info-img" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default section;