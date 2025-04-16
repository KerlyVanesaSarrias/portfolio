import Carousel from '../components/Carousel/Carousel'
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
    const { t} = useTranslation();
    return (
        <div className='w-ful'>
            <h1 className="brand ml-10 md:mt-5 mt-16 ">{t("about.miWork")}</h1>
            <h2 className=" dark-text font-bold uppercase text-2xl mb-5   md:text-4xl 2xl:text-7xl ml-10">{t("about.projects")}</h2>   
            <div className=''>
            < Carousel/>
            </div>
        </div>
    )
}

export default ProjectsPage