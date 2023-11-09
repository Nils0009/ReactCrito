import React from 'react'
import './MeetTeam.css'

import SectionTitle from '../../Generics/SectionTitle'
import MeetTeamMembers from './MeetTeamMembers'
import MeetTeamTestimonial from './MeetTeamTestimonial'


function MeetTeam() {
  return (
    <section className="meet-team">
    <div className="container">

        <div className="meet-team-top">
        <SectionTitle title="Meet Our Team<" description="Experience Team Members"/>
            <a className="btn-theme" href="#">Browse Team<i className="fa-solid fa-arrow-up-right"></i></a>                        
        </div>

        <div className="team-members">
            <MeetTeamMembers />
        </div>
    
        <div className="testimonial">
            <MeetTeamTestimonial />
        </div>
    </div>
</section>
  )
}

export default MeetTeam