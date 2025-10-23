import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home';
import Admin from './Components/Admin/Admin';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Allemp from './Components/Admin/All-emp';
import addEmp from './Components/Admin/AddEmp';
import AddEmp from './Components/Admin/AddEmp';

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = { <Home/> }/>
            <Route path='/admin' element = { <Admin/> }/>
            <Route path='/login' element = { <Login/> }/>
            <Route path='/signup' element = { <Signup/> }/>
            <Route path='/admin/employees' element = { <Allemp/> }/>
            <Route path='/admin/add-employee' element = { <AddEmp/> }/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
