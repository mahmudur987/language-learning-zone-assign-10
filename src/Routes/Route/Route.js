import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Cheakout from "../../Components/CheakOut/Cheakout";
import CourseDetail from "../../Components/CourseDetail/CourseDetail";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Leaflet from "../../Components/Leaflet/Leaflet";
import Login from "../../Components/Login/Login";
import Maintain from "../../Components/Maintain/Maintain";
import MyBookings from "../../Components/MuBookings/MyBookings";
import Profile from "../../Components/Profile/Profile";

import SignUp from "../../Components/SignUp/SignUp";
import Main from "../../Layouts/Main";
import PrivatRoutes from "../PrivetRoute/PrivetRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetail></CourseDetail>,
        loader: async ({ params }) => {
          return fetch(
            `https://language-learning-server.vercel.app/courses/${params.id}`
          );
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: (
          <PrivatRoutes>
            {" "}
            <Blog></Blog>{" "}
          </PrivatRoutes>
        ),
      },
      {
        path: "/mybooking",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/cheakout/:id",
        element: (
          <PrivatRoutes>
            <Cheakout></Cheakout>
          </PrivatRoutes>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://language-learning-server.vercel.app/cheakout/${params.id}`
          ),
      },
      {
        path: "/profile",
        element: (
          <PrivatRoutes>
            <Profile></Profile>
          </PrivatRoutes>
        ),
      },
      {
        path: "/liflet",
        element: <Leaflet></Leaflet>,
      },
      {
        path: "*",
        element: <Maintain></Maintain>,
      },
    ],
  },
  {
    path: "*",
    element: <Maintain></Maintain>,
  },
]);

export default route;
