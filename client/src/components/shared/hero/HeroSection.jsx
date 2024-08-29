import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
const HeroSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className=" font-medium bg-red-300 mx-auto px-4 py-3 rounded-full">
          No 1 Job Hunt Portal
        </span>
        <h1 className="text-5xl font-bold">
          Search,Apply &<br />
          <span className="text-primary">Get Your Dream Job</span>
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
          possimus velit quibusdam?
        </p>
        <div className="w-[40%] mx-auto flex item border rounded-full px-2 ">
          <input
            type="text"
            placeholder="Find Your Dream Job"
            className="w-full outline-none border-none"
          />
          <Button className="rounded-r-full bg-primary">
            <Search className="w-5 h-5 " />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
