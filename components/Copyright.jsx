import { Container, Row, Col } from 'react-bootstrap';

function Copyright() {
  return (
    <div className="Footer-Copyright">
      <Container>
        <Row>
          <Col>
            <p className="text-center mb-0">
              Copyright &copy; {new Date().getFullYear()} Sheba Platform Limited | All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Copyright;