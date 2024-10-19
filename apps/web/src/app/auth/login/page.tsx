
'use client'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { loginUser, signInWithGoogle } from "../../../../../../packages/fireb/auth"
import {useRouter} from "next/navigation"

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async(email: string,password: string)=>{
       const user =  await loginUser(email, password)
        if (user) {
          router.push("/")
          console.log(user+" logged")
        }
       
    }
    const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle();
        router.push('/'); // Redirect after Google sign-in
      } catch (error) {
        console.error("Error during Google sign-in:", error);
      }
    };
  return (
    <Card className="mx-auto max-w-sm font-lateef " dir="rtl">
      <CardHeader>
        <CardTitle className="text-4xl">سجل الدخول</CardTitle>
        <CardDescription className="text-2xl">
           و غص في عالمك المفضل 
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 ">
          <div className="grid  ">
            <Label htmlFor="email" className="text-lg">البريد</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
          </div>
          <div className="grid  " >
            <div className="flex flex-row items-center  ">
              <Label htmlFor="password" className="text-lg">كلمة السر</Label>
              <Link href="#" className="mr-auto  text-lg underline " >
                نسيت كلمة المرور ؟
              </Link>
            </div>
            <Input value={password} onChange={(e)=>setPassword(e.target.value)} className="text-lg" id="password" type="password" required />
          </div>
          <Button onClick={()=>handleSubmit(email,password)} className="w-full text-lg">
            سجل
          </Button>
          <Button variant="outline" onClick={handleGoogleSignIn} className="w-full text-lg">
          Google سجل بواسطة  
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          ليس لديك حساب ؟{" "}
          <Link href="/auth/register" className="underline">
            اشتراك
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}