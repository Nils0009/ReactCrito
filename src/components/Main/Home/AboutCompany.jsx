import React from 'react'
import './AboutCompany.css'
import img_samantha from '../../../assets/Images/samantha.png'
import SectionTitle from '../../Generics/SectionTitle'
import MainBtn from '../../Generics/MainBtn'
import MainCricleBtn from '../../Generics/MainCricleBtn'

function AboutCompany() {
  return (
    <section className="about-company">
    <div className="container">
        <div className="about-founder">
            <img src={img_samantha} alt="The founder Samantha Brown" className="image-samantha"/>         
            <div className="info-samantha">
                <div className="info-samantha-text">
                    <p>Samantha Brown,</p>
                    <h2>Founder</h2>
                </div>                                 
                <blockquote>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</blockquote>
            </div>
            
        </div>
        <SectionTitle title="About Company" description="We Are Business Consulting & Credit Repair Experts"/>

        <div className="about-company-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse obcaecati? Ex esse error voluptates iure vel totam eos.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium libero provident voluptate amet</p>
            
            <div className="company-info">
                <MainBtn className={"btn-black"} destination={"/#"} text={"Learn More"}/>
                <MainCricleBtn classname={"btn-intro-vid"} icon={"fa-solid fa-play"}/>
                <p>Intro Video</p>
            </div> 

        </div>
    </div>
</section>
  )
}

export default AboutCompany