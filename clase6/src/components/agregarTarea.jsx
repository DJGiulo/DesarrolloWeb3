import React, { useState } from 'react'
import { tareasContext } from '../src/context/proveedorDeTareas';

const AgregarTarea = () => {

    // valor inicial del estado
    const [nuevaTarea, setNuevaTarea] = useState({
        nombre: '',
        descripcion: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNuevaTarea({
            ...nuevaTarea,
            [name]: value
        })
    }

    const handleAgregarTarea = () =>{
        AgregarTarea({
            id:date.now(),
            ...nuevaTarea
        });
        console.log('Nueva tarea agregada:', nuevaTarea);
        setNuevaTarea({
            nombre: '',
            descripcion: ''
        })
        
    }

return (
    <div style={{ maxWidth: 400, margin: '32px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8, background: '#fafafa', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
        <h2 style={{ textAlign: 'center', color: '#333', marginBottom: 24 }}>Agregar Tarea</h2>
        <form>
            <label style={{ display: 'block', marginBottom: 12, color: '#444', fontWeight: 500 }}>
                Nombre:
                <input
                    type="text"
                    name="nombre"
                    value={nuevaTarea.nombre}
                    onChange={handleInputChange}
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '8px 10px',
                        marginTop: 6,
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        fontSize: 16,
                        boxSizing: 'border-box'
                    }}
                />
            </label>
            <label style={{ display: 'block', marginBottom: 16, color: '#444', fontWeight: 500 }}>
                Descripción:
                <textarea
                    name="descripcion"
                    value={nuevaTarea.descripcion}
                    onChange={handleInputChange}
                    style={{
                        display: 'block',
                        width: '100%',
                        minHeight: 60,
                        padding: '8px 10px',
                        marginTop: 6,
                        border: '1px solid #ccc',
                        borderRadius: 4,
                        fontSize: 16,
                        boxSizing: 'border-box',
                        resize: 'vertical'
                    }}
                ></textarea>
            </label>
            <button
                type="button"
                onClick={handleAgregarTarea}
                style={{
                    width: '100%',
                    padding: '10px 0',
                    background: '#1976d2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 4,
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                }}
            >
                Agregar Tarea
            </button>
        </form>
    </div>
);
};
export default AgregarTarea;