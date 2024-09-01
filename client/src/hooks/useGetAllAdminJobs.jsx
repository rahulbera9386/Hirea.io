import axios from "axios";
import React, { useEffect } from "react";
import { JOB_API_END_POINT } from "../utills/constant";
import { useDispatch } from "react-redux";

import { setAllAdminJobs } from "../redux/job/jobSlice";

const useGetAllAdminJobs = () => {
  const dispatch = useDispatch();
  return useEffect(() => {
    const fetchAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/adminjobs`, {
          withCredentials: true,
        });
        const apiData = res.data;
        console.log(apiData);
        if (apiData.success) {
          dispatch(setAllAdminJobs(apiData.jobs));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAdminJobs();
  }, []);
};

export default useGetAllAdminJobs;
