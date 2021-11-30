import React from 'react';
import { NavLink } from 'react-router-dom';
import useAllContext from '../../Hooks/useAllContext';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import './Hospitals.css'

const Hospitals = () => {
    const data = useAllContext();
    const hospitals = data[0];
    return (
        <div className="row g-5">
            {
                hospitals.map((hospital)=>{
                    return(
                        <div className="col-md-4 col-12" key={hospital.HospitalName}>
                        <div className="card card-height  rounded-3" >
                        <Zoom bottom>
  <img src={hospital.HospitalImage} className="card-fluid" alt="..."/>
  </Zoom>
  <div className="card-body mt-2">
  <Roll left>
    <h5 className="card-title"> <strong>{hospital.HospitalName}</strong></h5>
    </Roll>
    <p className="card-text">Address : {hospital.Address}</p>
    <p className="card-text">Contact : {hospital.ContactNumber}</p>

  </div>
  <div className="card-footer bg-success d-flex justify-content-around">
  <LightSpeed right>
      <NavLink to={`/services/${hospital.id}`}> <button className="btn btn-warning btn-shadow fw-bold h2"> <i class="fas fa-briefcase-medical"></i> Medical Services </button> </NavLink>
      </LightSpeed>
      <LightSpeed left>
      <NavLink to={`/hospital/${hospital.HospitalName}`}> <button className="btn btn-info btn-shadow fw-bold h2"> <i class="fas fa-map-marked-alt"></i> Location Info </button> </NavLink>
      </LightSpeed>
      </div>
</div>
</div>
                    )
                })
            }
            
        </div>
    );
};

export default Hospitals;