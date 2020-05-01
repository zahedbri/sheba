import { useContext } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import AppContext from '../AppContext';

function FeaturedCategoriesMobile(props) {
  const { categories } = useContext(AppContext);

  if (categories.length > 0) {
    return (
      <div className="FeaturedCategoriesMobile">
        <Container>
          <Row>
            {
              categories.map(category => (
                <Col xs={3} key={category.id}>
                  <Image 
                    fluid 
                    alt={category.title}
                    className="FeaturedCategoriesMobile-Image" 
                    src={`./static/images/categories/${category.image}`} 
                  />
                  <h5 className="FeaturedCategoriesMobile-Title">{category.title}</h5>
                </Col>
              ))
            }
            <Col xs={3}>
              <span className="FeaturedCategoriesMobile-ViewAll">4+</span>
              <h5 className="FeaturedCategoriesMobile-Title">View All</h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return null;
}

export default FeaturedCategoriesMobile;