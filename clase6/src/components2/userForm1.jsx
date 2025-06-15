import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'

const UserForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const { handleCreateUser } = useContext(UserContext)

    const hundleSubmit = () => {
        const newUser = {
            name: name,
            email: email
        }
        handleCreateUser(newUser)
        setName('')
        setEmail('')
    }

    return (
        <div style={{maxWidth: '700px', margin: '30px', padding: 8, border: '3px solid white', background:'rgba(61, 188, 255, 0.8)', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderRadius: "5px"}}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Agregar Usuario</h2>
            <div style={{ marginBottom: '15px' }}>
                <label style={{ fontFamily: "Savate, sans-serif", display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Nombre:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ background: "rgba(184, 64, 34, 1)", width: '60%', padding: '8px', borderRadius: '4px', border: '1px solid rgba(70, 43, 36, 1)' }}
                />
            </div>
            <div style={{ marginBottom: '18px' }}>
                <label style={{ fontFamily: "Savate, serif", display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ background: "rgba(184, 64, 34, 1)", width: '75%', padding: '8px', borderRadius: '4px', border: '1px solid rgba(70, 43, 36, 1)' }}
                />
            </div>
            <button
                onClick={hundleSubmit}
                to={`/`}
                style={{
                    width: '100%',
                    padding: '10px',
                    background: 'rgba(239, 240, 110, 1)',
                    color: 'rgba(40, 15, 25, 1)',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}
            >
                Agregar
            </button>
        </div>
    )
}

export default UserForm;
