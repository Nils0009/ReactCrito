import React from 'react'
import SectionTitle from '../../Generics/SectionTitle'
import MainBtn from '../../Generics/MainBtn'

function NotFoundContent() {
  return (
    <div className='container'>
      <div className='notfound-content'>
        <SectionTitle title={"Page Under Construction"} description={"404 Page Not Found"}/>
        <MainBtn className={"btn-theme"} destination={"/"} text={"Go To Home"}/>
      </div>
    </div>
  )
}

export default NotFoundContent