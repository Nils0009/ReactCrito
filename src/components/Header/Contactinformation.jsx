import React from 'react'
import '../Header/Contactinformation.css'

function Contactinformation() {
  return (
        <div className="contactinformation">
            <div className="contact-content">
                <i className="fa-regular fa-phone-volume"></i>
                +46 (8 121 470 50)
            </div>
            <div className="contact-content">
                <i className="fa-regular fa-envelope"></i>
                info@crito.com
            </div>
            <div className="contact-content last">
                <i className="fa-regular fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM
            </div>
        </div>
  )
}

export default Contactinformation