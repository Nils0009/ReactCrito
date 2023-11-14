import React from 'react'
import { Link } from 'react-router-dom'

function FeaturesInfo({classname, image, alttext, title, text}) {
  return (
    <>
      <div className={classname}>
        <Link to="/Contact"><img src={image} alt={alttext}/></Link>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

    </>
  )
}

export default FeaturesInfo