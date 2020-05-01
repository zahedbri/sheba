import { useContext } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Slider from 'react-slick';

import AppContext from '../AppContext';

function FeaturedCategories(props) {
  const { categories } = useContext(AppContext);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
    ]
  };

  if (categories.length > 0) {
    return (
      <div className="FeaturedCategories">
        <Container>
          <Row>
            <Col>
              <div className="FeaturedCategories-BoxWarp">
                <Slider {...settings}>
                  {
                    categories.map(category => (
                      <div key={category.id}>
                        <Button className="FeaturedCategories-Item">
                          <Image 
                            fluid 
                            alt={category.title}
                            className="FeaturedCategories-Item__Image" 
                            src={`./static/images/categories/${category.image}`} 
                          />
                          <p className="FeaturedCategories-Item__Title">{category.title}</p>
                        </Button>
                      </div>
                    ))
                  }
                  <div>
                    <Button className="FeaturedCategories-Item">
                      <Image 
                        fluid 
                        alt="All Services"
                        className="FeaturedCategories-Item__Image" 
                        src="./static/images/categories/07.svg"
                      />
                      <p className="FeaturedCategories-Item__Title">All Services</p>
                    </Button>
                  </div>
                </Slider>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  return null;
}

export default FeaturedCategories;