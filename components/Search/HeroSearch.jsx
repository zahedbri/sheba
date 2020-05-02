import { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Select from 'react-select';

import AppContext from '../AppContext';
import LocationPicker from '../Modal/LocationPicker';

function HeroSearch(props) {
  const { searchOptions } = useContext(AppContext);
  const [modalShow, setModalShow] = useState(false);
  
  return (
    <div className="HeroSearch">
      <div className="HeroSearch-LocationPicker">
        <Button
          type="button"
          className="HeroSearch-LocationPicker__Btn"
          onClick={() => setModalShow(true)}
        >
          <Image src="./static/images/location-icon.svg" /> Gulshan
        </Button>
        <LocationPicker 
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
      <div className="HeroSearch-Search">
        <Select
          className="HeroSelect"
          classNamePrefix="HeroSelect"
          placeholder="Find your service here e.g. AC, Car, Facial…" 
          options={searchOptions}
        />
        <Button
          variant="primary"
          className="HeroSearch-Search__Btn"
        ><i className="material-icons">search</i></Button>
      </div>
    </div>
  );
}

export default HeroSearch;