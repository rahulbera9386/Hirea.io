import React from "react";
import LatestJobsCard from "../cards/LatestJobsCard";

const LatestJobs = () => {
  const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <h1 className="text-xl font-bold mt-6">
        Latest & Top<span className="text-primary">Job Openings</span>
      </h1>
      <div className="grid grid-cols-3 gap-4 my-6">
        {randomJobs.length <= 0 ? (
          <span>No Jobs Avaulable</span>
        ) : (
          randomJobs.slice(0, 6).map((item, index) => <LatestJobsCard key={index}/>)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
