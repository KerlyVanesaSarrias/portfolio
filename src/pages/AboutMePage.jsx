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

    <div className='w-full flex flex-col  gap-14  pt-10 md:px-20 px-10'>
      <section className='flex flex-col md:flex-row'>
        <div className='  flex flex-col  gap-1 w-full md:w-1/2 '>
          <h1 className={`${isEnglish ? 'w-32' : 'w-44'} brand`}>
            {t("about.title")}
          </h1>
          <h2 className="  dark-text mt-6  uppercase text-4xl 2xl:text-7xl  ">
            {t("about.head1")}
          </h2>
          <h3 className="  dark-text uppercase text-[#008DDA] text-4xl 2xl:text-7xl  ">
            {t("about.head2")}
          </h3>
          <div className=' flex flex-col justify-center items-center'>
            <p className=" dark-text  text-lg  2xl:text-3xl mt-7 text-justify  leading-relaxed  tracking-wide  ">
              {t("about.description")}
            </p>
            <Button onClick={handleDownload} className="md:mt-10  mt-5 flex items-center gap-2 
              " color="primary" size="small" isRounded>
              <FiDownload /> {t("about.downloadCV")}
            </Button>
          </div>
        </div>
        <div className='md:w-1/2 w-full pl-7 md:pl-0 md:p-10 mt-20 md:mt-0'>
          <SkillsParticles />
        </div>

      </section>



      <div className=" md:mt-12 mt-2">
        <div className=" md:gap-8 gap-4 2xl:gap-16">
          <div className="w-full">
            <h2 className="brand mb-4">{t("about.experience")}</h2>
            <div className='flex md:flex-row flex-col gap-0 md:gap-4'>
              {isEnglish ? (
                <>
                  <h3 className="dark-text font-bold text-4xl 2xl:text-7xl uppercase">{t("about.work")}</h3>
                  <h3 className="text-[#008DDA] font-bold text-4xl 2xl:text-7xl uppercase">{t("about.experience")}</h3>
                </>
              ) : (
                <>
                  <h3 className="dark-text font-bold text-4xl 2xl:text-7xl uppercase">{t("about.experience")}</h3>
                  <h3 className="text-[#008DDA] font-bold text-4xl 2xl:text-7xl uppercase">{t("about.work")}</h3>
                </>
              )}
            </div>
            <div>
              <Timeline
                data={jobs}
                CardComponent={Card} />
            </div>
          </div>
        </div>

        <div className="w-full dark-text mt-9 ">
          <h2 className=" mb-4 brand">{t("about.education")}</h2>
          <div className='flex gap-4 mb-10'>
            <h3 className="dark-text font-bold text-4xl 2xl:text-7xl uppercase ">{t("about.my")}</h3>
            <h3 className='text-[#008DDA] font-bold text-4xl 2xl:text-7xl uppercase'>{t("about.education")}</h3>
          </div>
          <div>
            <Timeline
              data={education}
              CardComponent={Card} />
          </div>
        </div>

      </div>
    </div>


  )
}

export default AboutMePage