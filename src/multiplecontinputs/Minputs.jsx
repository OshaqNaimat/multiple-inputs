import React, { useState } from 'react'
import Singleperson from './Singleperson'

const Minputs = () => {

   
  const [data,setData] = useState([])
    const [name,setName] = useState({
        names:'',email:'',age:'',dob:'',time:''
    })

    const {names,email,age,dob,time} = name

    const handleInputs = (e) =>{
         setName({
            ...name,
            [e.target.name]:e.target.value
         })
    }

    const handleChange = (e)=>{
        e.preventDefault()
        setName([name])
    }

    
  return (
    <>
    <div className="container shadow-black mx-auto w-[100%] md:w-1/2 lg:w-1/3 shadow-xl p-4 mt-5 rounded-md">
      <form>

        <label>Name</label>
        <input type="text" value={names} onChange={handleInputs} className='outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200  p-2'
         placeholder='Enter your name...' name='names' />
     
        <label>Email</label>
        <input type="text" value={email} onChange={handleInputs} className='outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200  p-2'
         placeholder='Enter your email...' name='email' />
     
        <label>Age</label>
        <input type="number" value={age} onChange={handleInputs} className='outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200  p-2'
         placeholder='Enter your age...' name='age'/>
     
        <label>DOB</label>
        <input type="date" value={dob} onChange={handleInputs} className='outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200  p-2'
         placeholder='Enter your DOB...' name='dob'/>
     
        <label>Time</label>
        <input type="time" value={time} name='time' onChange={handleInputs} className='outline-0 w-full m-2 shadow-xl rounded-md shadow-blue-200  p-2'  />
         
         <button onClick={handleChange} className='p-3 bg-blue-500 w-full text-white rounded-md'>Add Data</button>
      </form>
    </div>


    {data.map((item,index)=>{
        return <Singleperson/>
    })}
    </>
  )
}

export default Minputs