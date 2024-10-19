'use client'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Separator } from "@/components/ui/separator"
import Article from '@/components/comp/article';
import UserCardFollow from '@/components/comp/userCardFollow';

export default function Page(): JSX.Element {
  return (
    <main dir='rtl' className="grid grid-rows-[1.5fr_3fr]  items-start min-h-screen w-full">
      <div className="items-start flex  justify-center w-full ">
        <div className="font-lateef -tracking-tight flex flex-col text-4xl font-light text-muted-foreground w-full md:w-2/5 text-right">
        <div className='text-7xl font-bold text-foreground'>
          <h1>الناشر :</h1>
          <p className='text-6xl'>   رحلة في عالم المعرفة &ensp; .</p>
        </div>
        <TypeAnimation
            sequence={[
              // Initial phrase
              // Building up phrases
             
              // Full set of phrases
              '  مقالات , آراء و تأملات  ...  .',
              1500,
             
              
              // Reset
              '',
              3000,
            ]}
            wrapper="div"
            speed={5}
            deletionSpeed={20}
            preRenderFirstString={true}
            style={{
              direction: 'rtl',
              display: 'inline-block',
              whiteSpace: 'pre-line',
              textAlign: 'right',
            }}
            repeat={Infinity}
          />
        </div>
      </div>
      <div className='flex flex-col    '>
        <Separator className="mb-4" />
        <div className='flex  flex-row justify-between gap-4 w-full p-2'>
          <div className='flex flex-col gap-5 flex-grow px-4'>
            <Article />
            <Article />
            <Article />
          </div>
          <div className=' hidden md:flex px-4 md:w-'>
          <Separator orientation='vertical' ></Separator>
            <div className='flex gap-2 flex-col px-4 '>
               <div>
                <UserCardFollow />
               </div>
               <div><UserCardFollow /></div>
               <div><UserCardFollow /></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}