import React from 'react'
import img_KristinePalmer from '../../../assets/Images/Kristine-Palmer.png'
import img_MarkAubri from '../../../assets/Images/Mark-Aubri.png'
import img_KimberlyHansen from '../../../assets/Images/Kimberly-Hansen.png'
import img_JustinWilloman from '../../../assets/Images/Justin-Willoman.png'

function MeetTeamMembers() {
  return (
    <>
    <div className="kristine-p">
        <img className="img-fluid" src={img_KristinePalmer} alt="A picture of a woman with dark hair"/>
        <h3>Krisine Palme</h3>
        <p>Chef Operation Officer</p>
    </div>

    <div className="mark-a">
        <img className="img-fluid" src={img_MarkAubri} alt="A picture of a man with a suit and short dark hair"/>
        <h3>Mark Aubri</h3>
        <p>Seniro Consultant</p>
    </div>

    <div className="kimberly-h">
        <img className="img-fluid" src={img_KimberlyHansen} alt="An image of a woman with long dark hair holding a newspaper"/>
        <h3>Kimberly Hansen</h3>
        <p>Senior Consultant</p>
    </div>

    <div className="justin-w">
        <img className="img-fluid" src={img_JustinWilloman} alt="An image of a smiling man with dark hair and a black sweater"/>
        <h3>Justin Willoman</h3>
        <p>Senior Tech Consultant</p>
    </div>
</>
  )
}

export default MeetTeamMembers