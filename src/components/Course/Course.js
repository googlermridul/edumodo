import React from "react";
import "./Course.scss";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faClock } from "@fortawesome/free-solid-svg-icons";

const Course = (props) => {
   const { title, category, image, lessons, price, rating, review, duration } =
      props.course;

   return (
      <div className="col-sm-6 col-lg-4 mx-auto">
         <div className="course-box shadow">
            <img className="img-fluid" src={image} alt="" />
            <div className="info">
               <p className="category">{category}</p>
               <h6 className="title">{title}</h6>
               <Rating
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  initialRating={rating}
                  readonly
               ></Rating>
               <p className="review">
                  {rating} <span>({review} reviews)</span>
               </p>
               <div className="d-flex justify-content-between">
                  <span>
                     <FontAwesomeIcon className="icon" icon={faBookOpen} />{" "}
                     {lessons} lessons
                  </span>
                  <span>
                     <FontAwesomeIcon className="icon" icon={faClock} />{" "}
                     {duration}
                  </span>
                  <h5 className="price">${price}</h5>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Course;
