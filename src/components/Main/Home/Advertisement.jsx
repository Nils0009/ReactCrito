import React from 'react'
import './Advertisement.css'
import img_paperz from '@images/paperz.svg'
import img_dorfus from '@images/dorfus.svg'
import img_martino from '@images/martino.svg'
import img_square from '@images/square.svg'
import img_gobona from '@images/gobona.svg'
import AdvertisementContent from './AdvertisementContent'

function Advertisement() {
  return (
    <section className="advertisement">
    <div className="container">
        <div className="advertisment-content">
            <AdvertisementContent image={img_paperz} alttext={"paperz advertising logo"}/>
            <AdvertisementContent image={img_dorfus} alttext={"dorfus advertising logo"}/>
            <AdvertisementContent image={img_martino} alttext={"martino advertising logo"}/>
            <AdvertisementContent image={img_square} alttext={"square advertising logo"}/>
            <AdvertisementContent image={img_gobona} alttext={"gobona advertising logo"}/>
        </div>
    </div>
</section>
  )
}

export default Advertisement