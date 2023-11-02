import React from 'react'

function FooterCompanyInfo({titel, text1, text2, text3, text4}) {
  return (
    <>
        <h3><a href="#">{titel}</a></h3>
        <ul>
            <li><a href="#">{text1}</a></li>
            <li><a href="#">{text2}</a></li>
            <li><a href="#">{text3}</a></li>
            <li><a href="#">{text4}</a></li>
        </ul>
    </>
  )
}

export default FooterCompanyInfo