import React, {useEffect, useState} from 'react'

const listcard = () => {

    useEffect(() => {
        fetch("D:\Programacion\Program\PROYECTOS\PreEntregas\ReactJS\PreEntrega-2/data.json")
        .then(datos => datos.json())
        .then(respuesta => setItem(respuesta))
    },[])

  
  return (
    <div>ListCard</div>
   
  )
}

export default listcard