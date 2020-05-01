import { Modal } from 'react-bootstrap';

import { getYouTubeId } from '../../utils';

function VideoPlayer( props ) {
  const { videoUrl, ...rest } = props;
  const videoId = getYouTubeId(videoUrl);

  return (
    <Modal
      {...rest}
      size="lg"
      backdropClassName="VideoIframe-Backdrop"
      dialogClassName="VideoIframe"
      aria-labelledby="VideoPlayerModal"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {
          videoId ?
            <iframe 
              width="100%" 
              height="100%" 
              className="shadow"
              src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            /> : null
        }
      </Modal.Body>
    </Modal>
  );
}

export default VideoPlayer;