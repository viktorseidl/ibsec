import React from 'react'

const LogoText = (props) => {
  return (
    <>{/*<svg  className='inline-block'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"> 
  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Orbitron, sans-serif" fontSize="50" fontWeight="bold"
        fill={props.FillColor} stroke={props.StrokeColor} strokeWidth={props.Stroke}>
    IB Sec
  </text>  
</svg>*/}
    <svg   xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 400 100"> 
  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
        className='logoFont' fontSize="50" fontWeight="bold"
        fill={"#FFFFFF"} stroke={"#03346E"} strokeWidth={2}>
    IB&nbsp;-&nbsp;SECURE
  </text>  
</svg>
</>
  )
}

export default LogoText