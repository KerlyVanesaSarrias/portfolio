import Button from '../components/Button/Button';
import './Styles/index.css';
import SkillsParticles from '../components/SkillsParticules/SkillsParticles';
import { useTranslation } from 'react-i18next';
import Timeline from '../components/TimeLine/TimeLine.jsx';
import Card from '../components/Card/Card.jsx';
import { FiDownload } from 'react-icons/fi';



const AboutMePage = () => {

  const { t, i18n } = useTranslation();
  const jobs = t("jobs", { returnObjects: true });
  const education = t("education", { returnObjects: true });

  const isEnglish = i18n.language === "en";
  const handleDownload = () => {
    const link = document.createElement('a');
    if (isEnglish) {
      link.href = '/CV_EN_KerlyVanessaSarrias.pdf';
      link.download = 'CV_EN_KerlyVanessaSarrias.pdf';
      link.click();
    }
    link.href = '/CV_ES_KerlyVanessaSarrias.pdf';
    link.download = 'CV_ES_KerlyVanessaSarrias.pdf';
    link.click();
  };



  return (
    <div className='flex flex-col w-full py-8 md:px-20 px-5 gap-20'>

      <section className='flex flex-col lg:flex-row w-full gap-10'>
        <div className='flex flex-col gap-1 w-full lg:w-1/2'>
          <h1 className={`${isEnglish ? 'w-32' : 'w-44'} brand`}>
            {t("about.title")}
          </h1>
          <h2 className="  dark-text font-semibold uppercase text-4xl 2xl:text-5xl  ">
            {t("about.head1")}
          </h2>
          <h3 className="  dark-text uppercase text-[#008DDA] text-4xl 2xl:text-5xl  ">
            {t("about.head2")}
          </h3>
          <div className=' flex flex-col justify-center items-center'>
            <p className=" dark-text  text-lg  2xl:text-xl mt-7 text-justify  leading-relaxed  tracking-wide  ">
              {t("about.description")}
            </p>
            <Button onClick={handleDownload} className="md:mt-10  mt-5 flex items-center gap-2 w-fit" color="primary" size="medium">
              <FiDownload /> {t("about.downloadCV")}
            </Button>
          </div>
        </div>
        <div className='lg:w-1/2 w-full'>
          <SkillsParticles />
        </div>
      </section>

      <section className="flex flex-col w-full">
          <div className="flex w-full flex-col gap-2">
            <h2 className="brand w-fit">{t("about.experience")}</h2>
            <div className='flex md:flex-row flex-col gap-0 md:gap-4'>
              {isEnglish ? (
                <>
                  <h3 className="dark-text font-bold text-4xl 2xl:text-5xl uppercase">{t("about.work")}</h3>
                  <h3 className="text-[#008DDA] font-bold text-4xl 2xl:text-5xl uppercase">{t("about.experience")}</h3>
                </>
              ) : (
                <>
                  <h3 className="dark-text font-bold text-4xl 2xl:text-5xl uppercase">{t("about.experience")}</h3>
                  <h3 className="text-[#008DDA] font-bold text-4xl 2xl:text-5xl uppercase">{t("about.work")}</h3>
                </>
              )}
            </div>
              <Timeline data={jobs} CardComponent={Card} />
        </div>

        <div className="flex flex-col dark-text w-full gap-2">
          <h2 className="w-fit brand">{t("about.education")}</h2>
          <div className='flex gap-4'>
            <h3 className="dark-text font-bold text-4xl 2xl:text-5xl uppercase ">{t("about.my")}</h3>
            <h3 className='text-[#008DDA] font-bold text-4xl 2xl:text-5xl uppercase'>{t("about.education")}</h3>
          </div>
          <div className='w-full'>
            <Timeline data={education} CardComponent={Card} />
          </div>
        </div>

      </section>
    </div>


  )
}

export default AboutMePage