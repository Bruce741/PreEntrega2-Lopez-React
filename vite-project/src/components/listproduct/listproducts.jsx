// REACT
import React from 'react'
import { useEffect, useState } from 'react'

// CSS 
import './listproducts.css'

// Componentes 
import Producto from '../card/card'

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
                <div> 
                    <Producto producto={producto}/>
                </div>
            );
        })}
    </div>
  )
}

export default listproducts