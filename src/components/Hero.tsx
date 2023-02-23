import bannerURL from "../assets/images/hero-banner.png";
 
const Hero = () => {
  return (
    <section className="section hero" aria-label="hero" data-section>
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            Buy & Sell Digital Assets In The Cryptex
          </h1>
          <p className="hero-text">
            Coin Cryptex is the easiest, safest, and fastest way to buy & sell
            crypto asset exchange.
          </p>
          <a href="#" className="btn btn-primary">
            Get started now
          </a>
        </div>
        <figure className="hero-banner">
          <img
            src={bannerURL}
            width="570"
            height="448"
            alt="hero banner"
            className="w-100"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
