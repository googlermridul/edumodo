import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg'

const Header = () => {
   return (
      <nav class="navbar navbar-expand-md fixed-top">
         <div class="container">
            <Link to="/home">
               <img className="logo" src={logo} alt="" />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
         </div>
      </nav>
   );
};

export default Header;