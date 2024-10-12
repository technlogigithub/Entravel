import { IconEyeFilled, IconEyeOff } from "@tabler/icons-react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"
import { useState } from "react"
import { Link } from "react-router-dom"


const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  return (
    <div className="py-6 px-4 sm:p-10 bg-white card-shadow rounded-sm">
        <p className="text-sm font-medium text-center">As an invited member, you’ll enjoy access to exclusive deals on hotel rooms everywhere. Use your invitation code to unlock these benefits and start your journey with us.</p>
        <div className="mt-10">
          <div className="mb-6">
            <Label htmlFor="email" className="text-black-secondary uppercase">Email ADDRESS </Label>
            <Input type="email" placeholder="Enter your email"/>
          </div>
          <div>
            <Label htmlFor="password" className="text-black-secondary uppercase">PASSWORD </Label>
            <div className="relative">
              <Input type={isPasswordVisible ? "text" :  "password"} placeholder="Enter your password" className="pr-6"/>
              <Button className="absolute top-1/2 -translate-y-1/2 right-3 p-0.5 h-auto rounded-full" variant={"ghost"} onClick={togglePasswordVisibility}>
               {isPasswordVisible ? <IconEyeOff className="size-5"/> : <IconEyeFilled className="size-5"/>}
              </Button>
            </div>
          </div>
          <Button className="w-full mt-8 rounded-xl h-12" size="lg">Sign In</Button>
        </div>
        <Link to="/reset-password" className="flex my-8 justify-center text-sm font-medium text-blue hover:text-blue/80">Forgot your password?</Link>
        <p className="text-center">
        Don't have an account? <Link to="/create-account" className="pl-1 text-sm font-medium text-blue hover:text-blue/80">Create an account</Link>
        </p>
    </div>
  )
}

export default SignIn