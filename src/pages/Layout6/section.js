import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';


const section = () => {
  return (
    <React.Fragment>
      <section className="home-6" id="home">
        <div className="bg-overlay"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="home-heading text-center">
                <h1 className="home-title">Capture and share your best memories with appsparry</h1>
                <p className="home-desc py-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.</p>
                <div className="btns-group mb-25">
                  <button className="btn bg-gradiant">Free Download</button>
                  <button className="btn bg-gradiant" style={{ marginLeft: '4px' }}>Request demo</button>
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