import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "../../utills/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from 'react-redux';
import { setSingleCompany } from "../../redux/company/companySlice";
const CreateCompany = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({name:""});
  const dispatch=useDispatch();

  const registerCompany = async () => {
   
    try {
        //console.log(input)
      const res = await axios.post(`${COMPANY_API_END_POINT}/register`,input,{
        headers: { "Content-type": "application/json" },
        withCredentials: true,
      });
      const apiData = res.data;
      //console.log(apiData);
      if(apiData.success)
      {
        dispatch(setSingleCompany(apiData.company));
        toast.success(apiData.message)
        const companyId = res?.data?.company?._id;
                navigate(`/admin/companies/${companyId}`);
      }
    } catch (err) {
        //toast(err.response.data.message)
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 flex flex-col gap-6">
        <div>
          <h1 className="text-xl font-bold mb-6">
            Create Your Company Profile:
          </h1>
          <Input
            type="text"
            name="name"
            value={input.name}
            placeholder="Enter Your Company Name"
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-6">
          <Button variant="outline" onClick={()=>navigate("/admin/companies")}>
            Cancel
          </Button>
          <Button onClick={registerCompany}>Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateCompany;
