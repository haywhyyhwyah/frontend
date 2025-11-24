import React from 'react'
import Btn from '../components/Btn'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  
  const logout = ((e) => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    navigate("/signin")
  })

  return (
    <>
      <h1>I am the dashboard</h1>
      <Btn title= "Logout" color="btn btn-danger" text="text-light" onClick={logout}/>
    </>
  )
}

export default Dashboard