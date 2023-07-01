import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navigationbar.css'
function Navigationbar() {


  const activeLink={
    color:'#EEF0F1',
    fontSize:"1.2rem"
  }
  const inactiveLink={
    color:'#EEf011',fontSize:"1.2rem"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/addtodo">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
              
              <li className="nav-item ">
                <NavLink className="nav-link " to="/todolist">TodoList</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link " to="/completedtasks">Completed Tasks</NavLink>
              </li>
              


            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigationbar