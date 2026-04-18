import React from 'react'
import banner from '../assets/banner/freestocks-_3Q3tsJ01nc-unsplash.jpg'

const Banner = () => {
  return (
    <div className=' bg-gray-100 md:py-24'>
    <div className=' relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-center h-[550px] md:h-[600px] bg-center bg-no-repeat bg-cover' style={
        {backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment:'fixed'}}>
            <div className=' text-center text-white px-4'>
            <h1  className=' text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-4 '>Fashions fade, style is eternal.

            </h1>
                <p  className=' text-lg md:text-xl mb-6'>Style is something each of us already has, all we need to do is find it.</p>
               
               {/*button styling*/}
               <button
  data-aos="fade-up"
  data-aos-delay="600"
  data-aos-duration="1400"
  className="group relative overflow-hidden cursor-pointer
  px-6 py-3 md:px-8 md:py-4
  bg-gradient-to-r from-cyan-200 to-red-200
  text-black font-semibold tracking-wide
  shadow-lg shadow-amber-900/30
  transform-gpu
  transition-all duration-700 ease-out hover:shadow-amber-700/40 font-serif leading-tight"
>
  <span
    className="absolute inset-0 
    bg-white/20 blur-sm
    translate-x-[-130%]
    group-hover:translate-x-[130%]
    transition-transform duration-1000 ease-in-out skew-x-12"
  ></span>

  <span className="relative z-10 transition-all duration-500 group-hover:tracking-wider">
    Shop Now
  </span>
</button>
            

            </div>
        </div>
      
    </div>
  )
}

export default Banner
