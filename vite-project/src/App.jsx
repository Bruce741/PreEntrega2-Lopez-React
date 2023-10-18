import { useState } from 'react'
import './App.css'
// react router dom 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components 
import NavBar from './components/navbar/navbar'
import Header from './components/header/header'

// pages 
import Home from './pages/home'
import Celulares from './pages/celulares'
import Electrodomesticos from './pages/Electrodomesticos'
import Consolas from './pages/consolas'
import Televisiones from './pages/televisiones'
import Carrito from './pages/carrito'
import DetailPage from './pages/detailPage'

const App = () => {

  return (
    <Router>
    <div className='App'>

      <Header/>      
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Celulares' element={<Celulares />} />
        <Route path='/Electrodomesticos' element={<Electrodomesticos />} />
        <Route path='/Consolas' element={<Consolas/>} />
        <Route path='/Televisiones' element={<Televisiones />} />
        <Route path='/Carrito' element={<Carrito/>} />
        <Route path='/detailPage/:id' element={<DetailPage/>} />
      </Routes>



    </div>
    </Router>   
  )
}

export default App
