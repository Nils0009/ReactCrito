import React from 'react'
import MainBtn from '../../Generics/MainBtn'
import './ContactMainFormSuccess.css'

function ContactMainFormSuccess() {
  return (
    <div className='ContactMainFormSuccess'>
      <h1>Meddelande har skickats!</h1>
      <MainBtn className={"btn-theme"} destination={"/"} text={"Gå tillbaka"}/>
    </div>
  )
}

export default ContactMainFormSuccess