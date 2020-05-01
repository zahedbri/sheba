import { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import VideoPlayer from '../Modal/VideoPlayer';

function ServiceProcess(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="ServiceProcess">
      <Container>
        <Row>
          <Col md={12}>
            <p className="RegularParagraph">How it works</p>
            <h3 className="SectionHeading">Easiest way to get a service</h3>
          </Col>
          <Col md={12}>
            <Row>
              <Col md={6}>
                <div 
                  className="ServiceProcess-Banner ServiceProcess-Banner__Video d-flex justify-content-center align-items-center mb-4 mb-md-0"
                  style={{ backgroundImage: 'url(./static/images/process-thumbnail.jpg)' }}
                  onClick={() => setModalShow(true)}
                >
                  <Image src="./static/images/play-btn.svg" className="ServiceProcess-Banner__Video--PlayBtn" />
                </div>
                <VideoPlayer
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  videoUrl="https://youtu.be/OMW0BfVYSOI"
                />
              </Col>
              <Col md={6}>
                <ul className="ServiceProcess-List">
                  <li className="ServiceProcess-List__Step">
                    <span>1</span>
                    <h4 className="ServiceProcess-List__Step--Header">
                      Select the Service
                    </h4>
                    <p className="ServiceProcess-List__Step--Text">
                      Pick the service you are looking for- from the website or the app.
                    </p>
                  </li>
                  <li className="ServiceProcess-List__Step">
                    <span>2</span>
                    <h4 className="ServiceProcess-List__Step--Header">
                      Pick your schedule
                    </h4>
                    <p className="ServiceProcess-List__Step--Text">
                      Pick your convenient date and time to avail the service. Pick the service provider based on their rating.
                    </p>
                  </li>
                  <li className="ServiceProcess-List__Step">
                    <span>3</span>
                    <h4 className="ServiceProcess-List__Step--Header">
                      Place Your Order &amp; Relax
                    </h4>
                    <p className="ServiceProcess-List__Step--Text">
                      Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.
                    </p>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceProcess;