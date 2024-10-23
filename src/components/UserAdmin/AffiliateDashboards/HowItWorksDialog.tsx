import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { IconInfoCircleFilled } from "@tabler/icons-react";
const HowItWorksDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" size="lg" className="gap-2 !p-0 !h-auto">
          Learn how it works <IconInfoCircleFilled />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] xlg:max-w-[800px] overflow-y-auto max-h-[90%] max-sm:p-4">
        <div>
          <h2 className="text-2xl font-medium text-black pb-6">How it works</h2>
          <p className="text-base font-normal pb-5 sm:pb-8">
            As an affiliate, you can monetise your audience by encouraging them
            to create an account on Entravel with your referral links. As part
            of our invite-only platform, every sign-up and booking they make is
            a chance for you to earn.
          </p>
          <p className="text-base font-normal">
            Once signed up with your link, that user account is connected to
            you. Every time your referred user books a hotel through Entravel,
            you earn a large part of Entravels net commission on the booking.
          </p>
          <div className="mt-8">
            <img
              src="./howItWorks.jpg"
              alt="howitworks"
              className="max-sm:hidden"
            />
            <img
              src="./mobile_howitwork.jpg"
              alt="howitworks"
              className="sm:hidden"
            />
          </div>
          <Separator className="my-8" />
          <h2 className="text-2xl font-medium text-black pb-6">
            Earn commissions
          </h2>
          <p className="text-base font-normal pb-8">
            Become an affiliate and receive commissions that are equal to a
            percentage of the booking deals from your referrals.
          </p>
          <div className="sm:flex justify-between gap-4 items-center">
            <h3 className="text-[32px] font-medium">30%</h3>
            <p className="text-lg font-medium text-black">
              of our commission will go to the direct affiliate of a booking
            </p>
          </div>
          <Separator className="my-8" />
          <div className="sm:flex justify-between gap-4 items-center">
            <h3 className="text-[32px] font-medium">15%</h3>
            <p className="text-lg font-medium text-black">
              of our commission will go to the 2nd layer affiliate of a booking
            </p>
          </div>
          <Separator className="my-8" />
          <p className="text-lg font-normal pb-6">
            Let’s take a look at the example:
          </p>
          <div className="bg-blue-100 p-6 rounded-lg flex gap-4 items-center justify-between max-sm:flex-wrap">
            <div className="sm:pl-6 max-sm:basis-full">
              <h6 className="text-lg font-medium">
                Booking with a total value
              </h6>
              <h3 className="text-[32px] font-medium">1100 USDT</h3>
              <p className="text-base font-normal">10% our commission</p>
            </div>

            <div className="flex gap-4 items-center max-md:basis-full">
              <div className="max-sm:hidden">
                <img src="./workShape.png" alt="shape" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="py-4 px-5 rounded bg-white text-black w-full">
                  <h4 className="text-base sm:text-lg font-normal">
                    Direct affiliate will receive
                  </h4>
                  <div className="flex gap-2 items-center mt-4">
                    <img
                      src="./icons/crypto_money.png"
                      alt="icon"
                      className="w-8"
                    />
                    <p className="text-2xl font-medium">USDT 30</p>
                  </div>
                </div>
                <div className="py-4 px-5 rounded bg-white text-black w-full">
                  <h4 className="text-base sm:text-lg font-normal">
                    2nd layer affiliate will receive{" "}
                  </h4>
                  <div className="flex gap-2 items-center mt-4">
                    <img
                      src="./icons/crypto_money.png"
                      alt="icon"
                      className="w-8"
                    />
                    <p className="text-2xl font-medium">USDT 15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HowItWorksDialog;
