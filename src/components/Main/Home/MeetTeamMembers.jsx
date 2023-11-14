import React from 'react'


function MeetTeamMembers({classname, image, alttext, title, text}) {

  return (
    <>
      <div className={classname}>
          <img className="img-fluid" src={image} alt={alttext}/>
          <h3>{title}</h3>
          <p>{text}</p>
      </div>
    </>
  )
}

export default MeetTeamMembers