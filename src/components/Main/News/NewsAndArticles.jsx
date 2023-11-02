import React from 'react'
import './NewsAndArticles.css'

function NewsAndArticles() {
  return (
    <section className="news-and-articles">
    <div className="container">
        <h2>Our News & Articles</h2>
        <div className="content">
            <div className="article-news-content" id="article-news-content-1">
                <a href="article-digital.html"><img className="img-fluid" src="images/article-news-content-1.png" alt=""/></a>                          
                <p>Business</p>
                <h3>How To Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>

            <div className="article-news-content" id="article-news-content-2">
                <a href="#"><img className="img-fluid" src="images/article-news-content-2.png" alt=""/></a>            
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>

            <div className="article-news-content" id="article-news-content-3">
                <a href="#"><img className="img-fluid" src="images/article-news-content-3.png" alt=""/></a>                        
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>

            <div className="article-news-content" id="article-news-content-4">
                <a href="#"><img className="img-fluid" src="images/article-news-content-4.png" alt=""/></a>     
                <p>Business</p>
                <h3>Why You Need To Implement The Five S's</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div> 
            
            <div className="article-news-content" id="article-news-content-5">
                <a href="#"><img className="img-fluid" src="images/article-news-content-5.png" alt=""/></a>                          
                <p>Business</p>
                <h3>Why You Need To Implement The Five S's</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div> 

            <div className="article-news-content" id="article-news-content-6">
                <a href="#"><img className="img-fluid" src="images/article-news-content-6.png" alt=""/></a>                          
                <p>Business</p>
                <h3>Guided Tour Of Our New Head Office In Stockholm</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div> 

            <div className="article-news-content" id="article-news-content-7">
                <a href="#"><img className="img-fluid" src="images/article-news-content-7.png" alt=""/></a>          
                <p>Business</p>
                <h3>Using Business Intelligence To Get Insights Into Our Businesses</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div> 

            <div className="article-news-content" id="article-news-content-8">
                <a href="#"><img className="img-fluid" src="images/article-news-content-8.png" alt=""/></a>      
                <p>Business</p>
                <h3>Apple Has Released New Products. Are They Any Good?</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div> 

            <div className="article-news-content" id="article-news-content-9">
                <a href="#"><img className="img-fluid" src="images/article-news-content-9.png" alt=""/></a>       
                <p>Business</p>
                <h3>How To Improve Your Teams And Get A Better Result</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </div>  

        </div>
        
        <div className="news-slider">
            <img src="images/Pagination.svg" alt=""/>
        </div>

    </div>
</section>
  )
}

export default NewsAndArticles