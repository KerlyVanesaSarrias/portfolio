import React from 'react'
import FormContact from '../components/Contact/FormContact'
import InfContact from '../components/Contact/InfContact'

const ContactPage = () => {
    return (
        <div className='w-full mt-10 md:px-10'>
            <h1 className='brand'> CONTACT ME </h1>
            <div className='w-full flex flex-col md:flex-row  justify-center md:pr-60'>
                <div className='w-full'><FormContact/></div> 
                <div className=' w-1/2 2xl:w-1/3'><InfContact/></div>
            </div>
        </div>
    )
}

export default ContactPage  