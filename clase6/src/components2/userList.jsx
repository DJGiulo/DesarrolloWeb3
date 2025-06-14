import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link } from 'react-router-dom';

const UserList = () => {
    const { users, loading } = useContext(UserContext);
    console.log("UserList component initialized");
    
    return (
        <div>
            <h2>Lista de usuarios</h2>
            {
                loading ?
                    (<h1>Cargando...</h1>)
                    :
                    (<ul>
                        {users.map((user) => (
                            <li key={user.id}>
                                {user.name}
                                <span> - {user.email}</span>
                                <Link to={`/users/${user.id}`}>Ver detalles</Link>
                            </li>
                        ))}
                    </ul>)
            }

        </div>
    )
}

export default UserList;