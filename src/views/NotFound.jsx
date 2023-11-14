import React from 'react'
import Footer from '../components/Footer/Footer'
import MainBtn from '../components/Generics/MainBtn'
import Header from '../components/Header/Header'
import SectionTitle from '../components/Generics/SectionTitle'

function NotFound() {
  return (
    <>
        <Header />
        <div className='container'>
          <div className='notfound-content'>
            <SectionTitle title={"Page Under Construction"} description={"404 Page Not Found"}/>
            <MainBtn className={"btn-theme"} destination={"/"} text={"Go To Home"}/>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default NotFound