import { useContext, Fragment } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Link from 'next/link';

import AppContext from '../AppContext';

function Footer() {
  const { isMobile } = useContext(AppContext);

  return (
    <div className="Footer-Widget">
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <Col md={6} lg={4}>
                <h5 className="Footer-Widget__Heading">Contact</h5>
                <p className="mb-1">16516</p>
                <p className="mb-2">info@sheba.xyz</p>
                <p className="mb-5 mb-md-0">
                  House #63 (1st Floor)<br />
                  Road #04, Block-C<br />
                  Banani, Dhaka 1213
                </p>
              </Col>
              {
                !isMobile &&
                  <Fragment>
                    <Col md={3} lg={4}>
                      <div className="d-none d-md-block">
                        <h5 className="Footer-Widget__Heading">Other pages</h5>
                        <ul className="Footer-Widget__Links">
                          <li>
                            <Link href="!#">
                              <a>Blog</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="!#">
                              <a>Terms of use</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="!#">
                              <a>Privacy Policy</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                    <Col md={3} lg={4}>
                      <div className="d-none d-md-block">
                        <h5 className="Footer-Widget__Heading">Company</h5>
                        <ul className="Footer-Widget__Links">
                          <li>
                            <Link href="!#">
                              <a>sManager</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="!#">
                              <a>sBusiness</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="!#">
                              <a>sDelivery</a>
                            </Link>
                          </li>
                          <li>
                            <Link href="!#">
                              <a>sBondhu</a>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Fragment>
              }
            </Row>
          </Col>
          <Col md={4}>
            <div className="text-md-right">
              <h5 className="Footer-Widget__Heading">Download our app</h5>
              <p>Tackle your to-do list wherever you are with our mobile app &amp; make your life easy.</p>
              <Row>
                <Col className="pr-1">
                  <a href="!#">
                    <Image fluid src="./static/images/app-store.png" />
                  </a>
                </Col>
                <Col className="pl-1">
                  <a href="!#">
                    <Image fluid src="./static/images/play-store.png" />
                  </a>
                </Col>
              </Row>
              <ul className="Footer-Widget__SocialLinks">
                <li>
                  <a href="!#">
                    <Image src="./static/images/facebook.svg" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <Image src="./static/images/linkedin.svg" />
                  </a>
                </li>
                <li>
                  <a href="!#">
                    <Image src="./static/images/instagram.svg" />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;