import React, { useEffect } from 'react' 


const Test = () => { 
  if (localStorage.getItem('theme') === 'false' || (!(localStorage.getItem('theme')))) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', false);
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', true);
  } 
  useEffect(()=>{
    localStorage.setItem('theme','true')
  },[])
  return (
    <div className=' w-full h-screen dark:bg-slate-950  bg-stone-200 py-20'>
      <div className='w-full py-10 px-10 bg-white/50'>
      <h1 className='dark:text-[#7a82af] text-stone-600 text-6xl font-[Orbitron]'>This is a Title</h1>
      <h2 className='dark:text-[#595d92] text-stone-500 text-3xl font-[KodeMono]'>Title hdhgdhjgdjhhj</h2>
      <p className='dark:text-gray-300 text-light-body-text-color text-xl  font-[OpenSans]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio ea provident consequuntur <i className='dark:text-lime-500 text-rose-700'>debitis, fuga nobis qui libero impedit </i>recusandae cumque hic modi iure ad nam, dolorum quod quis! Culpa, doloribus!</p>
      <p className='dark:text-gray-500 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati voluptatem sunt ex, ea dolore quis error animi, soluta ad velit fugiat omnis aspernatur quisquam quidem aperiam blanditiis quod unde.</p>
      </div>
    </div>
  )
}

export default Test