import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/courses',
        element:<Courses></Courses>,
        loader:()=>{
            return fetch('http://localhost:5000/courses')
        }
      },
      {
        path:'/courses/:id',
        element:<CoursesDetails></CoursesDetails>,
        loader: ({params})=>{
         return fetch(`http://localhost:5000/courses/${params.id}`)
        }
      }
    ],
  },
]);
