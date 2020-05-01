import { useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Slider from 'react-slick';

import VideoPlayer from '../Modal/VideoPlayer';

function TestimonialSlider( props ) {
  const [modal, setModal] = useState({
    isActive: false,
    slug: ''
  });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const testimonials = props.data;

  return (
    <div className="Testimonial-Slider">
      <Slider {...settings}>
        {
          testimonials.map(testimonial => (
            <div key={testimonial.id}>
              <Row>
                <Col md={6}>
                  <div className="Testimonial-Slider__InnerBox d-flex align-items-center h-100">
                    <div className="d-block">
                      <p className="Testimonial-Comment">{testimonial.comment}</p>
                      <p className="Testimonial-Comment__Client">- {testimonial.name}</p>
                      <p className="Testimonial-Comment__Profession">{testimonial.profession}</p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  {
                    testimonial.video !== '' && testimonial.video !== null ?
                      <div 
                        className="Testimonial-Banner Testimonial-Banner__Video d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: `url(./static/images/testimonials/${testimonial.image})` }}
                        onClick={() => setModal({ isActive: true, slug: testimonial.video })}
                      >
                        <Image src="./static/images/play-btn.svg" className="Testimonial-Banner__Video--PlayBtn" />
                      </div> :
                      <div 
                        className="Testimonial-Banner d-flex justify-content-center align-items-center"
                        style={{ backgroundImage: `url(./static/images/testimonials/${testimonial.image})` }}
                      ></div>
                  }
                </Col>
              </Row>
            </div>
          ))
        }
      </Slider>
      <VideoPlayer
        show={modal.isActive}
        onHide={() => setModal({ isActive: false, slug: '' })}
        videoUrl={modal.slug}
      />
    </div>
  );
}

export default TestimonialSlider;