import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4'>Ponte en contacto con nosotros</h2>
            <p className='text-white'>No dudes en contactarnos si quieres colaborar. 
            <br/>
            ¡Estás a sólo unos clics de distancia!</p>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactMeLeft