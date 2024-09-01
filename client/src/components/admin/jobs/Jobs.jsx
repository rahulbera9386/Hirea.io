import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import JobsTable from "./JobsTable";
import { setSearchByText } from "../../../redux/job/jobSlice";
import Navbar from "./../../shared/navbar/Navbar";
import useGetAllAdminJobs from "../../../hooks/useGetAllAdminJobs";
const Jobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(setSearchByText(input));
  }, [input]);
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <div className="flex justify-between items-center my-5">
          <Input
            type="text"
            placeholder="Filter By Name"
            className="w-fit"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={() => navigate("/admin/jobs/create")}>
            New Job
          </Button>
        </div>
        <JobsTable />
      </div>
    </>
  );
};

export default Jobs;
