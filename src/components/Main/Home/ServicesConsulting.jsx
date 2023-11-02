import React from 'react'

function ServicesConsulting({titel, description,}) {
  return (
    <div>
        <h3>{titel}</h3>
        <p>{description}</p>
        <button className="more-info"><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}

export default ServicesConsulting