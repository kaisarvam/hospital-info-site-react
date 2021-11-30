import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './DoctorsSlide.css'

const DoctorsSlide = () => {
  
  return (
    <div>
   <Bounce top>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    
    <div className="carousel-item active" >  
      <div className="bg-dark text-light d-flex  justify-content-evenly align-items-center" >
        <div>
  <img className="img-height-carousel" src="https://randomuser.me/api/portraits/men/24.jpg" alt="Cardcap" />
  </div>
  <div>
  <h1>Donnie Arnold</h1>
  <p>Medicines cure diseases but only doctors can cure patients</p>
  </div>
  </div>
  
</div>
    

    <div className="carousel-item " >  
    <div className="bg-dark text-light d-flex  justify-content-evenly align-items-center" >
        <div>
  <img className="img-height-carousel" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Cardcap" />
  </div>
  <div>
  <h1>Andrea Chambers</h1>
  <p>People pay the doctor for his trouble; for his kindness, they still remain in his debt</p>
  </div>
  </div>

    
    </div>

    <div className="carousel-item " >  
    <div className="bg-dark text-light d-flex  justify-content-evenly align-items-center" >
        <div>
  <img className="img-height-carousel" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Cardcap" />
  </div>
  <div>
  <h1>Michele Sparks</h1>
  <p>Our profession is the only one which works unceasingly to annihilate itself</p>
  </div>
  </div>

    
    </div>

    <div className="carousel-item " >  
    <div className="bg-dark text-light d-flex  justify-content-evenly align-items-center" >
        <div>
  <img className="img-height-carousel" src="https://randomuser.me/api/portraits/women/26.jpg" alt="Cardcap" />
  </div>
  <div>
  <h1>Rebecca Wagner</h1>
  <p>As a doctor, an educator, an innovator and someone who has dedicated his professional career to making things work better and to helping people </p>
  </div>
  </div>

    
    </div>

    <div className="carousel-item " >  
    <div className="bg-dark text-light d-flex  justify-content-evenly align-items-center" >
        <div>
  <img className="img-height-carousel" src="https://randomuser.me/api/portraits/women/27.jpg" alt="Cardcap" />
  </div>
  <div>
  <h1>Jean Allen</h1>
  <p>I put my heart and my soul into my work, and have lost my mind in the process</p>
  </div>
  </div>

    
    </div>

 



 
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</Bounce>
    </div>
  );
};

export default DoctorsSlide;