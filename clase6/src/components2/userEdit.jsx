import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useParams, useNavigate } from 'react-router-dom'
const UserEdit = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()
    const { users, handleUpdateUser } = useContext(UserContext)
    const userToEdit = users.find((user) => user.id === parseInt(id));

    useEffect(() => {
        const userToEdit = users.find(user => user.id === id)
        if (userToEdit) {
            setName(userToEdit.name || '')
            setEmail(userToEdit.email || '')
        }
    }, [id, users])

    const handleUpdate = () => {
        handleUpdateUser(id, { name, email })
        navigate('/')
    }

    return (
        <div style={{ maxWidth: 550, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8, background: 'purple', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h1 style={{color:"rgba(243, 237, 139, 0.8)", textAlign: 'rigth', marginBottom: 24,  fontSize: 38}}>Editar Usuario</h1>
            <div style={{ marginBottom: 16 }}>
                <label style={{ color:"rgba(232, 231, 209, 0.8)", display: 'block', marginBottom: 10, fontWeight: 'bold' }}>Nombre:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '75%', paddingLeft: 5, padding: 8, borderRadius: 6, border: '1px solid #bbb', fontSize: 16 }}
                />
            </div>
            <div style={{ marginBottom: 24 }}>
                <label style={{ color:"rgba(232, 231, 209, 0.8)", display: 'block', marginBottom: 10, fontWeight: 'bold' }}>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '75%', paddingLeft: 5, padding: 8, borderRadius: 6, border: '1px solid #bbb', fontSize: 16 }}
                />
            </div>
            <button
                onClick={handleUpdate}
                style={{
                    width: '80%',
                    padding: 8,
                    background: '#1976d2',
                    color: '#fff',
                    borderRadius: 4,
                    fontSize: 18,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'background 0.2s'
                }}
            >
                Actualizar
            </button>
        </div>
    );

}

export default UserEdit