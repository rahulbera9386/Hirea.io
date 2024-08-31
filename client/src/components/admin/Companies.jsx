import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "../../hooks/useGetAllCompanies";
import Navbar from './../shared/navbar/Navbar';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "../../redux/company/companySlice";
const Companies = () => {
    const navigate=useNavigate();
    useGetAllCompanies();
    const dispatch=useDispatch();
    const [input,setInput]=useState("");
    useEffect(()=>{
dispatch(setSearchCompanyByText(input))
    },[input])
  return (
    <>
    
    <Navbar/>
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between items-center my-5">
        <Input type="text" placeholder="Filter By Name" className="w-fit" onChange={(e)=>setInput(e.target.value)}/>
        <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
      </div>
      <CompaniesTable/>
    </div>
    </>
  );
};

export default Companies;
