import React from 'react'
import './Features.css'
import img_handshakeicon from '../../../assets/Images/handshake-icon.svg'
import img_charticon from '../../../assets/Images/chart-icon.svg'
import img_lighticon from '../../../assets/Images/light-icon.svg'
import img_safeicon from '../../../assets/Images/safe-icon.svg'
import SectionTitel from '../../Generics/SectionTitel'
import FeaturesInfo from './FeaturesInfo'

function Features() {
  return (
    <section className="features">
    <div className="container">
        <SectionTitel titel="Features" description="Our Accounting is trusted by thousand of companies"/>

        <div className="business-advice">
            <a href="#"><img src={img_handshakeicon} alt="icon of a handshake"/></a>
            <FeaturesInfo titel="Business Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>                   
        </div>

        <div className="financial-advice">
            <a href="#"><img src={img_charticon} alt="icon of a chart"/></a>
            <FeaturesInfo titel="Financial Advice" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>  
        </div>

        <div className="startup-business">
            <a href="#"><img src={img_lighticon} alt="icon of a lightbulb"/></a>
            <FeaturesInfo titel="Startup Business" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>
        </div>

        <div className="risk-management">
            <a href="#"><img src={img_safeicon} alt="icon of a safe"/></a>
            <FeaturesInfo titel="Risk management" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."/>                      
        </div>
        
    <div className="center-btn">
        <a className="btn-theme" href="contact.html">Learn More <i className="fa-solid fa-arrow-up-right"></i></a>                    
    </div>   
        
    </div>
</section>
  )
}

export default Features