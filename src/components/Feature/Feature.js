import React from 'react';
import icon1 from '../../images/ebook.png'
import icon2 from '../../images/ring.png'
import icon3 from '../../images/book.png'

const Feature = () => {
   return (
      <div className="feature">
         <div className="container">
            <div className="header-text text-center">
               <h3>Why Study With Skola</h3>
               <p>Discover Your Perfect Program In Our Courses.</p>
            </div>
            <div className="row">
               <div className="col-md-4">
                  <div className="feature-box">
                     <div className="icon">
                        <img src={icon1} alt="" />
                     </div>
                     <h5>Learn Anything</h5>
                     <p>Sed cursus turpis vitae tortor <br /> donec eaque ipsa quaeab illo.</p>
                  </div>
               </div>
               <div className="col-md-4 my-5 my-md-0">
                  <div className="feature-box">
                     <div className="icon icon2">
                        <img src={icon2} alt="" />
                     </div>
                     <h5>Flexible Learning</h5>
                     <p>Sed cursus turpis vitae tortor <br /> donec eaque ipsa quaeab illo.</p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="feature-box">
                     <div className="icon icon3">
                        <img src={icon3} alt="" />
                     </div>
                     <h5>Learn With Experts</h5>
                     <p>Sed cursus turpis vitae tortor <br /> donec eaque ipsa quaeab illo.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Feature;