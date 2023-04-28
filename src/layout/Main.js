import React from "react";
import Header from "../Shere/Header/Header";
import LeftSideNav from "../Shere/LeftSideNav/LeftSideNav";
import { Outlet, useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div>
      <Header></Header>
      <div className={`grid ${location.pathname!=='/'?'grid-cols-12':''}`}>
        {location.pathname === "/" ? (
          <>
            <div
              className={`lg:col-span-3 lg:bg-gray-700 lg:hidden md:hidden max-sm:hidden`}
            >
              <LeftSideNav></LeftSideNav>
            </div>
          </>
        ) : (
          <>
            <div
              className={`lg:col-span-3 lg:bg-gray-700 lg:block md:hidden max-sm:hidden`}
            >
              <LeftSideNav></LeftSideNav>
            </div>
          </>
        )}

        <div className={`${(location.pathname==='/')?'lg:col-span-12':'lg:col-span-8'} md:col-span-9 sm:col-12`}>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
