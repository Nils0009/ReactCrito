import React from 'react'
import './header.css'
import img_logotype from '../../assets/Images/logotype.svg'
import Contactinformation from './Contactinformation'
import Socialmedia from './Socialmedia'
import Menu from './Menu'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
    <div className="container">
        <button className="btn-mini-menu"><i className="fa-solid fa-bars-staggered"></i></button>
        <div className="logotype">
            <Link to="/">
                <img src={img_logotype} alt="crito logo"/>
            </Link>
        </div>

        <Contactinformation />
        <Socialmedia />
        <Menu />
        
    </div>
</header>
  )
}

export default Header