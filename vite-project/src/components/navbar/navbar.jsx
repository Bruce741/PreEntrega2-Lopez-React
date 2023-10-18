import React from 'react'

// CSS
import './navbar.css'

// React-Router-Dom
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Televisiones">Televisiones</Link>
            <Link to="/Celulares">Celulares</Link>
            <Link to="/Consolas">Consolas</Link>
            <Link to="/Electrodomesticos">Electrodomésticos</Link>
            <Link to="/Carrito">Carrito</Link>
        </nav>      
    </div>
  )
}

export default navbar