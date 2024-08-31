import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { COMPANY_API_END_POINT } from "../../utills/constant";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import useGetCompanyById from './../../hooks/useGetCompanyById';

const CompanySetup = () => {
  const navigate = useNavigate();
  const params = useParams();
  const jobId = params.id;
  useGetCompanyById(params.id);
  const { singleCompany } = useSelector((store) => store.company);
  console.log(singleCompany);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleFileChange = (e) => {
    const file = e.target?.files[0];
    setInput({ ...input, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(input)
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${jobId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );
      const apiData = res.data;
      //console.log(apiData);
      if (apiData.success) {
        toast.success(apiData.message);
        navigate("/admin/companies");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div>
      <div className="max-w-6xl mx-auto my-10">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-5 ">
            <Button onClick={() => navigate("/admin/companies")}>Back</Button>
            <h1 className="font-bold text-center text-xl">Company Setup:</h1>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto">
            <div className="my-4">
              <Label className="mb-4">Name:</Label>
              <Input
                type="text"
                name="name"
                value={input.name}
                placeholder="Abc"
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <Label className="mb-4">Description:</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                placeholder="xyz"
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <Label>Website:</Label>
              <Input
                type="text"
                name="website"
                value={input.website}
                placeholder="abc.com"
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <Label className="mb-4">Location:</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                placeholder="NY"
                onChange={handleChange}
              />
            </div>
            <div className="my-4">
              <Label className="mb-4">Logo</Label>
              <Input
                type="file"
                name="logo"
                onChange={handleFileChange}
                accept="image/*"
              />
            </div>
          </div>
          <Button type="submit" className="">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
