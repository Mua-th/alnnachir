'use client'
import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { CircleUser, Menu, Package2, Search, SquarePen } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from '@/hooks/useAuth'
import { signOut } from 'firebase/auth'
import logoutUser from '../../../../../packages/fireb/auth'

const header = () => {
    const { user, loading } = useAuth();
    const handlelogout = async () => {
        await logoutUser()


    }
    if (loading) {
        // Optionally render a loading spinner
        return <div>Loading...</div>;
      }
  return (
    <div className='w-full' dir='rtl'>
        
        
        <header className="sticky top-0 font-lateef  flex h-16  items-center  gap-4 border-b bg-background px-4 md:px-24">
            
        <nav className="hidden md:flex md:flex-row items-center justify-between w-full md:text-2xl flex-col gap-6 text-lg font-medium ">
        <div>
                <span className='text-3xl'>
                    الناشر
                </span>
            </div>
            <div className='md:flex md:flex-row md:items-center md:justify-center md:gap-5  lg:gap-6'>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            فنون
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            سياسة
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            علوم
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            تكنولوجيا
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            فلسفة
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            رياضة
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            اقتصاد
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            صحة
          </Link>
          
          </div>
         { !user ? (
            <div className='flex flex-row gap-2  '>
                
                    <span className='text-muted-foreground hover:text-foreground text-3xl'>
                        <Link href="/auth/login">تسجيل</Link>
                    </span>
                    
                
          </div>):

             
          (<div className=''>
          
          <DropdownMenu dir='rtl'>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='font-lateef ' align="end" >
              <DropdownMenuLabel className='text-xl'>حسابي</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-xl'>إعدادات</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='text-xl' onClick={handlelogout}>خروج</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>)}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        
       
        
       
      </header>
    </div>
  )
}

export default header