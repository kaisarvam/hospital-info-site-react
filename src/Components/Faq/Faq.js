import React from 'react';
import LightSpeed from 'react-reveal/LightSpeed';
import Slide from 'react-reveal/Slide';
import { useEffect } from 'react';

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div className="mb-0 pb-0 mt-2 pt-3  text-dark">
        <section className="container mt-5 mb-0 pb-0" id="fa-q">
<h1 className="text-center font-weight-bold text-light pb-5 my-5">Frequently <span className="text-warning"> Asked </span> Questions   </h1>
<div className="row g-5">
    <div className="col-lg-6 col-md-6 col-sm-12 ">
        <div className="d-flex justify-content-center" >
        <LightSpeed left>
 <img className="img-fluid w-75 h-25" src="./faq.png" alt="" />
 </LightSpeed>
    </div>
    </div>
    <Slide right>
    <div className="col-lg-6 col-md-6 col-sm-12 ">
        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item  mb-2">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                   <strong>What are we ?  </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body">
                HealthCare Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. HealthCare Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.LEGAL STATUS HealthCare Diagnostic Centre Ltd. is a private limited company registered with the Ministry of Health & Family Welfare, People’s Republic Govt. of Bangladesh having License No. 1275 &688.
                </div>
              </div>
            </div>
            <div className="accordion-item pb-2 mb-2">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                   <strong> Our Objective? </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body">
                To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.To promote Health Education & Medical Services.Day care Centre for follow-up cardiac renal and oncology patients.To build a full fledged specialized (Tertiary) Hospital.Set up Satellite collection Centre.
                </div>
              </div>
            </div>
            <div className="accordion-item pb-2 mb-2">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                  <strong>  Our Imaging Services ? </strong>
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                Philips Inginia 3.0Tesla Digital MRI , Philips Inginia 3.0Tesla Digital MRI , GE Light Speed 500 slice VCT (CT Scanner) , GE Prodigy Oracle-Bone Densitometer(BMD) , SIEMENS Lithotripsy (ESWL) ,Philips 12-Channel -ECG , GE Marquette 12 Channel ECG(Computer Analyzed & Interpreted) , GE Marquette ETT(Tress ECG) , GE 24 Hours Holter Monitor (Marquette) , 24 Hours Ambulatory BP
                </div>
              </div>
            </div>
            <div className="accordion-item pb-2 mb-2">
                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                   <strong> Pathology department ? </strong>
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div className="accordion-body">
                  ( Biochemistry, Immunology, Serology, Microbiology, Clinical Pathology, Histopathology, Molecular Laboratory ) , Haematology –sysmex XN2000 :(Full Automated Reticulocyte Counter & 5 parts Differential Analyzer) , Cobas 6000 (Full Automated Multibatch Biochemistry & Immunology Analyzer) , BECKMAN Coulter Au 680 (Random Access Multibatch Chemistry Analyzer) , Abbott-Architect i2000SR (Full Automated Random Access Immunology Analyzer) , Molecular (PCR) Lab. (HBV-DNA)(HPV-DNA)(HCV-RNA)HCV-RNA Genotype), HLA-B27. , Microbiology , Clinical Pathology , Histopathology , Cytology
                  </div>
                </div>
                
              </div>
          </div>
        
    </div>
    </Slide>

</div>

</section>
<br/>
<br/>
<br/>
<br/>
</div>
    );
};

export default Faq;