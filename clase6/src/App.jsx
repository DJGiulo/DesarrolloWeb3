import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components2/navBar'
import UserList from './components2/userList'
import UserDetails from './components2/userDetail'
import UserForm from './components2/userForm1'
import UserEdit from './components2/userEdit'
import UserDelete from './components2/userDelete'

/*import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'
import { ProveedorDeTareas } from './context/proveedorDeTareas'*/

function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <h1>Gestión de Usuarios</h1>
      <p>Aplicación para gestionar usuarios</p>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserEdit />} />
        <Route path="/delete/:id" element={<UserDelete />} />
      </Routes>
    </Router>
    </>
  )

}

export default App;