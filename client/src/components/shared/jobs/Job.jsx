import React from "react";
import FilterJobCard from "../cards/FilterJobCard";
import JobCard from "../cards/JobCard";

const Job = () => {
  const jobcards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10.11, 12];
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <div className="flex gap-4">
        <div className="fixed top-5 left-5 w-1/5 p-4  ">
          <FilterJobCard />
        </div>
        <div className="ml-[20%] mt-5">
          {jobcards.length <= 0 ? (
            <span>No Jobs Found</span>
          ) : (
            <div className="flex-1 h-9 pb-9">
              <div className="grid grid-cols-3 gap-8">
                {jobcards.map((item, index) => (
                  <JobCard key={index}/>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Job;
