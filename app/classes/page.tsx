import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Classes() {
  return (
    <>
    <Header/>
     <div className="cont h-[150vh] w-screen flex flex-wrap relative mt-9 left-0">

         <div className='heading flex w-full relative'>
            <h3 className="classes flex relative justify-center items-center m-auto text-5xl underline mt-0 mb-20 bg-cyan-300 rounded h-[8vh] w-screen">^^^^^CLASSES^^^^^</h3>
         </div>

        <div className="cont1 mb-4 -mt-48 flex flex-col relative w-[75vh] h-[32vh] justify-start items-center mx-auto  bg-cyan-300">
           <Image className='img flex object-cover justify-center items-center m-auto' width={125} height={85} src='https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>
           <h1 className='text-xl flex flex-col my-2 mt-2 font-bold'>Play Ground</h1>
            <p className="font-serif flex flex-col m-auto justify-center text-center mx-3 px-6">
            A kindergarten playground typically serves as a space for young children to engage in active play, social interaction, and exploration.
           </p>
        </div>

        <div className="cont2 -ml-6 -mt-48 flex flex-col relative w-[75vh] h-[32vh] justify-start items-center mx-auto  bg-cyan-300">
        <Image className='img object-contain justify-center items-center m-auto' width={125} height={85} src='https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>
           <h1 className='text-xl flex flex-col my-2 mt-2 font-bold'>Music and Dance</h1>
            <p className="font-serif flex flex-col m-auto justify-center text-center mx-3 px-6">
            Music and dance classes offer numerous physical, emotional, cognitive, and social benefits for children, making them an invaluable addition to their education and personal development.
           </p>
        </div>
       
        <div className="cont3 mb-4 -mt-48 flex flex-col relative w-[75vh] h-[32vh] justify-start items-center mx-auto  bg-cyan-300">
        <Image className='img object-contain justify-center items-center m-auto' width={125} height={85} src='https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>
           <h1 className='text-xl flex flex-col my-2 mt-2 font-bold'>Arts and Crafts</h1>
            <p className="font-serif flex flex-col m-auto justify-center text-center mx-3 px-6">
            Arts and crafts activities provide children with a creative outlet to express themselves while also offering numerous developmental benefits. Such as Painting, DIY craft, Recycled art.
           </p>
        </div>
       
        <div className="cont4 -ml-6 -mt-48 flex flex-col relative w-[75vh] h-[32vh] justify-start items-center mx-auto  bg-cyan-300">
        <Image className='img object-contain justify-center items-center m-auto' width={125} height={95} src='https://images.unsplash.com/photo-1650172101138-c0bb7bc32ffa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>
           <h1 className='text-xl flex flex-col my-2 mt-2 font-bold'>Safe Transportation</h1>
            <p className="font-serif flex flex-col m-auto justify-center text-center mx-3 px-6">
            A kindergarten playground typically serves as a space for young children to engage in active play, social interaction, and exploration.
           </p>
        </div>

        <div className="cont5 mb-4 -mt-48 flex flex-col relative w-[75vh] h-[32vh] justify-start items-center mx-auto  bg-cyan-300">
        <Image className='img object-contain justify-center items-center m-auto' width={115} height={55} src='https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>
           <h1 className='text-xl flex flex-col my-2 mt-2 font-bold'>Healthy Food</h1>
            <p className="font-serif flex flex-col m-auto justify-center text-center mx-3 px-6">
            Encouraging healthy eating habits in kids is essential for their growth, development, and overall well-being. Such as Fruits, Vegetables, Healthy fat, Protein.
           </p>
        </div>

        <div className="cont6 -ml-6 -mt-48 flex flex-col relative w-[75vh] h-[32vh] justify-start items-center mx-auto  bg-cyan-300">
        <Image className='img object-contain justify-center items-center m-auto' width={125} height={55} src='https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>
           <h1 className='text-xl flex flex-col my-2 mt-2 font-bold'>Educational Tour</h1>
            <p className="font-serif flex flex-col m-auto justify-center text-center mx-3 px-6">
            We select a destination that aligns with the educational objectives of the tour. Consider places like museums, historical sites, science centers, art galleries, zoos.
           </p>
        </div>
    
      </div>
    <Footer/>
    </>
  )
}


