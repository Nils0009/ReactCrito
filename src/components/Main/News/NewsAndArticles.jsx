import './NewsAndArticles.css'
import NewsAndArticlesContent from './NewsAndArticlesContent'
import { Link } from 'react-router-dom'
import { useArticles } from '../../../contexts/ArticleContext'

function NewsAndArticles() {
    const { articles } = useArticles()

  return (
    <section className="news-and-articles">
        <div className="container">
            <h2>Our News & Articles</h2>
            <div className="content">
                {
                    articles.map(article => (
                        <Link key={article.id} to={`/article/${article.id}`}>
                                 <div className='article-news-content-date'>
                                    <div>{new Date(article.published).toLocaleDateString('default', { day: 'numeric' })}</div>
                                    <div>{new Date(article.published).toLocaleDateString('default', { month: 'short' })}</div> 
                                </div>
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