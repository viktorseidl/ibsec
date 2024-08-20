import React from 'react'
import LogoBlocks from '../svgs/LogoBlocks'

const IBlogo = () => {
  return (
    <div className={' w-full aspect-square' }>
        <div className='w-full relative'>
            {/**SHIELD */}
        <div className='w-[70%] absolute inset mt-[4%] my-1 left-[15%]'>
        <svg className='dark:fill-slate-950 fill-white dark:stroke-white stroke-slate-950'  strokeWidth={12}  height="99%" width="99%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	    viewBox="0 0 360 410" xmlSpace="preserve">
        <path d="M324.478,51.943L177.986,0.285c-1.076-0.38-2.25-0.38-3.326,0L28.166,51.943c-1.999,0.705-3.337,2.595-3.337,4.715
            c0,52.278,13.834,112.711,37.956,165.805c19.566,43.069,54.751,100.519,111.248,129.625c0.719,0.37,1.504,0.555,2.29,0.555
            s1.571-0.185,2.29-0.555c56.496-29.106,91.68-86.556,111.247-129.625c24.121-53.094,37.955-113.527,37.955-165.805
            C327.815,54.538,326.477,52.648,324.478,51.943z"/>
        </svg>
        </div>
        {/**IB Text */}
        <div className='w-[60%] h-fit absolute inset mt-[0.2%] left-[20%] flex flex-col items-center justify-center'>
        <svg className='dark:fill-white fill-slate-800 dark:stroke-slate-500 stroke-slate-500'   xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 200 200"> 
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                className='logoFont' fontSize="130" fontWeight="bold"
                 strokeWidth={2}>
            IB
        </text>  
        </svg>
        </div>
        {/**BLOCKS */}
        <div className='w-[50%] absolute inset h-fit  mt-[37%] left-[25%] flex flex-col items-center justify-center'>
        <LogoBlocks Stroke="2" />
        </div>
        {/**SECURE Text */}
        <div className='w-[90%] absolute inset h-fit mt-[40%] left-[5%] flex flex-col items-center justify-center'>
        <svg className='dark:fill-white fill-slate-800 dark:stroke-slate-500 stroke-slate-500'  xmlns="http://www.w3.org/2000/svg" width="100%"  viewBox="0 0 400 400"> 
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                className='logoFont' fontSize="100" fontWeight="bold"
                 strokeWidth={2}>
            SECURE
        </text>  
        </svg>
        </div>


        </div>
    </div>
  )
}

export default IBlogo