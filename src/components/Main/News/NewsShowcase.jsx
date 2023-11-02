import React from 'react'
import './NewsShowcase.css'
import img_backgroundlines from '../../../assets/Images/background-lines.svg'

function NewsShowcase() {
  return (
    <section className="news-showcase">
    <img className="img-fluid" src={img_backgroundlines} alt=""/>
    <div className="container">
        <div className="content">

            <div className="link-trail">
            <ul className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li className="active">News</li>
            </ul>
            </div>

            <h1>News & Articles</h1>
        </div>       
    </div>
</section>
  )
}

export default NewsShowcase