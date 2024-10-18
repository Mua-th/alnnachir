'use client'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Separator } from "@/components/ui/separator"

export default function Page(): JSX.Element {
  return (
    <main dir='rtl' className="flex flex-col justify-normal items-center  min-h-screen w-full">
      <div className="items-center flex  justify-center w-full ">
      <div className=" font-lateef text-5xl font-normal text-black w-full md:w-2/5 text-right  h-5/6" >
        
        <TypeAnimation
          sequence={[
            'الناشر : ',
            1000,
            'الناشر : \n',
            1000,
            'الناشر : \nمقالات , ارآء  ,',
            1000,
            'الناشر : \nمقالات , ارآء , \n',
            1000,
            'الناشر : \nمقالات , ارآء ,\nتدوينات و تأملات ... ',
            1000,
            'الناشر : \nمقالات , ارآء ,\nتدوينات و تأملات ...  .',
            1500,
            'الناشر : \nمقالات , ارآء , \n',
            1000,
            'الناشر : \n',
            1000,
            '',
            2000,
          ]}
          wrapper="span"
          speed={10}
          preRenderFirstString={true}
          style={{ direction: 'rtl', display: 'inline-block', whiteSpace: 'pre-line', textAlign: 'right' }}
          repeat={Infinity}
        />
        
        
        
        
      </div>
      </div>
      <div className='flex gap-3 justify-around font-lateef '>
        <div className='h-auto'>
          
          </div>
      </div>
    </main>
  );
}