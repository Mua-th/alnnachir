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
import { registerUser, signInWithGoogle } from "../../../../../../packages/fireb/auth"
import { useState } from "react"
import { useRouter } from "next/navigation"


export const description =
  "A sign up form with first name, last name, email and password inside a card. There's an option to sign up with GitHub and a link to login if you already have an account"
const  LoginForm =()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const  handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        await registerUser(email, password);
       
      };

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
        <CardTitle className=" text-right text-4xl">اشتراك</CardTitle>
        <CardDescription className="text-right text-2xl">
          أدخل معلوماتك لإنشاء حسابك
        </CardDescription>
      </CardHeader>
      <CardContent>
        
        <div className="grid gap-2 " >
         
          <div className="grid  ">
            <Label htmlFor="email" className="text-lg">البريد</Label>
            <Input
            className="text-lg"
              id="email"
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="ahmedmouhcine@xxx.com"
              required
            />
          </div>
          <div className="grid  ">
            <Label htmlFor="password" className="text-lg">كلمة السر</Label>
            <Input   placeholder="*******" className="text-lg" id="password" type="password" onChange={(e)=>setPassword(e.target.value)} value={password} />
          </div>
          <Button onClick={handleSubmit} className="w-full text-lg">
            إنشاء
          </Button>
          
          <Button onClick={handleGoogleSignIn} variant="outline" className="w-full text-lg">
          google سجل بواسطة 
          </Button>
        </div>
        <div className="mt-4 text-center text-lg ">
          لديك حساب ؟{" "}
          <Link href="/auth/login" className="underline">
            سجل الدخول
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoginForm