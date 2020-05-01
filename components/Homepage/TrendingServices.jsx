import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppContext from '../AppContext';
import ServiceSlider from './ServiceSlider';

function TrendingServices(props) {
  const { trending } = useContext(AppContext);

  if (trending.length > 0) {
    return (
      <div className="TrendingServices">
        <Container>
          <Row>
            <Col>
              <h2 className="TrendingServices-Heading">Trending</h2>
              <ServiceSlider data={trending} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  return null;
}

export default TrendingServices;