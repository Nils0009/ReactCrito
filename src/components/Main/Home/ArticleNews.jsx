import React from 'react'
import './ArticleNews.css'
import ArticleNewsContent from './ArticleNewsContent'
import img_ArticleNewsContent1 from '../../../assets/Images/article-news-content-1.png'
import img_ArticleNewsContent2 from '../../../assets/Images/article-news-content-2.png'
import img_ArticleNewsContent3 from '../../../assets/Images/article-news-content-3.png'

function ArticleNews() {
  return (
    <section class="article-news">
    <div class="container">
        <div class="article-news-top">
            <div class="section-titel">
                <p>Article & News</p>
                <h2>Get Every Single Articles & News</h2>
            </div>
            <a class="btn-transparent" href="news.html">Browse Articles <i class="fa-solid fa-arrow-up-right"></i></a>
        </div>

        <div class="article-news-content">
            <div class="article-news-content-1">
                <a href="article-digital.html"><img class="img-fluid" src={img_ArticleNewsContent1} alt="a woman sitting on a chair"/>               
                <ArticleNewsContent titel="Business" description="How To Use Digitalization In The Classroom" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>                         
                </a>
            </div>

            <div class="article-news-content-2">
                <a href="news.html"><img class="img-fluid" src={img_ArticleNewsContent2} alt="a screenshot of chatgpt"/>
                <ArticleNewsContent titel="Business" description="How To Implement Chat GPT In Your Projects" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>                                                    
                </a>
            </div>

            <div class="article-news-content-3">
                <a href="news.html"><img class="img-fluid" src={img_ArticleNewsContent3} alt="textbooks about css lying on a table"/>
                <ArticleNewsContent titel="Business" description="The Guide To Support Modern CSS Design" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero."/>                                                    
                </a>
            </div>
        </div>

        <div class="dot-img">

        </div>
    </div>
</section>
  )
}

export default ArticleNews