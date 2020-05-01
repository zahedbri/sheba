import { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AppContext from '../AppContext';
import TestimonialSlider from './TestimonialSlider';

function Testimonial( props ) {
  const { testimonials } = useContext(AppContext);

  if (testimonials.length > 0) {
    return (
      <div className="Testimonial">
        <Container>
          <Row>
            <Col md={12}>
              <p className="RegularParagraph">Some happy faces</p>
              <h3 className="SectionHeading">Real Happy Customers, Real Stories</h3>
            </Col>
            <Col md={12}>
              <TestimonialSlider data={testimonials}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  return null;
}

export default Testimonial;