import React from 'react'
import {
  Container,
  Row,
  Col,
  Badge
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Autoplay } from "swiper";


// import images
import img1 from "../../assets/images/testi/ss/img1.png"
import img2 from "../../assets/images/testi/ss/img2.png"
import img3 from "../../assets/images/testi/ss/img3.png"
import img4 from "../../assets/images/testi/ss/img4.png"
import img5 from "../../assets/images/testi/ss/img5.png"
import img6 from "../../assets/images/testi/ss/img6.png"
import img7 from "../../assets/images/testi/ss/img7.png"
import img8 from "../../assets/images/testi/ss/img8.png"



const section = () => {
  return (
    <React.Fragment>
      <section className="home-2 home-slider" id="home">
        <div className="box">
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
        </div>
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col md={6}>
              <div className="home-heading">
                <Badge bg="soft-primary" className="rounded-pill mb-3">Android Device</Badge>
                <h3>Get Fast & Secure Access To All Your Favorite Content</h3>
                <p className="home-title"></p>
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut labore et dolore.</p>
                <div className="btns-group mb-25">
                  <button to="#" className="btn bg-gradiant">Free Download</button>
                  <button to="#" className="btn bg-outline-gradiant" style={{ marginLeft: '4px' }}>Buy Only for $3.99</button>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div className="swiper swiper-container homeSwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    loop={true}
                    effect={"coverflow"}
                    spaceBetween={50}
                    centeredSlides={true}
                    slidesPerView={2}
                    speed={5000}
                    autoplay={{
                      delay: 500,
                      disableOnInteraction: false,
                    }}
                    // modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img1} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img1} className="lightbox img-fluid">
                            <img src={img1} alt="" className='img-fluid' />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img2} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img2} className="lightbox img-fluid">
                            <img src={img2} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img3} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img3} className="lightbox img-fluid">
                            <img src={img3} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img4} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img4} className="lightbox img-fluid">
                            <img src={img4} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img5} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img5} className="lightbox img-fluid">
                            <img src={img5} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img6} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img6} className="lightbox img-fluid">
                            <img src={img6} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img7} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img7} className="lightbox img-fluid">
                            <img src={img7} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img7} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img7} className="lightbox img-fluid">
                            <img src={img7} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide border-radius">
                      <div className="app-screenshot-item text-center d-flex justify-content-center">
                        <div className="app-screenshot-overlayer">
                          <Link className="mfp-image img-fluid" to={img8} title=""></Link>
                        </div>
                        <div className="screenshot-img">
                          <Link to={img8} className="lightbox img-fluid">
                            <img src={img8} alt="" className="img-fluid" />
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container fluid>
        <Row>
          <div className="mobile">
            <Link to="#about">
              <span className="phone">
                <i className="mdi mdi-cellphone"></i>
              </span>
            </Link>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default section;