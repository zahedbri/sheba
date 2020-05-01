import { useContext, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

import AppContext from '../AppContext';

function Navigation() {
  const { isMobile } = useContext(AppContext);

  return (
    <Fragment>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {
            isMobile ?
              <Fragment>
                <Link href="!#">
                  <a className="nav-link">Home</a>
                </Link>
                <Link href="!#">
                  <a className="nav-link">All Service</a>
                </Link>
                <Link href="!#">
                  <a className="nav-link">Service Orders</a>
                </Link>
                <Link href="!#">
                  <a className="nav-link">Login</a>
                </Link>
              </Fragment> :
              <Fragment>
                <Link href="!#">
                  <a className="nav-link">All Service</a>
                </Link>
                <Link href="!#">
                  <a className="nav-link">Login</a>
                </Link>
              </Fragment>
          }
        </Nav>
      </Navbar.Collapse>
    </Fragment>
  );
}

export default Navigation;