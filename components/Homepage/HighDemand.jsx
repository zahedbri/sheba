import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppContext from '../AppContext';
import ServiceSlider from './ServiceSlider';

function HighDemand(props) {
  const { highDemand } = useContext(AppContext);

  if (highDemand.length > 0) {
    return (
      <div className="HighDemand">
        <Container>
          <Row>
            <Col>
              <h2 className="HighDemand-Heading">Current High Demand Services</h2>
              <ServiceSlider data={highDemand} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  return null;
}

export default HighDemand;