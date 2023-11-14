import React from 'react'
import { Link } from 'react-router-dom'

function ContactMainTop({image, title, text1, text2}) {

  return (
    <>
      <div className="content">
          <Link to="#">
          <img src={image}/>   
          </Link>               
          <div className="text-content">                       
              <h3>{title}</h3>
              <p>{text1}</p>
              <p>{text2}</p>
          </div>
      </div>
    </>
  )
}

export default ContactMainTop