import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useParams, useNavigate } from 'react-router-dom'

const UserDelete = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { users, handleDeleteUser } = useContext(UserContext)

    const userToDelete = users.find(user => user.id === parseInt(id))

    if (!userToDelete) {
        return <h1 style={{ textAlign: 'center', color: "orange" }}>Usuario no encontrado</h1>
    }

    const handleDelete = () => {
        handleDeleteUser(id)
        navigate('/')
    }

    return (
        <div style={{
            maxWidth: '350px',
            margin: '40px auto',
            padding: '25px',
            border: '1px solid #ppp',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(43, 196, 145, 0.48)',
            background: '#fff',
            textAlign: 'center'
        }}>
            <h1>Eliminar usuario: {userToDelete.name}</h1>
            <p style={{ fontSize: '16px', color: '#452' }}>
                ¿Estás seguro de que deseas eliminar este usuario?
            </p>
            <button onClick={handleDelete}
                style={{
                    background: '#d32f2f',
                    color: '#fbc',
                    border: 'purple',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    transition: 'background 0.2s'
                }}>Si, Eliminar</button>
        </div>
    )
}

export default UserDelete;