import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../context/userContext'
import { useParams, Link } from 'react-router-dom'

const UserDetails = () => {
    const { id } = useParams()

    const { users } = useContext(UserContext)

    const user = users.find(user => user.id === parseInt(id))

    if (!user) {
        return <h1>Usuario no encontrado</h1>
    }
}

export default UserDetails;
