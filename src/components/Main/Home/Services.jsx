import React from 'react'
import './Services.css'
import ServicesConsulting from './ServicesConsulting'
import SectionTitel from '../../Generics/SectionTitel'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <section className="services">
    <div className="container">

        <SectionTitel titel="Our Services" description="We Provide The Best Service For Consulting"/>
            
        <div className="consulting-business">
        <ServicesConsulting titel="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
        </div>

        <div className="consulting-startup">
        <ServicesConsulting titel="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
        </div>

        <div className="consulting-financial">
        <ServicesConsulting titel="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
        </div>

        <div className="consulting-risk">
        <ServicesConsulting titel="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>
        </div>

        <div className="center-btn">
            <Link className="btn-transparent" to="/services">Browse Services <i className="fa-solid fa-arrow-up-right"></i></Link>
        </div>

    </div>                                 
</section>
  )
}

export default Services