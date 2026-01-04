import FormContact from '../components/Contact/FormContact'
import InfContact from '../components/Contact/InfContact'
import './Styles/index.css'

import { useTranslation } from 'react-i18next';
const ContactPage = () => {
    const { t } = useTranslation();
    return (
        <div className='px-5 md:px-20 pb-6 w-full'>
            <div className='dark:bg-[#0787ff21] bg-slate-200 rounded-3xl dark:border-[rgba(7,135,255,0.55)] border-neutral-400'>
                <div className='flex md:flex-row flex-col border-b-2 dark:border-b-[rgba(7,135,255,0.55)] border-b-neutral-400 rounded-t-3xl '>
                    <div className='md:order-2 order-1 dark-text p-5 md:p-6 flex flex-col gap-2'>
                        <h1 className=' font-bold text-4xl'>{t("contact.title")} </h1>
                        <h2 className='text-base text-justify'>{t("contact.subtitle")}</h2>
                    </div>
                </div>
                <div className='w-full dark:bg-[#0787ff18] bg-slate-200 rounded-b-3xl flex flex-col gap-4 md:flex-row justify-center px-5 md:px-10 py-4'>
                    <div className='md:order-1 order-2'><InfContact /></div>
                    <div className='w-full md:order-2 order-1'><FormContact /></div>
                </div>
            </div>
        </div>

    )
}

export default ContactPage  