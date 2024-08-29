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

const appliedJobs = [
  {
    date: "2024-08-15",
    jobRole: "Frontend Developer",
    company: "TechCorp",
    status: "Applied",
  },
  {
    date: "2024-08-16",
    jobRole: "Backend Developer",
    company: "DevWorks",
    status: "Interview Scheduled",
  },
  {
    date: "2024-08-17",
    jobRole: "FullStack Developer",
    company: "CodeLabs",
    status: "Rejected",
  },
  {
    date: "2024-08-18",
    jobRole: "UI/UX Designer",
    company: "Designify",
    status: "Offer Received",
  },
  {
    date: "2024-08-19",
    jobRole: "Data Scientist",
    company: "DataPro",
    status: "Applied",
  },
];
const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow key={index}>
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.jobRole}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="text-right">{job.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
