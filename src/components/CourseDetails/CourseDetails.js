import React from "react";
import course from "../../images/course.jpg";
import Rating from "react-rating";
import teacher from "../../images/instructor.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faClock } from "@fortawesome/free-solid-svg-icons";
import "./CourseDetails.scss";

const CourseDetails = () => {
   return (
      <div className="details-section">
         <div className="container">
            <div className="row">
               <div className="col-md-8">
                  <div className="detail-box">
                     <h3 className="title">
                        Digital Signal Processing: Analog vs Digital
                     </h3>
                     <p className="category">Software Engineering</p>
                     <div className="instructor">
                        <div className="box">
                           <img src={teacher} alt="" />
                        </div>
                        <div className="box">
                           <h5>Created by</h5>
                           <p className="mb-0">Kathelen Monero</p>
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
                              {3.9} <span>({21} reviews)</span>
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
                           <p>
                              Do you want to become a UI/UX designer but you
                              don't know where to start? This course will allow
                              you to develop your user interface design skills
                              and you can add UI designer to your CV and start
                              getting clients for your skills. <br /> <br />
                              Do you want to become a UI/UX designer but you
                              don't know where to start? This course will allow
                              you to develop your user interface design skills
                              and you can add UI designer to your CV and start
                              getting clients for your skills.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 ps-lg-5">
                  <div className="purchase-course-box">
                     <div className="img-box">
                        <img className="img-fluid" src={course} alt="" />
                     </div>
                     <div className="info-box">
                        <h4 className="price">$569.99</h4>
                        <button className="btn-black">buy this course</button>
                        <ul>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faBookOpen}
                                 />
                                 lessons
                              </span>
                              <span>23</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faClock}
                                 />
                                 Duration
                              </span>
                              <span>4h 5m</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faBookOpen}
                                 />
                                 Language
                              </span>
                              <span>english</span>
                           </li>
                           <li>
                              <span>
                                 <FontAwesomeIcon
                                    className="icon"
                                    icon={faClock}
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
