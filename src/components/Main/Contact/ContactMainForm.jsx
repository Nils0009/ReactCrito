import { useFormik } from 'formik'
import React, { useState } from 'react'

function ContactMainForm() {
    const [errorMessage, setErrorMessage] = useState('')

    const form = useFormik ({
      initialValues: {
        name: '',
        email: '',
        message: ''
      }
    })

  return (
    <>
      <form id="c-form" noValidate>
        <p>{errorMessage}</p>
        <label></label>
        <input tabIndex="1" type="text" id="name" placeholder="Name*" value={form.values.name} onChange={form.handleChange}/>
        <label></label>
        <input tabIndex="2" type="email" id="email" placeholder="Email*" value={form.values.email} onChange={form.handleChange}/>
        <label></label>
        <textarea tabIndex="3" id="message" placeholder="Your Message*" cols="30" rows="10" value={form.values.message} onChange={form.handleChange}></textarea>

        <button tabIndex="4" className="btn-theme" type="submit">Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
      </form>
    </>
  )
}

export default ContactMainForm