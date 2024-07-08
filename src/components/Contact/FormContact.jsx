import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from "../Button/Button"
import '../styles/index.css'


const FormContact = () => {

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
        <div className="max-w-md ml-20">

            <form onSubmit={handleSubmit} className="space-y-4  ">
                <div>
                    <label htmlFor="name" className="block font-semibold dark-text">Name</label>
                    <input type="text" id="name"  name="name" value={formData.name} onChange={handleChange}   className=" dark-input italic " />

                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold dark-text  ">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className=" dark-input italic " />
                </div>
                <div>
                    <label htmlFor="subject" className="block font-semibold dark-text">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className=" dark-input italic" />
                </div>
                <div>
                    <label htmlFor="message" className="block font-semibold dark-text">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className=" dark-input italic"></textarea>
                </div>
                <div className="flex justify-between items-center">
                    <Button type="submit"color="primary" size="small" disabled={isSending}>{isSending ? 'Sending...' : 'Send'}</Button>
                    {isSuccess && <p className="text-cyan-400  year-label font-semibold">Message sent successfully!</p>}
                    {error && <p className="text-red-500">{error}</p>}
                </div>
        </form>
    </div>


</>
    );
};

export default FormContact;


