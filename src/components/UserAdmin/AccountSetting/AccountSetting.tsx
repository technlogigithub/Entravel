import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import DeleteAccountDialog from "./DeleteAccountDialog";
import { useState } from "react";

const AccountSetting = () => {
    const [isdeleteOpen, setIsdeleteOpen] = useState(false);
  return (
    <>
    <div className="flex flex-col lg:max-w-2xl justify-center max-xlg:mt-8 max-xlg:ml-0 max-xl:ml-10 justify-self-center">
      <h2 className="text-lg font-medium pb-6 text-black">Account settings</h2>
      <div className="bg-white px-3 py-4 md:p-8 border border-input rounded w-full">
        <div>
          <div>
            <Label className="text-base text-primary pb-4">
              Email settings
            </Label>
            <Input
              type="text"
              placeholder="Enter First name"
              className="w-full rounded bg-gray-200"
              value="andrew.jones@mail.com"
              readOnly
              disabled
            />
          </div>
          <Separator className="my-8" />
          <div>
            <Label className="text-base text-primary pb-4">
              Change password
            </Label>
            <Input
              type="password"
              placeholder="Your current password"
              className="w-full rounded bg-white mb-4"
            />
            <Input
              type="password"
              placeholder="New password"
              className="w-full rounded bg-white mb-4"
            />
            <Input
              type="password"
              placeholder="Confirm new password"
              className="w-full rounded bg-white mb-4"
            />
          </div>

          <Button
            variant="outline"
            size="lg"
            className="w-full rounded-xl mt-3 border-black bg-transparent shadow-none text-black"
          >
            Reset your password
          </Button>

          <Separator className="my-8" />
          <div>
            <Label className="text-base text-primary pb-4">Notifications</Label>
            <p className="text-sm">
              Here you can select whether you wish to receive e-mails with our
              latest deals and offers, and/or travel inspiration
            </p>
            <div className="flex items-center space-x-2 mt-6">
              <Checkbox id="offerterms" />
              <label
                htmlFor="offerterms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
              >
                I love deals — please send me Entravel's latest deals and offers!
              </label>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <Checkbox id="inspireme" checked/>
              <label
                htmlFor="inspireme"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
              >
                I’m a traveler — please inspire me!
              </label>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="mb-8">
            <Label className="text-base text-primary pb-4">Account</Label>
            <p className="text-sm">
            You will receive our e-mails about prices, discounts, best prices and many others offers for you and your family. Also offers for you and your family…
            </p>
            </div>
            <Button variant="link" size="lg" className="!h-auto !p-0" onClick={() => setIsdeleteOpen(true)}>Delete account</Button>
        </div>
      </div>
    </div>
    {isdeleteOpen && <DeleteAccountDialog open={isdeleteOpen} setOpen={setIsdeleteOpen}/>}
    </>
  );
};

export default AccountSetting;
