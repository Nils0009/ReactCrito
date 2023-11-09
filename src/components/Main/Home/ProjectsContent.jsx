import React from 'react'


function ProjectsContent({image, title}) {
  return (
    <>
        <article>
            <img src={image}/>
            <h3>{title}</h3>
            <p>Read More <i className="fa-solid fa-arrow-up-right"></i></p>
        </article>
    </>
  )
}

export default ProjectsContent