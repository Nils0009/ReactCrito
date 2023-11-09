import React from 'react'
import img_CassandraWarren from '../../../assets/Images/Cassandra-Warren.png'
import img_AmandaTulling from '../../../assets/Images/Amanda-Tulling.png'
import img_JackMcDogglas from '../../../assets/Images/Jack-McDogglas.png'
import img_Star from '../../../assets/Images/Star.svg'

import SectionTitle from '../../Generics/SectionTitle'

function MeetTeamTestimonial() {
  return (
    <>
        <div className="testimonial-text">
        <SectionTitle title="Testimonial" description="What Our Client Says"/>

        <div className="rev-1">
            <img src={img_Star} alt="star icon"/>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="cassandra">
                    <img src={img_CassandraWarren} alt="a picture of a woman with dark hair and a black white sweater"/>
                    <div className="cassandra-text">
                        <h3>Cassandra Warren</h3>
                        <p>Business Manager, Dorfus</p>
                    </div>
                </div>
        </div>

        <div className="rev-2">
            <img src={img_Star} alt="star icon"/>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="amanda">
                    <img src={img_AmandaTulling} alt="a picture of a woman with dark hair and a white sweater"/>
                    <div className="amanda-text">
                        <h3>Amanda Tulling</h3>
                        <p>Senior Developer, Square</p>
                    </div>
                </div>
        </div>

        <div className="rev-3">
            <img src={img_Star} alt="star icon"/>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="jack">
                    <img src={img_JackMcDogglas} alt="a picture of a man with dark hair and a white sweater"/>
                    <div className="jack-text">
                        <h3>Jack McDogglas</h3>
                        <p>Key Account Manager, Gobona</p>
                    </div>
                </div>
        </div>
    </div>
    <div className="center-btn">
        <a className="btn-black" href="#">All Reviews <i className="fa-solid fa-arrow-up-right"></i></a>
    </div>
</>
  )
}

export default MeetTeamTestimonial