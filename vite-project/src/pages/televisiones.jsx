import React from 'react'

// React-Router-Dom
import {useNavigate} from 'react-router-dom'

const televisiones= () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>televisiones</h1>
      <button onClick={ () => navigate('/')}>Volver al inicio</button>
    </div>
  )
}

export default televisiones