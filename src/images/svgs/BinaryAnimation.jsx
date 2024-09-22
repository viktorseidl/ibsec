import React, { useEffect, useRef } from 'react';

const BinaryAnimation = () => {
    const canvasRef = useRef(null);
     let mode;
      

    useEffect(() => {
      setInterval(() => {
        if(document.documentElement.classList.contains('dark')){
          mode=false;
        }else{
          mode=true;
        }
      },1000)
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
  
      canvas.width = canvasRef.current.width*4.3;
      canvas.height = canvasRef.current.height*4.3;
  
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
   
        const swidth=window.screen.width
        const sheight=window.screen.height
        let fsizeone='10rem ';
        let fsizetwo='5rem ';
        let lineWidthone=8;
        let lineWidthtwo=8;
        let alignWone=2;
        let alignHone=2;
        let alignWtwo=2;
        let alignHtwo=1.4;
        if(swidth>830 && swidth < 1430){ 
          fsizeone='8rem ';
          fsizetwo='4rem ';
          lineWidthone=8;
          lineWidthtwo=4;
          alignWone=2;
          alignHone=3.5;
          alignWtwo=2;
          alignHtwo=2.1;
        }else if(swidth>530 && swidth < 850 && sheight >1000){ 
          fsizeone='6em ';
          fsizetwo='3em ';
          lineWidthone=6;
          lineWidthtwo=2;
          alignWone=2;
          alignHone=4;
          alignWtwo=2;
          alignHtwo=2.7;
        }else if(swidth<530){ 
          fsizeone='2.7em ';
          fsizetwo='1.1rem ';
          lineWidthone=3;
          lineWidthtwo=1.5;
          alignWone=2;
          alignHone=4.5;
          alignWtwo=2;
          alignHtwo=3.2;
        }else{
          fsizeone='10rem ';
          fsizetwo='5rem ';
          lineWidthone=8;
          lineWidthtwo=8;
          alignWone=2;
          alignHone=3;
          alignWtwo=2;
          alignHtwo=1.7;
        } 
        // Draw IntelliBlock-Secure Text with stroke
        ctx.font = fsizeone+' "Orbitron", Courier, monospace'; 
        ctx.strokeStyle = mode?'#000000':'#FFFFFF';
        ctx.lineWidth = lineWidthone;
        ctx.strokeText('IB-SECURE', canvas.width / alignWone, canvas.height / alignHone);
        ctx.font = fsizetwo+' "Orbitron", Courier, monospace'; 
        ctx.strokeStyle = mode?'#1e293b':'#ea580c';
        ctx.lineWidth = lineWidthtwo;
        ctx.strokeText('PERSONAL DATA SECURITY', canvas.width / alignWtwo, canvas.height / alignHtwo);
  
        requestAnimationFrame(drawBinary);
      };
  
      drawBinary();
  
      const handleResize = () => {  
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        binaryArray.fill(1); 
      };
      handleResize() 
    }, []);
  
    return <canvas className='w-full h-[600px] inline-block ' ref={canvasRef} />;
  };

export default BinaryAnimation;