import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsShowcase from '../components/Main/News/NewsShowcase'
import NewsAndArticles from '../components/Main/News/NewsAndArticles'

function News() {
  return (
    <>
      <Header />
      <NewsShowcase />
      <NewsAndArticles />
      <Footer />
    </>
  )
}

export default News