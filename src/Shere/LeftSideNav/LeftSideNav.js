import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [category,setCategory] = useState([]);
  useEffect(()=>{
    fetch(`http://localhost:5000/course-category`)
    .then(res=>res.json())
    .then(data=>setCategory(data))
  },[])
  console.log(category);
  return (
    
      <div className="lg:rounded-lg lg:h-screen">
        <div className="drawer-side lg:block sm:hidden">
          <ul className="menu p-4 overflow-y-auto lg:bg-gray-700 lg:text-base-content">
            <li className="border-l-4 border-indigo-500 my-2">
              <Link to={`/category/${category[0]?.id}`}>{category[0]?.category}</Link>
            </li>
            <li className="border-l-4 border-indigo-500 my-2">
              <Link to={`/category/${category[1]?.id}`}>{category[1]?.category}</Link>
            </li>
            <li className="border-l-4 border-indigo-500 my-2">
              <Link to={`/category/${category[2]?.id}`}>{category[2]?.category}</Link>
            </li>
            <li className="border-l-4 border-indigo-500 my-2">
              <Link to={`/category/${category[3]?.id}`}>{category[3]?.category}</Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default LeftSideNav;
