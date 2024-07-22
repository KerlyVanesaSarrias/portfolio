import React from 'react'
import {FaWhatsapp} from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlineMail, MdOutlineLocationOn   } from "react-icons/md";


const InfContact = () => {
    return (
    <div  className=' md:pt-20 pt-14 flex justify-center pl-24 2xl:pl-0'>
        <div className='dark-text gap-10 '>
            <h3 className='brand 2xl:text-3xl text-xl '>CONTACT INFORMATION</h3>
            <address className='text-lg md:text-xl 2xl:text-3xl'>
                <div className='mb-5 mt-10'>
                    <span className='flex gap-4'>
                        <FaWhatsapp className='icon-info'/>  
                        <a href="https://wa.me/+573143046748?text=Tu%20Mensaje%20De%20Texto" target="_blank">Send message to
                        WhatsApp</a>
                    </span>
                </div>
                <div className='mb-5'>
                    <span className='flex gap-4'>   
                        <MdOutlinePhoneAndroid className='icon-info'/>
                        <a href="tel:1-234-567-8910"> +57 3143046748 </a>
                    </span>
                </div>
                <div className='mb-5'>
                    <span className='flex gap-4'>
                        <MdOutlineMail className='icon-info'/>
                        <a id="mail" href="mailto:test@correo.com"> kerlysarrias011@gmail.com </a>
                    </span>
                </div>
                <div className='flex gap-4'>
                    <MdOutlineLocationOn className='icon-info'/>
                    <span class="contact__info-map"> Huila, Colombia. </span>
                </div>
            </address>
            </div>
        </div>
    )
}

export default InfContact
