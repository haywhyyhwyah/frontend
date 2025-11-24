import React from 'react'
import Btn from '../components/Btn'

const Dashboard = () => {
  const logout = ((e) => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  })

  return (
    <>
      <h1>I am the dashboard</h1>
      <Btn title= "Logout" color="btn btn-danger" text="text-light" onClick={logout}/>
    </>
  )
}

export default Dashboard