import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Courses from "../../Pages/Courses/Courses";
import CoursesDetails from "../../Pages/CoursesDetails/CoursesDetails";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path:'/',
        element:<Home></Home>
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
        element:<PrivateRoute><CoursesDetails></CoursesDetails></PrivateRoute>,
        loader: ({params})=>{
         return fetch(`http://localhost:5000/courses/${params.id}`)
        }
      }
      ,
      {
        path:'/category/:id',
        element:<Category></Category>,
        loader: ({params})=>{
          return fetch(`http://localhost:5000/category/${params.id}`)
        }
      }
    ],
  },
]);
