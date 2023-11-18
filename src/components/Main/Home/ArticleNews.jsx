import React from 'react'
import './ArticleNews.css'
import img_dot from '../../../assets/Images/dot.svg'
import ArticleNewsContent from './ArticleNewsContent'
import MainBtn from '../../Generics/MainBtn'
import SectionTitle from '../../Generics/SectionTitle'
import { useArticles } from '../../../contexts/ArticleContext'



function ArticleNews() {
    const { threeArticles } = useArticles()

  return (
    <section className="article-news">
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
            <div className='img_dot'>
                <img src={img_dot}/>
            </div>                      
        </div>
    </section>
  )
}

export default ArticleNews