import React from 'react'
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';


// import Images
import team1 from "../assets/images/team/team-1.jpg"
import team2 from "../assets/images/team/team-2.jpg"
import team3 from "../assets/images/team/team-3.jpg"
import team4 from "../assets/images/team/team-4.jpg"
import appStore from "../assets/images/img-appstore.png"
import googleplay from "../assets/images/img-googleplay.png"

const Team = () => {
  return (
    <React.Fragment>
      <section className="section team" id="team">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Nuestro equipo</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={3} md={6}>
              <div className="team-box">
                <Row className="justify-content-end">

                </Row>
              </div>
            </Col>

            <Col lg={12}>
              <div className="tab-container effectTab-header" id="style_10">
                <div className="wrapper">
                  <Row>
                    <div className="col-12 tab">
                      <Row>
                        <Col lg={3} sm={6} className="box-tab">
                          <div className="effect effect-ten">
                            <img src={team1} className="img-fluid" alt="" />
                            <div className="tab-text">
                              <h2>Francisco Balcarce Aguirre</h2>
                              <p>Web Designer</p>
                              <div className="icons-block">
                                <Link to="#" className="social-icon-1">
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                                <Link to="#" className="social-icon-2">
                                  <i className="mdi mdi-linkedin"></i>
                                </Link>
                                <Link to="#" className="social-icon-3">
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6} className="box-tab hide">
                          <div className="effect effect-ten">
                            <img src={team2} className="img-fluid" alt="" />
                            <div className="tab-text">
                              <h2>Emmanuel Cardozo</h2>
                              <p>Marketing</p>
                              <div className="icons-block">
                                <Link to="#" className="social-icon-1">
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                                <Link to="#" className="social-icon-2">
                                  <i className="mdi mdi-linkedin"></i>
                                </Link>
                                <Link to="#" className="social-icon-3">
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} sm={6} className="box-tab hide">
                          <div className="effect effect-ten">
                            <img src={team3} className="img-fluid" alt="" />
                            <div className="tab-text">
                              <h2>Florencia</h2>
                              <p></p>
                              <div className="icons-block">
                                <Link to="#" className="social-icon-1">
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                                <Link to="#" className="social-icon-2">
                                  <i className="mdi mdi-linkedin"></i>
                                </Link>
                                <Link to="#" className="social-icon-3">
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col>
                        {/* <Col lg={3} sm={6} className="box-tab hide">
                          <div className="effect effect-ten">
                            <img src={team4} className="img-fluid" alt="" />
                            <div className="tab-text">
                              <h2>Sandra Kraj</h2>
                              <p>HR</p>
                              <div className="icons-block">
                                <Link to="#" className="social-icon-1">
                                  <i className="mdi mdi-facebook"></i>
                                </Link>
                                <Link to="#" className="social-icon-2">
                                  <i className="mdi mdi-linkedin"></i>
                                </Link>
                                <Link to="#" className="social-icon-3">
                                  <i className="mdi mdi-twitter"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </Col> */}
                      </Row>
                    </div>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="section cta bg-light" id="cta">
        <Container className="position-relative">
          <Row>
            <Col xl={6} lg={10}>
              <div className="py-5">
                <h1 className="display-4">Build Your ideal workspace today.</h1>
                <p className="text-muted mt-3 f-18">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure distinctio vero facilis numquam sapiente!
                  Eaque inventore eveniet repellendus quod maiores nulla.
                </p>
                <div className="d-flex mt-4">
                  <div className="app-store">
                    <Link to="#">
                      <img src={appStore} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="googleplay">
                    <Link to="#">
                      <img src={googleplay} alt="" className="img-fluid ms-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="cta-phone-image">
                {/* <img src="images/home/home-4.png" alt="" class=" img-fluid"> }
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </React.Fragment>
  )
}

export default Team;