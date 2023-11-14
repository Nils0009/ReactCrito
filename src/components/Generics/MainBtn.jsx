import React from 'react'
import { Link } from 'react-router-dom'

function MainBtn({className, destination, text}) {

  return (
    <>
      <Link className={className} to={destination}>{text}<i className="fa-solid fa-arrow-up-right"></i></Link>
    </>
  )
}

export default MainBtn