import { useState } from 'react'
import './App.css'
// react router dom 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components 
import Header from './components/header/header'


const App = () => {

  return (

    <div className='App'>
      <Header/>  
    </div>

   
  )
}

export default App
