import React, { useContext } from 'react'
import PersonalData2 from './../../../../images/generalPage/Home/Personal2.jpg'
import { SectionPattern } from '../../../../utils/constants'
import { Text } from '../texts/textincludes'
import { Lang } from '../../../../provider/LanguageProvider'
const ExplainSectionSubsection3 = () => {
  const lang=useContext(Lang)
  const TLang=lang=='DE'?Text.DE:lang=='EN'?Text.EN:lang=='ES'?Text.ES:Text.IT
  return (
    <>
    <div className='md:order-5 lgo:order-5 osm:order-5 order-5'>
    <h1 className={'w-full '+SectionPattern.Text.Title1}>{TLang.Sections.Section2.Title2}</h1> 
    <p className={'py-2 '+SectionPattern.Text.Paragraph}>{TLang.Sections.Section2.Paragraph3}</p>
    <h1 className={'w-full '+SectionPattern.Text.Title1}>{TLang.Sections.Section2.Title3}</h1> 
    <p className={'py-2 '+SectionPattern.Text.Paragraph}>{TLang.Sections.Section2.Paragraph4}</p> 
        <ul className={'py-2 my-4 list-inside list-disc '+SectionPattern.Text.Paragraph}>
        <li className='mt-2'><u>{TLang.Sections.Section2.ListParagraph1}</u> {TLang.Sections.Section2.Paragraph5}</li>
        <li className='mt-2'><u>{TLang.Sections.Section2.ListParagraph2}</u> {TLang.Sections.Section2.Paragraph6}</li>
        <li className='mt-2'><u>{TLang.Sections.Section2.ListParagraph3}</u> {TLang.Sections.Section2.Paragraph7}</li>
        </ul> 
        <p className={'py-2 '+SectionPattern.Text.Paragraph}>
        {TLang.Sections.Section2.Paragraph8}
    </p>
    </div>
    <div className='w-full h-full flex flex-col items-center justify-center md:order-6 lgo:order-6 osm:order-6 order-6'>
    <img src={PersonalData2} className={'md:w-5/6 lgo:w-11/12 osm:w-5/6 w-5/6 rounded '+SectionPattern.ImageAdjustments.Colors}  />
    </div>
    </>
  )
}

export default ExplainSectionSubsection3