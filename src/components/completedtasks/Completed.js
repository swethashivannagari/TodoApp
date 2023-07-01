import React from 'react'
import './Completedtasks.css'
import axios from 'axios'
import { useState,useEffect } from 'react'

function Completed() {

let[history,setHistory]=useState([])

useEffect(()=>{
  axios.get("http://localhost:5000/completedtasks")
  .then((response)=>{
    console.log(response);
    if(response.status===200){
      setHistory(response.data)
    }
  })
},[])
  


  return (
    <div>
      <h4 className='mb-3'>Completed Tasks</h4>
        <div className='table-responsive'>
      <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Task Name</th>
      <th scope="col">Start Date</th>
      <th scope="col">Category</th>
      
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    {
     
      history.map((historyObj)=><tr key={historyObj}>
        <td>{historyObj.taskname}</td>
        <td>{historyObj.srtdate}</td>
        <td>{historyObj.category}</td>
        <td>completed</td>
      </tr>)
    }
  </tbody>
</table>
      </div>
      
    </div>
  )
}

export default Completed