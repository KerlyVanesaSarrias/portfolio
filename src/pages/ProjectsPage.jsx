import Carousel from '../components/Carousel/Carousel'
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
    const { t} = useTranslation();
    return (
        <div className='w-full px-5 py-6 flex flex-col gap-4'>
            <h1 className="brand w-fit">{t("about.miWork")}</h1>
            <h2 className=" dark-text font-bold uppercase text-2xl md:text-4xl">{t("about.projects")}</h2>   
            <div className="w-full">
            <Carousel/>
            </div>
        </div>
    )
}

export default ProjectsPage