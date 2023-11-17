import React from 'react'
import Footer from '../components/Footer/Footer'
import ArticleDetail from '../components/Main/News/ArticleDetail'
import Header from '../components/Header/Header'
import NewsAndArticlesDetail from '../components/Main/News/NewsAndArticlesDetail'
import ArticleShowcase from '../components/Main/News/ArticleShowcase'

function Article() {
  return (
    <div>
        <Header />
        <ArticleShowcase />
        <ArticleDetail />
        <NewsAndArticlesDetail />
        <Footer />
    </div>
  )
}

export default Article