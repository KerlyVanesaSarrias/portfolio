import React from 'react'
import FormContact from '../components/Contact/FormContact'
import InfContact from '../components/Contact/InfContact'

const ContactPage = () => {
    return (
        <div className='w-full flex flex-col md:flex-row items-center justify-center px-8 py-10'>
            <div className='w-full'><FormContact/></div> 
            <div className='w-1/3 mt-36 text-xl p-14 flex justify-center'><InfContact/></div>
        </div>
    )
}

export default ContactPage