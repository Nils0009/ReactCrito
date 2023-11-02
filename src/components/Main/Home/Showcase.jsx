import React from 'react'
import img_backgroundlines from '../../../assets/Images/backgroundlines1.png'
import img_showcase from '../../../assets/Images/showcase-image.svg'
import './Showcase.css'
import { Link } from 'react-router-dom'

function Showcase() {
  return (
    <section className="showcase">
    <img className="img-fluid" src={img_backgroundlines} alt=""/>

    <div className="container">
        <div className="content">
            <h1>We Provide The Best Business Solutions</h1>
            <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
            <Link className="btn-theme" to="/contact">Get Consulting <i className="fa-solid fa-arrow-up-right"></i></Link>
            <Link className="btn-transparent" to="/contact">Learn more <i className="fa-solid fa-arrow-up-right"></i></Link>
        </div>
        <img src={img_showcase} alt="showcase image of a man with a tablet"/>

    </div>
</section>
  )
}

export default Showcase