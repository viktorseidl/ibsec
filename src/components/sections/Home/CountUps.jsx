import React, { useEffect } from 'react'
import { motion, useAnimation  } from "framer-motion"
import { useInView } from "react-intersection-observer"; 
import CountUp from 'react-countup'
const squareVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
  };
const CountUps = (props) => { 
    console.log(true) 
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
        controls.start("visible");
        }
    }, [controls, inView]);
    return (
        <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="w-full flex flex-col items-center justify-center text-white"
        >
        <div className='w-5/6 flex flex-col items-center justify-center md:gap-4 lgo:gap-4 osm:gap-4 gap-4'>
        <div className='text-center font-bold Exo text-4xl'>
            <CountUp end={props.Number} duration={5} /> {props.Wert?'$':''}
        </div>
        <div className='w-full border-t dark:border-white/40 border-[#1e293b] md:pt-4 lgo:pt-4 osm:pt-4 pt-2 uppercase text-center'>{props.Name}</div>
        </div>  
        </motion.div>
    ); 
}

export default CountUps