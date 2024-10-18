import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BiSolidLike } from "react-icons/bi";
import React from 'react'
import { FaComment } from "react-icons/fa";
import { Separator } from "./ui/separator";


const article = () => {
  return (
    <div dir="rtl" className='flex flex-col gap-3 '>
        <div className="flex justify-start items-center gap-2">
            <Avatar>
                <AvatarImage sizes="1" src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span>
                name
            </span>
        </div>
        <div>
            <h1  className="text-4xl font-lateef font-bold">هذا عنوان المقال الكبير</h1>
            <span className="text-muted-foreground font-katib text-xl">هدا وصف للمقال يتضمن خلاصة او فكرة عامة عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه</span>
        </div>
        <div className="flex justify-between font-lateef text-lg" dir="rtl">
            <div className="flex gap-4 items-center text-muted-foreground">
                <div>6 ساعات</div>
                <div className="flex  justify-center  ">
                <BiSolidLike  className=" size-6 py-1 "/>
                <span className=""> 20</span>
               
                    
                    
                </div >
                <div className="flex  justify-center  ">
                    <FaComment className=" size-6 py-1 " />
                    <span className=""> 20</span>

                    </div>
            </div>
            <div></div>
            
        </div>
       
    <Separator></Separator>
    </div>
  )
}

export default article