import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from "../Button/Button"
import '../styles/index.css'
import { useTranslation } from 'react-i18next';


const FormContact = () => {

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);


        emailjs.sendForm('default_service', 'template_6z17o9i', e.target, 'dh9JuaktysBVmXYYz')
            .then((result) => {
                console.log(result.text);
                setIsSuccess(true);
                setError(null);
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                console.log(error.text);
                setError(error.text);
                setIsSuccess(false);
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <>
            <div className=" w-full ">
                <form onSubmit={handleSubmit} className="space-y-4 p-10  ">

                    <div className='flex md:flex-row flex-col gap-6 '>
                        <div className='md:w-1/2 w-full'>
                            <label htmlFor="name" className="tittle-input dark-text dark-text mb-2">{t("form.name")}</label>
                            <input dark-text type="text" id="name" placeholder={t("form.name")} name="name" value={formData.name} onChange={handleChange} className=" dark-input  dark-text italic " />

                        </div>
                        <div className='md:w-1/2 w-full'>
                            <label htmlFor="email" className="tittle-input dark-text dark-text mb-2">{t("form.email")}</label>
                            <input dark-text type="email" id="email" placeholder={t("form.email")} name="email" value={formData.email} onChange={handleChange} className=" dark-input  dark-text italic" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="subject" className="tittle-input dark-text dark-text mb-2">{t("form.subject")}</label>
                        <input dark-text type="text" id="subject" placeholder={t("form.subject")} name="subject" value={formData.subject} onChange={handleChange} className=" dark-input dark-text italic" />
                    </div>
                    <div>
                        <label htmlFor="message" className="tittle-input dark-text dark-text mb-2">{t("form.message")}</label>
                        <textarea id="message" placeholder={t("form.message")} name="message" value={formData.message} onChange={handleChange} rows="4" className=" dark-input  dark-text italic"></textarea>
                    </div>
                    <div className="flex-col  items-center pb-10">
                        <Button type="submit" color="primary" size="medium" disabled={isSending}>{isSending ? t("form.sending") : t("form.send")}</Button>
                        {isSuccess && <p className="text-cyan-400 mt-4 year-label ml-72 font-semibold">{t("form.sent")}</p>}
                        {error && <p className="text-red-500">{error}</p>}
                    </div>
                </form>
            </div>


        </>
    );
};

export default FormContact;


