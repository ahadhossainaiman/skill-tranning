import React from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  return (
    
      <div className="lg:rounded-lg lg:h-screen">
        <div className="drawer-side lg:block sm:hidden">
          <ul className="menu p-4 overflow-y-auto lg:bg-gray-700 lg:text-base-content">
            <li className="border-l-4 border-indigo-500 my-2">
              <Link>Programming Languages</Link>
            </li>
            <li className="border-l-4 border-indigo-500 my-2">
              <Link>Web Technology</Link>
            </li>
            <li className="border-l-4 border-indigo-500 my-2">
              <Link>Computer Science</Link>
            </li>
            <li className="border-l-4 border-indigo-500 my-2">
              <Link>Information Technology</Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default LeftSideNav;
