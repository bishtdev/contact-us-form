import React from 'react'
import sytles from './CotactHeader.module.css'

const ContactHeader = () => {
  return (
    <div className={` container ${sytles.contact_section}`}>
        <h1>CONTACT US</h1>
        <p> let's connect we're here to help And we'd Love to hear from you whether you have a question , comment , or just want to chat, you can reach out to us through the contact form this page , or by phone , email , or social media</p>
    </div>
  )
}

export default ContactHeader