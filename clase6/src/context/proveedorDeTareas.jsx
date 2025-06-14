//El proveedor solo envía las funciones
import {createContext, useState } from "react";

export const tareasContext = createContext();

export const ProveedorDeTareas = ({Children}) => {

    let nombre = 'Pedro';

    const tareasIniciales = [
        {id: 1, nombre: 'Hacer la compra', descripcion: 'Comprar frutas y verduras'},
        {id: 2, nombre: 'Lavar el coche', descripcion: 'Lavar el coche en el lavadero'},
        {id: 3, nombre: 'Estudiar React', descripcion: 'Repasar los conceptos de React y Hooks'}
    ]

    const [tareas, setTareas] = useState(tareasIniciales);

    const agregarTarea = (nuevaTarea) => {
        setTareas ([...tareas, nuevaTarea])
    }

    const eliminarTarea = (id) => {
        setTareas (tareas.filter(tarea => tarea.id !== id))
    }

    const editarTarea= (id, tareaEditada) => {
        setTareas (tareas.map(tarea =>(tarea.id === id ? {...tarea, ...tareaEditada} : tarea )))
    }

    return(
        <tareasContext.Provider value={{nombre, tareas}}>
            {Children}
        </tareasContext.Provider>
    )
}

