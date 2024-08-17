import React, { useEffect } from 'react'
import Testsvg from '../../images/svgs/Testsvg'
import IBlogo from '../../images/logos/IBlogo'
import BinaryAnimation from '../../images/svgs/BinaryAnimation'

const Home = () => {
     
  return (
    <div className='md:mt-28 lgo:mt-28 osm:mt-28 mt-20 w-5/6 '> 
        <section className='ring-1 ring-gray-600 w-full '>
          <BinaryAnimation />
          </section>
        <section className='ring-1 ring-gray-600 w-full bg-stone-950'>About</section>
        <section className='ring-1 ring-gray-600 w-full'>Services</section>
        <section className='ring-1 ring-gray-600 w-full'>Team</section>

    </div>
  )
}

export default Home