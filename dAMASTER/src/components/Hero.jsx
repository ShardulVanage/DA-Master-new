import Image from 'next/image'

import logo from '@/images/logo.png'

import { StarRating } from '@/components/StarRating'
import coverImage from '@/images/heroimg.png'
import { Screencasts } from './Screencasts'
import Pbutton from './Pbutton'
import SyllabusButtton from './SyllabusButtton'



function Testimonial() {
  return (
    <figure className="relative mx-auto w-full  text-center lg:mx-0 lg:text-left  ">
    <div className='flex sm:flex-row flex-col'>
        <div>
        <div className="relative z-10 mx-auto flex w-80 rounded-xl   md:w-80 lg:w-auto">
            <img className="" width={500} height={500} src={"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986290/bael39vem3hfwbak2gfs.png"} alt="s" priority />
          </div>
      </div>
      
      <div className='flex flex-row w-full mb-4'>
        <div className='mr-2'>

        </div>
        <div>
          <div className=" mt-1 flex justify-center  lg:justify-start">
        
      </div>
      <blockquote className="mt-2">
        <img alt='logo' src={"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986565/hqatxpsjdg3zeql20jfe.png"} height={20} width={20} className='mt-0.5 pt-0.5 '/>
        <h1 className="font-display text-3xl font-extrabold text-slate-900">
          Data Analytics Masters - 2024 Edition
        </h1>
      </blockquote>
      <figcaption className="mt-2 text-sm text-slate-500">
        
       The premier Data Analytics Course in India offers a multitude of features designed to empower you and prepare you for diverse roles, ensuring you are job-ready
      </figcaption>
   <div className='flex flex-col sm:flex-row justify-center sm:justify-start items-center sm:items-baseline py-3  '>
    <div className='px-1'>
       <Pbutton />
    </div>
    <div  className='px-1'>
      <SyllabusButtton/>
    </div>
   
        <a className='bg-white ml-1 pt py-2 px-7 mt-3 rounded-full text-sm font-semibold drop-shadow-sm' href="#free-chapters ">
      Connect with us
    </a>
    
   </div>
 
        </div>
      </div>
    </div>
    
      <Screencasts/>
    </figure>
  )
}

export function Hero() {
  return (
    <header className="overflow-hidden bg-slate-100 lg:bg-transparent lg:px-5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 grid-rows-[auto_1fr] gap-y-16 pt-16 md:pt-20 lg:grid-cols-10 lg:gap-y-20 lg:px-3">
        {/* <div className="relative flex items-end lg:col-span-3 lg:row-span-2">
          <div className="absolute -bottom-12 -top-20 left-0 right-1/2 z-10 rounded-br-6xl bg-blue-600 text-white/10 md:bottom-8 lg:-inset-y-32 lg:left-[-100vw] lg:right-full lg:-mr-40">
            <GridPattern
              x="100%"
              y="100%"
              patternTransform="translate(112 64)"
            />
          </div>
          
        </div> */}
        <div className="relative px-4 sm:px-6 lg:col-span-10 lg:pb-0 lg:pl-16 lg:pr-0 xl:pl-20">
          <div className="hidden lg:absolute lg:-top-32 lg:bottom-0 lg:left-[-100vw] lg:right-[-100vw] lg:block lg:bg-slate-100" />
          <Testimonial />
        </div>
        <div className="bg-white w-full col-span-full ">
   
          {/* <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-6xl">
             Data Analytics Masters - 2024 Edition
            </h1>
            <p className="mt-4 text-3xl text-slate-600">
            The premier Data Analytics Course in India offers a multitude of features designed to empower you and prepare you for diverse roles, ensuring you are job-ready.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="#free-chapters" color="blue">
                lets connect
              </Button>
              <Button href="#pricing" variant="outline" color="blue">
                Buy Now
              </Button>
            </div>
          </div> */}
        </div>
      </div>
    </header>
  )
}
