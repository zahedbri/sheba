import { useContext, useState, useEffect } from 'react';
import { Button, Image } from 'react-bootstrap';

import AppContext from '../AppContext';
import HeroSearch from '../Homepage/HeroSearch';

function SearchFilter(props) {
  const { isMobile } = useContext(AppContext);
  const [scrollY, setScrollY] = useState(0);

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
        <Button
          variant="primary"
        ><i className="material-icons">search</i></Button>
        <Button
          variant="primary"
        ><Image src="./static/images/location-icon.svg" /></Button>
      </div>
    );
  }

  if (scrollY > 321) return <HeroSearch />;

  return null;
}

export default SearchFilter;