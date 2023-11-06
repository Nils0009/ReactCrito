import React, { useEffect, useState } from 'react'
import './NewsAndArticles.css'
import NewsAndArticlesContent from './NewsAndArticlesContent'
import { Link } from 'react-router-dom'

function NewsAndArticles() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')

        if (result.status === 200) {
            setArticles(await result.json())
        }
    }

  return (
    <section className="news-and-articles">
        <div className="container">
            <h2>Our News & Articles</h2>
            <div className="content">
                {
                    articles.map(article => (
                        <Link key={article.id}>
                            <NewsAndArticlesContent pic={article.imageUrl}  category={article.category} title={article.title} text={article.content}/>
                        </Link>
                    ))
                }         
            </div>
        </div>
    </section>
  )
}

export default NewsAndArticles