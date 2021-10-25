import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/undraw_Taken_re_yn20.svg'

const NotFound = () => {
   return (
      <div className="not-found">
         <div className="container text-center">
            <img className="img-fluid" src={notFound} alt="" />
            <h3>Ohh! Page Not Found</h3>
            <Link to="/home">Back to home</Link>
         </div>
      </div>
   );
};

export default NotFound;