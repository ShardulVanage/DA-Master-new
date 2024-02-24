import Head from 'next/head'

import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import whatsapp from '@/images/whatsapp.png'
import Image from 'next/image'
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <>
       <a href=' https://api.whatsapp.com/send/?phone=%2B917978652529&text&type=phone_number&app_absent=0' className='flex flex-col justify-items-end items-end z-10 fixed bottom-4 right-4  sm:bottom-8 sm:right-8 drop-shadow-2xl  '>
                <img alt="whatsappicon"  src={"https://res.cloudinary.com/dtsuvx8dz/image/upload/v1706986988/ee8gvpxhvyi2ktrxqiqi.png"} height={70} width={70} className='object-right-bottom' />
              </a>
      <Head>
        <title>
          Zep Analytics DA MAster 2024
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
          />
      </Head>
          
   <ToastContainer position='top-center'/>
      <Hero />
     
      {/* <Introduction /> */}
       {/* <Screencasts /> */}
      <FreeChapters />
     
      {/* <NavBar /> */}
      {/* <TableOfContents /> */}
      {/* <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Rahul Rajendran',
          role: 'GIS Analyst',
          image: avatarImage1,
        }}
      >
        <p>
          “Comprehensive program on Data Analytics. Informative and well-structured sessions. Supportive instructors. 
          Valuable industry-level use cases and real-world projects. Thanks to Mr. Satyajit Pattnaik for exceptional AI, Data Science, and Analytics program.”
        </p>
      </Testimonial> */}
{/*      
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Gerardo Stark',
          role: 'Big Data Engineer',
          image: avatarImage2,
        }}
      >
        <p>
          “Enrolling in Zep Analytics Big Data Engineering program was a smart decision. The course covered Hadoop, Spark, and other essential big data technologies. 
          The experienced instructors and hands-on projects prepared me for a successful career in big data engineering”
        </p>
      </Testimonial>
     
      <Pricing />
      <Testimonials />
      <Author />
      <Footer /> */}
    </>
  )
}
