import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-20 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          Tired of staring at spreadsheets without answers? This course unlocks the secrets of data and turns you into a master analyst.
        </p>
        
        <p className="mt-4">
          Struggling to make sense of messy data? Feeling lost in the sea of tools? We will guide you through the process step-by-step.
        </p>
       
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Become a highly sought-after data analyst, unlock new career opportunities, and boost your earning potential.',
            'Learn to extract crucial insights from data, make informed decisions, and gain a competitive edge in any field.',
            'Sharpen your analytical thinking, tackle complex data challenges, and become a valuable asset to any team.',
            
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
         From data novice to data ninja, learn the skills to turn raw numbers into actionable insights and drive real-world results.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            No strings attached! Get a taste of the course and see if its right for you.{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
