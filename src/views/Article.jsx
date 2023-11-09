import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import NewsShowcase from '../components/Main/News/NewsShowcase'
import ArticleDetail from '../components/Main/News/ArticleDetail'

function Article() {
  return (
    <div>
        <Header />
        <NewsShowcase />
        <ArticleDetail />
        <Footer />
    </div>
  )
}

export default Article