
import Button from "../components/Button/Button"
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import LogoImg from '../assets/logo3.png';
import { Link } from "react-router-dom";
import { CONTACT_PATH } from "../constants";

const HomePage = () => {
    return (
        <div className='w-full flex flex-col md:flex-row  items-center justify-center px-8 py-10'>
            <div className="basis-full md:basis-3/5">
                <h1 className="brand">Kerly Sarrias</h1>
                <h2 className=" dark:text-white  text-gray-700 font-bold uppercase text-3xl md:text-6xl ">Hay! i am Kerly Vanessa Sarrias</h2>
                <div className="flex gap-3">
                    <h3 className=" text-cyan-500 font-bold uppercase text-3xl md:text-6xl">I'm</h3>
                    <h4 className="text-cyan-500 font-bold uppercase text-3xl md:text-6xl home_animation typing">a developer</h4>
                </div>
                <p className=" dark:text-white  text-gray-700 font-normal text-xl leading-normal tracking-wider mt-4 " >
                    Full Stack Web Developer with skills in multiple technologies and always in search of new challenges and opportunities to expand my knowledge and skills.
                </p>
                <div className="flex gap-3 mt-6">

                    <Link to={CONTACT_PATH}>
                        <Button color="primary" size="small" isRounded>Get in touch</Button>
                    </Link>

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
            <div>
                <img className="w-60 h-80" src={LogoImg} alt="" />
            </div>
    
        </div>
    )
}

export default HomePage