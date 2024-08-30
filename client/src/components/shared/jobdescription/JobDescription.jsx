import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT } from "../../../utills/constant";
import { useDispatch, useSelector } from 'react-redux';
import { setSingleJob } from "../../../redux/job/jobSlice";
const JobDescription = () => {
  const isApplied = true;
  const params = useParams();
  const jobId = params.id;
  const dispatch=useDispatch();
  const {singleJob}=useSelector(store=>store.job);
  const {user}=useSelector(store=>store.auth);
  //console.log(singleJob)
  //console.log(jobId)
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });

        const apiData = res.data;
        //console.log(apiData);
        if(apiData.success)
        {
          dispatch(setSingleJob(apiData.job))
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [user._id,dispatch,jobId]);

  useEffect(() => {
    if (singleJob?.company?.name) {
      document.title = `${singleJob.company.name} - ${singleJob.title}`;
    }
  }, [singleJob,jobId]);
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-md rounded-md border border-gray-300">
      {/* Job Title Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{singleJob?.company.name}</h1>
        <p className="text-sm text-gray-500 mt-1">Posted 2 days ago</p>
      </div>

      {/* Job Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Job Details</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Role:</span>
              <span className="text-gray-800">{singleJob.title}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Location:</span>
              <span className="text-gray-800">{singleJob.location}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Experience:</span>
              <span className="text-gray-800">{singleJob.experienceLevel}</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Salary:</span>
              <span className="text-gray-800">{singleJob.salary} LPA</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">
                Total Applicants:
              </span>
              <span className="text-gray-800">45</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Posted Date:</span>
              <span className="text-gray-800">August 27, 2024</span>
            </li>
          </ul>
        </div>

        {/* Job Badges Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">
            Job Information
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="text-blue-600 border-blue-600">
              12 Positions
            </Badge>
            <Badge variant="outline" className="text-gray-900 border-gray-900">
              Part Time
            </Badge>
            <Badge variant="outline" className="text-red-600 border-red-600">
              23 LPA
            </Badge>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="flex justify-end">
        <Button
          className={`px-6 py-2 text-white font-semibold rounded-md transition-all duration-300 ${
            isApplied
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          disabled={isApplied}
          style={isApplied ? { cursor: "not-allowed" } : {}}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
    </div>
  );
};

export default JobDescription;
