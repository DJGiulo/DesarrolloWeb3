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
        <div>
            <h2>Agregar Usuario</h2>
            <div>
                <label>Nombre:</label>
                <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingrese el nombre del usuario" />
            </div>
            <div>
                <label>Email:</label>
                <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingrese el email del usuario" />
            </div>
            <button onClick={hundleSubmit}>Crear Usuario</button>
        </div>
    )
}

export default UserForm;
