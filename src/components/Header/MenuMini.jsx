import React, { useState } from 'react'
import './MenuMini.css'
import { NavLink } from 'react-router-dom'


function MenuMini() {
const [menuOpen, setMenuOpen] = useState(false)


  return (
    <>
        {
          menuOpen ? 
          (
          <div className='miniMenu'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/news">News</NavLink>
              <NavLink to="/contact">Contact</NavLink>
          </div>
          ) 
          : 
          (<></>)
        }
        <button onClick={() => setMenuOpen(!menuOpen)} className="btn-mini-menu">
          {
            menuOpen ? (<i className="fa-solid fa-xmark"></i>)
            :
            (<i className="fa-solid fa-bars-staggered"></i>)
          }
          </button>
    </>
  )
}

export default MenuMini