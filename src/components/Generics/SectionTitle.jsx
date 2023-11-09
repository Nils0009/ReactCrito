import React from 'react'
import './SectionTitle.css'

function SectionTitle({title, description}) {
  return (
    <div className="section-title">
        <p>{title}</p>
        <h2>{description}</h2>
    </div>
  )
}

export default SectionTitle