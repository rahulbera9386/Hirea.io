import React, { useEffect } from "react";
import Navbar from './../navbar/Navbar';
import HeroSection from "../hero/HeroSection";
import CategoryCarousel from "../categorycarousel/CategoryCarousel";
import LatestJobs from "../latestjobs/LatestJobs";
import Footer from "../footer/Footer";
import useGetAllJobs from "../../../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const {user}=useSelector(store=>store.auth);
  const navigate=useNavigate();
  useEffect(()=>{
if(user?.role === "recruiter")
{
  navigate("/admin/companies")
}
  },[])
  return (
    <>
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs/>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
