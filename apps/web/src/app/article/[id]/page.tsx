'use client'
import Tooltip from '@/components/comp/tooltip'
import { AnimatedTooltip } from '@/components/ui/animated-tooltip'
import { Separator } from '@/components/ui/separator'
import { Bookmark, Ellipsis, HeartHandshake, MessageCircle, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [isLiked,setIsliked] =  useState(false)

    const handleLikeClick = ()=>{
        setIsliked(!isLiked)
    }
    return (
        <div dir='rtl' className='mx-auto container w-[60%]'>
            <div >
                <div className=''>
                    <h1 className="md:text-6xl text-4xl font-lateef font-bold">هذا عنوان المقال الكبير</h1>

                    <span className="text-muted-foreground font-katib md:text-xl overflow-hidden text-base w-3/4">هدا وصف للمقال يتضمن خلاصة او فكرة عامة عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه</span>


                </div>
                <div className=' mt-6 flex items-start justify-start gap-2'>
                    <div className="flex"><Tooltip ></Tooltip></div>
                    <div className=" flex flex-col items-start justify-start">
                        <Link href={"users/mouad"} className='text-lg font-semibold font-lateef'>
                            معاذ الغربي</Link>

                        <span className="text-muted-foreground font-katib text-base mt-[-8px]"> نشر 26 اكتوبر 2024  </span>


                    </div>


                </div>
                <div className="flex justify-between font-lateef text-lg mb-2  " dir="rtl">

                    <div className="flex gap-4 items-center ">
                        <div className="flex  justify-center hover:cursor-pointer text-muted-foreground  items-center ">
                            <HeartHandshake fill={ `${isLiked ? 'foreground':'#ffff'}`} strokeWidth={1} className={`  size-7 py-1 ${isLiked ? `text-white ` : 'text-muted-foreground hover:text-foreground'} `} onClick={handleLikeClick} />
                            <span className="text-2xl  font-extralight"> 20</span>



                        </div >
                        <div className="flex  justify-center  hover:cursor-pointer text-muted-foreground hover:text-foreground ">
                            <MessageCircle strokeWidth={1} className=" size-7 py-1 " />
                            <span className="text-2xl font-extralight"> 20</span>

                        </div>
                    </div>
                    <div className="flex gap-1 text-muted-foreground hover:cursor-pointer  ">
                        <Bookmark strokeWidth={1}  className=" size-7 py-1 hover:text-foreground" />
                        <Ellipsis strokeWidth={1} className=" size-7 py-1  hover:text-foreground " />
                    </div>

                </div>

            </div>
            <div className='mb-8'>
                <Separator></Separator>
            </div>

            <div className='flex flex-col gap-10 '>
                <div className="w-full flex justify-center items-center">
                    <img className='w-full max-h-96 ' src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*VrI2xK0zD_qD8dVj.png" alt="" />
                </div>

                <div className='flex flex-col gap-8 '>

                    <div className="flex flex-col gap-2">
                        <h2 className='md:text-4xl text-2xl font-lateef font-bold'>هذا عنوان الفقرة</h2>
                        <p className='md:text-lg text-base font-ibm '>
                            اكمل من عندك  هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='md:text-4xl text-2xl font-lateef font-bold'>هذا عنوان الفقرة</h2>
                        <p className='md:text-lg text-base font-ibm '>
                            اكمل من عندك  هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال
                            اكمل من عندك  هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقر ن المقال
                        </p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className='md:text-4xl text-2xl font-lateef font-bold'>هذا عنوان الفقرة</h2>
                        <p className='md:text-lg text-base font-ibm '>
                            اكمل من عندك  هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال
                            اكمل من عندك  هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. هذا هو الوصف الخاص لهذه الفقرة التي تتضمن تفاصيل معلومات عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه. عن المقال
                        </p>
                    </div>

                </div>


            </div>



        </div>
    )
}

export default page