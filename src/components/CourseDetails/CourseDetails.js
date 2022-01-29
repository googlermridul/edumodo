import React, { useEffect, useState } from "react";
import Rating from "react-rating";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faBookOpen,
   faClock,
   faBookReader,
   faLanguage,
   faCertificate,
} from "@fortawesome/free-solid-svg-icons";
import "./CourseDetails.scss";
import useCourses from "../../hooks/useCourses";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const CourseDetails = () => {
   const [courses] = useCourses();
   const [details, setDetails] = useState({});
   const { handleSubmit, reset } = useForm();
   const { courseId } = useParams();
   const { user } = useAuth();
   const history = useHistory();

   useEffect(() => {
      if (courses.length) {
         const matchedData = courses.find((course) => course._id === courseId);
         setDetails(matchedData);
      }
   }, [courses]);

   const {
      title,
      category,
      duration,
      lessons,
      price,
      rating,
      review,
      image,
      description,
      instructor,
      instructorImage,
      language,
   } = details;

   const onSubmit = (data) => {
      data.image = image;
      data.title = title;
      data.price = price;
      data.email = user.email;
      data.quantity = 1;

      fetch(`https://polar-lake-68435.herokuapp.com/addCartOrder`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data),
      })
         .then((res) => res.json())
         .then((result) => {
            if (result.insertedId) {
               history.push("/cart");
               reset();
            } else {
               history.push("/login");
            }
         });
      console.log(data);
   };

   return (
      <div className="details-section">
         <div className="container">
            <div className="row">
               <div className="col-lg-8 mb-5 mb-lg-0">
                  <div className="detail-box">
                     <h3 className="title">{title}</h3>
                     <p className="category">{category}</p>
                     <div className="instructor">
                        <div className="box">
                           <img src={instructorImage} alt="" />
                        </div>
                        <div className="box">
                           <h5>Created by</h5>
                           <p className="mb-0">{instructor}</p>
                        </div>

                        <div className="box">
                           <h5>Reviews</h5>
                           <Rating
                              emptySymbol="far fa-star"
                              fullSymbol="fas fa-star"
                              initialRating={3.9}
                              readonly
                           ></Rating>
                           <p className="review-text">
                              {rating} <span>({review} reviews)</span>
                           </p>
                        </div>
                     </div>
                     <div className="bottom-area">
                        <ul className="indicator">
                           <li className="active">Overview</li>
                           <li>Curriculum</li>
                           <li>Instructor</li>
                           <li>Reviews</li>
                        </ul>
                        <div className="indicator-details">
                           <h4>Course Description</h4>
                           <p>{description}</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ps-lg-5">
                  <div className="purchase-course-box">
                     <div className="img-box">
                        <img className="img-fluid" src={image} alt="" />
                     </div>
                     <div className="info-box">
                        <h4 className="price">${price}</h4>
                        {user?.email ? (
                           <form
                              onSubmit={handleSubmit(onSubmit)}
                              className="mb-0 text-start"
                           >
                              <button type="submit" className="btn-black">
                                 buy this course
                              </button>
                           </form>
                        ) : (
                           <button
                              onClick={() => history.push("/login")}
                              className="btn-black"
                           >
                              buy this course
                           </button>
                        )}
                        <ul>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faClock}
                                 />
                                 Duration
                              </span>
                              <span>{duration}</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faBookOpen}
                                 />
                                 lessons
                              </span>
                              <span>{lessons}</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faBookReader}
                                 />
                                 Enrolled
                              </span>
                              <span>0</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faLanguage}
                                 />
                                 Language
                              </span>
                              <span>{language}</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faCertificate}
                                 />
                                 Certificate
                              </span>
                              <span>yes</span>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CourseDetails;
