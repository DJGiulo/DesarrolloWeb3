import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { Link } from 'react-router-dom';
import '../App.css'

const UserList = () => {
    const { users, loading } = useContext(UserContext);
    console.log("UserList component initialized");
    
    return (
        <div>
            <h2 style={{fontFamily: 'Huninn, sans-serif'}}>Lista de usuarios</h2>
            {loading ?
                    (<h1>Cargando...</h1>)
                    :
                    <>

                    <ul style={{fontFamily: 'Huninn, sans-serif'}}>
                        {users.map((user) => (
                            <li key={user.id} style={{justifyContent: "space-around", padding: 4, marginBottom: "12px"}}>
                                {user.name}
                                <span> - {user.email}</span>
                                <Link to={`/users/${user.id}`}
                                style={{color: "black", background: "rgba(255, 61, 130, 1)", borderRadius: "6px", padding: 2, margin: "5px"}}
                                >Ver detalles</Link>
                            </li>
                        ))}
                    </ul>

                    <Link
                    to={`/create`}
                    style={{
                        display: "inline-block",
                        marginLeft: "18px",
                        marginBottom: "10px",
                        padding: "8px 12px",
                        background: "rgba(70, 61, 133, 1)",
                        color: "rgba(232, 209, 209, 1)",
                        borderRadius: "5px",
                        textDecoration: "none",
                        fontWeight: "bold",
                    }}
                    > Crear Usuario </Link>

                        </>
            }

        </div>
    )
}

export default UserList;