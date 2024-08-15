import React,{ useState } from 'react'   
import Test from './Test';
import {MdSunny} from 'react-icons/md'
import { BrowserRouter as Router, Routes, Route,  RouterProvider,createBrowserRouter, useParams } from 'react-router-dom'; 
function App() { 

  const Pages=()=>{
    return(
      <Routes>
        <Route path="/"  exact={true} element={ 'home'} /> 
        <Route path="/home"  element={ 'home'} /> 
        <Route path="/about" element={  'about'} /> 
        <Route path="/docs" element={  'docs'} /> 
        <Route path="/services" element={  'services'} /> 
        <Route path="/login" element={  'login'} /> 
        <Route path="/signup" element={  'signup'} /> 
        <Route path="/impressum" element={  'impressum'} /> 
        <Route path="/privacypolicy" element={  'pp'} /> 
        <Route path="/legal" element={  'legaladvice'} /> 
        <Route path="/contact" element={  'contact'} /> 
        <Route path="/press" element={  'press'} /> 
        <Route path="/faq" element={  'faq'} /> 
      </Routes>
    )
  }


  return (
    <div className='w-full min-h-screen dark:bg-dark-background bg-light-background-color'>
      <navigation className="w-full fixed top-0 left-0 h-auto grid grid-cols-10 items-start justify-items-start bg-white/50 py-4">
      <div className='w-full h-full flex flex-col items-center justify-center'>
      <svg  className='inline-block'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100"> 
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle"
        font-family="Verdana, sans-serif" font-size="50" font-weight="bold"
        fill="#44403c" stroke="#78716c" stroke-width="2">
    IB-Sec
  </text>  
</svg>
      </div>
      <div className='w-full h-full col-span-7 font-[OpenSans] text-xl grid grid-cols-4 items-center justify-items-center'>
        {
          ['Home','About','Docs','Services'].map((item,index)=>(
            <div key={index}>{item}</div>
          ))
        }
      </div>
      <div className='w-full h-full col-span-2 grid grid-cols-4 items-start justify-items-start'>
          <div className='w-full h-full col-span-3 flex flex-row items-center justify-center gap-2  font-[OpenSans]'>
          <button className='p-2 flex flex-col items-center justify-center ring-1 ring-gray-300 rounded bg-blue-200 hover:bg-blue-300'>Login</button>
          <button className='p-2 flex flex-col items-center justify-center ring-1 ring-gray-300 rounded bg-lime-200 hover:bg-lime-300'>SignUp</button>
          </div>
          <div className='w-full h-full flex flex-col items-center justify-center'>
            <button className='p-2 aspect-square flex flex-col items-center justify-center ring-1 ring-gray-300 rounded bg-gray-200 hover:bg-gray-300'><MdSunny /></button>
          </div>
      </div>
      </navigation>
    <Router basename='/'>   
    <Pages />
    </Router>
    </div> 
  )
}

export default App
