import React, { useEffect } from 'react'
import Testsvg from '../../images/svgs/Testsvg'
import IBlogo from '../../images/logos/IBlogo'
import BinaryAnimation from '../../images/svgs/BinaryAnimation'

const Home = () => {
     
  return (
    <div className='md:mt-28 lgo:mt-28 osm:mt-28 mt-20 w-5/6 '> 
        <section className=' relative ring-1 ring-gray-600 w-full '>
          <BinaryAnimation />
          <div className='px-8 w-full absolute inset bottom-0 text-white left-0'>
            <div className='w-full grid grid-cols-3 items-center justify-items-center gap-10 mb-6'>
              <div className='w-5/6 flex flex-col items-center justify-center gap-4'>
                <div className='text-center font-bold Exo text-2xl'>1478</div>
                <div className='w-full border-t border-white pt-4 uppercase text-center'>User Accounts</div>
              </div>
              <div className='w-5/6 flex flex-col items-center justify-center gap-4'>
              <div className='text-center font-bold Exo text-2xl'>1478</div>
              <div className='w-full border-t border-white pt-4 uppercase text-center'>Money generated</div>
              </div>
              <div className='w-5/6 flex flex-col items-center justify-center gap-4'>
              <div className='text-center font-bold Exo text-2xl'>1478</div>
              <div className='w-full border-t border-white pt-4 uppercase text-center'>Daily Data-Requests</div>
              </div>
            </div>
          </div>
          </section>
        <section className='ring-1 ring-gray-600 w-full bg-stone-950'>About</section>
        <section className='ring-1 ring-gray-600 w-full'>Services</section>
        <section className='ring-1 ring-gray-600 w-full'>Team</section>

    </div>
  )
}

export default Home