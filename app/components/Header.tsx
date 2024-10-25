import React from 'react'
import Link from 'next/link';
import Image from 'next/image';



const Navbar = () => {
  return (
    <>
  <div className="navbar bg-cyan-100 h-12 w-screen mt-0 ml-0 justify-start items-center mx-auto">

<nav className='nav flex justify-center items-center text-gray-700 bg-cyan-100 mt-0'>
  
<div className='navbar flex font-bold relative gap-2 justify-start items-center mx-auto'>
  <Image width={120} height={120} className='flex py-1 px-4' src='https://images.unsplash.com/photo-1516383607781-913a19294fd1?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='logo image' /> 
  <div className='logo  text-cyan-500 text-xl p-4 ml-0 font-serif flex w-[35vh]'>Tiny Tots Academy</div>
  </div>

    <ul className='flex gap-12 justify-center items-center m-auto'>
       
       <li className='text-gray-600 text-lg font-bold hover:text-cyan-500 cursor-pointer'><Link href='/'>Home</Link></li>
        
        <li className='text-gray-600 text-lg font-bold hover:text-cyan-500 cursor-pointer'><Link href='/about'>About</Link></li>

        <li className='text-gray-600 text-lg font-bold hover:text-cyan-500 cursor-pointer'><Link href='/classes'>Classes</Link></li>

        <li className='text-gray-600 text-lg font-bold hover:text-cyan-500 cursor-pointer'><Link href='/gallery'>Gallery</Link></li>

        <li className='text-gray-600 text-lg font-bold hover:text-cyan-500 cursor-pointer'><Link href='/contact'>Contact</Link></li>
     
        <li className='text-gray-600 text-lg font-bold hover:text-cyan-500 cursor-pointer'><Link href='/registeration'>Registeration</Link></li>
       </ul>
      
     </nav>

   </div>
   </>
  )
}


export default Navbar
