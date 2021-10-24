import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../images/footer-logo.svg'

const Footer = () => {
   return (
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-sm-6 col-md-4">
                  <img className="logo mb-3" src={footerLogo} alt="" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, excepturi tempore iure suscipit eaque animi ipsam iusto similique dolorum laudantium beatae.</p>
               </div>
               <div className="col-sm-6 col-md-4">
                  <h6>Useful Links</h6>
                  <ul class="navbar-nav">
                     <li class="nav-item">
                        <Link className="link" to="/home">Home</Link>
                     </li>
                     <li class="nav-item">
                        <Link className="link" to="/course">Courses</Link>
                     </li>
                     <li class="nav-item">
                        <Link className="link" to="/about">About Us</Link>
                     </li>
                     <li class="nav-item">
                        <Link className="link" to="/contact">Contact</Link>
                     </li>
                  </ul>
               </div>
               <div className="col-sm-6 col-md-4">
                  <h6>Contact Us</h6>
                  <p>329 Queensberry Street, <br /> North Melbourne VIC 3051, Australia.</p>
                  <p>1900 654 321</p>
                  <p>support@skola.com</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;