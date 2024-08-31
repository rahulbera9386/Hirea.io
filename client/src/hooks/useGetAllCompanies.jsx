import axios from "axios";
import React, { useEffect } from "react";
import { COMPANY_API_END_POINT } from "../utills/constant";
import { useDispatch } from "react-redux";
import { setCompanies } from "../redux/company/companySlice";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  return useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });
        const apiData = res.data;
       // console.log(apiData);
        if (apiData.success) {
          dispatch(setCompanies(apiData.companies));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchCompanies();
  }, []);
};

export default useGetAllCompanies;
