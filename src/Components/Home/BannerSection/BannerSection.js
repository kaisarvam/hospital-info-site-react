import React from 'react';
import RubberBand from 'react-reveal/RubberBand';

import './BannerSection.css';

const BannerSection = () => {
    return (
        <div className="col-md-4  col-12 ">
      <RubberBand>
            <img src="./images/banners/banner1.jpg" alt="" className="img-fluid custom-img-banner-top " ></img>
            <br/>
            <img src="./images/banners/banner2.jpg" alt=""  className="img-fluid custom-img-banner-bottom" ></img>
         </RubberBand>
        </div>
    );
};

export default BannerSection;