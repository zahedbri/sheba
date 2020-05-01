import { Container, Row, Col, Image } from 'react-bootstrap';

function BoxItem( props ) {
  return (
    <Col xs={6}>
      <div className="HappyService-BoxWarp">
        <Image fluid src={`./static/images/${props.icon}`} className="pr-3" />
        <div className="HappyService-BoxTitle">{props.title}</div>
      </div>
    </Col>
  );
}

function HappyService(props) {
  return (
    <div className="HappyService">
      <Container>
        <Row>
          <Col md={12}>
            <p className="RegularParagraph">Why choose Us</p>
            <h3 className="SectionHeading">Happiness Guarantee</h3>
          </Col>
          <Col md={12}>
            <Row>
              <Col lg={5}>
                <Row className="align-items-center">
                  <BoxItem title="Background Checked" icon="usp-1.svg" />
                  <BoxItem title="24/7 Support" icon="usp-2.svg" />
                  <BoxItem title="Expert Professional" icon="usp-3.svg" />
                  <BoxItem title="Rework Assurance" icon="usp-4.svg" />
                </Row>
              </Col>
              <Col lg={7}>
                <div className="HappyService-Banner">
                  <Image fluid src="./static/images/happiness-banner.jpg" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HappyService;