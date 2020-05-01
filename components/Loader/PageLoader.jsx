import { Image } from 'react-bootstrap';

function PageLoader() {
  return (
    <div className="PageLoader">
      <div className="d-flex justify-content-center align-items-center w-100 h-100">
        <div className="PageLoader-Loader shadow">
          <Image fluid src="./static/images/loader.png" />
        </div>
      </div>
    </div>
  );
}

export default PageLoader;