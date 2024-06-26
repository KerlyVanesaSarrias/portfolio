import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from "../Button/Button"

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
        <div className="max-w-md mx-auto mt-5">
            <div className='brand'>CONTACT ME </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block  dark:text-white  text-gray-700">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 dark:bg-[#00334E]  bg-gray-300 " />
                </div>
                <div>
                    <label htmlFor="email" className="block  dark:text-white  text-gray-700 ">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 dark:bg-[#00334E]   bg-gray-300 " />
                </div>
                <div>
                    <label htmlFor="subject" className="block  dark:text-white  text-gray-700">Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2 dark:bg-[#00334E]   bg-gray-300" />
                </div>
                <div>
                    <label htmlFor="message" className="block  dark:text-white  text-gray-700">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border border-gray-300 rounded-md p-2 dark:bg-[#00334E]   bg-gray-300"></textarea>
                </div>
                <Button type="submit"color="primary" size="small" disabled={isSending}>{isSending ? 'Sending...' : 'Send'}</Button>
                </form>
                {isSuccess && <p className="text-green-500">Message sent successfully!</p>}
            {error && <p className="text-red-500">{error}</p>}
        

        </div>
    );
};

export default FormContact;


