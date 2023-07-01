import React from 'react'
import './Todolist.css'
import { useEffect ,useState} from 'react'
import axios from 'axios';

function Todolist() {
//usestate to get tasks
let[todos,settodos]=useState([]);
let [err,setErr]=useState("");

  //gettodos function
  let gettodos=()=>{
    axios.get("http://localhost:5000/todolist")
    .then((response)=>{
      if(response.status===200){
        settodos(response.data);
        //clear error message
        setErr("");

      }
      else{
        throw new Error("SOMETHING WENT WRONG");
      }
    })
    .catch((err)=>{
      //the client was given an error response
      if(err.response){
        setErr(err.response);
      }
      else if(err.request){
        setErr(err.message);
      }
      else{
        setErr(err.message);
      }
    })
  };


//sideEffect
useEffect(()=>{

  //fetch data
  axios.get("http://localhost:5000/todolist")
  .then(response=>{

    if(response.status===200){
      settodos(response.data)
    }
  })
  if(err.response){
    setErr(err.message)
 }
 else if(err.request){
   setErr(err.message)
 }
 else{
   setErr(err.message)
 }
},[])


//-----------------delete completed todos----
const deleteUser=(todo)=>{
  
  
  axios

  .post('http://localhost:5000/completedtasks',todo,{headers:{"Content-Type" : "application/json"}})
  .then((res)=>{
    console.log(res)
    if(res.status===201){
      
      //remove the task from table
      axios.delete(`http://localhost:5000/todolist/${todo.id}`)
      .then(res=>{
        if(res.status===200)
        gettodos();
      })
      setErr("");
    }
    else{
      throw new Error("Something went wrong")
    }
   
  })
}





  return (
    <div>
      <h4 className='mb-3'>Todo Tasks</h4>
      <div className='table-responsive'>
      <table className="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Task Name</th>
      <th scope="col">Start Date</th>
      <th scope="col">Category</th>
      
      <th scope="col">Edit</th>
    </tr>
  </thead>
  <tbody>
    {
      todos.map((todoObj)=>
      <tr key={todoObj.id}>
        <td>{todoObj.taskname}</td>
        <td>{todoObj.srtdate}</td>
        <td>{todoObj.category}</td>
        
        <td><button className='btn border btn-danger' onClick={()=>deleteUser(todoObj)}>done</button></td>
        
        
      </tr>)
      
    }
  </tbody>
</table>
      </div>
    </div>
  )
}

export default Todolist