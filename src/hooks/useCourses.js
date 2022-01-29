import { useEffect, useState } from "react";

const useCourses = () => {
   const [menus, setMenus] = useState([]);
   useEffect(() => {
      fetch("https://polar-lake-68435.herokuapp.com/courses")
         .then((res) => res.json())
         .then((data) => setMenus(data));
   }, []);

   return [menus];
};

export default useCourses;
