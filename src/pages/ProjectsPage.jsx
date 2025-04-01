import Carousel from '../components/Carousel/Carousel'
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
    const { t} = useTranslation();
    return (
        <div className='w-full  gap-10 pt-10 md:px-10 p-5'>
            <h1 className="brand ">{t("about.miWork")}</h1>
            <h2 className=" dark-text font-bold uppercase text-4xl 2xl:text-7xl my-4 md:mb-0 mb-20">{t("about.projects")}</h2>   
            <Carousel/>
        </div>
    )
}

export default ProjectsPage