import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
const VerifyEmail = () => {
    return (
        <div className="py-6 px-4 sm:px-14 sm:py-10 bg-white card-shadow rounded-sm flex flex-col items-center w-full">
            <h4 className="text-2xl text-primary font-medium pb-4">Verify your email</h4>
            <p className="text-sm font-medium text-center">Please enter the code we sent to johnwick@gmail.com 
            to confirm your email.</p>
            <div className="mt-10 w-full">
              <div>
                <Label htmlFor="verification" className="text-black-secondary uppercase">verification code </Label>
                <Input type="text" placeholder="Enter verification code"/>
              </div>
             
              <Button className="w-full mt-8 rounded-xl h-12" size="lg">Continue</Button>
            </div>
            <Link to="/login" className="flex mt-8 justify-center text-sm font-medium text-blue hover:text-blue/80">Back to Sign in</Link>
           
        </div>
      )
}

export default VerifyEmail