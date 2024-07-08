import React from 'react'
import FormContact from '../components/Contact/FormContact'
import InfContact from '../components/Contact/InfContact'

const ContactPage = () => {
    return (
        <>
        <div className='w-full flex flex-col  p-10'>
            <h1> <div className='brand'>CONTACT ME </div></h1>
            <div className='w-full flex flex-col md:flex-row  p-10 justify-center'>
                <div className='w-full'><FormContact/></div> 
                <div className=' text-lg md:text-xl mt-8 md:mt-16 mb-10'><InfContact/></div>
            </div>
        </div>
        </>
    )
}

export default ContactPage  