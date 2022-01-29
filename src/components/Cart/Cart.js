import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";

const Cart = () => {
   const { user } = useAuth();
   const { handleSubmit, reset } = useForm();
   const [cartOrders, setCartOrders] = useState([]);
   const [totalQuantity, setTotalQuantity] = useState(0);
   const [subTotal, setSubTotal] = useState(0);

   useEffect(() => {
      fetch(`http://localhost:5000/cartOrders/${user.email}`)
         .then((res) => res.json())
         .then((data) => setCartOrders(data));
   }, [user]);

   useEffect(() => {
      if (cartOrders.length) {
         const price = cartOrders.reduce(
            (prev, order) =>
               prev + parseInt(order.price) * parseInt(order.quantity),
            0
         );
         const quantity = cartOrders.reduce(
            (prev, order) => prev + parseInt(order.quantity),
            0
         );
         setSubTotal(price);
         setTotalQuantity(quantity);
      }
   }, [cartOrders]);

   const handleDelete = (id) => {
      const proceed = window.confirm("Are you sure you want to delete");
      if (proceed) {
         fetch(`http://localhost:5000/deleteCartOrder/${id}`, {
            method: "DELETE",
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.deletedCount) {
                  const remaining = cartOrders.filter(
                     (order) => order._id !== id
                  );
                  setCartOrders(remaining);
                  setSubTotal(0);
                  setTotalQuantity(0);
               }
            });
      }
   };

   const handleDeleteAll = (email) => {
      fetch(`http://localhost:5000/deleteAllCartOrder/${email}`, {
         method: "DELETE",
      })
         .then((res) => res.json())
         .then((data) => {
            if (data.deletedCount) {
               const remaining = cartOrders.filter(
                  (order) => order.email !== email
               );
               setCartOrders(remaining);
            }
         });
   };

   const onSubmit = (data) => {
      data.status = "Pending";
      data.date = new Date().toDateString();
      data.price = subTotal;
      data.quantity = totalQuantity;

      if (cartOrders.length) {
         fetch(`http://localhost:5000/addOrder`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
         })
            .then((res) => res.json())
            .then((result) => {
               if (result.insertedId && cartOrders.length) {
                  alert("Purchased successfully");
                  reset();
                  setCartOrders([]);
                  setSubTotal(0);
                  setTotalQuantity(0);
                  handleDeleteAll(user.email);
               }
            });
      } else {
         alert("Please add a course in your cart!");
      }
   };

   return (
      <div className="cart-section">
         <div className="container">
            <div className="row">
               <h4 className="">Your Order</h4>
               <div className="col-lg-8">
                  {cartOrders.map((order) => (
                     <div key={order._id} className="course-list">
                        <img className="img-fluid" src={order.image} alt="" />
                        <h5 className="title mb-0">{order.title}</h5>
                        <p className="price mb-0">${order.price}</p>
                        <button
                           onClick={() => handleDelete(order._id)}
                           className="btn-black delete"
                        >
                           <FontAwesomeIcon
                              icon={faTrashAlt}
                              className="fa-icon"
                           />
                        </button>
                     </div>
                  ))}
                  {cartOrders.length === 0 && (
                     <p className="failure-alert">Your cart is empty!</p>
                  )}
               </div>
               <div className="col-lg-4 ps-lg-5 mt-5 mt-lg-0">
                  <div className="estimation-box">
                     <h4>Cart totals</h4>
                     <ul>
                        <li>
                           Total Courses <span>{totalQuantity}</span>
                        </li>
                        <li>
                           Subtotal <span>${subTotal}</span>
                        </li>
                        <li className="total">
                           Total <span>${subTotal}</span>
                        </li>
                     </ul>
                     <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mb-0 text-start"
                     >
                        <button type="submit" className="btn-black">
                           Proceed to checkout
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;
