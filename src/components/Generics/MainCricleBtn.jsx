import React from 'react'
import { Link } from 'react-router-dom'

function MainCricleBtn({classname, icon}) {
  return (
    <>
        <Link><div className={classname}><i className={icon}></i></div></Link>
    </>
  )
}

export default MainCricleBtn