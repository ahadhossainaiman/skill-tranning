import React from "react";
import { Link } from "react-router-dom";

const CoursesSummery = ({ course }) => {
  // console.log(course);
  const {
    uid,
    category,
    description,
    duration,
    image_url,
    instructor,
    price,
    title,
  } = course;
  return (
    <>
      <div class="card lg:card-side card-bordered m-2 max-sm:hidden">
        <figure className="object-cover w-auto">
          <img src={image_url} />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>
          <p className="text-left">{description}</p>
          <span className="text-left">Price: {price}</span>
          <div class="card-actions">
            <button class="btn btn-primary">Download</button>
            <Link to={`/courses/${uid}`}>
              <button class="btn btn-ghost">More info</button>
            </Link>
          </div>
        </div>
      </div>
      <div class="card w-72 card-bordered card-compact lg:card-normal lg:hidden max-sm:block ml-12 my-6">
        <figure>
          <img src={image_url} />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-left">{title}</h2>
          <p className="text-left">{description}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Download</button>
            <Link to={`/courses/${uid}`}>
              <button class="btn btn-ghost">More info</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursesSummery;
