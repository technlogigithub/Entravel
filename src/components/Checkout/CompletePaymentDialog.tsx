import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { IconAvalance } from "../iocns/Icons";
import { Separator } from "../ui/separator";
import { IconCopy, IconInfoCircleFilled } from "@tabler/icons-react";
import { useState } from "react";

const CompletePaymentDialog = ({onFinishPayment} : {onFinishPayment: () => void}) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="min-w-48 rounded-xl">Complete payment</Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] sm:max-w-xl overflow-y-auto max-h-[90%] max-sm:p-4">
        <div>
          <h2 className="text-[22px] font-semibold">Complete payment</h2>
          <div className="mt-6">
            <h6 className="text-sm text-text font-semibold pb-2.5">
              Payment details:
            </h6>
            <div className="flex justify-between gap-2 pb-4">
              <h6 className="text-sm font-normal">Your total price</h6>
              <p className="text-sm font-medium">2,559.3 USDT</p>
            </div>
            <div className="flex justify-between gap-2">
              <h6 className="text-sm font-normal">Already paid</h6>
              <p className="text-sm font-medium">500.0 USDT</p>
            </div>
            <div className="border-t border-dotted border-input mt-4 pt-5">
              <div className="flex justify-between gap-2 text-black">
                <h6 className="text-base font-medium">Amount left to pay</h6>
                <p className="text-lg font-semibold flex items-center gap-2">
                  <IconAvalance /> 2,059.3 USDT
                </p>
              </div>
            </div>
            <Separator className="h-[1px] w-full my-6" />
            <h5 className="text-base font-medium text-text">
              Scan this QR code with your wallet app
            </h5>
            <p className="flex gap-2 py-6">
              <IconInfoCircleFilled className="text-brown min-w-5" />
              Only send over the Avalanche. Do not send over any other networks.
            </p>
            <img src="/scanner.png" alt="scanner" className="w-40" />
            <Separator className="h-[1px] w-full my-6" />
            <h5 className="text-base font-medium text-text">
              Or copy details and pay with any USDT wallets
            </h5>
            <div>
              <h6 className="text-base font-medium mb-4 text-black">
                Amount left to pay
              </h6>
              <div className="flex justify-between gap-4 bg-innerBg py-4 px-6 mt-1 mb-2">
                <h6 className="text-base font-medium text-black">
                    2,059.3 USDT
                </h6>
                <Button
                  variant="link"
                  className="h-auto p-0 rounded"
                  onClick={() => copyToClipboard("2,059.3 USDT")}
                >
                  <IconCopy className="size-6" />
                </Button>
              </div>
              {copied && (
                <p className="text-sm text-green-600">Copied to clipboard!</p>
              )}
            </div>
            <Separator className="h-[1px] w-full my-6 -mx-8"/>
            <h5 className="text-base font-medium text-text mb-6">
            After completing the payment in the wallet app, click “Finish” button to complete this booking:
            </h5>
            <Button size="lg" className="w-full rounded-xl" onClick={onFinishPayment}>Finish, I have paid</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompletePaymentDialog;
