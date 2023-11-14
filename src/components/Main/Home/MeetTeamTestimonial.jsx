import React from 'react'
import img_Star from '../../../assets/Images/Star.svg'

function MeetTeamTestimonial({mainclassname, classname, image, alttext, textclassname, title, text }) {

  return (
    <>
      <div className={mainclassname}>
          <img src={img_Star} alt="star icon"/>
          <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
          <div className={classname}>
              <img src={image} alt={alttext}/>
              <div className={textclassname}>
                  <h3>{title}</h3>
                  <p>{text}</p>
              </div>
          </div>
      </div>
    </>
  )
}

export default MeetTeamTestimonial