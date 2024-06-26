import React from 'react'
import './NewsShowcase.css'
import img_backgroundlines from '../../../assets/Images/background-lines.svg'
import LinkTrail from '../../Generics/LinkTrail'

function NewsShowcase() {
  return (
    <section className="news-showcase">
    <img className="img-fluid" src={img_backgroundlines} alt=""/>

    <div className="container">
        <div className="content">
          <LinkTrail prev={"Home"} current={"News"} />
          <h1>News & Articles</h1>
        </div>       
    </div>
    
</section>
  )
}

export default NewsShowcase