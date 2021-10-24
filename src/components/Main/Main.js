import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Feature from '../Feature/Feature';
import Home from '../Home/Home';

const Main = () => {
   const [course, setCourse] = useState([])
   useEffect(() => {
      fetch('/courseData.json')
      .then(res => res.json())
      .then(data => setCourse(data))
   }, [])

   return (
      <div>
         <Home></Home>
         <Feature></Feature>
         {/* {
            course.map(course => <Course course={course}></Course> )
         } */}
      </div>
   );
};

export default Main;