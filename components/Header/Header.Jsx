import { Container, Row, Col, Navbar, Image } from 'react-bootstrap';
import Link from 'next/link';

import SearchFilter from './SearchFilter';
import Navigation from './Navigation';

function Header(props) { 
  return (
    <div className="bg-white shadow-sm fixed-top">
      <Container>
        <Row>
          <Col>
            <Navbar bg="white" expand="md" className="pl-0 pr-0">
              <Link href="/">
                <a className="navbar-brand">
                  <Image fluid src="./static/images/logo.png" />
                </a>
              </Link>
              <SearchFilter />
              <Navigation />
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;