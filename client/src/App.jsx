import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./components/shared/home/Home";
import Signup from "./components/shared/signup/Signup";
import Login from "./components/shared/login/login";
import Job from "./components/shared/jobs/job";
import Browse from "./components/shared/browse/Browse";
import Profile from "./components/shared/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/jobs",
    element:<Job/>
  }
  ,{
    path:"/browse",
    element:<Browse/>
  },
  {
    path:"/profile",
    element:<Profile/>
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
