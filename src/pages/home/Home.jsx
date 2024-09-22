import React  from 'react' 
import IBlogo from '../../images/logos/IBlogo' 
import IntroAnimation from '../../components/sections/Home/IntroAnimation'
import ExplainSection from '../../components/sections/Home/ExplainSection'
import LearnSection from '../../components/sections/Home/LearnSection'
import { FaFacebook, FaGithub, FaTwitter, FaXing } from "react-icons/fa";
const Home = () => {
  
  return (
    <div className='md:mt-28 lgo:mt-28 osm:mt-28 mt-20 md:w-5/6 lgo:w-full osm:w-full w-full '> 
        <IntroAnimation />
        <ExplainSection />
        <LearnSection />
        
    <footer className=' min-h-[250px] grid grid-cols-6 w-full mt-6 ring-1 ring-gray-600  dark:bg-stone-950 bg-white/90'>
    <div className='w-full col-span-6 mt-4 flex flex-col items-center justify-center'>
      <div className='w-full flex md:flex-row lgo:flex-row osm:flex-row flex-col items-center justify-center'>
      <span className='w-40 flex flex-col items-end justify-end'>
      <IBlogo />
      </span>
      <span className='w-auto md:ml-4 lgo:ml-4 osm:ml-4 ml-0  h-full flex flex-col items-center justify-center font-[Orbitron] dark:text-white text-[#1e293b] md:text-5xl lgo:text-5xl osm:text-4xl text-2xl'>
      <b className='md:text-left lgo:text-left osm:text-center text-center'>Personal Data Security</b>
      </span>
      </div>
    </div> 
    <div className='hidden w-full col-span-6 mt-4 flex flex-col items-center justify-center'>
      <div className='w-5/6 border-b-2 border-[rgba(255,255,255,0.4)] pt-1'>

      </div>
    </div>
    <div className='w-full col-span-6 mt-4 flex flex-col items-center justify-center'>
      <div className='w-5/6 dark:bg-[rgba(255,255,255,0.07)] bg-[rgba(0,0,0,0.07)] flex flex-row gap-x-6 items-center justify-center py-4 dark:text-white text-[#1e293b] text-3xl'>
      <FaGithub />
      <FaTwitter />
      <FaXing />
      </div>
    </div>
    <div className='w-full dark:text-white text-[#1e293b]  h-full col-span-6 flex flex-row items-end justify-end p-2'>© {new Date().getFullYear()} <a className='ml-2 font-[Exo]'>IB-SECURE</a>, All rights reserved.</div>
    </footer>
    </div>
  )
}

export default Home