import React from 'react'
import './ChooseUs.css'
import SectionTitel from '../../Generics/SectionTitel'
import img_processicon from '../../../assets/Images/process-icon.svg'
import img_strategicicon from '../../../assets/Images/strategic-icon.svg'
import img_experienceicon from '../../../assets/Images/experience-icon.svg'
import img_artificial from '../../../assets/Images/artificial-icon.svg'
import img_whyUs from '../../../assets/Images/why-us-.png'
import ChooseUsReasons from './ChooseUsReasons'

function ChooseUs() {
  return (
    <section className="choose-us">
        <div className="container-fluid">
            <div className="reasons-why">

                <SectionTitel titel="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>

                <div className="reason-1">
                    <a href="#"><img src={img_processicon} alt="Icon of a thumbs up"/></a>
                    <ChooseUsReasons classTitel="reason-1-text" titel="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur."/>
                </div>

                <div className="reason-2">
                    <a href="#"><img src={img_strategicicon} alt="Icon of a star"/></a>
                    <ChooseUsReasons classTitel="reason-2-text" titel="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur."/>
                </div>

                <div className="reason-3">
                    <a href="#"><img src={img_experienceicon} alt="Icon of a pen pointing up"/></a>
                    <ChooseUsReasons classTitel="reason-3-text" titel="Experience Design" text="Lorem, ipsum dolor sit amet consectetur."/>
                </div>

                <div className="reason-4">
                    <a href="#"><img src={img_artificial} alt="Icon of a brain"/></a>
                    <ChooseUsReasons classTitel="reason-4-text" titel="Artificial Inteligence" text="Lorem, ipsum dolor sit amet consectetur."/>
                </div>
                <div className="content-img">                        
                    <img className="img-fluid" src={img_whyUs} alt="Image of workers discussing something"/>
                </div>
        </div>
    </div>
</section>
  )
}

export default ChooseUs