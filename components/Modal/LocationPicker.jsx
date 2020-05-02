import { Modal, Button, Image } from 'react-bootstrap';

function LocationPicker( props ) {
  const { ...rest } = props;

  return (
    <Modal
      {...rest}
      centered
      size="lg"
      dialogClassName="LocationPicker"
      aria-labelledby="LocationPickerModal"
    >
      <Modal.Header 
        className="shadow-sm" 
        closeButton
      >
        <Button
          variant="link"
          onClick={props.onHide}
        ><i className="material-icons">keyboard_backspace</i></Button>
        <Modal.Title>Select Your City</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-md-flex justify-content-md-center">
          <Button
            variant="light"
          >
            <Image fluid src="./static/images/dhaka.jpg" />
            <h4>Dhaka</h4>
          </Button>
          <Button
            variant="light"
          >
            <Image fluid src="./static/images/chittagong.jpg" />
            <h4>Chittagong</h4>
          </Button>
        </div>
        <Button
          variant="outline-primary"
          className="btn-gps"
        ><i className="material-icons mr-2">gps_fixed</i> At my current location</Button>
      </Modal.Body>
    </Modal>
  );
}

export default LocationPicker;