import React, { useEffect, useRef } from 'react';

const BinaryAnimation = () => {
    const canvasRef = useRef(null);
     let mode;
      if(document.documentElement.classList.contains('dark')){
        mode=false;
      }else{
        mode=true;
      }

    useEffect(() => {
       
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      const columns = Math.floor(canvas.width / 15); // More particles by reducing the column width
      const binaryArray = Array(columns).fill(1);
  
      const drawBinary = () => {
        ctx.fillStyle = mode?'rgba(190,190,190,0.8)':'rgba(12,10,9,0.8)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        ctx.textAlign = 'center';
  
        for (let i = 0; i < binaryArray.length; i++) {
          const binary = Math.random() > 0.2 ? '1' : '0';
  
          // Pulsing effect with slower speed
          const scale = 1 + Math.sin(Date.now() / 200 + i) * 1.9;
  
          // Quaking effect by slightly shifting the position
          const xOffset = (Math.random() - 0.5) * 2.5;
          const yOffset = (Math.random() - 0.5) * 1.5;
  
          // Alternate between two colors
          ctx.fillStyle = i % 2 === 0 ? ' #4b5563' : '#78716c'; // Green and Cyan colors
  
          ctx.save();
          ctx.translate(i * 35 + xOffset, binaryArray[i] * 20 + yOffset);
          ctx.scale(scale, scale);
          ctx.font = '20px "Courier New", Courier, monospace';
          ctx.fillText(binary, 0, 0);
          ctx.restore();
  
          // Slower falling speed
          binaryArray[i] += 0.15;
  
          if (binaryArray[i] * 30 > canvas.height && Math.random() > 0.975) {
            binaryArray[i] = 0;
          }
        }
  
        // Draw IntelliBlock-Secure Text with stroke
        ctx.font = '10rem "Orbitron", Courier, monospace'; 
        ctx.strokeStyle = mode?'#020617':'#FFFFFF';
        ctx.lineWidth = 8;
        ctx.strokeText('IB-SECURE', canvas.width / 2, canvas.height / 2);
        ctx.font = '5rem "Orbitron", Courier, monospace'; 
        ctx.strokeStyle = mode?'#1e293b':'#888888';
        ctx.lineWidth = 8;
        ctx.strokeText('PERSONAL DATA SECURITY', canvas.width / 2, canvas.height / 1.4);
  
        requestAnimationFrame(drawBinary);
      };
  
      drawBinary();
  
      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        binaryArray.fill(1);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Cleanup function to stop the animation and remove event listeners
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return <canvas className='w-full inline-block ' ref={canvasRef} />;
  };

export default BinaryAnimation;