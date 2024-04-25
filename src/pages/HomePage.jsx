
import Button from "../components/Button/Button"
import 'boxicons'


const HomePage = () => {
    return (
        <div className='flex flex-row'>
            <div>
                <h1>Kerly Sarrias</h1>
                <h2 className="">Hay! i am Kerly Vanessa Sarrias</h2>
                <h3>I am developer full stack</h3>
                <p>Full Stack Web Developer, passionate about creating memorable and functional digital experiences. With skills in multiple technologies and a focus on development efficiency.</p>
                <div className="flex gap-4">
                    <Button color="primary" size="small" isRounded>Descargar CV</Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><box-icon type='logo' name='github'></box-icon></Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><box-icon type='logo' name='linkedin'></box-icon></Button>
                    <Button isOnlyIcon='icon' color='secondary'  ><box-icon type='logo' name='whatsapp'></box-icon></Button>

                </div>
            </div>
            <div><img src="/src/assets/logo3.png" alt="" /></div>
        </div>
    )
}

export default HomePage