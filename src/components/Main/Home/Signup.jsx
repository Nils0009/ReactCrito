import React from 'react'
import './Signup.css'
import img_backgroundwavy from '../../../assets/Images/background-wavy-lines.svg'

function Signup() {

  return (
    <section className="signup">
      <img className="bg-wavy-lines" src={img_backgroundwavy}/>
        <div className="container">
            <h2>Get News Update By Signup</h2>
                <form>
                    <input type="text" placeholder="username@domain.com"/>
                    <button className="btn-theme">Subascribe <i className="fa-solid fa-arrow-up-right"></i></button>
                </form>
        </div>
    </section>
  )
}

export default Signup