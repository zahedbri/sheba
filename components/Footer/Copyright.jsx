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
            <p className="text-center text-secondary mb-0">
              Please note, this is a rebuilt website of sheba.xyz using the different technologies and it is developed for as a project work. It was not built for selling purposes. Developed by Sonjoy Datta. <a href="https://www.linkedin.com/in/sonjoydatta" target="_blank">LinkdIn</a> | <a href="https://github.com/sonjoydatta" target="_blank">GitHub</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Copyright;