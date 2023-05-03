import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://wallpapercave.com/wp/wp3681692.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Our Courses</h1>
          <p className="mb-5">
          Acquire global knowledge and build your professional skills
          </p>
         <Link to='/courses'><button className="btn btn-primary">Explore Courses</button></Link> 
        </div>
      </div>
    </div>
  );
};

export default Home;
