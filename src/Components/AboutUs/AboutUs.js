import React from 'react';
import './AboutUs.css'
import Flip from 'react-reveal/Flip';
import { useEffect } from 'react';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    return (
        <div className="mt-2 pt-3">
         <Flip top cascade>
        <div className="container">
            <h1 className="mb-3"><strong> About <span className="text-warning"> Us  </span></strong></h1>
            <p>
            We want To render the world standard diagnostic service to the people of the country at an affordable cost and in turn to limit the outflow of the patient abroad at the expense of heard earn foreign currency by providing quality diagnostic services.Out door basis treatment by renowned General Practitioners, Consultants and Professors in different medical fields.To promote Health Education & Medical Services.Day care Centre for follow-up cardiac renal and oncology patients.To build a full fledged specialized (Tertiary) Hospital.Set up Satellite collection Centre.
            </p>
            <br/>
            <h3>Message from our Chairman </h3>
            <p>   
            After the liberation war, the health sector of Bangladesh was completely deprived due to various political instability and uncertainity. Unfortunately a significant number of people of this country died on that time only because of incomplete diagnosis of disease and lack of better treatment. When the sufferings were beyond the limit, at that time we established HealthCare Diagnostic Centre Ltd. in Elephant Road, Dhaka. Our goal was to ensure modern treatment facilities for the mass people of the country.HealthCare started its journey in June 1983 and within few days due to its accuracy of the reports and quality of the service HealthCare became an unparallel symbol of reliability and trust from the end of respective doctors and the people of our country.
            </p>
            <br/>
            <h3>Keep It Simple</h3>
            <p>
            To meet the demand of the respective doctors we ensured a modern setup of latest high-tech machineries one after another for complete diagnosis of patients with utmost accuracy. HealthCare Diagnostic is the first private organization which ensured world latest medical equipments and technology in this country.HealthCare is committed to render the possible standard service to the people of the country at an affordable cost. This will definitely reduce the burden of the government and will make the path of "Health for all" more smooth and effective.
            </p>
            <br/>
            <hr/>
            <br/>
            <div className="container-fluid w-75 bg-warning pb-3 pt-3">
            <h2><strong>Contact Form </strong></h2>
  <form action="/action_page.php">
    <label for="fname">First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

    <label for="lname">Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <label for="country">Country</label>
    <select id="country" name="country" >
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label for="subject">Subject</label>
    <textarea id="subject" name="subject" placeholder="Write something."></textarea>
    <button className="btn btn-primary w-50">Submit</button>
    
  </form>

  </div>   

        </div>
        </Flip>
        </div>
    );
};

export default AboutUs;