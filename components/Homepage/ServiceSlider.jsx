import { Image } from 'react-bootstrap';
import Slider from 'react-slick';
import Link from 'next/link';

function ServiceSlider(props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
    ]
  };
  const services = props.data;

  return (
    <div className="ServiceSlider">
      <Slider {...settings}>
        {
          services.map(service => (
            <div key={service.id}>
              <div className="ServiceSlider-Warp">
                <Link href="!#">
                  <a className="ServiceSlider-Item">
                    <Image 
                      fluid 
                      alt={service.title}
                      className="ServiceSlider-Item__Image shadow-sm"
                      src={`./static/images/services/${service.image}`} 
                    />
                    <p className="ServiceSlider-Item__Title">{service.title}</p>
                  </a>
                </Link>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  );
}

export default ServiceSlider;