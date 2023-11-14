import React from 'react'
import './MeetTeam.css'
import img_KristinePalmer from '../../../assets/Images/Kristine-Palmer.png'
import img_MarkAubri from '../../../assets/Images/Mark-Aubri.png'
import img_KimberlyHansen from '../../../assets/Images/Kimberly-Hansen.png'
import img_JustinWilloman from '../../../assets/Images/Justin-Willoman.png'
import img_CassandraWarren from '../../../assets/Images/Cassandra-Warren.png'
import img_AmandaTulling from '../../../assets/Images/Amanda-Tulling.png'
import img_JackMcDogglas from '../../../assets/Images/Jack-McDogglas.png'
import SectionTitle from '../../Generics/SectionTitle'
import MeetTeamMembers from './MeetTeamMembers'
import MeetTeamTestimonial from './MeetTeamTestimonial'
import MainBtn from '../../Generics/MainBtn'


function MeetTeam() {

  return (
    <section className="meet-team">
        <div className="container">
            <div className="meet-team-top">
            <SectionTitle title="Meet Our Team" description="Experience Team Members"/>
                <MainBtn className={"btn-theme"} destination={"/Team"} text={"Browse Team"} />                 
            </div>

            <div className="team-members">
                <MeetTeamMembers classname={"kristine-p"} image={img_KristinePalmer} alttext={"A picture of a woman with dark hair"} title={"Krisine Palme"} text={"Chef Operation Officer"} />
                <MeetTeamMembers classname={"mark-a"} image={img_MarkAubri} alttext={"A picture of a man with a suit and short dark hair"} title={"Mark Aubri"} text={"Seniro Consultant"} />
                <MeetTeamMembers classname={"kimberly-h"} image={img_KimberlyHansen} alttext={"An image of a woman with long dark hair holding a newspaper"} title={"Kimberly Hansen"} text={"Senior Consultant"} />
                <MeetTeamMembers classname={"justin-w"} image={img_JustinWilloman} alttext={"An image of a smiling man with dark hair and a black sweater"} title={"Justin Willoman"} text={"Senior Tech Consultant"} />
            </div>
        
            <div className="testimonial">
                <div className="testimonial-text">
                    <SectionTitle title="Testimonial" description="What Our Client Says"/>            
                    <MeetTeamTestimonial mainclassname={"rev-1"} classname={"cassandra"} image={img_CassandraWarren} alttext={"a picture of a woman with dark hair and a black white sweater"} textclassname={"cassandra-text"} title={"Cassandra Warren"} text={"Business Manager, Dorfus"}/>
                    <MeetTeamTestimonial mainclassname={"rev-2"} classname={"amanda"} image={img_AmandaTulling} alttext={"a picture of a woman with dark hair and a white sweater"} textclassname={"amanda-text"} title={"Amanda Tulling"} text={"Senior Developer, Square"}/>
                    <MeetTeamTestimonial mainclassname={"rev-3"} classname={"jack"} image={img_JackMcDogglas} alttext={"a picture of a man with dark hair and a white sweater"} textclassname={"jack-text"} title={"Jack McDogglas"} text={"Key Account Manager, Gobona"}/>
                </div>
                <div className="center-btn">
                    <MainBtn className={"btn-black"} destination={"/team"} text={"All Reviews"} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MeetTeam