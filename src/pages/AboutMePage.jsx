import React from 'react'
import Button from '../components/Button/Button'
import './Styles/index.css'
import SkillsParticles from '../components/SkillsParticules/SkillsParticles';
import LogoImg from '../assets/logo2.png'
import effect1 from '../assets/effect-1.svg'
import effect2 from '../assets/effect-2.svg'
import Card from '../components/Card/Card';
import { useTranslation } from 'react-i18next';

const AboutMePage = () => {

  const { t, i18n } = useTranslation();
  const jobs = t("jobs", { returnObjects: true });
  const education = t("education", { returnObjects: true });

  const isEnglish = i18n.language === "en";

  const handleDownload = () => {
    const link = document.createElement('a');
    if(isEnglish){
      link.href = '../../public/CV_EN_KerlyVanessaSarrias.pdf';
      link.download = 'CV_EN_Kerly_Sarrias.pdf';
      link.click();
    }
    link.href = '../../public/CV_ES_KerlyVanessaSarrias.pdf';
    link.download = 'CV_ES_Kerly_Sarrias.pdf';
    link.click();
  };



  return (

    <div className='w-full flex flex-col  gap-14 md:px-0 pt-10 px-10 '>
      <div className='flex flex-col md:flex-row '>
        <div className='order-2 md:order-1 md:w-2/5 md:px-20 px-5 flex-col justify-center items-center  md:mt-0 mt-20'>
          <div className=' absolute md:-bottom-52 bottom-full  md:-left-10 -left-16 -z-10'><img src={effect1} alt="Logo" /></div>
          <div className='dark:bg-slate-800 bg-slate-600  rounded-3xl border  '>
            <img className=" rounded-3xl" src={LogoImg} alt="" />
          </div>
        </div>
        <div className=' order-1 md:order-2 flex flex-col  gap-1 md:w-3/5 md:pr-24 w-full '>
          <div className='absolute md:top-28 top-30 right-1   -z-30 '><img src={effect2} alt="Logo" /></div>
          <h1 className={`${isEnglish ? 'w-32': 'w-44'} brand`}>{t("about.title")}</h1>
          <h2 className="  dark-text mt-6 font-bold uppercase text-4xl 2xl:text-7xl  ">{t("about.head1")}</h2>
          <h3 className="  dark-text  font-bold uppercase text-[#008DDA] text-4xl 2xl:text-7xl  ">{t("about.head2")} </h3>
          <div className=' flex flex-col justify-center items-center'>
            <p className=" dark-text  text-lg  2xl:text-3xl mt-7 text-justify  ">{t("about.description")}</p>
            <Button onClick={handleDownload} className="md:mt-10  mt-5" color="primary" size="small" isRounded>{t("about.downloadCV")}</Button>
          </div>
        </div>
      </div>

      <div className='mt-20 bg-skills'><SkillsParticles /></div>

      <div className=" pb-20 md:p-8  2xl:p-2 md:mt-12 mt-2">
        <div className=" gap-8 2xl:gap-16">
          <div className="w-full">
            <h2 className=" mb-4 brand">{t("about.experience")}</h2>
            <div className='flex md:flex-row flex-col md:gap-4 mb-10'>
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

            <div className='flex-col gap-8'>
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  date={job.date}
                  type={job.type}
                  projectName={job.projectName}
                  description={job.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="w-full dark-text mt-9 ">
          <h2 className=" mb-4 brand">{t("about.education")}</h2>
          <div className='flex gap-4 mb-10'>
            <h3 className="dark-text font-bold text-4xl 2xl:text-7xl uppercase ">{t("about.my")}</h3>
            <h3 className='text-[#008DDA] font-bold text-4xl 2xl:text-7xl uppercase'>{t("about.education")}</h3>
          </div>
          <div className='flex-col w-full gap-8'>
            {education.map((edu, index) => (
              <Card
                key={index}
                title={edu.course}
                date={edu.date}
                type={edu.type}
                projectName={edu.institution}
                description={edu.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>


  )
}

export default AboutMePage