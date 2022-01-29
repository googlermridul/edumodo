import React from "react";
import "./Contact.scss";
import contact from "../../images/undraw_researching_22gp.svg";
import { useForm } from "react-hook-form";

const Contact = () => {
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };

   return (
      <div className="contact">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
                  <img className="img-fluid" src={contact} alt="" />
               </div>
               <div className="col-lg-6 ps-lg-5">
                  <div className="px-lg-3">
                     <h3>Have A Question?</h3>

                     <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mb-0 text-start"
                     >
                        <div className="row">
                           <div className="form-group col-12">
                              <label htmlFor="">Your Name</label>
                              <input
                                 className="form-control"
                                 defaultValue=""
                                 {...register("name", { required: true })}
                                 placeholder="Name"
                              />
                              {errors.name && (
                                 <span className="error">name is required</span>
                              )}
                           </div>
                           <div className="form-group col-12">
                              <label htmlFor="">Your Email</label>
                              <input
                                 className="form-control"
                                 defaultValue=""
                                 {...register("email", { required: true })}
                                 placeholder="Email"
                              />
                              {errors.email && (
                                 <span className="error">
                                    email is required
                                 </span>
                              )}
                           </div>
                           <div className="form-group col-12">
                              <label htmlFor="">Message</label>
                              <textarea
                                 className="form-control"
                                 defaultValue=""
                                 {...register("message", { required: true })}
                                 placeholder="Message"
                              />
                              {errors.message && (
                                 <span className="error">
                                    message is required
                                 </span>
                              )}
                           </div>
                        </div>
                        <button type="submit" className="btn-black">
                           Send
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
