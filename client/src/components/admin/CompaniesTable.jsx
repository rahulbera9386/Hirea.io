import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Edit, Edit2, MoreHorizontal, Pen } from "lucide-react";
import { useSelector } from "react-redux";

const CompaniesTable = () => {
  const {companies,searchCompanyByText}=useSelector(store=>store.company);
  //console.log(companies)
  const [filterCompany,setFilterCompany]=useState(companies)
  useEffect(()=>{
   const filteredCompany=companies.filter((company)=>company.name.toLowerCase().includes(searchCompanyByText.toLowerCase()));
   setFilterCompany(filteredCompany)
  },[searchCompanyByText,companies])
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {
           filterCompany?.map((company) => (
            <tr>
                <TableCell>
                    <Avatar>
                        <AvatarImage src={company.logo}/>
                    </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right cursor-pointer">
                    <Popover>
                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                        <PopoverContent className="w-32">
                            <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                <Edit2 className='w-4' />
                                <span>Edit</span>
                            </div>
                        </PopoverContent>
                    </Popover>
                </TableCell>
            </tr>

        ))
          }
          
        
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
