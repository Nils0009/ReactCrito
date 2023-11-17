import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsShowcase from '../components/Main/News/NewsShowcase'
import NewsAndArticles from '../components/Main/News/NewsAndArticles'
import Signup from '../components/Main/Home/Signup'

function News() {
  return (
    <>
      <Header />
      <NewsShowcase />
      <NewsAndArticles />
      <Signup />
      <Footer />
    </>
  )
}

export default News