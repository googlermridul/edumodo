import React from 'react';
import notFound from '../../images/404.svg'

const NotFound = () => {
   return (
      <div>
         <img className="img-fluid" src={notFound} alt="" />
      </div>
   );
};

export default NotFound;