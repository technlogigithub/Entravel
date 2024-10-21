import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PaymentOption from "./PaymentOption";

const PaymentForm = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <div className="pb-10">
      <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-primary text-sm font-semibold mb-1.5">
        <span className="md:hidden">2</span> <span className="max-md:hidden">1</span>
      </div>
      <h3 className="text-base font-medium pb-1">Room 1: Double deluxe</h3>
      <p className="text-sm text-text pb-4">
        Please give us the name of one of the people staying in this room
      </p>
      <p className="text-sm text-blue font-medium">
        Guest personal information{" "}
      </p>
      <div className="mt-3">
          <div className="border-b border-dotted border-input pb-2 mb-5">
            <div className="mb-4">
              <Label className="text-primary">Email*</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded bg-white"
              />
            </div>
            <div className="mb-4 grid grid-cols-2">
              <div>
                <Label className="text-primary">First name*</Label>
                <Input
                  type="text"
                  placeholder="Enter First name"
                  className="w-full rounded bg-white rounded-e-none"
                />
              </div>
              <div>
                <Label className="text-primary">First name*</Label>
                <Input
                  type="text"
                  placeholder="Enter First name"
                  className="w-full rounded bg-white rounded-s-none"
                />
              </div>
            </div>
            <div className="mb-4">
              <Label className="text-primary">Resindence*</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="us">U.S.</SelectItem>
                    <SelectItem value="itly">Itly</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <Label className="text-primary">Phone number*</Label>
              <div className="flex">
                <Select>
                  <SelectTrigger className="w-16 rounded-e-none">
                    <SelectValue placeholder="+1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="india">+1</SelectItem>
                      <SelectItem value="us">-2</SelectItem>
                      <SelectItem value="itly">-91</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded bg-white rounded-s-none w-[calc(100%_-_64px)]"
                />
              </div>
            </div>
            <div className="mb-4">
              <Label className="text-primary">Bedding request (optional)</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select preferred bed type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="bedtypes">
                      Select preferred bed type
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4">
              <Label className="text-primary">Special request (optional)</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Special request (optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="bedtypes">
                      Special request (optional)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
      </div>

      {/* Step Two */}
      <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-primary text-sm font-semibold mb-1.5">
      <span className="md:hidden">3</span> <span className="max-md:hidden">2</span>
      </div>
      <h3 className="text-base font-medium pb-1">Select payment method</h3>
      <p className="text-sm text-text md:pb-4">
        Availability of payment methods dependent on billing country
      </p>
      <div className="mt-5">
        <PaymentOption onFinish={onFinish}/>
      </div>
    </div>
  );
};

export default PaymentForm;
