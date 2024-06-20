
import Button from "../components/Button/Button"
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";
import LogoImg from '../assets/logo3.png';

const HomePage = () => {
    return (
        <div className='w-full flex flex-row items-center justify-center px-8 py-10'>
            <div className="w-3/5">
                <h1 className="brand">Kerly Sarrias</h1>
                <h2 className=" dark:text-white  text-gray-700 font-bold uppercase text-6xl ">Hay! i am Kerly Vanessa Sarrias</h2>
                <div className="flex gap-3">
                    <h3 className=" text-cyan-500 font-bold uppercase text-6xl">I'm</h3>
                    <h4 className="text-cyan-500 font-bold uppercase text-6xl home_animation typing">a developer</h4>
                </div>
                <p className=" dark:text-white  text-gray-700 font-normal text-xl leading-normal tracking-wider mt-4 " >Full Stack Web Developer, passionate about creating memorable and functional digital experiences. With skills in multiple technologies and always in search of new challenges and opportunities to expand my knowledge and skills.</p>
                <div className="flex gap-3 mt-6">
                    <Button color="primary" size="small" isRounded>Get in touch</Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><FaGithub/></Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><FaLinkedin/></Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><FaWhatsapp/></Button>
                </div>
            </div>
            <div>
                <img className="w-60 h-80" src={LogoImg} alt="" />
            </div>
    
        </div>
    )
}

export default HomePage