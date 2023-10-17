import React from 'react'

// React-Router-Dom
import {useNavigate} from 'react-router-dom'

// CSS
import './header.css' 

const header = () => {
    const navigate = useNavigate();
  return (
    <div className='header'>

        <img src='./woolmarkimagelogo-1024x576.png' onClick={ () => navigate('/')}/>

    </div>
  )
}

export default header