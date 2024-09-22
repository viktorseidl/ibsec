import React from 'react'
import PersonalData3 from './../../../images/generalPage/Home/Personal3.jpg'
import { SectionPattern } from '../../../utils/constants'
import { Text } from './texts/textincludes'
import { useContext } from 'react'
import { Lang } from '../../../provider/LanguageProvider'
const LearnSection = () => {
  const lang=useContext(Lang)
  const TLang=lang=='DE'?Text.DE:lang=='EN'?Text.EN:lang=='ES'?Text.ES:Text.IT
  return (
    <section id='mission' className={'grid md:grid-cols-2 lgo:grid-cols-2 osm:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-24 lgo:gap-y-24 osm:gap-y-24 gap-y-6 '+SectionPattern.SectionStyle.Section}>
        <div className='w-full h-full flex flex-col items-center justify-center'><img src={PersonalData3} className={' md:w-5/6 lgo:w-11/12 rounded '+SectionPattern.ImageAdjustments.Colors}  /></div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
        <h1 className={'w-full '+SectionPattern.Text.Title1}>{TLang.Sections.Section3.Title}</h1>
        <p className={'py-2 '+SectionPattern.Text.Paragraph}>{TLang.Sections.Section3.Paragraph}</p> 
        <div className='py-4 md:px-8 lgo:px-8 osm:px-8 px-4 w-full  font-[Inter] dark:text-white text-[#1e293b] md:text-lg lgo:text-lg'>
            <button className={'md:mr-0 lgo:mr-4 osm:mr-4 mr-4 '+SectionPattern.Buttons.OrangeBtn}>{TLang.Sections.Section3.OrangeBtn}</button>
            <button className={'md:ml-4 lgo:ml-0 osm:ml-0 ml-0 md:mt-0 lgo:mt-4 osm:mt-4 mt-4 '+SectionPattern.Buttons.TransparentRingBtn}>{TLang.Sections.Section3.RingBtn}</button>
        </div>
        </div>
        <div className=' md:col-span-2 lgo:col-span-2 osm:col-span-2 col-span-1 py-4 md:px-8 lgo:px-8 osm:px-8 px-4 w-full  font-[Inter] dark:text-white text-[#1e293b] md:text-lg lgo:text-lg'>
        <p className={'py-2 '+SectionPattern.Text.Paragraph}>{TLang.Sections.Section3.Paragraph1}</p>
        </div>
    </section>
  )
}

export default LearnSection