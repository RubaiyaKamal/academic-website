import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function Registeration() {
  return (
    <div>
      <Header/>
       <section className='bg-gradient-to-r from-cyan-600 to-cyan-500 py-10 mt-6'>
    <div className='container mx-auto text-center '>
     <h2 className='text-3xl font-extrabold mb-6 text-gray-700'>Registeration Form</h2>
      

      {/* Student Info */}
     <h3 className='text-gray-200 mr-64 font-semibold text-xl mb-2'>Student Information:</h3>
     <form className='max-w-md mx-auto'>

      <div className='mb-4 text-white'>
       <input 
       type="text"
       placeholder='Full Name'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="text"
       placeholder='Your Gender'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="d.o.b"
       placeholder='Date Of Birth'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="text"
       placeholder='Your Grade/Class'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="text"
       placeholder='Your Address'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="number"
       placeholder='Contact Number'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>
      
      {/* Guardian Info */}

      <h3 className='text-gray-200 mr-60 font-semibold text-xl mb-2'>Guardian Information:</h3>
    
      <div className='mb-4 text-white'>
       <input 
       type="text"
       placeholder='Parent/Guardian Name'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="text"
       placeholder='Relationship To Student'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <div className='mb-4 text-white'>
       <input 
       type="email"
       placeholder='Email Address'
       className='w-full p-3 border border-gray-300 rounded-md'
       required
        />
      </div>

      <h3 className='text-gray-200 mr-44 font-semibold text-xl mb-2'>Previous School Information:</h3>
    
    <div className='mb-4 text-white'>
     <input 
     type="text"
     placeholder='Name Of Previous School'
     className='w-full p-3 border border-gray-300 rounded-md'
     required
      />
    </div>

    <div className='mb-4 text-white'>
     <input 
     type="text"
     placeholder='Address Of Previous School'
     className='w-full p-3 border border-gray-300 rounded-md'
     required
      />
    </div>

    <div className='mb-4 text-white'>
     <input 
     type="text"
     placeholder='Dates Attended'
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
