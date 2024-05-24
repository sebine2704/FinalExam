import { useState } from 'react'
import './App.css'
import {Routes, Route  } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import Header from './layout/Header';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/form'element={<Form/>}/>
    </Routes>
    
    </>
  )
}

export default App
