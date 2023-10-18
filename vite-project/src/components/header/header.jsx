import React from 'react'

// React-Router-Dom
import {useNavigate} from 'react-router-dom'

// CSS
import './header.css' 

// IMG
import imagen from './logo.png'

const header = () => {
    const navigate = useNavigate();
  return (
    <div className='header'>

      <img onClick={ () => navigate('/')} src={imagen} alt="Mi Imagen" />

    </div>
  )
}

export default header