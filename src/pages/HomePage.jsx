
import Button from "../components/Button/Button"
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import Photo1 from '../assets/photo1.png';
import { Link } from "react-router-dom";
import { CONTACT_PATH } from "../constants";
import { useTranslation } from 'react-i18next';

const HomePage = () => {
    const { t } = useTranslation();
    return (
        <div className='basis-full 2xl:basis-3/5 flex flex-col md:flex-row  items-center justify-center md:px-20 px-10 md:mt-0 md: mt-10 '>
            <div className="basis-full md:basis-3/5  2xl:w-3/4  md:px-10  ">
                <h1 className="brand mb-5 ">{t("home.name")}</h1>
                <h2 className=" dark-text font-bold uppercase text-3xl md:text-6xl 2xl:text-9xl ">{t("home.greeting")}</h2>
                <div className="flex gap-3">
                    <h3 className=" text-blue font-bold uppercase text-3xl md:text-6xl 2xl:text-8xl ">{t("home.intro")}</h3>
                    <h4 className="text-blue font-bold uppercase text-3xl md:text-6xl 2xl:text-8xl typing">{t("home.role")}</h4>
                </div>
                <p className=" dark-text  font-normal text-xl 2xl:text-4xl text-justify leading-normal tracking-wider mt-4  " >{t("home.description")}</p>
                
                <div className="flex md:flex-row md:justify-start justify-center md:items-start items-center w-full flex-col gap-3 mt-8">
                    <div>
                    <Link to={CONTACT_PATH}>
                        <Button color="primary" size="small" isRounded>{t("home.contact")}</Button>
                    </Link>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://github.com/KerlyVanesaSarrias" target="_blank">
                            <Button isOnlyIcon='icon' color='secondary'  ><FaGithub/></Button>
                        </a>
                        <a href="https://www.linkedin.com/in/kerly-vanessa-7ab012284/" target="_blank">
                            <Button isOnlyIcon='icon' color='secondary'  ><FaLinkedin/></Button>
                        </a>
                        <a href="https://wa.me/+573143046748?text=Tu%20Mensaje%20De%20Texto" target="_blank">
                        <Button isOnlyIcon='icon' color='secondary'  ><FaWhatsapp/></Button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="2xl:w-1/4 md:w-2/5 w-full">
                <img className=" w-full h-full" src={Photo1} alt="" />
            </div>
    
        </div>
    )
}

export default HomePage