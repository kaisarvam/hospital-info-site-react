import React from 'react';
import BannerSection from './BannerSection/BannerSection';
import SliderSection from './SliderSection/SliderSection';
import Hospitals from '../Hospitals/Hospitals';
import Medicines from '../Medicines/Medicines';
import DoctorsSlide from '../DoctorsSlide/DoctorsSlide';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div className="container-fluid">
            <h1 className="fw-bold mt-3 mb-3"> <span className="">Home </span></h1>
            <hr/>
            <div className="container">
            <section className="row">
                <SliderSection></SliderSection>
                <BannerSection></BannerSection>
            </section>
            <hr/>
            <h1 className="fw-bold mt-5 mb-5"> Our <span className="text-warning"> Doctors </span></h1>
            <hr/>
            <section>
                <DoctorsSlide></DoctorsSlide>
            </section>
            <hr/>
            <h1 className="fw-bold mt-5 mb-5"> All <span className="text-warning"> Hospitals </span></h1>
            <hr/>
        <section className="mt-5">
            <Hospitals></Hospitals>
        </section>
        <hr/>
        <h1 className="fw-bold mt-5 mb-5"> All <span className="text-warning"> Medicines</span></h1>
        <hr/>
        <section>
            
            <Medicines></Medicines>
        </section>
        <hr/>
        </div>
        </div>
    );
};

export default Home;