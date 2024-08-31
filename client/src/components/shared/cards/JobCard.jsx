import React from 'react';
import { Bookmark } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const JobCard = ({job}) => {
  //const jobId = "rahulbera9932gmailcom";
  const navigate = useNavigate(); 
  const {singleJob}=useSelector(store=>store.job);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-2 hover:scale-105  ease-in-out">
      <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-50">
        <p className="text-gray-500 text-xs">2 days ago</p>
        <Button className="p-1 hover:bg-none bg-white border">
          <Bookmark className="text-gray-700" />
        </Button>
      </div>
      <div className="flex items-center p-3 border-b border-gray-200">
        <Avatar className="mr-2 border-2 border-gray-300">
          <AvatarImage src="https://www.healthvectors.ai/wp-content/uploads/2024/03/OG-Image.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">{singleJob.company.name}</h1>
          <p className="text-gray-600 text-sm">India</p>
        </div>
      </div>
      <div className="p-3 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">{singleJob.title}</h1>
        <p className="text-gray-700 mt-1 text-sm leading-relaxed">{singleJob.description}</p>
      </div>
      <div className="p-3 border-b border-gray-200 flex flex-wrap gap-1">
        <Badge className="bg-blue-100 text-blue-700 font-semibold py-1 px-2 text-xs">{singleJob.position}</Badge>
        <Badge className="bg-red-100 text-red-600 font-semibold py-1 px-2 text-xs">{singleJob.jobType}</Badge>
        <Badge className="bg-purple-100 text-purple-700 font-semibold py-1 px-2 text-xs">{singleJob.salary} LPA</Badge>
      </div>
      <div className="p-3 flex justify-between border-t border-gray-200 bg-gray-50">
        <Button onClick={() => navigate(`/description/${singleJob._id}`)} variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
}

export default JobCard;
