import React from 'react'
import PersonalData1 from './../../../../images/generalPage/Home/Personal1.jpg'
import { SectionPattern } from '../../../../utils/constants'
import { Text } from '../texts/textincludes'
import { useContext } from 'react' 
import { Lang } from '../../../../provider/LanguageProvider' 
const ExplainSectionSubsection2 = () => {
  const lang=useContext(Lang)
  const TLang=lang=='DE'?Text.DE:lang=='EN'?Text.EN:lang=='ES'?Text.ES:Text.IT
  return (
    <>
    <div className='w-full h-full flex flex-col items-center justify-center md:order-3 lgo:order-3 osm:order-3 order-4'>
    <img src={PersonalData1}  className={'md:w-5/6 lgo:w-11/12 osm:w-5/6 w-5/6 rounded '+SectionPattern.ImageAdjustments.Colors} />
    </div>
    <div className='w-full h-full flex flex-col items-center justify-center md:order-4 lgo:order-4 osm:order-4 order-3'>
    <h1 className={'w-full '+SectionPattern.Text.Title1}>{TLang.Sections.Section2.Title1}</h1> 
    <p className={'py-2 '+SectionPattern.Text.Paragraph}>{TLang.Sections.Section2.Paragraph1}</p>
    <p className={'py-2 '+SectionPattern.Text.Paragraph}>{TLang.Sections.Section2.Paragraph2}</p>
    </div>
    </>
  )
}

export default ExplainSectionSubsection2