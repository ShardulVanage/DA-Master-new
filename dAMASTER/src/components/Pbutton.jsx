import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Pricing } from './Pricing'
import { SectionHeading } from './SectionHeading'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { GridPattern } from '@/components/GridPattern'
function Pbutton() {
  return (
    <Dialog>
  <DialogTrigger className='text-white  py-2 px-12 mt-3 rounded-full text-sm font-bold drop-shadow-xl bg-gradient-to-br from-purple-500 via-sky-500 to-blue-800'>Buy Now</DialogTrigger> 

 
  <DialogContent className='bg-white '> 
    <DialogHeader className='overflow=x=scr'>
      <DialogTitle>
        <SectionHeading  id="pricing-title">
          Pricing
        </SectionHeading>
        </DialogTitle>
      <DialogDescription>
       The right price for you, whoever you are
      </DialogDescription>
    <DialogDescription>
       <div className='bg-slate-100 rounded-xl p-4 m-1'>
       
        <p className= {clsx('ml-1 mt-1 text-4xl tracking-tight',)}>  <span className='text-[1.75rem] leading-tight'> ₹</span>4999</p>
        <p className='font-semibold text-xl pl-2'>Indian</p>
        <p>This course isnt just an expense, its an investment in your career and earning potential.</p>
        <Button
          href="https://pages.razorpay.com/ZepDAM"
          className="mt-4 "
        >
          Buy Now
        </Button>
       </div>
         <div className='bg-slate-100 rounded-xl p-4 m-1'>
       
        <p className= {clsx('ml-1 mt-1 text-4xl tracking-tight',)}>  <span className='text-[1.75rem] leading-tight'> $</span>70</p>
        <p className='font-semibold text-xl pl-2'>Internation</p>
        <p>Dont miss out on your chance to master data analytics and secure your future.</p>
        <Button
          href="https://pages.razorpay.com/ZepDAMINT"
          className="mt-4 "
        >
          Buy Now
        </Button>
       </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  )
}

export default Pbutton