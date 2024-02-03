import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import clsx from 'clsx'
import { CheckIcon } from '@/components/CheckIcon'
import { SectionHeading } from './SectionHeading'


function SyllabusButtton() {
  return (
    <div ><Dialog className='  '>
 <DialogTrigger className='bg-white py-2 px-3 mt-3 rounded-full text-sm font-semibold drop-shadow-sm'>Syllabus</DialogTrigger>
  <DialogContent className='bg-white h-2/3 sm:h-auto overflow-x-scroll sm:overflow-visible'> 
    <DialogHeader>
      <DialogTitle>  <SectionHeading  id="pricing-title">
          Syllabus 
        </SectionHeading></DialogTitle>
      <DialogDescription>
        <h1 className='ml-4  font-display text-base font-extralight tracking-tight text-slate-900'>
            Here is a glimpse into your learning journey
        </h1>
         <ol  role="list"
       className="  divide-y divide-slate-300/30 rounded-2xl bg-slate-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
                      >
                    <li className="flex justify-between py-3">  Introduction to Data Analytics</li>
                     <li className="flex justify-between py-3">  Python for Data Analytics</li>
                     <li className="flex justify-between py-3"> Exploratory Data Analysis</li>
                     <li className="flex justify-between py-3">  Business Statistics</li>
                     <li className="flex justify-between py-3">  SQL for Data Analysis</li>
                     <li className="flex justify-between py-3">  Microsoft Excel</li>
                     <li className="flex justify-between py-3">  Power BI</li>
                     <li className="flex justify-between py-3"> Tableau</li>
                     <li className="flex justify-between py-3">  Predictive Analytics</li>
                     <li className="flex justify-between py-3">  ETL & Data Warehousing</li>
                     <li className="flex justify-between py-3">  Interview Guides</li>
                     <li className="flex justify-between py-3">  Capstone Project</li>
                     <li className="flex justify-between py-3"> Final Assignment</li>
                    


                      </ol>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
</div>
  )
}

export default SyllabusButtton