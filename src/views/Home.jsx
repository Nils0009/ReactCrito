import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Showcase from '@components/Main/Home/Showcase'
import Advertisement from '../components/Main/Home/Advertisement'
import Services from '../components/Main/Home/Services'
import Features from '../components/Main/Home/Features'
import AboutCompany from '../components/Main/Home/AboutCompany'
import ChooseUs from '../components/Main/Home/ChooseUs'

const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Advertisement />
      <Features />
      <AboutCompany />
      <Services />
      <ChooseUs />
      <Footer />
    </>
  )
}

export default Home