
import Button from "../components/Button/Button"
import 'boxicons'


const HomePage = () => {
    return (
        <div className='flex flex-row items-center bg-[#07233B]'>
            <div className="w-1/2">
                <h1 className="bg-[#00334E] uppercase text-white p-1 rounded font-normal tracking-widest w-36">Kerly Sarrias</h1>
                <h2 className=" text-white font-bold uppercase text-6xl">Hay! i am Kerly Vanessa Sarrias</h2>
                <div>
                    <h3 className=" text-cyan-500 font-bold uppercase text-6xl">I'm a</h3>
                    <h4 className=" text-cyan-500 font-bold uppercase text-6xl">developer</h4>
                </div>
                <p className="text-white font-normal text-xl leading-normal tracking-wider" >Full Stack Web Developer, passionate about creating memorable and functional digital experiences. With skills in multiple technologies and a focus on development efficiency.</p>
                <div className="flex gap-3 ">
                    <Button color="primary" size="small" isRounded>Descargar CV</Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><box-icon type='logo' name='github'></box-icon></Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><box-icon type='logo' name='linkedin'></box-icon></Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><box-icon type='logo' name='whatsapp'></box-icon></Button>
                </div>
            </div>
            <div ><img className="" src="/src/assets/logo3.png" alt="" /></div>
        </div>
    )
}

export default HomePage