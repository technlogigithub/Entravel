import { IconEyeFilled, IconEyeOff } from "@tabler/icons-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Checkbox } from "../ui/checkbox";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="py-6 px-4 sm:p-10 bg-white card-shadow rounded-sm">
      <p className="text-sm font-medium text-center">
        As an invited member, you’ll enjoy access to exclusive deals on hotel
        rooms everywhere. Use your invitation code to unlock these benefits and
        start your journey with us.
      </p>
      <div className="mt-10">
        <div className="mb-6">
          <Label htmlFor="email" className="text-black-secondary uppercase">
            Email ADDRESS <span className="pl-0.5">*</span>{" "}
          </Label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <div className="mb-6">
          <Label htmlFor="password" className="text-black-secondary uppercase">
            PASSWORD <span className="pl-0.5">*</span>
          </Label>
          <div className="relative">
            <Input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Enter your password"
              className="pr-6"
            />
            <Button
              className="absolute top-1/2 -translate-y-1/2 right-3 p-0.5 h-auto rounded-full"
              variant={"ghost"}
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <IconEyeOff className="size-5" />
              ) : (
                <IconEyeFilled className="size-5" />
              )}
            </Button>
          </div>
        </div>
        <div className="mb-6">
          <Label
            htmlFor="invitation"
            className="text-black-secondary uppercase"
          >
            invitation code <span className="pl-0.5">*</span>{" "}
          </Label>
          <Input type="text" placeholder="Paste your code here" />
        </div>
        <div className="flex items-center space-x-3">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
          >
           I want to stay up to date with Entravel's latest offers
          </label>
        </div>
        <Button className="w-full mt-8 rounded-xl h-12" size="lg">
        Create an account
        </Button>
      </div>
      <p className="text-center my-8">
      By creating an account, I agree to the  
        <Link
          to="/"
          className="pl-0.5 text-sm font-medium text-blue hover:text-blue/80"
        >
          Terms of Use,
        </Link>
        <Link
          to="/"
          className="pl-0.5 text-sm font-medium text-blue hover:text-blue/80"
        >
          Privacy policy 
        </Link> and
        <Link
          to="/"
          className="pl-0.5 text-sm font-medium text-blue hover:text-blue/80"
        >
           Terms and Conditions
        </Link>
      </p>
      <p className="text-center">
      Already have an account? 
        <Link
          to="/login"
          className="pl-1 text-sm font-medium text-blue hover:text-blue/80"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
