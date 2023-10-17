import { useState } from 'react'
import './App.css'
// react router dom 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components 
import NavBar from './components/navbar/navbar'

// pages 
import Home from './pages/home'
import Celulares from './pages/celulares'
import Electrodomesticos from './pages/Electrodomesticos'
import Consolas from './pages/consolas'
import Televisiones from './pages/televisiones'

const App = () => {

  return (
    <Router>
    <div className='App'>
      
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Celulares' element={<Celulares />} />
        <Route path='/Electrodomesticos' element={<Electrodomesticos />} />
        <Route path='/Consolas' element={<Consolas/>} />
        <Route path='/Televisiones' element={<Televisiones />} />
      </Routes>



    </div>
    </Router>   
  )
}

export default App
