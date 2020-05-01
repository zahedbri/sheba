import HeroSearch from './HeroSearch';

function HeroBanner(props) {
  return (
    <div className="HeroBanner" style={{ backgroundImage: 'url(./static/images/hero-banner.jpg)' }}>
      <div className="HeroBanner-Warp">
        <h1 className="HeroBanner-Heading">Your Personal Assistant</h1>
        <h3 className="HeroBanner-SubHeading">One-stop solution for your services. Order any service, anytime.</h3>
        <div className="HeroBanner-Actions">
          <HeroSearch />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;