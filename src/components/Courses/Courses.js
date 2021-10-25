import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
   const [courses, setCourses] = useState([])
   useEffect(() => {
      fetch('/courseData.json')
      .then(res => res.json())
      .then(data => setCourses(data.slice(0, 12)))
   }, [])

   console.log(courses);
   return (
      <div className="courses">
         <div className="container">
            <div className="header-text text-center mb-5">
               <h3>Popular Courses</h3>
               <p>Discover Your Perfect Program In Our Courses.</p>
            </div>
            <div className="row">
               {
                  courses.map(course => <Course
                     course={course}
                     key={course.id}></Course> )
               }
            </div>
         </div>
      </div>
   );
};

export default Courses;