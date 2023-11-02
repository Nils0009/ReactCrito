import React from 'react'

function ChooseUsReasons({classTitel, titel, text}) {
  return (
    <div className={classTitel}>
        <h3>{titel}</h3>
        <p>{text}</p>
    </div>
  )
}

export default ChooseUsReasons