import React from "react";
import useCourses from "../../hooks/useCourses";
import Course from "../Course/Course";

const CoursePage = () => {
   const [courses] = useCourses();

   return (
      <div className="courses course-page">
         <div className="container">
            <div className="header-text text-center mb-5">
               <h3>Popular Courses</h3>
               <p>Discover Your Perfect Program In Our Courses.</p>
            </div>
            <div className="row">
               {courses.map((course) => (
                  <Course course={course} key={course._id}></Course>
               ))}
            </div>
         </div>
      </div>
   );
};

export default CoursePage;
