import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdMenu, MdSunny } from 'react-icons/md'
import LogoBlocks from '../../images/svgs/LogoBlocks'
import LogoText from '../../images/svgs/LogoText'
import SidebarNotLogged from './Sidebar/SidebarNotLogged'
import IBlogo from '../../images/logos/IBlogo'
import Sprachen from '../../images/svgs/Sprachen'

const NavigationNotLogged = (props) => {
    const [themeMode,setthemeMode]=useState()
    const [menuChanger,setmenuChanger]=useState(false)
    if (localStorage.getItem('theme') === 'false' || (!(localStorage.getItem('theme')))) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', false); 
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', true); 
      } 
      const changeMode=(T)=>{
        if (T.toString() === 'false' || (!(T))) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', false); 
            setthemeMode(T)
          } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', true);
            setthemeMode(T) 
          } 

    }
    useEffect(()=>{
        setthemeMode(localStorage.getItem('theme')==='false'?false:true)  
    },[])
  return (
    <nav className="md:w-5/6 lgo:w-full osm:w-full w-full fixed z-10 top-0 left-1/6 h-auto grid grid-cols-12 gap-2 items-center justify-items-center dark:bg-stone-800 bg-white/50 md:py-4 lgo:py-4 osm:py-4 py-0 px-8"> 
    <div className=' relative w-full'>
      <div className='w-3/6 '>
        <IBlogo />
      </div>
    </div>
    <div className='w-full col-span-7 flex flex-row items-start justify-start'>
    <div className='cursor-pointer linkFont text-lg p-2 dark:text-white dark:hover:text-orange-500 hover:text-blue-700 text-slate-950 first:ml-0'>About</div>
    <div className='cursor-pointer linkFont text-lg p-2 dark:text-white dark:hover:text-orange-500 hover:text-blue-700 text-slate-950 ml-10'>Mission</div>
    <div className='cursor-pointer linkFont text-lg p-2 dark:text-white dark:hover:text-orange-500 hover:text-blue-700 text-slate-950 ml-10'>Pricing</div>
    <div className='cursor-pointer linkFont text-lg p-2 dark:text-white dark:hover:text-orange-500 hover:text-blue-700 text-slate-950 ml-10'>Docs</div>
    </div>
    <div  className='w-full col-span-4 flex flex-row items-end justify-end dark:text-white text-slate-950'>
      <div onClick={()=>changeMode(!themeMode)} className='text-2xl mr-8'>{themeMode?<MdDarkMode />:<MdSunny />}</div>
      <div className='flex flex-row items-center justify-center'>
        <Sprachen /><a className='ml-2'>Sprachen DE</a>
      </div>
    </div>
      </nav>
  )
}

export default NavigationNotLogged