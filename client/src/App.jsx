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
import Browse from "./components/shared/browse/Browse";
import Profile from "./components/shared/profile/Profile";
import Job from "./components/shared/jobs/Job";
import JobDescription from "./components/shared/jobdescription/JobDescription";
import Companies from "./components/admin/Companies";
import CreateCompany from "./components/admin/CreateCompany";
import CompanySetup from "./components/admin/CompanySetup";
import Jobs from "./components/admin/jobs/Jobs";
import PostJob from "./components/admin/jobs/PostJob";


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
  },
  {
path:"/description/:id",
element:<JobDescription/>
  },
  //Admin Part Starts Here
  {
    path:"/admin/companies",
    element:<Companies/>
  },
  {
    path:"/admin/companies/create",
    element:<CreateCompany/>
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup/>
  },
  {
    path:"/admin/jobs",
    element:<Jobs/>
  },{
    path:"/admin/jobs/create",
    element:<PostJob/>
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
