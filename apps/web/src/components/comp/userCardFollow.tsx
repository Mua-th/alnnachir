import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'




const userCardFollow = () => {
    return (
        <div className='flex gap-2 font-lateef ' dir='rtl'>
            <div className='flex gap-4 w-[75%]'>
                <div className=' flex justify-center'>
                    <Avatar className="size-8">
                        <AvatarImage src="https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/463010" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className='overflow-clip'>
                    <h1 className='text-xl font-bold'>الغربي</h1>
                    <span className='text-muted-foreground text-sm px-2 font-katib'>
                    هنا وصف للمسخدم ة غالبا مايكون مجال اختصاصه او  مايعمله
                    </span>
                </div>

            </div>

            <div className='w-[20%] mr-2'>
                <Button className='rounded-full w-full px-0 text-xl font-thin border-muted-foreground py-0 h-8' variant={"outline"} size={"default"}>
                    تابع
                </Button>
            </div>
        </div>
    )
}

export default userCardFollow

