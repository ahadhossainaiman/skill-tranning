import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummery from '../../Shere/CoursesSummery/CoursesSummery';

const Courses = () => {
    const courses = useLoaderData();
    const allCourses = courses.courses;
    return (
        <div>
            {
                allCourses.map((course)=><CoursesSummery key={course.uid} course={course}></CoursesSummery>)
            }
        </div>
    );
};

export default Courses;