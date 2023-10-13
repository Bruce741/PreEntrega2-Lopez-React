import { useState } from 'react'
import './App.css'
// react router dom 
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components 
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'

// Pages 
import electrodomesticos from './pages/Electrodomesticos'
import consolas from './pages/consolas'
import televisiones from './pages/televisiones'
import celulares from './pages/celulares'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className='App'>

      <Header/>
      <Navbar/>
      

    //Rutas 
    <Routes>
	    <Route path="/" element={<Home/>}/>
      <Route path="/electrodomesticos" element={<electrodomesticos/>}/>
      <Route path="/consolas" element={<consolas/>}/>
      <Route path="/celulares" element={<celulares/>}/>
      <Route path="/televisiones" element={<televisiones/>}/>
    </Routes>


    </div>

    </Router>
  )
}

export default App
