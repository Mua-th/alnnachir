'use client'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Separator } from "@/components/ui/separator"
import Article from '@/components/article';

export default function Page(): JSX.Element {
  return (
    <main dir='rtl' className="grid grid-rows-2 justify-normal items-center  min-h-screen w-full">
      <div className="items-start flex  justify-center h-full w-full  ">
      <div className=" font-lateef text-5xl font-normal text-black w-full md:w-2/5 text-right  h-5/6" >
        
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
      <div className='items-start flex flex-col justify-start h-full '>
      <Separator></Separator>
      <div className='flex justify-between w-full '>
        <div className='flex flex-col gap-5'>
        <div className=''>
        <Article></Article>

          </div>
        <div className=''>
        <Article></Article>

          </div>

        <div className=''>
          <Article></Article>
          </div>
   
        </div>
        <div>
          wawa
        </div>
   
      
      </div>
      </div>
    
    
    </main>
  );
}