import React from 'react'

function ContactMainTop({image, title, text1, text2}) {

  return (
    <>
      <div className="content">
          <img src={image}/>                
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