import React, {useContext} from 'react'
import { tareasContext } from '../context/proveedorDeTareas'
import AgregarTarea from '../components/agregarTarea';
import VerTodasLasTareas from '../components/verTodasLasTareas';

const Home = () => {

    const {nombre} = useContext(tareasContext);

    return (
        <div>
        <h1>Bienvenidos</h1>
        <p>Esta es la página de inicio</p>
        <AgregarTarea/>
        <VerTodasLasTareas/>
        </div>
    )
}

export default Home
