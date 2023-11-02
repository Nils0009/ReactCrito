import React from 'react'
import './Advertisement.css'
import { Link } from 'react-router-dom'

import img_paperz from '@images/paperz.svg'
import img_dorfus from '@images/dorfus.svg'
import img_martino from '@images/martino.svg'
import img_square from '@images/square.svg'
import img_gobona from '@images/gobona.svg'

function Advertisement() {
  return (
    <section className="advertisement">
    <div className="container">
        <div className="advertisment-content">
            <Link to="#"><img src={img_paperz} alt="paperz advertising logo"/></Link>
            <Link to="#"><img src={img_dorfus} alt="dorfus advertising logo"/></Link>                                            
            <Link to="#"><img src={img_martino} alt="martino advertising logo"/></Link>
            <Link to="#"><img src={img_square} alt="square advertising logo"/></Link>
            <Link to="#"><img src={img_gobona} alt="gobona advertising logo"/></Link>    
        </div>
    </div>
</section>
  )
}

export default Advertisement