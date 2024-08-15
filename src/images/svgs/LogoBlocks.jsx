import React from 'react'

const LogoBlocks = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 400 200"> 
  <rect width="280" height="110" fill="transparent"/> 
  <g transform="translate(60,60)"> 
    <polygon points="0,0 80,0 80,50 0,50" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/> 
    <polygon points="0,0 20,-20 100,-20 80,0" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/> 
    <polygon points="80,0 100,-20 100,30 80,50" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/>
  </g> 
  <g transform="translate(150,100)"> 
    <polygon points="0,0 80,0 80,50 0,50" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/> 
    <polygon points="0,0 20,-20 100,-20 80,0" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/> 
    <polygon points="80,0 100,-20 100,30 80,50" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/>
  </g>
 
  <g transform="translate(250,100)"> 
    <polygon points="0,0 80,0 80,50 0,50" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/> 
    <polygon points="0,0 20,-20 100,-20 80,0" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/> 
    <polygon points="80,0 100,-20 100,30 80,50" fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}/>
  </g>  
</svg>
  )
}

export default LogoBlocks