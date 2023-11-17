import React from 'react'


function ProjectsContent({image, title}) {
  return (
    <>
        <img className='img-fluid' src={image}/>
        <h3>{title}</h3>
        <p>Read More <i className="fa-solid fa-arrow-up-right"></i></p>
    </>
  )
}

export default ProjectsContent