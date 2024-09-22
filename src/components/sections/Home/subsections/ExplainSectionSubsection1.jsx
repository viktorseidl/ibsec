import React from 'react'
import PersonalData from './../../../../images/generalPage/Home/Personal.jpg'
import { SectionPattern } from '../../../../utils/constants'
import { Text } from '../texts/textincludes'
import { useContext } from 'react' 
import { Lang } from '../../../../provider/LanguageProvider'
const ExplainSectionSubsection1 = () => {
  const lang=useContext(Lang)
  const TLang=lang=='DE'?Text.DE:lang=='EN'?Text.EN:lang=='ES'?Text.ES:Text.IT
  return (
    <>
    <div className='w-full h-full flex flex-col items-center justify-center order-1'>
    <h1 className={'w-full '+SectionPattern.Text.Title1}>{TLang.Sections.Section1.Title}</h1>
    <p className={'py-2 '+SectionPattern.Text.Paragraph}>{TLang.Sections.Section1.Paragraph}</p> 
    </div>
    <div className='w-full h-full flex flex-col items-center justify-center order-2'><img src={PersonalData} className={' md:w-5/6 lgo:w-11/12 osm:w-5/6 w-5/6 rounded '+SectionPattern.ImageAdjustments.Colors}  />
    </div>
    </>
  )
}

export default ExplainSectionSubsection1