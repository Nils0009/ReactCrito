import React from 'react'
import { Link } from 'react-router-dom'

function ChooseUsReasons({mainclass, image, alttext, classtitle, title, text}) {
  return (
    <>
      <div className={mainclass}>
        <Link to="/#"><img src={image} alt={alttext}/></Link>
        <div className={classtitle}><h3>{title}</h3><p>{text}</p></div>
      </div>
    </>
  )
}

export default ChooseUsReasons