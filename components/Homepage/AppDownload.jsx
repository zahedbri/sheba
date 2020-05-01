import { useState } from 'react';
import { Container, Row, Col, Image, Form, InputGroup, Button } from 'react-bootstrap';

import { handleNumbersOnly } from '../../utils';

function AppDownload() {
  const [number, setNumber] = useState('');

  const handleMessage = () => {
    console.log(number);
  }

  return (
    <div className="AppDownload">
      <Container>
        <Row>
          <Col md={5}>
            <Image fluid src="./static/images/app-banner.jpg" />
          </Col>
          <Col md={7}>
            <div className="d-flex align-items-center w-100 h-100">
              <div className="h-auto d-inline-block">
                <p className="RegularParagraph">Download our app</p>
                <h3 className="SectionHeading mb-3">Any Service, Any Time, Anywhere.</h3>
                <p className="DefaultParagraph">Give us your mobile number. You’ll get an SMS with the app download link.</p>
                <div className="AppDownload-SendApp">
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="sr-only">Phone number</Form.Label>
                    <InputGroup>
                      <Form.Control
                        size="lg" 
                        type="text" 
                        maxLength={11}
                        placeholder="Type your mobile number" 
                        onKeyDown={handleNumbersOnly}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                      <InputGroup.Prepend>
                        <Button
                          size="lg"
                          variant="primary"
                          disabled={number.length < 11}
                          onClick={handleMessage}
                        >Get the app</Button>
                      </InputGroup.Prepend>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="d-block w-100 mt-4">
                  <a href="!#" className="mr-3">
                    <Image fluid src="./static/images/app-store.png" className="AppDownload-AppIcon" />
                  </a>
                  <a href="!#">
                    <Image fluid src="./static/images/play-store.png" className="AppDownload-AppIcon" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppDownload;