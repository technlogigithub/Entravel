import { IconAvalance } from "@/components/iocns/Icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { IconArrowNarrowRight, IconCheck } from "@tabler/icons-react";

const CancelBookingDialog = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button size="lg" className="w-full rounded-xl mt-6 bg-red-extradark">
          Cancel Booking
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-[456px] overflow-y-auto max-h-[90%] max-sm:p-4 p-7">
        <div>
          <h2 className="text-[22px] font-semibold">Cancel booking</h2>
            <div className="bg-gray-light rounded text-sm font-normal flex gap-1 items-center p-3 mt-6">
               <IconCheck className="text-green"/>  Free cancellation until 11 April 2024 21:59 GMT
            </div>
            <div className="flex gap-6 items-center my-8">
                <div>
                    <p className="text-textExtraLight text-xs font-semibold pb-1">You’ve paid</p>
                    <h4 className="text-xl sm:text-2xl font-medium pb-2">2,559.3 USDT</h4>
                    <div className="flex items-center gap-2">
                       <IconAvalance/> Avalanche
                    </div>
                </div>
                <div><IconArrowNarrowRight className="size-5 text-textExtraLight"/></div>
                <div>
                    <p className="text-textExtraLight text-xs font-semibold pb-1">Your refund</p>
                    <h4 className="text-xl sm:text-2xl font-medium pb-2">2,557.3 USDT</h4>
                    <div className="flex items-center gap-2">
                       <IconAvalance/> Avalanche
                    </div>
                </div>
            </div>
            <div>
                <p className="text-textExtraLight text-xs font-semibold pb-3">Refund details:</p>
                <div className="flex flex-col gap-4">
                    <div className="text-sm font-normal flex justify-between gap-4"> <p>Service fee </p><p>1.00 USDT</p></div>
                    <div className="text-sm font-normal flex justify-between gap-4"> <p>Gas fee</p> <p>1.00 USDT</p></div>
                </div>
                <Separator className="my-4"/>
                <div className="text-base font-medium flex justify-between gap-4 items-center mb-8"> <p>Total refund </p><p className="text-lg font-semibold">2,557.3 USDT</p></div>
                <p className="text-xs font-medium text-textExtraLight">Your booking will be cancelled immediately, and you will receive a refund using your original payment method within ten business days.</p>
            </div>
            <div className="flex gap-4 mt-8 max-2xs:flex-wrap">
                <Button size="lg" variant="secondary" className="rounded-xl w-full bg-gray-dark shadow-none">Back</Button>
                <Button size="lg" variant="destructive" className="rounded-xl w-full bg-red-extradark shadow-none">Cancel Booking</Button>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CancelBookingDialog;
