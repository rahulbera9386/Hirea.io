import React from "react";
import Navbar from './../navbar/Navbar';
import HeroSection from "../hero/HeroSection";
import CategoryCarousel from "../categorycarousel/CategoryCarousel";
import LatestJobs from "../latestjobs/LatestJobs";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs/>
    </div>
  );
};

export default Home;
