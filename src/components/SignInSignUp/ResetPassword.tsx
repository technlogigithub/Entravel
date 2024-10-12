import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

const ResetPassword = () => {
    return (
        <div className="py-6 px-4 sm:px-14 sm:py-10 bg-white card-shadow rounded-sm flex flex-col items-center w-full">
            <h4 className="text-2xl text-primary font-medium pb-4">Reset password</h4>
            <p className="text-sm font-medium text-center max-w-80 mx-auto">Enter your email address and we'll send you 
            a link to reset your password.</p>
            <div className="mt-10 w-full">
              <div>
                <Label htmlFor="email" className="text-black-secondary uppercase">Email ADDRESS </Label>
                <Input type="email" placeholder="Enter your email"/>
              </div>
             
              <Button className="w-full mt-8 rounded-xl h-12" size="lg">Reset</Button>
            </div>
            <Link to="/login" className="flex mt-8 justify-center text-sm font-medium text-blue hover:text-blue/80">Back to Sign in</Link>
           
        </div>
      )
}

export default ResetPassword