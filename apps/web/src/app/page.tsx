'use client'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Separator } from "@/components/ui/separator"
import Article from '@/components/article';

export default function Page(): JSX.Element {
  return (
    <main dir='rtl' className="grid grid-rows-[2fr_3fr] grid-flow-row-dense items-start min-h-screen w-full">
      <div className="items-start flex justify-self-end justify-center w-full overflow-hidden">
        <div className="font-lateef text-5xl font-normal text-black w-full md:w-2/5 text-right">
          <TypeAnimation
            sequence={[
              // Initial phrase
              'الناشر :',
              1000,
              // Building up phrases
              'الناشر :\nمقالات',
              500,
              'الناشر :\nمقالات | آراء',
              500,
              'الناشر :\nمقالات | آراء | تدوينات',
              1000,
              // Full set of phrases
              'الناشر :\nمقالات | آراء | تدوينات\nتأملات | خواطر | أفكار',
              1500,
              'الناشر :\nرحلة في عالم المعرفة',
              1000,
              // Finale
              'الناشر :\nنافذة على عالم الإبداع',
              2000,
              // Reset
              '',
              1000,
            ]}
            wrapper="div"
            speed={10}
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
      <div className='flex flex-col justify-start overflow-auto'>
        <Separator className="mb-4" />
        <div className='flex justify-between w-full'>
          <div className='flex flex-col gap-5 flex-grow'>
            <Article />
            <Article />
            <Article />
          </div>
          <div className='w-1/4'>
            wawa
          </div>
        </div>
      </div>
    </main>
  );
}