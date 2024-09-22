import React from 'react'
import { MdClose, MdDarkMode, MdSunny } from 'react-icons/md'
import Sprachen from '../../../images/svgs/Sprachen'

const SidebarNotLogged = (props) => {
  return (
    <div className=' w-full h-full flex flex-col items-start justify-start gap-y-2 px-4 py-2 border-t border-gray-600 '> 
        <div onClick={()=>props.Closer(false)} className='w-full text-2xl mt-6 '>Menu <MdClose className='inline cursor-pointer float-right' /></div> 
        <div className='w-full border-b -mt-4 border-stone-400'>&nbsp;</div>
        <div className='w-full mt-4 px-2 flex flex-col items-start justify-start gap-y-2'>
            {
            ['Home','About','Docs','Services'].map((item,index)=>(
                <div key={index} className='w-full flex flex-row items-center justify-center border border-stone-400 md:py-2 lgo:py-2 osm:py-2 py-1 px-6 lgo:text-lg osm:text-lg text-sm'>{item}</div>
            ))
            }
        </div>
        <div className='w-full h-[600px] my-4 px-6 flex flex-col items-start justify-start gap-y-2 '>
          sdsdsds
          sdsdsds
          sdsdsds
        </div>
        <div className='w-full my-4 px-6 flex flex-col items-start justify-start gap-y-2 '>
        <div className='w-full h-full grid grid-cols-1 gap-y-5 items-start justify-items-start'>
          <div className='w-full h-full flex flex-row items-center justify-center gap-x-5  font-[OpenSans] text-black'>
          <button className='p-2 w-full flex flex-col items-center justify-center ring-1 ring-gray-300 rounded dark:bg-stone-300 dark:hover:bg-stone-400 bg-blue-200 hover:bg-blue-300'>Login</button>
          <button className='p-2 w-full flex flex-col items-center justify-center ring-1 ring-gray-300 rounded dark:bg-stone-400 dark:hover:bg-stone-500 bg-lime-200 hover:bg-lime-300'>SignUp</button>
          </div>
          <div className='w-full h-full flex flex-row items-center justify-center gap-x-5  font-[OpenSans] '>
          <div onClick={()=>props.SL(!props.LA)} className='relative group flex flex-row items-center justify-center cursor-pointer'>
        <Sprachen /><a  aria-label="langchecker" className='ml-2'>Sprachen DE</a>
        {
          props.LA?
        <span className='w-[140%] absolute inset top-10 -right-0  dark:bg-stone-900 bg-white  rounded ring-1 dark:ring-stone-700 ring-gray-400'>
            <span className='w-full divide-y divide-stone-800 flex flex-col items-start justify-start p-2'>
          
            <span onClick={()=>props.LSetter('DE')} className='w-full flex flex-col items-start justify-start px-4 py-2 dark:hover:bg-white/10 hover:bg-slate-500/10'>
              <a className='dark:text-orange-700 text-blue-700'>Deutsch</a>
              <a>DEUTSCH (DE)</a>
            </span>
            <span onClick={()=>props.LSetter('EN')} className='w-full flex flex-col items-start justify-start px-4 py-2 dark:hover:bg-white/10 hover:bg-slate-500/10'>
              <a className='dark:text-orange-700 text-blue-700'>Englisch</a>
              <a>ENGLISCH (EN)</a>
            </span>
            <span  onClick={()=>props.LSetter('ES')} className='w-full flex flex-col items-start justify-start px-4 py-2 dark:hover:bg-white/10 hover:bg-slate-500/10'>
              <a className='dark:text-orange-700 text-blue-700'>Spanisch</a>
              <a>SPANISCH (ES)</a>
            </span>
            <span  onClick={()=>props.LSetter('IT')} className='w-full flex flex-col items-start justify-start px-4 py-2 dark:hover:bg-white/10 hover:bg-slate-500/10'>
              <a className='dark:text-orange-700 text-blue-700'>Italienisch</a>
              <a>ITALIENISCH (IT)</a>
            </span>
            </span>
        </span>:
        ''
        }
      </div>
          </div>
          <div className='w-full h-full flex flex-col items-end justify-end text-black'>
            <button onClick={()=>props.ModeFunc(!props.ModeVal)} className='p-2 aspect-square flex flex-col items-center justify-center ring-1 ring-gray-300 rounded bg-gray-200 hover:bg-gray-300'>{props.ModeVal?<MdDarkMode />:<MdSunny />}</button>
          </div>
          </div>
        </div> 
    </div>
  )
}

export default SidebarNotLogged