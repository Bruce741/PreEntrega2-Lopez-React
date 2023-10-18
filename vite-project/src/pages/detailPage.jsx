import React from 'react'
import { useEffect, useState } from 'react'

// CSS 
import './detailPage.css'

// Componentes 
import Producto from '../components/card/card'

//React-router-Dom
import { useParams } from 'react-router-dom'


const detailPage = () => {
    let { id } = useParams();
    const [producto, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://api.sampleapis.com/rickandmorty/characters/${id}`)
        .then((datos) => datos.json())
        .then((respuesta) => setProduct(respuesta)
        );
    },[id]) 
    
    return (
    <div className='producto'> 
        {producto.id ?  <Producto producto={producto} /> : null}
    </div>
  )
}

export default detailPage

// <Producto producto={respuesta}/>