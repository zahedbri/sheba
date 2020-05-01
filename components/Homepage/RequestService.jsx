import { Container, Row, Col, Button, Image } from 'react-bootstrap';

function RequestService() {
  return (
    <div className="RequestService">
      <Container>
        <Row>
          <Col md={8}>
            <h3 className="RequestService-Heading">Can’t find your desired service? Let us know 24/7 in 16516.</h3>
            <div className="mt-3">
              <Button
                variant="primary"
                className="BtnRegularFont mr-3"
              >Request a Service</Button>
              <a 
                href="!#"
                className="btn btn-outline-primary BtnRegularFont"
              ><i className="material-icons RequestService-CallIcon">call</i> Call 16516</a>
            </div>
          </Col>
          <Col md={4}>
            <Image 
              fluid 
              className="RequestService-Banner"
              src="./static/images/service-banner.png" 
              alt="Request service" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RequestService;