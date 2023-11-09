import React from 'react'
import './Services.css'
import ServicesConsulting from './ServicesConsulting'
import SectionTitle from '../../Generics/SectionTitle'
import MainBtn from '../../Generics/MainBtn'

function Services() {
  return (
    <section className="services">
    <div className="container">

        <SectionTitle title="Our Services" description="We Provide The Best Service For Consulting"/>
            
        <ServicesConsulting classname={"consulting-business"} title="Business Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>

        <ServicesConsulting classname={"consulting-startup"} title="Startup Business" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>

        <ServicesConsulting classname={"consulting-financial"} title="Financial Advice" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>

        <ServicesConsulting classname={"consulting-risk"} title="Risk Management" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus."/>


        <div className="center-btn">
            <MainBtn className={"btn-transparent"} destination={"/services"} text={"Browse Services"}/>
        </div>

    </div>                                 
</section>
  )
}

export default Services