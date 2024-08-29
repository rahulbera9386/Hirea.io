import React from 'react'
import JobCard from '../cards/JobCard'



const browseData=[1,2,3,4,5,6,7,8]

const Browse = () => {
  return (
    <div className='max-w-7xl mx-auto mt-6 p-4 bg-gray-50 rounded-lg shadow-md'>
    <h1 className='text-3xl font-bold text-gray-800 mb-6'>
      Searching results for: ({browseData.length})
    </h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {browseData.map((item, index) => (
        <JobCard key={index} />
      ))}
    </div>
  </div>
  )
}

export default Browse;