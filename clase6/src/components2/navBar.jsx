import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

    const navStyle = {
        background: "#751",
        padding: "1rem",
        boxShadow: "0 5px 20px"
    }

    const listStyle = {
        listStyle: "none",
        display: "flex",
        margin: 0,
        padding: 0
    }

    const linkStyle = {
        color: "#900",
        padding: "1rem 1.5rem",
        borderRadius: "3px"
    }

    const activeLinkStyle = {
        background: "#61dafb",
        color: "#282c34"
    };

    console.log("Navbar component initialized");
    return (
        <nav style={navStyle}>
            <ul style={listStyle}>
                <li>
                    <NavLink to="/"
                        end
                        style={({ isActive }) =>
                            isActive
                        ? {...linkStyle, ...activeLinkStyle} : linkStyle
                        }
                    >Usuarios</NavLink>
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