import React from 'react'
// CSS
import './navbar.css'

const navbar = () => {
  return (
    <div>
        <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#televisores">Televisores</a>
            <a href="#celulares">Celulares</a>
            <a href="#consolas">Consolas</a>
            <a href="#electrodomesticos">Electrodomésticos</a>
        </nav>      
    </div>
  )
}

export default navbar