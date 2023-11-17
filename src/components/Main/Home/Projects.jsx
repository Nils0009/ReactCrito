import './Projects.css'
import ProjectsContent from './ProjectsContent'
import MainBtn from '../../Generics/MainBtn'
import { useArticles } from '../../../contexts/ArticleContext'
import SectionTitle from '../../Generics/SectionTitle'
import { Link } from 'react-router-dom'

function Projects() {
const { fourArticles } = useArticles()

  return (
    <section className="project">
        <div className="container">

            <SectionTitle title={"Project & Case Studies"} description={"Let´s Looks Our Global Projects"}/>

            <div className="project-case">
                {
                    fourArticles.map(article => (
                      <article key={article.id}>
                        <Link  to={`/article/${article.id}`}>
                        <ProjectsContent image={article.imageUrl} title={article.title}/>
                        </Link>
                      </article>
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