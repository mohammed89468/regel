import './About.css';
const Aboutus = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="row">
          {/* Content Column */}
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              <div className="sec-title">
                <span className="title">About Us</span>
                <h2>Welcome to Ragel</h2>
              </div>
              <div className="text">
              The company <strong>Ragel</strong> delivers precision sheet 
metal fabrication and value-added services 
such as value engineering, design, and 
electron-mechanical integra
              </div>
              <div className="btn-box">
                <a href="#" className="theme-btn btn-style-one">Contact Us</a>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="image-column col-lg-6 col-md-12 col-sm-12">
            <div className="inner-column wow fadeInLeft">
              <figure className="image-1">
                <img src="banner.jpeg" className='imgabout' alt="Ragel" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
  