import React from "react";
import { Link, useLoaderData } from "react-router-dom";


const CoursesDetails = () => {
    const courses = useLoaderData();
    console.log(courses);
    const {uid,title,description,instructor,image_url,duration,category,price}= courses
  return (
    <div className="card card-compact lg:w-full max-sm:w-96 bg-base-100 shadow-xl my-6 px-6">
        <h2 className="card-title text-3xl">{category}</h2>
        <img className="w-auto"
          src={image_url}
          alt="Shoes"
        />
     
      <div className="card-body">
        <h2 className="card-title text-left text-2xl">{title}</h2>
        <p className="text-left">{description}</p>
        <p className="text-left text-xl">Instructor: {instructor}</p>
        <span className="text-left">Duration: {duration}</span>
        <p className="text-left text-xl">Price: {price}</p>
        <div className="card-actions justify-between">
        <Link to={`/courses`}><button className="btn btn-primary">ALL Courses</button></Link>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CoursesDetails;
