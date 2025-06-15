import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useParams, Link } from 'react-router-dom'

const UserDetails = () => {
    const { id } = useParams()
    const { users } = useContext(UserContext)

    const user = users.find(user => user.id === id)

    if (!user) {
        return <h1>Usuario no encontrado</h1>
    }

    return (
        <div style={{ maxWidth: '350px', margin: '20px auto', padding: '10px', border: '1px solid #ccc', borderRadius: '9px', background: 'black', boxShadow: '0 2px 8px rgba(105, 4, 66, 0.74)' }}>
            <h1 style={{ fontSize: '1rem', marginBottom: '20px', color: '#444' }}>Detalles de Usuario</h1>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Nombre:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '25px' }}>
                <Link to={`/delete/${user.id}`} style={{ color: '#300', background: '#e74c3c', padding: '6px 4px', borderRadius: '5px', textDecoration: 'none' }}>Eliminar Usuario</Link>
                <Link to={`/edit/${user.id}`} style={{ color: 'blue', background: '#fff', padding: '8px 14px', borderRadius: '6px', textDecoration: 'none' }}>Editar Usuario</Link>
                <Link to={`/`} style={{ color: 'black', background: '#ecf0f1', padding: '12px 16px', borderRadius: '6px', textDecoration: 'none', border: '3px solid gray' }}>Volver</Link>
            </div>
        </div>
    );
}

export default UserDetails;
