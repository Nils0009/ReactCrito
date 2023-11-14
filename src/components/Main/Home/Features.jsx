import React from 'react'
import './Features.css'
import img_handshakeicon from '../../../assets/Images/handshake-icon.svg'
import img_charticon from '../../../assets/Images/chart-icon.svg'
import img_lighticon from '../../../assets/Images/light-icon.svg'
import img_safeicon from '../../../assets/Images/safe-icon.svg'
import SectionTitle from '../../Generics/SectionTitle'
import FeaturesInfo from './FeaturesInfo'
import MainBtn from '../../Generics/MainBtn'

function Features() {
  return (
    <section className="features">
      <div className="container">
          <SectionTitle title="Features" description="Our Accounting is trusted by thousand of companies"/>

          <FeaturesInfo classname={"business-advice"} image={img_handshakeicon} alttext={"icon of a handshake"} title={"Business Advice"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}/>

          <FeaturesInfo classname={"financial-advice"} image={img_charticon} alttext={"icon of a chart"} title={"Financial Advice"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}/>

          <FeaturesInfo classname={"startup-business"} image={img_lighticon} alttext={"icon of a lightbulb"} title={"Startup Business"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}/>

          <FeaturesInfo classname={"risk-management"} image={img_safeicon} alttext={"icon of a safe"} title={"Risk management"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}/>
          
          <div className='center-btn'>
          <MainBtn className={"btn-theme"} destination={"/contact"} text={"Learn More"}/>
          </div>       
      </div>
</section>
  )
}

export default Features