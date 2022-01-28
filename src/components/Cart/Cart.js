import React from "react";
import course from "../../images/course.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";

const Cart = () => {
   return (
      <div className="cart-section">
         <div className="container">
            <div className="row">
               <h4 className="">Your Order</h4>
               <div className="col-lg-8">
                  <div className="course-list">
                     <img className="img-fluid" src={course} alt="" />
                     <h5 className="title mb-0">
                        The Complete JavaScript Course 2020: Build Real
                        Projects!
                     </h5>
                     <p className="price mb-0">$415.99</p>
                     <button className="btn-black delete">
                        <FontAwesomeIcon
                           icon={faTrashAlt}
                           className="fa-icon"
                        />
                     </button>
                  </div>
                  <div className="course-list">
                     <img className="img-fluid" src={course} alt="" />
                     <h5 className="title mb-0">
                        The Complete JavaScript Course 2020: Build Real
                        Projects!
                     </h5>
                     <p className="price mb-0">$415.99</p>
                     <button className="btn-black delete">
                        <FontAwesomeIcon
                           icon={faTrashAlt}
                           className="fa-icon"
                        />
                     </button>
                  </div>
               </div>
               <div className="col-lg-4 ps-lg-5">
                  <div className="estimation-box">
                     <h4>Cart totals</h4>
                     <ul>
                        <li>
                           Total Courses <span>1</span>
                        </li>
                        <li>
                           Subtotal <span>$43.99</span>
                        </li>
                        <li className="total">
                           Total <span>$43.99</span>
                        </li>
                     </ul>
                     <button className="btn-black">Proceed to checkout</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
