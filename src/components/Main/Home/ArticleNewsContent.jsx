import React from 'react'

function ArticleNewsContent({titel, description, text}) {
  return (
    <>                
        <p>{titel}</p>
        <h3>{description}</h3>
        <p>{text}</p>
            
    </>
  )
}

export default ArticleNewsContent