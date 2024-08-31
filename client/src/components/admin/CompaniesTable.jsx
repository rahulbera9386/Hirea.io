import React from "react";
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
import { Edit, Edit2, Pen } from "lucide-react";
import { useSelector } from "react-redux";

const CompaniesTable = () => {
  const {companies}=useSelector(store=>store.company);
  console.log(companies)
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
            companies.length <= 0?(<span>You have not created any company yet</span>):(
              <>
              {
              companies.map((company)=>(<tr>
               
            <TableCell className="font-medium">
              <Avatar>
                <AvatarImage src={company?.logo || "https://www.globalfleet.com/sites/default/files/styles/medium/public/default_images/default-company.jpg?itok=b4eD7gVz"} />
              </Avatar>
            </TableCell>
            <TableCell>{company?.name}</TableCell>
            <TableCell>{company.createdAt.split("T")[0]}</TableCell>
            <TableCell className="text-right">
              <Popover>
                <PopoverTrigger><Edit className=" "/></PopoverTrigger>
                <PopoverContent className="w-32">
                    <div className="flex gap-2 items-center w-fit cursor-pointer">
                    <Pen/>
                    <span>Edit</span>
                    </div>
                  
                </PopoverContent>
              </Popover>
            </TableCell>
          

                </tr>)
            )}</>)
          }
          
        
        </TableBody>
      </Table>
    </div>
  );
};

export default CompaniesTable;
