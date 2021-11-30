import React from 'react';
import useAllContext from '../../Hooks/useAllContext';
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom';
import './Medicine.css'

const Medicines = () => {
    const data = useAllContext();
    const medicines = data[2];
 
    return ( 
        <div className="row g-4">
            {
                medicines.slice(0,12).map((medicine)=>{
                    return (
                      <div
                        className="col-md-4 col-12 "
                        key={medicine.medicineName}
                      >
                        <div className="card card-height-medicine">
                        <Zoom top>
                          <img
                            src={medicine.imageURL}
                            className="img-thumbnail"
                            alt="..."
                          />
                          </Zoom>
                          <div className="card-body bg-dark text-light">
                          <Roll right>
                            <h3>{medicine.medicineName}</h3>
                            <h5>Company Name : {medicine.companyName}</h5>
                            <p> Type : {medicine.type}</p>
                            
                            <p>
                              <p> Current Price : <span className="fw-bold"> {medicine.Currentprice} $ </span> </p>
                            </p>
                            <p className="">
                              Old price : <span className="text-decoration-line-through fw-bold">{medicine.OldPrice.toFixed(2)} $ </span>
                            </p>
                            </Roll>
                          </div>
                        </div>
                      </div>
                    );
                })
            }
        </div>
    );
};

export default Medicines;