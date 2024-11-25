
import Button from "../components/Button/Button"
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import Photo1 from '../assets/photo1.png';
import { Link } from "react-router-dom";
import { CONTACT_PATH } from "../constants";

const HomePage = () => {
    return (
        <div className='basis-full 2xl:basis-3/5 flex flex-col md:flex-row  items-center justify-center'>
            <div className="basis-full md:basis-3/5  2xl:w-3/4  px-10 ">
                <h1 className="brand mb-5 ">Kerly Sarrias</h1>
                <h2 className=" dark-text font-bold uppercase text-3xl md:text-6xl 2xl:text-9xl ">Hi! i am Kerly Vanessa Sarrias</h2>
                <div className="flex gap-3">
                    <h3 className=" text-blue font-bold uppercase text-3xl md:text-6xl 2xl:text-8xl ">I'm</h3>
                    <h4 className="text-blue font-bold uppercase text-3xl md:text-6xl 2xl:text-8xl home_animation typing">a developer</h4>
                </div>
                <p className=" dark-text  font-normal text-xl 2xl:text-4xl text-justify leading-normal tracking-wider mt-4 " >
                    Full Stack Web Developer with skills in multiple technologies and always in search of new challenges and opportunities to expand my knowledge and skills.
                </p>

                <div className="flex gap-3 mt-8">

                    <Link to={CONTACT_PATH}>
                        <Button color="primary" size="small" isRounded>GET IN TOUCH </Button>
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
            <div className="2xl:w-1/4 md:w-2/5 w-full">
                <img className=" 2xl:w-full 1xl:h-full md:p-16 p-10" src={Photo1} alt="" />
            </div>
    
        </div>
    )
}

export default HomePage