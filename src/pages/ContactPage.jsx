import React from 'react'
import FormContact from '../components/Contact/FormContact'
import InfContact from '../components/Contact/InfContact'

const ContactPage = () => {
    return (
        <div className='w-full m-0'>
            <h1 className='pl-10 pr-10'> <div className='brand pt-7'>CONTACT ME </div></h1>
            <div className='w-full flex flex-col md:flex-row  justify-center'>
                <div className='w-full'><FormContact/></div> 
                <div className=' text-lg md:text-xl  w-1/2'><InfContact/></div>
            </div>
        </div>
    )
}

export default ContactPage  