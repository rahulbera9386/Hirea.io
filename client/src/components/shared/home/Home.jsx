import React from "react";
import Navbar from './../navbar/Navbar';
import HeroSection from "../hero/HeroSection";
import CategoryCarousel from "../categorycarousel/CategoryCarousel";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection/>
      <CategoryCarousel/>
    </div>
  );
};

export default Home;
