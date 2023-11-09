import React from 'react'
import { Link } from 'react-router-dom'

function FooterCompanyInfo({title, text1, text2, text3, text4}) {
  return (
    <>
        <h3><a href="#">{title}</a></h3>
        <ul>
            <li><Link to={"/Companyinfo"}>{text1}</Link></li>
            <li><Link to={"/Companyinfo"}>{text2}</Link></li>
            <li><Link to={"/Companyinfo"}>{text3}</Link></li>
            <li><Link to={"/Companyinfo"}>{text4}</Link></li>
        </ul>
    </>
  )
}

export default FooterCompanyInfo