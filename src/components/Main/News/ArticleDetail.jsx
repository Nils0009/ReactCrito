import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ArticleDetail.css'


function Article() {
  const [article, setArticle] = useState({})
  const { id } = useParams()

  useEffect(() => {
    getArticle()
  }, [])

  const getArticle = async () => {
    if (id !== undefined) {
      const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

      if(result.status === 200) {
        setArticle(await result.json())
      }
    }
  }



  return ( 
    <div className='articleDetail'>
      <div className='container'>

        <div className="content-top">
            <h2>{article.category}</h2>
            <h4>{article.title}</h4>
            <h6>{article.author}</h6>

          <p>Mar 25, 2023 Kimberly Hansen</p>

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
                <div>
                  <h4>How To Blow Through Capital At An Incredible Rate</h4>
                  <p>Jan 14, 2020</p>
                </div>

                <div>
                  <h4>Design Studios That Everyone Should Know About? </h4>
                  <p>Jan 14, 2020</p>
                </div>

                <div>
                  <h4>How did we get 1M+ visitors in 30 days without anything!</h4>
                  <p>Jan 14, 2020</p>
                </div>

                <div>
                  <h4>Figma On Figma: How We Built Our Website Design System</h4>
                  <p>Jan 14, 2020</p>
                </div>
            </div>

            <div className="categories1">
              <h3>Categories</h3>
                <p>Technology  -  20 Posts</p>
                <p>Freelancing  -  07 Posts</p>
                <p>Writing  -  16 Posts</p>
                <p>Marketing  -  11 Posts</p>
                <p>Business  -  35 Posts</p>
                <p>Education  -  14 Posts</p>
            </div>

                    </div>
        
      </div>
    </div>

  )
}

export default Article