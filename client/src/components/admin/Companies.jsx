import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "../../hooks/useGetAllCompanies";
const Companies = () => {
    const navigate=useNavigate();
    useGetAllCompanies();
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between items-center my-5">
        <Input type="text" placeholder="Filter By Name" className="w-fit"/>
        <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
      </div>
      <CompaniesTable/>
    </div>
  );
};

export default Companies;
