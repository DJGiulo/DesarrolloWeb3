import React, { useContext, useState } from 'react'
import { tareasContext } from '../context/proveedorDeTareas';

const verTodasLasTareas = () => {

    const {tareas} = useContext(tareasContext)
    const [tareasSeleccionadas, setTareasseleccionadas] = useState ([]);
    const [tareaSeleccionada, setTareaseleccionada] = useState (null)



    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', padding: '24px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <h2 style={{ textAlign: 'center', color: '#333', marginBottom: '24px' }}>Ver Todas las Tareas</h2>
            {tareas.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#888' }}>Cargando...</p>
            ) : (
                <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {tareas.map((tarea) => (
                            <li
                                key={tarea.id}
                                style={{
                                    background: tareaSeleccionada === tarea.id ? '#e3f2fd' : '#fff',
                                    marginBottom: '16px',
                                    padding: '16px',
                                    borderRadius: '8px',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <span>
                                    <strong>{tarea.nombre}</strong> - {tarea.descripcion}
                                </span>
                                <span>
                                    <button
                                        onClick={() => handleEliminarTarea(tarea.id)}
                                        style={{
                                            background: '#e57373',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '6px 12px',
                                            marginRight: '8px',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s',
                                        }}
                                    >
                                        Eliminar
                                    </button>
                                    <button
                                        onClick={() => handleSeleccionarTarea(tarea.id)}
                                        style={{
                                            background: tareaSeleccionada === tarea.id ? '#1976d2' : '#64b5f6',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: '4px',
                                            padding: '6px 12px',
                                            cursor: 'pointer',
                                            transition: 'background 0.2s',
                                        }}
                                    >
                                        Seleccionar
                                    </button>
                                </span>
                            </li>
                        ))}
                    </ul>
                    {tareasSeleccionadas.length > 0 && tareaSeleccionada && (
                        <div style={{ textAlign: 'center', marginTop: '24px' }}>
                            <Link
                                to={`/editar/${tareaSeleccionada}`}
                                style={{
                                    background: '#43a047',
                                    color: '#fff',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                                    transition: 'background 0.2s',
                                }}
                            >
                                Editar Tarea Seleccionada
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default VerTodasLasTareas;