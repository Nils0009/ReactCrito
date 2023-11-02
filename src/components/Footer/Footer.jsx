import React from 'react'
import './Footer.css'
import img_backgroundlinesfooter from '../../assets/Images/background-line-footer.svg'
import img_logotypewhite from '../../assets/Images/logotype-white.svg'
import FooterCompanyInfo from './FooterCompanyInfo'

function Footer() {
  return (
    <footer>
    <img className="img-fluid" src={img_backgroundlinesfooter} alt=""/>

    <div className="container-fluid">
        <div className="container footer-top">
            <div className="crito-section">
                <img src={img_logotypewhite} alt="crito logo, a capital c with color"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>

            <div className="company-section">
                <FooterCompanyInfo titel="Company" text1="About" text2="Features" text3="Works" text4="Career" />
            </div>

            <div className="help-section">
                <FooterCompanyInfo titel="Help" text1="Customer Support" text2="Delivery Details" text3="Terms & Conditions" text4="Privacy Policy" />
            </div>

            <div className="resources-section">
            <FooterCompanyInfo titel="Resources" text1="Free eBooks" text2="Development Tutorial" text3="How to - Blog" text4="Youtube Playlist" />
            </div>

            <div className="link-section">
            <FooterCompanyInfo titel="Link" text1="Free eBooks" text2="Development Tutorial" text3="How to - Blog" text4="Youtube Playlist" />
            </div>    

        </div> 

        <div className="footer-bottom">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            <div className="socialmedia-footer">
                <a href="http://facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="http://twitter.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="http://instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="http://linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
        </div>  
    </div>

</footer>
  )
}

export default Footer