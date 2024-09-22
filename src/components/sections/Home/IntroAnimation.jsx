import React from 'react'
import BinaryAnimation from '../../../images/svgs/BinaryAnimation'
import CountUps from '../../../pages/home/components/CountUps'

const IntroAnimation = () => {
  return (
    <section className=' relative ring-1 dark:ring-gray-600 ring-gray-400 w-full '>
        <BinaryAnimation />
        <div className='px-8 w-full absolute inset md:bottom-8 lgo:bottom-20 osm:bottom-16 bottom-10 dark:text-white text-[#1e293b] left-0'>
            <div className='w-full grid md:grid-cols-3 lgo:grid-cols-3 osm:grid-cols-2 grid-cols-1 items-center justify-items-center md:gap-10 lgo:gap-10 osm:gap-10 gap-4 mb-6'>
                <CountUps Name={'Anwender'} Number={1455} Wert={false} />
                <div className='md:block lgo:block osm:hidden block w-full'>            
                    <CountUps Name={'Generierte Einnahmen'} Number={123129} Wert={true} />
                </div>
            <CountUps Name={'Daten-Abfragen'} Number={417129} /> 
                <div className='md:hidden lgo:hidden osm:block hidden col-span-2 w-full'>            
                    <CountUps Name={'Generierte Einnahmen'} Number={123129} Wert={false} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default IntroAnimation