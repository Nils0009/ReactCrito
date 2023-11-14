import React from 'react'
import img_contactmap from '../../../assets/Images/contact-map.png'
import img_visitUsicon from '../../../assets/Images/visitUsicon.svg'
import img_callUsIcon from '../../../assets/Images/callUsIcon.svg'
import img_emailUsIcon from '../../../assets/Images/emailUsIcon.svg'
import ContactMainTop from './ContactMainTop'
import './ContactMain.css'
import ContactMainForm from './ContactMainForm'

function ContactMain() {
  return (
    <>
        <section className="contact-main">
            <div className="container">
                <div className="contact-top">
                    <ContactMainTop image={img_visitUsicon} title={"Visit us"} text1={"Sveavägen 31"} text2={"111 34 STOCKHOLM"} />
                    <ContactMainTop image={img_callUsIcon} title={"Call us"} text1={"+46 (8) 121 470 50"} text2={"+46 (8) 121 470 51"} />
                    <ContactMainTop image={img_emailUsIcon} title={"Email us"} text1={"info@crito.com"} text2={"support@crito.com"} />
                </div>

                <div className="contact-form">
                    <h2>Leave us a message for any information.</h2>
                    <ContactMainForm />
                </div>
            </div>

            <img className="img-fluid" src={img_contactmap} alt="map of stockholm"/>
        </section>
    </>
  )
}

export default ContactMain