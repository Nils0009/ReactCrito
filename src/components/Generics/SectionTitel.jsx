import React from 'react'
import './SectionTitel.css'

function SectionTitel({titel, description}) {
  return (
    <div className="section-titel">
        <p>{titel}</p>
        <h2>{description}</h2>
    </div>
  )
}

export default SectionTitel