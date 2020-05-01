import { Container, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';

function OfficeSolution(props) {
  return (
    <div className="OfficeSolution">
      <Container>
        <Row>
          <Col md={6}>
            <Image fluid src="./static/images/service-banner.jpg" className="rounded" />
          </Col>
          <Col md={6}>
            <p className="RegularParagraph">Manage office</p>
            <h3 className="SectionHeading">Get Service for Your Office</h3>
            <p className="DefaultParagraph">Sheba.xyz for business helps your office to get the necessary services, from the online platform- on a monthly basis.</p>
            <ul className="OfficeSolution-SectionList">
              <li>
                <i className="material-icons">done</i> Order Office Support
              </li>
              <li>
                <i className="material-icons">done</i> Procure Online
              </li>
              <li>
                <i className="material-icons">done</i> Manage Office
              </li>
            </ul>
            <Link href="!#">
              <a className="btn btn-outline-primary btn-lg BtnRegularFont">Visit sBusiness</a>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default OfficeSolution;