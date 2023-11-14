import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ArticleDetail.css'
import ArticleDetailRight from './ArticleDetailRight'
import { useArticles } from '../../../contexts/ArticleContext'


function Article() {
  const { articles, article, getArticles, getArticle } = useArticles()
  const { id } = useParams()

 useEffect(() => {
  getArticle(id)
  getArticles()
 }, [])

  return ( 
    <div className='articleDetail'>
      <div className='container'>

        <div className="content-top">

            <h2>{article.category}</h2>
            <h4>{article.title}</h4>
            <h6>{article.author}</h6>

          <p>{new Date(article.published).toLocaleDateString()}</p> <p>{article.author}</p>

        </div>

        <div className="content-main">
          <img src={article.imageUrl}/>

          <p>{article.content}</p>
          
          <button className="btn-theme">Digitalization</button>
          <button className="btn-theme">School</button>
          <button className="btn-theme">IT</button>
          <button className="btn-theme">Design</button>
          <button className="btn-theme">Work</button>
          <button className="btn-theme">Tech</button>
        </div>

        <div className="content-side">
            <form>                               
              <input type="text" placeholder="Type to search..."/>                              
            </form>

            <div className="r-post">
              <h3>Recent Posts</h3>
              {
                    articles.map(article => (
                        <div key={article.id}>
                            <ArticleDetailRight title={article.title} published={new Date(article.published).toLocaleDateString()} />
                        </div>
                    ))
              }


            </div>

            <div className="categories1">
              <h3>Categories</h3>
                {
                        articles.map(article => (
                            <div key={article.id}>
                                <p>{article.category} - {article.category.array}</p>
                            </div>
                        ))
                }
            </div>

                    </div>
        
      </div>
    </div>

  )
}

export default Article