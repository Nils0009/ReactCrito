import React, { useEffect, useState } from 'react'
import './Projects.css'
import ProjectsContent from './ProjectsContent'
import MainBtn from '../../Generics/MainBtn'
import { Link } from 'react-router-dom'
import { useArticles } from '../../../contexts/ArticleContext'

function Projects() {
const { fourArticles } = useArticles()

  return (
    <section className="project">
    <div className="container">
        <div className="section-title">
            <p>Project & Case Studies</p>
            <h2>Let´s Looks Our Global Projects</h2>
        </div>
        <div className="project-case">
            {
                fourArticles.map(article => (
                    <Link key={article.id} to={`/article/${article.id}`}>
                    <ProjectsContent image={article.imageUrl} title={article.title}/>
                    </Link>

                ))
            }         
        </div>
       <div className="center-btn">
            <MainBtn className={"btn-black"} destination={"/News"} text={"All Recent Project "}/>
       </div>
    </div>
</section>
  )
}

export default Projects