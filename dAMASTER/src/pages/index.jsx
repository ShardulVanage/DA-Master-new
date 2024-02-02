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

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Zep Analytics DA MAster 2024
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
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
