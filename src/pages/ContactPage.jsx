import FormContact from '../components/Contact/FormContact'
import InfContact from '../components/Contact/InfContact'
import './Styles/index.css'

import { useTranslation } from 'react-i18next';
const ContactPage = () => {
    const { t } = useTranslation();
    return (
        <div className='md:px-24 px-5 py-10 ' >
            <div className='contact-section dark:border-[rgba(7,135,255,0.55)] border-neutral-400 rounded-3xl'>
                <div className=' dark:bg-[#0787ff21]  bg-slate-200  rounded-3xl'>
                    <div className='flex md:flex-row flex-col border-b-2 dark:border-b-[rgba(7,135,255,0.55)] border-b-neutral-400 rounded-t-3xl '>
                        <div className='md:order-2 order-1 dark-text pt-16 ml-5 md:ml-20 md:mb-10 mb-0 md:pr-60 pr-4 '>
                            <h1 className=' font-bold  text-4xl pb-5'>{t("contact.title")} </h1>
                            <h2 className='text-lg text-justify'>{t("contact.subtitle")}</h2>
                        </div>
                    </div>
                    <div className='w-full dark:bg-[#0787ff18]  bg-slate-200 rounded-b-3xl'>
                        <div className='w-full flex flex-col md:flex-row  justify-center'>
                            <div className='md:mt-16 mt-0 p-5   md:order-1 order-2'><InfContact /></div>
                            <div className='w-full md:order-2 order-1 md:mt-0 mt-20'><FormContact /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage  