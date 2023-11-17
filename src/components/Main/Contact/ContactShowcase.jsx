import React from 'react'
import img_backgroundlines from '../../../assets/Images/background-lines.svg'
import './ContactShowcase.css'
import LinkTrail from '../../Generics/LinkTrail'

function ContactShowcase() {

  return (
        <section className="contact-showcase">
            <img className="img-fluid" src={img_backgroundlines}/>
            <div className="container">
                <div className="content">
                    <LinkTrail prev={"Home"} current={"Contact"} />
                    <h1>Let’s Connect</h1>
                </div>       
            </div>
        </section>       
  )
}

export default ContactShowcase