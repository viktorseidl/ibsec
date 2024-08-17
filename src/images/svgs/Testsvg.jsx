import React from 'react'

const Testsvg = () => {
  return (
     <div className='w-40 aspect-square'>
    <svg
    width="50%"
    height="50%"
    viewBox="0 0 352.644 352.644"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
  >
    <defs>
      <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#0072c6', stopOpacity: 1 }} />
      </linearGradient>
      <radialGradient id="shieldHighlight" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
        <stop offset="100%" style={{ stopColor: '#0072c6', stopOpacity: 0 }} />
      </radialGradient>
    </defs>

    {/* Top Half of the Shield */}
    <g transform="translate(0, -20)">
      <path
        d="M324.478,51.943L177.986,0.285c-1.076-0.38-2.25-0.38-3.326,0L28.166,51.943c-1.999,0.705-3.337,2.595-3.337,4.715
          c0,52.278,13.834,112.711,37.956,165.805c19.566,43.069,54.751,100.519,111.248,129.625c0.719,0.37,1.504,0.555,2.29,0.555
          s1.571-0.185,2.29-0.555c56.496-29.106,91.68-86.556,111.247-129.625c24.121-53.094,37.955-113.527,37.955-165.805
          C327.815,54.538,326.477,52.648,324.478,51.943z"
        fill="url(#shieldGradient)"
        stroke="#004a8f"
        strokeWidth="5"
        clipPath="inset(0 0 50% 0)"
      />
    </g>

    {/* Bottom Half of the Shield */}
    <g transform="translate(0, 20)">
      <path
        d="M324.478,51.943L177.986,0.285c-1.076-0.38-2.25-0.38-3.326,0L28.166,51.943c-1.999,0.705-3.337,2.595-3.337,4.715
          c0,52.278,13.834,112.711,37.956,165.805c19.566,43.069,54.751,100.519,111.248,129.625c0.719,0.37,1.504,0.555,2.29,0.555
          s1.571-0.185,2.29-0.555c56.496-29.106,91.68-86.556,111.247-129.625c24.121-53.094,37.955-113.527,37.955-165.805
          C327.815,54.538,326.477,52.648,324.478,51.943z"
        fill="url(#shieldGradient)"
        stroke="#004a8f"
        strokeWidth="5"
        clipPath="inset(50% 0 0 0)"
      />
    </g>

    {/* Text in the middle */}
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="Arial"
      fontSize="40"
      fill="#004a8f"
    >
      IB-Sec
    </text>
  </svg>
  </div>
  )
}

export default Testsvg