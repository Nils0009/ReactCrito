import React from 'react'
import Header from '../components/Header/Header'
import ContactMain from '../components/Main/Contact/ContactMain'
import Footer from '../components/Footer/Footer'
import ContactShowcase from '../components/Main/Contact/ContactShowcase'

function Contact() {
  return (
    <>
      <Header />     
      <ContactShowcase />
      <ContactMain />
      <Footer />            
    </>
  )
}

export default Contact