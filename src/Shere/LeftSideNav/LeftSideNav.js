import React from "react";

const LeftSideNav = () => {
  return (
    
      <div className="lg:rounded-lg lg:h-screen">
        <div className="drawer-side lg:block sm:hidden">
          <ul className="menu p-4 overflow-y-auto lg:bg-gray-700 lg:text-base-content">
            <li>
              <a>Menu Item</a>
            </li>
            <li>
              <a>Menu Item</a>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default LeftSideNav;
