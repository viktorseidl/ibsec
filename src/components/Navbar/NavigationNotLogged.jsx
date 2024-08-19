import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdMenu, MdSunny } from 'react-icons/md'
import LogoBlocks from '../../images/svgs/LogoBlocks'
import LogoText from '../../images/svgs/LogoText'
import SidebarNotLogged from './Sidebar/SidebarNotLogged'
import IBlogo from '../../images/logos/IBlogo'
import Sprachen from '../../images/svgs/Sprachen'
import {Link} from 'react-router-dom'
const NavigationNotLogged = (props) => {
    const [themeMode,setthemeMode]=useState()
    const [langChangerDESK,setlangChangerDESK]=useState(false)
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
    const changeLanguage=(T)=>{
      localStorage.setItem('language', T);
      window.location.reload() 
    }
    useEffect(()=>{
        setthemeMode(localStorage.getItem('theme')==='false'?false:true) 
          
    },[])
  return (
    <nav className="md:w-5/6 lgo:w-full osm:w-full w-full fixed z-10 top-0 left-1/6 h-auto grid grid-cols-12 gap-2 items-center justify-items-center dark:bg-stone-800 bg-white border-x border-b dark:border-gray-600 border-gray-400 md:py-4 lgo:py-4 osm:py-4 py-0 px-8"> 
    <Link className='w-full' target='_parent' to={"/"}>
    <div className=' relative w-full'>
      <div className='w-3/6 '>
        <IBlogo />
      </div>
    </div>
    </Link>
    <div className='w-full col-span-7 flex flex-row items-start justify-start'>
    <div className='cursor-pointer linkFont text-lg p-2 dark:text-white dark:hover:text-orange-500 hover:text-blue-700 text-slate-950 first:ml-0'><Link target='_parent' to={"/#about"}>Über Uns</Link></div>
    <div className='cursor-pointer linkFont text-lg p-2 dark:text-white dark:hover:text-orange-500 hover:text-blue-700 text-slate-950 ml-10'><Link target='_parent' to={"/#mission"}>Mission</Link></div>
    <div className='cursor-pointer linkFont text-lg p-2 dark:text-white dark:hover:text-orange-500 hover:text-blue-700 text-slate-950 ml-10'><Link target='_parent' to={"/#pricing"}>Preise</Link></div>
    <div className='cursor-pointer linkFont text-lg p-2 dark:text-white dark:hover:text-orange-500 hover:text-blue-700 text-slate-950 ml-10'><Link target='_parent' to={"/#docs"}>Docs</Link></div>
    </div>
    <div  className='w-full col-span-4 flex flex-row items-end justify-end dark:text-white text-slate-950'>
      <div onClick={()=>changeMode(!themeMode)} className='text-2xl mr-8 cursor-pointer'>{themeMode?<MdDarkMode />:<MdSunny />}</div>
      <div onClick={()=>setlangChangerDESK(!langChangerDESK)} className='relative group flex flex-row items-center justify-center cursor-pointer'>
        <Sprachen /><a className='ml-2'>Sprachen DE</a>
        {
          langChangerDESK?
        <span className='w-[140%] absolute inset top-10 -right-0  dark:bg-stone-900 bg-white  rounded ring-1 dark:ring-stone-700 ring-gray-400'>
            <span className='w-full divide-y divide-stone-800 flex flex-col items-start justify-start p-2'>
          
            <span onClick={()=>changeLanguage('DE')} className='w-full flex flex-col items-start justify-start px-4 py-2 dark:hover:bg-white/10 hover:bg-slate-500/10'>
              <a className='dark:text-orange-700 text-blue-700'>Deutsch</a>
              <a>DEUTSCH (DE)</a>
            </span>
            <span onClick={()=>changeLanguage('EN')} className='w-full flex flex-col items-start justify-start px-4 py-2 dark:hover:bg-white/10 hover:bg-slate-500/10'>
              <a className='dark:text-orange-700 text-blue-700'>Englisch</a>
              <a>ENGLISCH (EN)</a>
            </span>
            <span  onClick={()=>changeLanguage('ES')} className='w-full flex flex-col items-start justify-start px-4 py-2 dark:hover:bg-white/10 hover:bg-slate-500/10'>
              <a className='dark:text-orange-700 text-blue-700'>Spanisch</a>
              <a>SPANISCH (ES)</a>
            </span>
            </span>
        </span>:
        ''
        }
      </div>
    </div>
      </nav>
  )
}

export default NavigationNotLogged