import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import duotoneImage from '@/images/screencasts/cr.png'
import gridsImage from '@/images/screencasts/ccm.png'
import setupImage from '@/images/screencasts/call.png'
import strokesImage from '@/images/screencasts/int.png'
import cs from '@/images/screencasts/cs.png'
import pl from '@/images/screencasts/pl.png'



const videos = [
  {
    title: 'Self Paced Program with 24X7 Support',
    description:
      'Learn the program at your own pace',
    image: setupImage,
    runtime: { minutes: 16, seconds: 54 },
  },
  {
    title: 'Course Completion Certificate ',
    description:
      'Get yourself certified after completition of the course.',
    image: gridsImage,
    runtime: { minutes: 9, seconds: 12 },
  },
  {
    title: 'Internship Certificate ',
    description:
      'Get a score of 80% in the assignments and you will be handed over an internship offer.',
    image: strokesImage,
    runtime: { minutes: 23, seconds: 25 },
  },
  {
    title: 'Class Recordings',
    description:
      'Unlimited Hassle Free Access',
    image: duotoneImage,
    runtime: { minutes: 28, seconds: 44 },
  },
    {
    title: '24X7 chat support',
    description:
      'Get unlimited chat support from our experts',
    image: cs,
    runtime: { minutes: 28, seconds: 44 },
  },{
    title: 'Project Based Learning with Intense Knowledge',
    description:
      'Learn the skills by developing different projects throughout the sessions.',
    image: pl,
    runtime: { minutes: 28, seconds: 44 },
  },
]

function PlayIcon(props) {
  return (
    <svg
      aria-hidden="true"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z" />
      <circle cx="8" cy="8" r="6.25" fill="none" />
    </svg>
  )
}

export function Screencasts() {
  return (
    <section
      id="screencasts"
      aria-labelledby="screencasts-title"
      className="scroll-mt-14 py-16 sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <Container>
        <SectionHeading number="2" id="screencasts-title">
        Features of the course
        </SectionHeading>
        <p className="mt-8 font-display text-4xl font-bold tracking-tight text-slate-900">
          Unleash your Data Mastery with these Powerful Features
        </p>
        <p className="mt-4 text-lg tracking-tight text-slate-700">
        Go beyond the basics and become a data-driven powerhouse with these unique benefits
        </p>
      </Container>
      <Container size="lg" className="mt-16">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-3"
        >
          {videos.map((video) => (
            <li key={video.title} className="[counter-increment:video]">
              <div
                className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
                style={{
                  backgroundImage:
                    'conic-gradient(from -49.8deg at 50% 50%, #7331FF 0deg, #00A3FF 59.07deg, #4E51FF 185.61deg, #39DBFF 284.23deg, #B84FF1 329.41deg, #7331FF 360deg)',
                }}
              >
                <div className="flex  overflow-hidden rounded">
                  <Image src={video.image}height={250} alt="" unoptimized />
                </div>
             
            </div>
              <h3 className="mt-8 text-base font-medium tracking-tight text-slate-900 before:mb-2 before:block before:font-mono before:text-sm before:text-slate-500 before:content-[counter(video,decimal-leading-zero)]">
                {video.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{video.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
