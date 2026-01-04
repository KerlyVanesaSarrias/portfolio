
import Button from "../components/Button/Button"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Photo1 from '../assets/photo1.png';
import { Link } from "react-router-dom";
import { CONTACT_PATH } from "../constants";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t, i18n } = useTranslation();
    
    const isEnglish = i18n.language === "en";
    const steps = isEnglish ? 10 : 15;
    const width = isEnglish ? "10ch" : "15ch";

    return (
        <div className="flex flex-col md:flex-row justify-center items-center lg:px-16 px-5 gap-10 md:gap-0">
            <div className="basis-full md:basis-3/5 2xl:w-3/4 md:px-10">
                <h1 className="brand mb-5 ">{t("home.name")}</h1>
                <h2 className="dark-text font-bold uppercase text-3xl lg:text-5xl 2xl:text-6xl ">{t("home.greeting")}</h2>
                <div className="flex gap-3">
                    <h3 className=" text-blue font-semibold uppercase text-2xl md:text-3xl lg:text-5xl ">{t("home.intro")}</h3>
                    <h3 className="text-blue font-semibold uppercase text-2xl md:text-3xl lg:text-5xl typing"
                    style={{
                        "--typing-width": width,
                        "--typing-steps": steps,
                    }}
                    >
                    {t("home.role")}
                    </h3>                </div>
                <p className="dark-text  text-xl 2xl:text-2xl text-justify font-extralight mt-4">{t("home.description")}</p>

                <div className="flex md:flex-row md:justify-start justify-center md:items-start items-center w-full flex-col gap-3 mt-8">         
                    <Link to={CONTACT_PATH}>
                        <Button color="primary" size="small" isRounded>{t("home.contact")}</Button>
                    </Link>
                    
                    <div className="flex gap-4">
                        <a href="https://github.com/KerlyVanesaSarrias" target="_blank">
                            <Button isOnlyIcon='icon' color='secondary'><FaGithub /></Button>
                        </a>
                        <a href="https://www.linkedin.com/in/kerly-vanessa-sarrias-fullstack-developer/" target="_blank">
                            <Button isOnlyIcon='icon' color='secondary'><FaLinkedin /></Button>
                        </a>
                        <a href="https://wa.me/+573143046748?text=Tu%20Mensaje%20De%20Texto" target="_blank">
                            <Button isOnlyIcon='icon' color='secondary'><FaWhatsapp /></Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="2xl:w-1/3 md:w-2/5 w-full">
                <img className=" w-full h-full" src={Photo1} alt="" />
            </div>

        </div>
    )
}

export default HomePage