import React, { useContext, useEffect, useState } from 'react'
import { tareasContext } from '../src/context/proveedorDeTareas'
import {useParams} from 'react-router-dom';

const editarTarea = () => {
    //Obtener el id de la web
    const {id} = useParams();
    const {tareas, editarTareas} = useContext(tareasContext);
    const [tareaEditada, setTareaEditada] = useState({
        nombre: '',
        descripcion: ''
    })

    useEffect (() => {
        //Busca la tarea por id y establece estado
        const tareaSeleccionada = tareas.find (tarea=> tarea.id === parseInt(id))
        if (tareaSeleccionada) {
            setTareaEditada(tareaSeleccionada);
        }
    }, [id, tareas]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setTareaEditada({
            ...tareaEditada,
            [name]: value
        })
    }

    const handleEditarTarea = () => {
        editarTarea(parseInt(id), tareaEditada);
        console.log('Tarea editada:', tareaEditada);
        setTareaEditada({
            nombre: '',
            descripcion:''
        })
    }


    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '40px auto',
                padding: '24px',
                border: '1px solid #ccc',
                borderRadius: '8px',
                background: '#fafafa',
                boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
            }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '24px', color: '#333' }}>Editar Tarea</h2>
            <form>
                <label style={{ display: 'block', marginBottom: '12px', color: '#222' }}>
                    Nombre:
                    <input
                        type="text"
                        name="nombre"
                        value={tareaEditada.nombre}
                        onChange={handleInputChange}
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '6px',
                            border: '1px solid #bbb',
                            borderRadius: '4px',
                            fontSize: '16px',
                            boxSizing: 'border-box'
                        }}
                    />
                </label>

                <label style={{ display: 'block', marginBottom: '18px', color: '#222' }}>
                    Descripción:
                    <textarea
                        name="descripcion"
                        value={tareaEditada.descripcion}
                        onChange={handleInputChange}
                        rows={4}
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginTop: '6px',
                            border: '1px solid #bbb',
                            borderRadius: '4px',
                            fontSize: '16px',
                            resize: 'vertical',
                            boxSizing: 'border-box'
                        }}
                    />
                </label>
                <button
                    type="button"
                    onClick={handleEditarTarea}
                    style={{
                        width: '100%',
                        padding: '10px',
                        background: '#1976d2',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'background 0.2s'
                    }}
                >
                    Guardar Cambios
                </button>
            </form>
        </div>
    );
}

export default editarTarea;