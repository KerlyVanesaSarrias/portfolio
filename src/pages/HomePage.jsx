
import Button from "../components/Button/Button"
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa";




const HomePage = () => {
    return (
        <div className='flex flex-row items-center bg-[#07233B] px-8'>
            <div className="w-3/5">
                <h1 className="bg-[#00334E] uppercase text-white p-1 rounded -normal tracking-widest w-36">Kerly Sarrias</h1>
                <h2 className=" text-white font-bold uppercase text-6xl ">Hay! i am Kerly Vanessa Sarrias</h2>
                <div className="flex gap-3">
                    <h3 className=" text-cyan-500 font-bold uppercase text-6xl">I'm a</h3>
                    <h4 className="text-cyan-500 font-bold uppercase text-6xl home_animation">developer</h4>
                </div>
                <p className="text-white font-normal text-xl leading-normal tracking-wider mt-4 " >Full Stack Web Developer, passionate about creating memorable and functional digital experiences. With skills in multiple technologies and a focus on development efficiency.</p>
                <div className="flex gap-3 mt-6">
                    <Button color="primary" size="small" isRounded>Downland CV</Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><FaGithub/></Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><FaLinkedin/></Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><FaWhatsapp/></Button>
                </div>
            </div>
            <div>
            <img className="" src="/src/assets/logo3.png" alt="" />
            </div>
    
        </div>
    )
}

export default HomePage