import React from 'react'
import img_backgroundlines from '../../../assets/Images/background-lines.svg'
import './ContactShowcase.css'

function ContactShowcase() {

  return (
    <>
        <section className="contact-showcase">
            <img className="img-fluid" src={img_backgroundlines}/>
                <div className="container">
                    <div className="content">
                        <div className="link-trail">
                            <ul className="breadcrumb">
                                <li><a href="index.html">Home</a></li>
                                <li className="active">Contact</li>
                            </ul>
                        </div>
                        <h1>Let’s Connect</h1>
                    </div>       
                </div>
        </section>       
    </>
  )
}

export default ContactShowcase