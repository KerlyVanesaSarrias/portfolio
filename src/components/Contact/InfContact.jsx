
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const InfContact = () => {
    const { t} = useTranslation();
    return (
        <div className=' flex justify-center'>
            <div className='dark-text gap-10 '>
                <address className='text-lg dark-text 2xl:text-3xl'>
                    <div className='mb-5 mt-10'>
                        <span className='flex gap-4'>
                            <FaWhatsapp className='icon-info' />
                                <a href="https://wa.me/+573143046748?text=Tu%20Mensaje%20De%20Texto" target="_blank">{t("inf.whatsApp")}</a>
                        </span>
                    </div>
                    <div className='mb-5'>
                        <span className='flex gap-4'>
                            <MdOutlinePhoneAndroid className='icon-info' />
                            <a href="tel:1-234-567-8910"> +57 3143046748 </a>
                        </span>
                    </div>
                    <div className='mb-5'>
                        <span className='flex gap-4'>
                            <MdOutlineMail className='icon-info' />
                            <a id="mail" href="mailto:test@correo.com"> kerlysarrias011@gmail.com </a>
                        </span>
                    </div>
                    <div className='flex gap-4'>
                        <MdOutlineLocationOn className='icon-info' />
                        <span className="contact__info-map"> Bogotá D.C, Colombia. </span>
                    </div>
                </address>
            </div>
        </div>
    )
}

export default InfContact
