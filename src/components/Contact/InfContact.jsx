import React from 'react'
import {FaWhatsapp} from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlineMail, MdOutlineLocationOn   } from "react-icons/md";


const InfContact = () => {
    return (
    <div className='max-w-md ml-20' >
        <div className=' dark-text gap-10 w-96'>
            <h3 className='brand inline-block  text-base'>CONTACT INFORMATION</h3>
            <address>
                <div className='mb-5 mt-10'>
                    <span className='flex gap-4'>
                        <FaWhatsapp className='text-3xl text-cyan-500'/>  
                        <a href="https://wa.me/+573143046748?text=Tu%20Mensaje%20De%20Texto" target="_blank">Send message to
                        WhatsApp</a>
                    </span>
                </div>
                <div className='mb-5'>
                    <span className='flex gap-4'>   
                        <MdOutlinePhoneAndroid className='text-3xl text-cyan-500'/>
                        <a href="tel:1-234-567-8910"> +57 3143046748 </a>
                    </span>
                </div>
                <div className='mb-5'>
                    <span className='flex gap-4'>
                        <MdOutlineMail className='text-3xl text-cyan-500'/>
                        <a id="mail" href="mailto:test@correo.com"> kerlysarrias011@gmail.com </a>
                    </span>
                </div>
                <div className='flex gap-4'>
                    <MdOutlineLocationOn className='text-3xl text-cyan-500'/>
                    <span class="contact__info-map"> Huila, Colombia. </span>
                </div>
            </address>
            </div>
        </div>
    )
}

export default InfContact
