import { useContext, useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';
import Link from 'next/link';

import AppContext from '../AppContext';
import HeroSearch from '../Search/HeroSearch';
import LocationPicker from '../Modal/LocationPicker';

function SearchFilter(props) {
  const { isMobile } = useContext(AppContext);
  const [scrollY, setScrollY] = useState(0);
  const [modalShow, setModalShow] = useState(false);

  function scrollHeight() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', scrollHeight);
    }
    watchScroll();
    return () => {
      window.removeEventListener('scroll', scrollHeight);
    };
  });

  if (isMobile) {
    return (
      <div className="MobileSearch">
        <Link href="/search">
          <a className="btn btn-primary">
            <i className="material-icons">search</i>
          </a>
        </Link>
        <Button
          variant="primary"
          onClick={() => setModalShow(true)}
        ><Image src="./static/images/location-icon.svg" /></Button>
        <LocationPicker 
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    );
  }

  if (scrollY > 321) return <HeroSearch />;

  return null;
}

export default SearchFilter;