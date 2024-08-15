import React from 'react'
import { MdClose, MdDarkMode, MdSunny } from 'react-icons/md'

const SidebarNotLogged = (props) => {
  return (
    <div className=' w-full flex flex-col items-start justify-start gap-y-2 px-4 py-2'>
        <div onClick={()=>props.Closer(false)} className='w-full text-2xl mt-6 flex flex-row items-end justify-end'><MdClose className='inline cursor-pointer' /></div> 
        <div className='w-full border-b -mt-4 border-stone-400'>&nbsp;</div>
        <div className='w-full mt-4 px-2 flex flex-col items-start justify-start gap-y-2'>
            {
            ['Home','About','Docs','Services'].map((item,index)=>(
                <div key={index} className='w-full flex flex-row items-center justify-center border border-stone-400 py-2 px-6 '>{item}</div>
            ))
            }
        </div>
        <div className='w-full my-4 px-6 flex flex-col items-start justify-start gap-y-2 '>
        <div className='w-full h-full grid grid-cols-1 gap-y-5 items-start justify-items-start'>
          <div className='w-full h-full flex flex-row items-center justify-center gap-x-5  font-[OpenSans] text-black'>
          <button className='p-2 w-full flex flex-col items-center justify-center ring-1 ring-gray-300 rounded dark:bg-stone-300 dark:hover:bg-stone-400 bg-blue-200 hover:bg-blue-300'>Login</button>
          <button className='p-2 w-full flex flex-col items-center justify-center ring-1 ring-gray-300 rounded dark:bg-stone-400 dark:hover:bg-stone-500 bg-lime-200 hover:bg-lime-300'>SignUp</button>
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