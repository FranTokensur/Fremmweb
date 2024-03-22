import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';


const Contact = () => {

  return (
    <React.Fragment>
      <section className="contact overflow-hidden" id="contact">
        <Container >
          <Row className="justify-content-center">
            <Col lg={12}>
              <div className="sec-hd">
                <span className="heading"></span>
                <h2 className="sec-title">Contactanos!</h2>
                <span className="heading"></span>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col lg={8}>
              <div className="contact-box">
                <div className="custom-form mt-4">
                  <form method="post" name="myForm">
                    <p id="error-msg" style={{ opacity: 1 }}> </p>
                    <div id="simple-msg"></div>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <input name="name" id="name" type="text"
                            className="form-control contact-form" placeholder= "Nombre"/>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="form-group">
                          <input name="email" id="email" type="email"
                            className="form-control contact-form" placeholder="Correo electrónico" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <div className="form-group">
                          <textarea name="comments" id="comments" rows="6"
                            className="form-control contact-form h-auto"
                            placeholder="Tu mensaje"></textarea>
                        </div>
                      </Col>
                    </Row>
                    <Row className="justify-content-center">
                      <div className="col-lg-6">
                        <div className="text-center">
                          <input type="submit" id="submit" name="send"
                            className="submitBnt btn btn-rounded bg-gradiant" value="Enviar mensaje"/>
                        </div>
                      </div>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="my-5 py-4 justify-content-center text-center">
            <Col md={4}>
              <div>
                <i className="mdi mdi-google-maps f-50 text-primary"></i>
                <h5 className="mb-1">Ubicación</h5>
                <p className="f-14 mb-0 text-muted">Pilar,Buenos Aires,Argentina</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-4 mt-lg-0">
                <i className="mdi mdi-email f-50 text-primary"></i>
                <h5 className="mb-1">Correo electrónico</h5>
                <p className="f-14 mb-0 text-muted">ad.analistamkt@gmail.com</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="mt-4 mt-lg-0">
                <i className="mdi mdi-phone f-50 text-primary"></i>
                <h5 className="mb-1">Telefono</h5>
                <p className="f-14 mb-0 text-muted">+54 9 11 2685-5118</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="position-relative">
          <div className="contact-map">
            <iframe className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105227.92337364984!2d-58.99930968145614!3d-34.49343690464024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9cb6643d2003%3A0xa8da0402f634b636!2sPilar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1711129292629!5m2!1ses!2sar"
              width="100%" height="450" title="myFrame" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Contact;