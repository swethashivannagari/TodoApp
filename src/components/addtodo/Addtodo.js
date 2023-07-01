import React, { useState } from 'react'
import './Addtodo.css'
import axios from 'axios'
import {useForm} from 'react-hook-form'
function Addtodo() {
  let {register,
    handleSubmit,
    formState:{errors},
    reset,

  }=useForm()

  //usestate hook for errors
  let [err,setErr]=useState("");
  {/*Add tasks*/}
  let Addtodo=(newtask)=>{
    newtask.id=Math.floor(Math.random()*100);
  console.log(newtask);
  //save tasks in json server by making http post request
  axios.post("http://localhost:5000/todolist ",newtask)
  .then(response=>{
    console.log(response)

    if(response.status===201){
     // props.setstat();
      reset();
      setErr("")
    }
  })  
  .catch(err=>{
    console.log(err)
    if(err.response){
       setErr(err.message)
    }
    else if(err.request){
      setErr(err.message)
    }
    else{
      setErr(err.message)
    }
  })
}




  return (
    <div>
   <p className='display-3 text-center bold'>Add Todos</p>
   <p className='display-6'>Plan your day wisely</p>
   {/*Http error message */}
   {err.length!==0 &&<p className='display-3 text-danger'>{err}</p>}
   {/*responsive*/}
   <div className='row mt-3'>
    <div className='col-11 col-sm-8 col-md-6 mx-auto'>
      <form onSubmit={handleSubmit(Addtodo)}>
        <div className='mb-3 mt-5' >
          <label htmlFor='taskname'>Task Name</label>
          <input type='text' id="taskname" className='form-control'
          {...register("taskname",{required:true})}/>
        {/*validation errors for name*/}
        {errors.taskname?.type==="required" && <p className='text-danger fw-bold'>*Task Name is not mentioned</p>}
        
        </div>
        {/*Start date*/}
        <div className='mb-3'>
          <label htmlFor='srtdate'>Start-date</label>
          <input type='date' id="srtdate" className='form-control'
          {...register("srtdate",{required:true})}/>
        {/*validation errors for name*/}
        {errors.srtdate?.type==="required" && <p className='text-danger fw-bold'>*Date is not mentioned</p>}
        
        </div>
       
        {/*Category*/}
        <div className='mb-3'>
          <label htmlFor='category'>Category</label>
          <select defaultValue={'DEFAULT'} className='form-select'
          {...register('category')}>
            <option value="DEFAULT" disabled>Select Category</option>
            <option value='Personal'>Personal</option>
            <option value='professional'>professional</option>
            <option value="exercise">exercise</option>
            <option value="others">Others</option>
          </select>
        </div>
      {/*<div className='mb-3'>
          <label htmlFor='Status'>Status</label>
          <input type='text' id="status" className='form-control'
          defaultValue="pending"
          {...register("Status")}/>
  </div>*/}
        <button type="submit" className='btn mybtn'>Add Task</button>

      </form>

    </div>
   </div>
    </div>
  )
}

export default Addtodo