import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppContext from '../AppContext';

function Counter(props) {
  const { counters } = useContext(AppContext);

  if (counters.length > 0) {
    return (
      <div className="Counter">
        <Container>
          <Row>
            {
              counters.map(counter => (
                <Col md={4} key={counter.id}>
                  <div className="Counter-Warp">
                    <h2 className="Counter-Number">{counter.count} +</h2>
                    <p className="Counter-Title">{counter.title}</p>
                  </div>
                </Col>
              ))
            }
          </Row>
        </Container>
      </div>
    );
  }
  
  return null;
}

export default Counter;