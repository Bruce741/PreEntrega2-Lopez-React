// REACT
import React from 'react'
import { useEffect, useState } from 'react'

// CSS 
import './listproducts.css'

// Componentes 
import Producto from '../card/card'

//React-router-Dom
import { Link } from 'react-router-dom'


const listproducts = () => {
    const [Products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://api.sampleapis.com/rickandmorty/characters')
        .then((datos) => datos.json())
        .then((respuesta) => setProducts(respuesta)
        );
    }) 
    
    return (
    <div className='listaProductos'>
        {Products.map((producto) => {
            return(
                <div key={producto.id}> 
                    <Link to={`/detailPage/${producto.id}`}>
                        <Producto producto={producto}/>
                    </Link>
                </div>
            );
        })}
    </div>
  )
}

export default listproducts