import React from 'react'
import { Link } from 'react-router-dom'

function AdvertisementContent({image, alttext}) {
  return (
    <>
        <Link to="/Advertisment"><img src={image} alt={alttext}/></Link>
    </>
  )
}

export default AdvertisementContent