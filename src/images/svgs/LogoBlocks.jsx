import React from 'react'

const LogoBlocks = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 400 400"> 
  <rect width="100%" height="100%" fill={'transparent'}/> 
  <g transform="translate(90,60)"> 
    <polygon points="0,0 80,0 80,50 0,50" className=' dark:stroke-white stroke-slate-950 fill-transparent' strokeWidth={props.Stroke}/> 
    <polygon points="0,0 20,-20 100,-20 80,0" className=' dark:stroke-white stroke-slate-950 fill-transparent' strokeWidth={props.Stroke}/> 
    <polygon points="80,0 100,-20 100,30 80,50" className=' dark:stroke-white stroke-slate-950 fill-transparent' strokeWidth={props.Stroke}/>
  </g> 
  <g transform="translate(180,100)"> 
    <polygon points="0,0 80,0 80,50 0,50" className=' dark:stroke-white stroke-slate-950 fill-transparent' strokeWidth={props.Stroke}/> 
    <polygon points="0,0 20,-20 100,-20 80,0" className=' dark:stroke-white stroke-slate-950 fill-transparent' strokeWidth={props.Stroke}/> 
    <polygon points="80,0 100,-20 100,30 80,50" className=' dark:stroke-white stroke-slate-950 fill-transparent' strokeWidth={props.Stroke}/>
  </g>
 
   
</svg>
  )
}

export default LogoBlocks