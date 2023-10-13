import React from 'react'

// ReactRouterDom
import { Link } from 'react-router-dom'

// CSS
import "./navbar.css"

const navbar = () => {
  return (
    <nav className='navbar'>
          <link to='/'>Home</link>
          <link to='/electrodomesticos'>Electrodomesticos</link>
          <link to='/celulares'>Celulares</link>
          <link to='/televisiones'>Televisiones</link>
          <link to='/consolas'>Consolas</link>
    </nav>
  )
}

export default navbar