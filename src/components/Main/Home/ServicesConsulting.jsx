import React from 'react'
import MainCricleBtn from '../../Generics/MainCricleBtn'

function ServicesConsulting({classname, title, description,}) {
  return (
    <>
      <div className={classname}>
        <h3>{title}</h3>
        <p>{description}</p>
        <MainCricleBtn classname={"more-info"} icon={"fa-solid fa-arrow-right"}/>
      </div>
    </>
  )
}

export default ServicesConsulting