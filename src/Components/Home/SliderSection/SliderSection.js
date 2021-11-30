import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import './SliderSection.css';

const SliderSection = () => {
    return (
        <div className="col-md-8  col-12">
          <LightSpeed left>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./images/banners/banner6.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-info-bg">
      <h3>Patient care System</h3>
      <h5>We have 24/7 monitoring on patients and day and night shifts for workers for 24/7 monitoring our patient , All our rooms are eleanded twice a day and we have 24/7 available Doctors for checkup</h5>
      </div>
    </div>
    <div className="carousel-item">
      <img src="./images/banners/banner5.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-info-bg">
      <h3>Bed Spaces</h3>
      <h5>We habe more then 500 bed in our main branch . There are also 4 extra branch in which we have 1500 seat each branch , our environment is very clean and well facilated .</h5>
      </div>
    </div>

    <div className="carousel-item">
      <img src="./images/banners/banner4.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block slide-info-bg">
      <h3>Our Vision</h3>
      <h5>We are an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Popular Diagnostic Centre Ltd</h5>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</LightSpeed>
</div>
    );
};

export default SliderSection;