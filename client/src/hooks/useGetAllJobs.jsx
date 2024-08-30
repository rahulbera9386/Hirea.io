import React, { useEffect } from "react";
import { JOB_API_END_POINT } from "../utills/constant";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setAllJobs } from "../redux/job/jobSlice";

const useGetAllJobs = () => {
  const dispatch=useDispatch()
  return useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
        });
        //console.log(res);
        const apiData=res.data;
        //console.log(apiData)
        dispatch(setAllJobs(apiData.jobs))
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllJobs();
  }, []);
};

export default useGetAllJobs;
