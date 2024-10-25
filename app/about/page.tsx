import React from 'react'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function about() {
  return (
    <div>
      <Header/>
      <div className="box relative flex flex-wrap h-[93vh] w-screen bg-cyan-50 mt-10">

        <div className="box1 flex-row h-[103vh] w-1/3 mt-11 ml-11 pl-6 pt-11 transition-transform duration-300 hover:scale-105">
        <Image className='img-abt object-contain rounded-2xl -rotate-12 ml-5' width={550} height={550} src='https://images.unsplash.com/photo-1601339434203-130259102db6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='image'/>
           
        </div>

        <div className="box2 flex-row h-[45vh] w-2/4 ml-28">
            <h3 className="haeding mt-11 pt-11 text-xl text-cyan-500">LEARN ABOUT US  ______</h3>
            <h1 className="heading1 mt-5 text-4xl text-black font-mono">Best School For Your Kids!</h1>
            <p className="detail my-8 text-xl text-slate-500">
            Choosing the best school for your kids, consider factors such as academic reputation, extracurricular activities, class size, curriculum, diversity, location, cost, parental involvement, and visit the schools to get a feel for their culture and community.
             </p>
             <br/>
             <div className="detail pl-11 text-cyan-500">
               <h3 className="sub-detail text-2xl p-2 border">* Academic Reputation</h3>
               <h3 className="sub-detail text-2xl p-2 border">* Extracurricular Activities</h3>
               <h3 className="sub-detail text-2xl p-2 border">* Parental Involvement</h3>
             </div>
        </div>


      </div>
      <Footer/>
    </div>
  )
}


