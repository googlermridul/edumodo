import React from 'react';
import contact from '../../images/undraw_researching_22gp.svg'

const Contact = () => {
   return (
      <div className="contact">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-md-6 pe-md-5 mb-5 mb-md-0">
                  <img className="img-fluid" src={contact} alt="" />
               </div>
               <div className="col-md-6">
                  <h3>Have A Question?</h3>
                  <form action="">
                     <div className="form-group">
                        <label htmlFor="">Name</label>
                        <input type="text" className="form-control" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="">Message</label>
                        <textarea className="form-control" cols="30" rows="3" placeholder="Content"></textarea>
                     </div>
                     <div className="form-group mb-0">
                        <input className="submit-btn" type="button" value="Send" />
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;