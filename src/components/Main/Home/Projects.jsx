import React from 'react'
import './Projects.css'
import img_growBussiness from '../../../assets/Images/grow-bussiness.png'
import img_clientResponsive from '../../../assets/Images/client-responsive.png'
import img_educateEmployees from '../../../assets/Images/educate-employees.png'
import img_businessInsight from '../../../assets/Images/business-insight.png'

function Projects() {
  return (
    <section className="project">
    <div className="container">
        <div className="section-titel">
            <p>Project & Case Studies</p>
            <h2>Let´s Looks Our Global Projects</h2>
        </div>
        <div className="project-case">
            <article>
                <img src={img_growBussiness} alt="Image of a man holding a newspaper"/>
                <h3>Grow Your Business</h3>
                <a href="#">Read More <i className="fa-solid fa-arrow-up-right"></i></a>
            </article>
            <article>
                <img src={img_clientResponsive} alt="Image of a tablet, phone and glasses"/>
                <h3>Why your client needs a responsive website</h3>
                <a href="#">Read More <i className="fa-solid fa-arrow-up-right"></i></a>
            </article>
            <article>
                <img src={img_educateEmployees} alt="Image of a notepad, pen and coffee cup"/>
                <h3>Educate your employees to get better results</h3>
                <a href="#">Read More <i className="fa-solid fa-arrow-up-right"></i></a>
            </article>
            <article>
                <img src={img_businessInsight} alt="Image of a laptop showing business charts "/>
                <h3>Business Insights is a important piece of your business</h3>
                <a href="#">Read More <i className="fa-solid fa-arrow-up-right"></i></a>
            </article>
        </div>
       <div className="center-btn">
            <a className="btn-black" href="consulting.html">All Recent Project <i className="fa-solid fa-arrow-up-right"></i></a>
       </div>
    </div>
</section>
  )
}

export default Projects