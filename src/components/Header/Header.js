import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg'
import hamburger from '../../images/menu2.png'

const Header = () => {
   return (
      <nav className="navbar navbar-expand-md fixed-top">
         <div className="container">
            <Link to="/home">
               <img className="logo" src={logo} alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <img className="hamburger" src={hamburger} alt="" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav">
                  <li className="nav-item">
                     <Link className="link" to="/home">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/course">Courses</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/about">About Us</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="link" to="/contact">Contact</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Header;