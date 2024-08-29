import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const JobDescription = () => {
  const isApplied = true;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-md rounded-md border border-gray-300">
      {/* Job Title Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Frontend Developer</h1>
        <p className="text-sm text-gray-500 mt-1">Posted 2 days ago</p>
      </div>

      {/* Job Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Job Details</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Role:</span>
              <span className="text-gray-800">Frontend Developer</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Location:</span>
              <span className="text-gray-800">Remote</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Experience:</span>
              <span className="text-gray-800">3+ Years</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Salary:</span>
              <span className="text-gray-800">23 LPA</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Total Applicants:</span>
              <span className="text-gray-800">45</span>
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-gray-600">Posted Date:</span>
              <span className="text-gray-800">August 27, 2024</span>
            </li>
          </ul>
        </div>

        {/* Job Badges Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Job Information</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="text-blue-600 border-blue-600">12 Positions</Badge>
            <Badge variant="outline" className="text-gray-900 border-gray-900">Part Time</Badge>
            <Badge variant="outline" className="text-red-600 border-red-600">23 LPA</Badge>
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="flex justify-end">
        <Button
          className={`px-6 py-2 text-white font-semibold rounded-md transition-all duration-300 ${isApplied ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
          disabled={isApplied}
          style={isApplied ? { cursor: 'not-allowed' } : {}}
        >
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>
    </div>
  );
};

export default JobDescription;
