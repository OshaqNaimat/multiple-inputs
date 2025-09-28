import React, { useState } from 'react'
import Singleperson from './Singleperson'
import { Toaster, toast } from 'react-hot-toast'

const Minputs = () => {
  const initialFields = {
    id:'',
    names: '',
    email: '',
    age: '',
    dob: '',
    time: ''
  }

  const [formData, setFormData] = useState(initialFields)
  const [records, setRecords] = useState([])
  const { names, email, age, dob, time } = formData

  const handleInputs = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleChange = (e) => {
    e.preventDefault()

    
    if (!names || !email || !age || !dob || !time) {
      toast.error('Your form is on a diet… it needs more input!', {
        duration: 2000,
         
      })
      return
    }

   
    
    setRecords([...records, formData])
    setFormData(initialFields)

    toast.success(' Data added successfully!', {
      duration: 2000,
      
    })
  }
   const removeUsers = (id) =>{
     let newpeople = records.filter((item,index)=>{
      return item.id !== id 
     })

     setRecords(newpeople)
    }

  return (
    <>
    

      <div className="container shadow-black mx-auto w-[100%] md:w-1/2 lg:w-1/3 shadow-xl p-4 mt-5 rounded-md">
        <form>
          <label>Name</label>
          <input
            type="text"
            value={names}
            onChange={handleInputs}
            className="outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200 p-2"
            placeholder="Enter your name..."
            name="names"
          />

          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={handleInputs}
            className="outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200 p-2"
            placeholder="Enter your email..."
            name="email"
          />

          <label>Age</label>
          <input
            type="number"
            value={age}
            onChange={handleInputs}
            className="outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200 p-2"
            placeholder="Enter your age..."
            name="age"
          />

          <label>DOB</label>
          <input
            type="date"
            value={dob}
            onChange={handleInputs}
            className="outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200 p-2"
            name="dob"
          />

          <label>Time</label>
          <input
            type="time"
            value={time}
            name="time"
            onChange={handleInputs}
            className="outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200 p-2"
          />

          <button
            onClick={handleChange}
            className="p-3 bg-blue-500 w-full outline-0 select-none active:scale-90 hover:bg-blue-600 duration-300 text-white rounded-md"
          >
            Add Data
          </button>
        </form>
          <h4 className="text-lg font-semibold text-gray-700 text-center">User data: {records.length}</h4>
      </div>

      
      <Toaster />

      <div className="container grid grid-cols-4 gap-3">
        {records.map((item, index) => (
          <Singleperson {...item} remove={removeUsers} key={index} />
        ))}
      </div>
    </>
  )
}

export default Minputs
