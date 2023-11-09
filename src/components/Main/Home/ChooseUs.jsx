import React from 'react'
import './ChooseUs.css'
import SectionTitle from '../../Generics/SectionTitle'
import img_processicon from '../../../assets/Images/process-icon.svg'
import img_strategicicon from '../../../assets/Images/strategic-icon.svg'
import img_experienceicon from '../../../assets/Images/experience-icon.svg'
import img_artificial from '../../../assets/Images/artificial-icon.svg'
import img_whyUs from '../../../assets/Images/why-us-.png'
import ChooseUsReasons from './ChooseUsReasons'

function ChooseUs() {
  return (
    <section className="choose-us">
        <div className="container">
            <div className="reasons-why">

                <SectionTitle title="Why Choose Us" description="Why We Are The Best Business Consulting Agency"/>

                <ChooseUsReasons mainclass={"reason-1"} image={img_processicon} alttext={"Icon of a thumbs up"} classtitle="reason-1-text" title="Process Excellence" text="Lorem, ipsum dolor sit amet consectetur."/>

                <ChooseUsReasons mainclass={"reason-2"} image={img_strategicicon} alttext={"Icon of a star"} classtitle="reason-2-text" title="Strategic Planning" text="Lorem, ipsum dolor sit amet consectetur."/>

                <ChooseUsReasons mainclass={"reason-3"} image={img_experienceicon} alttext={"Icon of a pen pointing up"} classtitle="reason-3-text" title="Experience Design" text="Lorem, ipsum dolor sit amet consectetur."/>

                <ChooseUsReasons mainclass={"reason-4"} image={img_artificial} alttext={"Icon of a brain"} classtitle="reason-4-text" title="Artificial Inteligence" text="Lorem, ipsum dolor sit amet consectetur."/>

                <div className="content-img">                        
                    <img className="img-fluid" src={img_whyUs} alt="Image of workers discussing something"/>
                </div>
        </div>
    </div>
</section>
  )
}

export default ChooseUs