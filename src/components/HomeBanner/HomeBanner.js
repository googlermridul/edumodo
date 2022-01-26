import React from "react";
import "./HomeBanner.scss";
import homeBg from "../../images/illustration-4.webp";

const Home = () => {
   return (
      <div className="home">
         <div className="container">
            <div className="row justify-content-center align-items-center">
               <div className="col-md-6 mb-5 mb-md-0">
                  <div className="text-box">
                     <h1>
                        More Than 500 <span>Online Courses</span>
                     </h1>
                     <p>An investment in knowledge pays the best interest.</p>
                  </div>
               </div>
               <div className="col-md-6">
                  <img className="img-fluid" src={homeBg} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
