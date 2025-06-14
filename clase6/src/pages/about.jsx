import React from 'react'
import { tareasContext } from '../src/context/proveedorDeTareas'


const About = () => {

        const {nombre} = useContext(tareasContext);
    
    return (
        <div>
        <h1>Sobre nosotros</h1>
        <p>Desarrollado by {nombre}</p>
        </div>
    )
}

export default About
