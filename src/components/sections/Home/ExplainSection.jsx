import React from 'react'

import PersonalData1 from './../../../images/generalPage/Home/Personal1.jpg'
import PersonalData2 from './../../../images/generalPage/Home/Personal2.jpg'  
import ExplainSectionSubsection1 from './subsections/ExplainSectionSubsection1'
import ExplainSectionSubsection2 from './subsections/ExplainSectionSubsection2'
import ExplainSectionSubsection3 from './subsections/ExplainSectionSubsection3'
import { SectionPattern } from '../../../utils/constants'
const ExplainSection = () => {
  return (
    <section id='mission' className={'grid md:grid-cols-2 lgo:grid-cols-2 osm:grid-cols-2 grid-cols-1 gap-x-5 md:gap-y-24 lgo:gap-y-24 osm:gap-y-24 gap-y-6 '+SectionPattern.SectionStyle.Section}>
        <ExplainSectionSubsection1 />
        <ExplainSectionSubsection2 />
        <ExplainSectionSubsection3 />        
    </section>
  )
}

export default ExplainSection