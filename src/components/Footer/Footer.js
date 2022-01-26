import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import paymentGateway from "../../images/online-payment.png";

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-lg-3">
                  <h3 className="logo mb-3">edumodo</h3>
                  <p>
                     Skola is an educational site which gives various courses
                     regarding your need. It provides more than 500
                     international courses to prove your skills.
                  </p>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h5>Useful Links</h5>
                  <ul className="navbar-nav">
                     <li className="nav-item">
                        <Link className="link" to="/home">
                           Home
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/courses">
                           Courses
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/about">
                           About Us
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link className="link" to="/contact">
                           Contact
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <h5>Contact Us</h5>
                  <p>
                     329 Queensberry Street, <br /> North Melbourne VIC 3051,
                     Australia.
                  </p>
                  <p>1900 654 321</p>
                  <p>support@skola.com</p>
               </div>
               <div className="col-sm-6 col-lg-3">
                  <img className="img-fluid" src={paymentGateway} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
