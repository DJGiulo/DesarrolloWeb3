import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    console.log("Navbar component initialized");
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Usuarios</Link>
                </li>
            </ul>
        </nav>
    )
}


/*
const NavBar = () => {
    return (
        <nav>
            <ul>
            <li><link to='/'>Home</link></li>
            <li><Link to='/about'>About</Link></li>
            <li><link to='/contact'>Contact</link></li>
            </ul>
        </nav>
    )
    }
*/


export default Navbar
