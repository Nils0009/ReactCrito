import React from 'react'
import './Menu.css'
import { NavLink } from 'react-router-dom'
function Menu() {
  return (
    <div className="menu">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <a className="btn-theme" href="login.html">Login <i className="fa-solid fa-arrow-up-right"></i></a>
    </div>
  )
}

export default Menu