import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    console.log("UserProvider initialized");

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);
    const [newUserName, setNewUserName] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const apiURL = "https://684876bfec44b9f34940fd09.mockapi.io/usuarios/users"



    useEffect(() => {
        fetch(apiURL)
            .then((response) => response.json())
            .then(data => {
                setLoading(false)
                setUsers(data)
            })
            .catch((error) => {
                setLoading(false)
                console.log("Error al obtener usuarios:", error)
            })
    }, [apiURL])


    const handleCreateUser = (newUser) => {
        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then((createdUser) => {
                setUsers([...users, createdUser]);
                setNewUserName('');
            })
            .catch((error) => {
                console.error("Error al crear usuario:", error);
            });

    }

    const handleUpdateUser = (userId, updatedData) => {
        fetch(`${apiURL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        })
            .then(response => response.json())
            .then((updatedUser) => {
                setUsers(users.map(user => user.id === userId ? updatedUser : user));
                setSelectedUser(null);
            })
            .catch((error) => {
                console.error("Error al actualizar usuario:", error);
            });
    }

    const handleDeleteUser = (userId) => {
        fetch(`${apiURL}/${userId}`, {
            method: 'DELETE'
        })
            .then(() => {
                setUsers(users.filter(user => user.id !== userId));
                setNewUserName('');
                setSelectedUser(null);
            })
            .catch((error) => {
                console.error("Error al eliminar usuario:", error);
            });
    }

    console.log(users);


    return (
        <UserContext.Provider value={{ users, setUsers, loading, setLoading, newUserName, setNewUserName, selectedUser, setSelectedUser, handleCreateUser, handleUpdateUser, handleDeleteUser }}>
            {children}
        </UserContext.Provider>
    )

}
