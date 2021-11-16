import React from 'react';
import aboutImg from '../../images/about-us.jpeg'

const About = () => {
   return (
      <div className="about">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-6 pe-md-5 mb-5 mb-md-0">
                  <img className="img-fluid shadow" src={aboutImg} alt="" />
               </div>
               <div className="col-md-6">
                  <div className="about-info">
                     <h3>Know About Us</h3>
                     <p>We provides more than 500 international courses to prove your skills. In this site you will get all quality courses. We have the best expertise to guide you.</p>
                     <ul>
                        <li>Creative Study Pattern</li>
                        <li>Quick Crash Courses</li>
                        <li>Certification Awarded</li>
                        <li>Provided with Experimental Examples</li>
                     </ul>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, dignissimos.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;