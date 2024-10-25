import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Header/>
       <section className='bg-gradient-to-r from-cyan-600 to-cyan-500 py-10 mt-6'>
    <div className='container mx-auto text-center '>
     <h2 className='text-3xl font-extrabold mb-6 text-gray-700'>Contact Me!</h2>
     <form className='max-w-md mx-auto'>

      <div className='mb-4 text-white'>
       <input 
       type="text"
       placeholder='Your Name'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="email"
       placeholder='Your Email'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="password"
       placeholder='Your Password'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="number"
       placeholder='Your Phone Number'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>
      
      <div className='mb-4'>
        <button className='bg-cyan-200 text-gray-700 py-2 px-4 rounded-md hover:bg-cyan-700 font-medium'>Submit</button>
      </div>

     </form>
    </div>
   </section>
   <Footer/>
    </div>
  )
}
