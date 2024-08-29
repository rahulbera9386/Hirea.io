import React from "react";
import Navbar from './../navbar/Navbar';
import HeroSection from "../hero/HeroSection";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection/>
    </div>
  );
};

export default Home;
