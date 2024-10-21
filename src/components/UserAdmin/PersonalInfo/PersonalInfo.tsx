import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PersonalInfo = () => {
  return (
    <div className="flex flex-col lg:max-w-2xl justify-center max-xlg:mt-8 max-xlg:ml-0 max-xl:ml-10">
      <h2 className="text-lg font-medium pb-6 text-black">Personal Info</h2>
      <div className="bg-white px-3 py-4 md:p-8 border border-input rounded w-full">
        <h2 className="text-lg font-medium pb-5">Andrew Jons</h2>
        <div>
          <div className="mb-5 grid 2xs:flex gap-4">
            <div className="basis-1/4">
              <Label className="text-primary uppercase">Title</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Title" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="india">Mr.</SelectItem>
                    <SelectItem value="us">Miss</SelectItem>
                    <SelectItem value="itly">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="basis-3/4">
              <Label className="text-primary uppercase">First name</Label>
              <Input
                type="text"
                placeholder="Enter First name"
                className="w-full rounded bg-white rounded-s-none"
              />
            </div>
          </div>
          <div className="mb-5">
              <Label className="text-primary uppercase">Last name</Label>
              <Input
                type="text"
                placeholder="Last name"
                className="w-full rounded bg-white"
              />
            </div>
            <div className="mb-5">
              <Label className="text-primary uppercase">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                className="w-full rounded bg-white"
              />
            </div>

            <div className="mb-5">
              <Label className="text-primary uppercase">Phone number*</Label>
              <div className="flex">
                <Select>
                  <SelectTrigger className="w-16 rounded-e-none">
                    <SelectValue placeholder="+1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="india">+1</SelectItem>
                      <SelectItem value="us">+2</SelectItem>
                      <SelectItem value="itly">+91</SelectItem>
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

            <div className="mb-5">
              <Label className="text-primary">Country of residence</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country of residence" />
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

            <Button size="lg" className="w-full rounded-xl mt-3" disabled>Save changes</Button>

        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
