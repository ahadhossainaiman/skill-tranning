import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CoursesSummery from '../../Shere/CoursesSummery/CoursesSummery';

const Category = () => {
    const selectedCategory = useLoaderData();
    console.log(selectedCategory);
    return (
        <>
           {
            selectedCategory.map(courses=><CoursesSummery key={courses.uid} course={courses}></CoursesSummery>)
           } 
        </>
    );
};

export default Category;