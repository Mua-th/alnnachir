import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BiSolidLike } from "react-icons/bi";
import React from 'react'
import { FaComment } from "react-icons/fa";
import { Separator } from "../ui/separator";
import { Bookmark, Ellipsis } from "lucide-react";


const article = () => {
    return (
        <div dir="rtl" className='flex flex-col gap-3 h-52 overflow-hidden font-lateef '>
            <div className="flex justify-start items-center gap-2 ">
                <Avatar className="size-6">
                    <AvatarImage  src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="text-xl">
                    معاد
                </span>
            </div>
            <div className="flex gap-2 ">
                <div className="flex gap-2  flex-col w-2/3 ">
                    <div className="">
                        <h1 className="md:text-4xl text-2xl font-lateef font-bold">هذا عنوان المقال الكبير</h1>
                        <span className="text-muted-foreground font-katib md:text-xl overflow-hidden text-base w-3/4">هدا وصف للمقال يتضمن خلاصة او فكرة عامة عن المقال ويعرض بخط صغير ولون ثانوي و خط كاتبه</span>
                    </div>
                    <div className="flex justify-between font-lateef text-lg  " dir="rtl">

                        <div className="flex gap-4 items-center text-muted-foreground">
                            <span className="text-sm md:text-lg">6 ساعات</span>
                            <div className="flex  justify-center  ">
                                <BiSolidLike className=" size-6 py-1 " />
                                <span className=""> 20</span>



                            </div >
                            <div className="flex  justify-center  ">
                                <FaComment className=" size-6 py-1 " />
                                <span className=""> 20</span>

                            </div>
                        </div>
                        <div className="flex gap-1 text-muted-foreground hover:cursor-pointer  ">
                            <Bookmark className=" size-6 py-1 hover:text-foreground" />
                            <Ellipsis className=" size-6 py-1  hover:text-foreground " />
                        </div>

                    </div>

                </div>
                <div className="w-1/3 h-full flex justify-center items-center ">
                    <img className="  " width={120} height={120} src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*VrI2xK0zD_qD8dVj.png" alt="" />
                </div>
            </div>


            <Separator className="w-11/12"></Separator>
        </div>
    )
}

export default article