import React from 'react'
import './Menu.css'
import { Link, NavLink } from 'react-router-dom'
import MainBtn from '../Generics/MainBtn'


function Menu() {
  return (
    <div className="menu">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/news">News</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        <MainBtn className={"btn-theme"} destination={"/login"} text={"Login"}/>
    </div>
  )
}

export default Menu