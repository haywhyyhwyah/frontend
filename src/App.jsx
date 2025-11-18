import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import About from './pages/About'
import SignUpp from './pages/SignUpp'
import Props from './pages/Props'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/signupp' element={<SignUpp/>}/>
        <Route path='/props' element={<Props/>}/>
      </Routes>
    </>
  )
}

export default App