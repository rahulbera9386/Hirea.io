import React from 'react'
import { Badge } from "@/components/ui/badge"

const LatestJobsCard = ({job}) => {
  return (
    <div className='cursor-pointer border border-gray-200 shadow-lg p-6 rounded-lg flex flex-col gap-4 transition-transform transform hover:-translate-y-2 hover:scale-105 duration-300 ease-in-out bg-white'>
    <div>
        <h1 className='text-xl font-semibold text-gray-800'>{job.company.name}</h1>
        <p className='text-sm text-gray-600'>India</p>
    </div>
    <div>
        <h1 className='text-lg font-medium text-gray-70'>{job.title}</h1>
        <p className='text-sm text-gray-500'>{job.description}</p>
    </div>
    <div className='flex gap-2'>
        <Badge variant="outline" className="text-primary font-bold border-primary bg-primary/10">
            {job.position}
        </Badge>
        <Badge variant="outline" className="text-gray-700 font-bold border-gray-700 bg-gray-100">
            {job.jobType}
        </Badge>
        <Badge variant="outline" className="text-red-500 font-bold border-red-500 bg-red-100">
            {job.salary}LPA
        </Badge>
    </div>
</div>

  )
}

export default LatestJobsCard