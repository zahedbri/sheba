import { Container, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';

function BecomePartner(props) {
  return (
    <div className="BecomePartner">
      <Container>
        <Row>
          <Col md={6}>
            <p className="RegularParagraph">Manage business</p>
            <h3 className="SectionHeading">Manage Business, Through Fingertips.</h3>
            <p className="DefaultParagraph">sManager is the complete business solution for the MSMEs in Bangladesh which is designed to work as a smart business assistant.</p>
            <ul className="BecomePartner-SectionList">
              <li>
                <i className="material-icons">done</i> Track Sales &amp; Dues
              </li>
              <li>
                <i className="material-icons">done</i> Digital Collection
              </li>
              <li>
                <i className="material-icons">done</i> Micro-loan for Business Growth
              </li>
            </ul>
            <Link href="!#">
              <a className="btn btn-outline-primary btn-lg BtnRegularFont">Visit sManager</a>
            </Link>
          </Col>
          <Col md={6}>
            <Image fluid src="./static/images/partner-banner.jpg" className="rounded" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BecomePartner;