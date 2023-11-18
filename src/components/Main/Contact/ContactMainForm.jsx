import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ContactMainFormSuccess from './ContactMainFormSuccess'

function ContactMainForm() {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState (false)

    const form = useFormik ({
      initialValues: {
        name: '',
        email: '',
        message: ''
      },

      validationSchema: Yup.object({
        name: Yup.string()
          .required("Ett namn måste anges!")
          .matches(/^[A-Za-zÀ-Öà-ö\s']{2,}$/, "Namnet uppfyller inte kraven, försök igen!"),
        email: Yup.string()
          .required("Du måste ange en E-postadress!")
          .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "E-postadressen innehåller fel!"),
        message: Yup.string()
          .required("Var god och skriv ett meddelande!")
          .min(10, "Meddelandet måste innehålla minst tio tecken!")
      }),

      onSubmit: async (values) => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform',{
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(values)
        })

        switch (result.status) {
          case 200:
            setSuccessMessage(true)
            break;
          case 400:
            setErrorMessage("Ett fel har inträffat och meddelandet går inte att skicka")
            break;
        }
      }
    })

    if (successMessage) {
      return <ContactMainFormSuccess />
    }

  return (
    <>
      <h2>Leave us a message for any information.</h2>
      <form onSubmit={form.handleSubmit} id="c-form" noValidate>
        <p className='errorMessage'>{errorMessage}</p>

        <label>{form.touched.name && form.errors.name ? form.errors.name : ''}</label>
        <input tabIndex="1" type="text" name='name' id="name" placeholder="Name" value={form.values.name} onChange={form.handleChange} onBlur={form.handleBlur}/>

        <label>{form.touched.email && form.errors.email ? form.errors.email : ''}</label>
        <input tabIndex="2" type="email" name='email' id="email" placeholder="Email" value={form.values.email} onChange={form.handleChange} onBlur={form.handleBlur}/>

        <label>{form.touched.message && form.errors.message ? form.errors.message : ''}</label>
        <textarea tabIndex="3" name='message' id="message" placeholder="Your Message" cols="30" rows="10" value={form.values.message} onChange={form.handleChange} onBlur={form.handleBlur}></textarea>

        <button tabIndex="4" className="btn-theme" type="submit">Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
      </form>
    </>
  )
}

export default ContactMainForm