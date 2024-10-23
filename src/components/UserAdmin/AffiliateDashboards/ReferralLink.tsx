import { IconLink } from "@/components/iocns/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IconCopy } from "@tabler/icons-react";

const ReferralLink = () => {
  return (
    <div className="p-6 sm:py-4 sm:px-4 2xlg:px-10 bg-blue-50 rounded shadow-six border border-input flex flex-col items-center justify-center text-center">
      <img src="/icons/Travel_with.png" alt="diamond" className="w-6"/>
      <h4 className="text-lg font-semibold pt-3  pb-3 uppercase">your Referral Link</h4>
      <p className="text-black-secondary text-base font-normal">
        Share your unique invite code with your friends and network.
      </p>
      <p className="text-black-secondary text-base font-medium py-4">
        Expires in 11:59:59
      </p>
      <div className="flex gap-6 sm:gap-2 w-full max-sm:flex-wrap">
        <div className="relative w-full">
          <Input
            type="text"
            className="text-base font-semibold text-black  w-full pr-40 bg-white  rounded-xl h-12 "
            value="9yk65223"
          />
          <Button variant="link" className="gap-3 text-base absolute right-0 top-1 text-primary hover:!text-blue">
            <IconCopy className="text-blue"/>
            Copy code
          </Button>
        </div>
        <Button className="gap-3 rounded-xl min-w-36 px-4 max-sm:w-full max-sm:h-12" size="lg">
          <IconLink/>
          Copy link
        </Button>
      </div>
    </div>
  );
};

export default ReferralLink;
