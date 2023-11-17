import React from 'react'
import './NewsAndArticlesDetail.css'
import ArticleNewsContent from '../Home/ArticleNewsContent'
import MainBtn from '../../Generics/MainBtn'
import SectionTitle from '../../Generics/SectionTitle'
import { useArticles } from '../../../contexts/ArticleContext'

function NewsAndArticlesDetail() {
    const { threeArticles } = useArticles()
  return (
    <section className="NewsAndArticlesDetail">
        <div className="container">
            <div className="article-news-top">
                <SectionTitle title={"Article & News"} description={"Get Every Single Articles & News"}/>
                <MainBtn className={"btn-transparent"} destination={"/news"} text={"Browse Articles"}/>              
            </div>

            <div  className="article-news-content">
                {
                    threeArticles.map(article => (
                        <div className='article-content' key={article.id}>
                            <div className='article-news-content-date'>
                                <div>{new Date(article.published).toLocaleDateString('default', { day: 'numeric' })}</div>
                                <div>{new Date(article.published).toLocaleDateString('default', { month: 'short' })}</div> 
                            </div>
                            <ArticleNewsContent destination={`/article/${article.id}`} image={article.imageUrl} title={article.title} description={article.category} text={article.content} />                           
                        </div>
                    ))
                } 
            </div>                      
        </div>
    </section>
  )
}

export default NewsAndArticlesDetail