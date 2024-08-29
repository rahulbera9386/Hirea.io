import { Bookmark } from 'lucide-react';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';

const JobCard = () => {
  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 hover:scale-105  ease-in-out ">
      <div className="flex justify-between items-center p-3 border-b border-gray-200 bg-gray-50">
        <p className="text-gray-500 text-xs">2 days ago</p>
        <Button className="p-1  hover:bg-none bg-white border">
          <Bookmark className="text-gray-700" />
        </Button>
      </div>
      <div className="flex items-center p-3 border-b border-gray-200">
        <Avatar className="mr-2 border-2 border-gray-300">
          <AvatarImage src="https://www.healthvectors.ai/wp-content/uploads/2024/03/OG-Image.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-lg font-semibold text-gray-800">Company Name</h1>
          <p className="text-gray-600 text-sm">India</p>
        </div>
      </div>
      <div className="p-3 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-gray-800">Title</h1>
        <p className="text-gray-700 mt-1 text-sm leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam perferendis voluptatum pariatur.</p>
      </div>
      <div className="p-3 border-b border-gray-200 flex flex-wrap gap-1">
        <Badge className="bg-blue-100 text-blue-700 font-semibold py-1 px-2 text-xs">12 Positions</Badge>
        <Badge className="bg-red-100 text-red-600 font-semibold py-1 px-2 text-xs">Full Time</Badge>
        <Badge className="bg-purple-100 text-purple-700 font-semibold py-1 px-2 text-xs">12 LPA</Badge>
      </div>
      <div className="p-3 flex justify-between border-t border-gray-200 bg-gray-50">
        <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 py-1 px-3 text-sm rounded-lg">Details</Button>
        <Button className="bg-gray-300 text-gray-800 hover:bg-gray-400 transition-colors duration-300 py-1 px-3 text-sm rounded-lg">Save For Later</Button>
      </div>
    </div>
  );
}

export default JobCard;
