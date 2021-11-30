import React from 'react';
import './HospitalDetail.css';
import Flip from 'react-reveal/Flip';
import { useParams } from 'react-router';
import Fade from 'react-reveal/Fade';
import useAllContext from '../../Hooks/useAllContext';
import { useEffect } from 'react';

const HospitalDetail = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const data = useAllContext();
    const hospitals = data[0];
    const {hospitalName} = useParams()
    return (
        <div>
            
            <div className="container">
           <strong> <h1 className="fw-bold mt-4 mb-4"> Map View For : <span className="text-warning"> {hospitalName} </span> </h1> </strong>
           <Fade bottom>
               <iframe width="100%" height="500px" id="gmap_canvas" src={`https://maps.google.com/maps?q=${hospitalName}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title="map"></iframe>
               </Fade>
           <br/>
           <br/>
           <hr/>
         
          {
              hospitals.map((hospital)=>{
                  if(hospital.HospitalName===hospitalName){
                      return(
                        <div className="d-xl-flex d-block align-items-center justify-content-center mt-5">
                            <Flip right cascade>
                            <div>
                            
                            <img src={hospital.HospitalImage} alt="" className="img-detail-hospital" />
                            </div>
                            <div className="container">
                            <h3 className=" mt-4 mb-3 fw-bold">{hospital.HospitalName}</h3>
                              <p>  {hospital.HospitalDetail} </p>
                            </div>    
                            </Flip>
                        </div>
                      )
                          
                  }
                  return null;
              })
          }
           <hr/>
           </div>
        </div>
    );
};

export default HospitalDetail;