import React from 'react'

// React-Router-Dom
import {useNavigate} from 'react-router-dom'

const celulares = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>celulares</h1>
      <button onClick={ () => navigate('/')}>Volver al inicio</button>
    </div>
  )
}

export default celulares