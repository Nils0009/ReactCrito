import React from 'react'
import Footer from '../components/Footer/Footer'
import MainBtn from '../components/Generics/MainBtn'
import Header from '../components/Header/Header'
function NotFound() {
  return (
    <>
        <Header />
        <div className='container'>
          <div className='notfound-content'>
          <h1>404 Page Not Found</h1>
          <MainBtn className={"btn-theme"} destination={"/"} text={"Tillbaka"}/>
          </div>
        </div>
        <Footer />
    </>
  )
}

export default NotFound