import React from 'react'
import { tareasContext } from '../src/context/proveedorDeTareas'

const Contact = () => {

    const {nombre} = useContext(tareasContext);


    return (
        <div>
        <h1>Contacto</h1>
        </div>
    )
}

export default Contact
