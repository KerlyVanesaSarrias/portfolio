
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlineMail, MdOutlineLocationOn } from "react-icons/md";
import { useTranslation } from 'react-i18next';

const InfContact = () => {
    const { t} = useTranslation();
    return (
        <div className='text-lg dark-text gap-4 flex flex-col h-full justify-center'>
            <span className='flex gap-4'>
                <FaWhatsapp className='icon-info' />
                <a className="hover:text-blue-600" href="https://wa.me/+573143046748?text=Tu%20Mensaje%20De%20Texto" target="_blank">{t("inf.whatsApp")}</a>
            </span>
            <span className='flex gap-4'>
                <MdOutlinePhoneAndroid className='icon-info' />
                <a className="hover:text-blue-600" href="tel:1-234-567-8910"> +57 3143046748 </a>
            </span>
            <span className='flex gap-4'>
                <MdOutlineMail className='icon-info' />
                <a className="hover:text-blue-600" id="mail" href="mailto:test@correo.com"> kerlysarrias011@gmail.com </a>
            </span>
            <span className='flex gap-4'>
                <MdOutlineLocationOn className='icon-info' />
                <span className="contact__info-map"> Bogotá D.C, Colombia. </span>
            </span>
        </div>
    )
}

export default InfContact
