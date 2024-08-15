import React, { useEffect, useState } from 'react'
import { MdDarkMode, MdMenu, MdSunny } from 'react-icons/md'
import LogoBlocks from '../../images/svgs/LogoBlocks'
import LogoText from '../../images/svgs/LogoText'
import SidebarNotLogged from './Sidebar/SidebarNotLogged'

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
    <nav className="w-full fixed z-10 top-0 left-0 h-auto grid grid-cols-10 items-start justify-items-start dark:bg-stone-800 bg-white/50 md:py-4 lgo:py-4 osm:py-4 py-0">
        {/**LOGO */}
      <div className='md:col-span-2 lgo:col-span-2 osm:col-span-2 col-span-3 w-full h-full md:pb-8 lgo:pb-8 osm:pb-8 pb-8 flex flex-col items-center justify-center'>
        <div className='relative h-full md:w-3/6 lgo:w-3/6 osm:w-3/6 w-5/6'>
        <div className='w-full  absolute inset top-5 left-0 -z-10'>
        <LogoBlocks FillColor={themeMode?"#d1d5db":"#57514b"} StrokeColor="#78716c" Stroke="2" />
        </div>
        <LogoText StrokeColor="#78716c" FillColor={themeMode?"#44403c":"#d1d5db"} Stroke="2" />
        </div>
      </div>
      {/**LINKS */}
      <div className=' w-full h-full md:block lgo:hidden osm:hidden hidden col-span-5 flex flex-col items-center justify-center'>
      <div className='w-4/6 h-full font-[OpenSans] dark:text-stone-200 text-gray-700 text-2xl grid grid-cols-4 gap-x-2 items-center justify-items-center'>
        {
          ['Home','About','Docs','Services'].map((item,index)=>(
            <div key={index} className='w-full flex flex-row items-center justify-center'>{item}</div>
          ))
        }
      </div>

      </div>
      {/**BUTTONS */}
      <div className='w-full md:block lgo:hidden osm:hidden hidden h-full col-span-3 '>
        <div className='w-full h-full grid grid-cols-4 items-start justify-items-start'>
          <div className='w-full h-full col-span-3 flex flex-row items-center justify-center gap-2  font-[OpenSans]'>
          <button className='p-2 flex flex-col items-center justify-center ring-1 ring-gray-300 rounded dark:bg-stone-300 dark:hover:bg-stone-400 bg-blue-200 hover:bg-blue-300'>Login</button>
          <button className='p-2 flex flex-col items-center justify-center ring-1 ring-gray-300 rounded dark:bg-stone-400 dark:hover:bg-stone-500 bg-lime-200 hover:bg-lime-300'>SignUp</button>
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <button onClick={()=>changeMode(!themeMode)} className='p-2 aspect-square flex flex-col items-center justify-center ring-1 ring-gray-300 rounded bg-gray-200 hover:bg-gray-300'>{themeMode?<MdDarkMode />:<MdSunny />}</button>
          </div>
          </div>
      </div>
      <div className=' relative md:hidden lgo:block osm:block block  lgo:col-start-10 osm:col-start-10 col-start-9 lgo:col-span-1 osm:col-span-1 col-span-2 w-full h-full dark:text-stone-200 text-gray-700 text-sm uppercase '>
        {
            menuChanger?
            <div className='animate-slide-inright  absolute inset right-0 -top-6 max-h-screen dark:bg-stone-700/90 bg-white border-l border-b dark:border-stone-400 border-gray-400 w-[400px]'>
                <SidebarNotLogged ModeFunc={changeMode} ModeVal={themeMode} Closer={setmenuChanger} />
            </div>
            :''
        }
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div onClick={()=>setmenuChanger(true)} className='ring-1 ring-stone-500 flex flex-col items-center justify-center p-2 rounded bg-white/10 cursor-pointer'>
                <MdMenu className='inline' />
            </div>
        </div>
      </div>
      </nav>
  )
}

export default NavigationNotLogged