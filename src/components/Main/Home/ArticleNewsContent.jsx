import React from 'react'
import { Link } from 'react-router-dom'

function ArticleNewsContent({destination, image, title, description, text}) {
  return (
    <>
        <Link to={destination}><img className="img-fluid" src={image}/>               
          <p>{title}</p>
          <h3>{description}</h3>
          <p>{text}</p>
        </Link>                     
    </>
  )
}

export default ArticleNewsContent