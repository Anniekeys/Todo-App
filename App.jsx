// import { useState } from 'react'
import Signup from './Components/Signup'
import Todo from './Components/Todo'
import Login from './Components/Login'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path= '/' element={<Signup />} />
        <Route exact path= '/login' element={<Login />} />
        <Route exact path= '/todo' element={<Todo />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
