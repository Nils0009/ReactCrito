import React from 'react'
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Showcase from '@components/Main/Home/Showcase'
import Advertisement from '../components/Main/Home/Advertisement'
import Services from '../components/Main/Home/Services'
import Features from '../components/Main/Home/Features'
import AboutCompany from '../components/Main/Home/AboutCompany'
import ChooseUs from '../components/Main/Home/ChooseUs'
import Projects from '../components/Main/Home/Projects'
import MeetTeam from '../components/Main/Home/MeetTeam'
import ArticleNews from '../components/Main/Home/ArticleNews'
import Signup from '../components/Main/Home/Signup'

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
      <Projects />
      <MeetTeam />
      <ArticleNews />
      <Signup />
      <Footer />
    </>
  )
}

export default Home