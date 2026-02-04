import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import TaskList from '../components/TaskList'

const Dashboard =() => {
const navigate = useNavigate()

  const handleLogout=()=>{
        console.log('click from dashboard')
        localStorage.removeItem('loginData')
        localStorage.removeItem('authData')
        // localStorage.clear()
        navigate('/login')
  }
  
  return (
    <div>
      <Navbar title="Task Management" onLogout={handleLogout}/>
        <h1>
            hello guys ....!
        </h1>
        <TaskList/>
    </div>
  )
}

export default Dashboard