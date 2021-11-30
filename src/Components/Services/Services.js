import React from 'react';
import Jello from 'react-reveal/Jello';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';
import Wobble from 'react-reveal/Wobble';
import { useParams } from 'react-router';
import { useState , useEffect} from 'react';
import Rating from 'react-rating';
import useAllContext from '../../Hooks/useAllContext';
import './Services.css'

const  Services =  () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const data = useAllContext();

    const [services,setServices]=useState([]);
    const [hospitals,setHospitals] = useState([]);
    useEffect(()=>{
      setServices(data[1])
      setHospitals(data[0])
    },[data,services])
    
    const {serviceId} = useParams()
    console.log("service page param is : ",serviceId);
    return (
        <div className="container mt-5 ">
          {
            (serviceId==="all") ?
                <strong>  <h1 className="mb-4 fw-bold">Services <span className="text-warning"> Page </span></h1> </strong>
                :
                <strong>  <h1 className="mb-4 fw-bold"> Service avaialbe in Selected  <span className="text-warning"> Hospital</span></h1> </strong>

             
            
          }
         
            <div className="row g-3">
                {
                    services.map((service)=>{
                        if(service.servicesId === parseInt(serviceId)){
                            return(
                                <div className="col-md-4 col-12" key={service.serviceName}>
                                  <Jello>
                                <div className="card card-height-service bg-dark text-light rounded-3">
                                <Wobble>
                                <img src={service.imageURL} className="img-thumbnail" alt="" />
                                </Wobble>
                                <div className="card-body">
                                  <h5 className="card-title">{service.serviceName}</h5>
                                  <Rating
                              readonly
                              fullSymbol="fas fa-star text-warning"
                              emptySymbol="far fa-star text-warning"
                              initialRating={service.rating}
                            ></Rating>
                            <p>Rated : {service.rated}</p>
                                  <p className="card-text">{service.serviceDetail.slice(0,200)}...</p>
                                  
                                </div>
                                <div className="card-footer">
                                <h5 className="card-title text-success">{service.Doctors.slice(0,30)}</h5>
                                </div>
                              </div>
                              </Jello>
                              </div>
                                )
                        }else if(serviceId==="all"){
                            return(
                                <div className="col-md-4 col-12" key={service.id}>
                                  <RubberBand>
                                <div className="card card-height-service bg-dark text-light rounded-3">
                                <Flip top>
                                <img src={service.imageURL} className="img-thumbnail" alt="" />
                                </Flip>
                                <div className="card-body">
                                    {
                                        hospitals.map((hospital)=>{
                                            if(service.servicesId===hospital.id){
                                                return(
                                                    <h5 key={hospital.id}> <strong>{hospital.HospitalName} </strong> </h5>
                                                )
                                            }
                                            return null;
                                           
                                        })
                                    }
                                    
                                  <h5 className="card-title">{service.serviceName}</h5> 
                                  <Rating
                              readonly
                              fullSymbol="fas fa-star text-warning"
                              emptySymbol="far fa-star text-warning"
                              initialRating={service.rating}
                            ></Rating>
                            <p>Rated : {service.rated}</p>
                                  <p className="card-text">{service.serviceDetail.slice(0,200)}...</p>
                                  
                                </div>
                                <div className="card-footer">
                                <h5 className="card-title text-success">{service.Doctors.slice(0,30)}</h5>
                                </div>
                              </div>
                              </RubberBand>
                              </div>
                                )
                        }
                        return null;
                        
                    })
                }
            </div>
            
        </div>
    );
};

export default Services;