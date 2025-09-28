import React from 'react'
import { FaTrash } from 'react-icons/fa'

const Singleperson = ({ names, email, age, dob, time }) => {
  return (
    <div className="p-5 shadow-md rounded-xl my-4 bg-white border border-gray-200 hover:shadow-lg transition duration-300">
      <div className="flex justify-between items-center">

      <h2 className="text-xl font-semibold  text-gray-800 mb-3 border-b pb-2">
        {names || "Unnamed"}
      </h2>
  
              <FaTrash className='text-xl  text-red-500 active:scale-90 duration-300 hover:text-red-600 cursor-pointer select-none' />
      </div>

      
      <div className="space-y-2 text-gray-700 text-sm">
        <p><span className="font-medium text-gray-900">Email:</span> {email}</p>
        <p><span className="font-medium text-gray-900">Age:</span> {age}</p>
        <p><span className="font-medium text-gray-900">DOB:</span> {dob}</p>
        <p><span className="font-medium text-gray-900">Time:</span> {time}</p>
      </div>
    </div>
  )
}

export default Singleperson
