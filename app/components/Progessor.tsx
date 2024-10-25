"use client"
import React from 'react'
import Image from 'next/image';
import { useRef } from 'react';


export default function Home() {

  let ref = useRef()

return (
  <div> 
  <div className="container flex relative h-[84vh] w-screen mt-4">
 {/*School name Main Page */}
     <div className="main flex flex-col relative bg-cyan-500 h-[90vh] w-screen">
      <div className="body flex flex-col relative w-screen h-[45vh]">
      <h3 className="sub-text flex text-2xl mt-11 text-white font-mono justify-center items-center m-auto">Kids Learning Center</h3>  
      <br/>
      <h1 className="sub-text-1 flex ml-24 mt-24 w-[90vh] text-7xl text-white font-mono font-extrabold">New Approach to Kids Education</h1>
      <br/>
      <p className="detail flex ml-24 w-[90vh] mt-2 justify-center items-center m-auto text-white text-xl">
      This approach tailors education to each child's individual needs, interests, and learning style. Technology can play a significant role in this, providing adaptive learning platforms that adjust content and pacing based on a student's progress.
        </p>    

  <div className="img-app flex flex-row justify-end items-end m-auto ml-56 mb-11 pb-14 w-[150vh] h-[15vh]">
    <Image className='flex object-cover rounded-full border-4 border-black' width={500} height={700} src='https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>
  </div>

  </div>
   </div> 

  
   </div>
   
  </div>
);
};

