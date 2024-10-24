import { IconEthereum } from "@/components/iocns/Icons";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconInfoCircleFilled } from "@tabler/icons-react";
import { FC } from "react";

interface WithdrawDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
const WithdrawDialog: FC<WithdrawDialogProps> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[90%] sm:max-w-[456px] overflow-y-auto max-h-[90%] max-sm:p-4 p-7">
        <div>
          <h2 className="text-2xl font-semibold text-black mb-4">
            Withdraw USDC
          </h2>
          <div className="bg-innerBg p-4 flex gap-2 items-center justify-between mb-6">
            <p className="text-sm font-medium">Available balance</p>
            <h6 className="text-base font-semibold flex gap-2">
              <IconEthereum /> 12,268 USDC
            </h6>
          </div>
          <div className="mb-6">
            <Label className="uppercase text-text pb-2">
              Amount to withdraw
            </Label>
            <div className="relative">
              <Input
                type="number"
                value="2055"
                className="pr-28 text-black text-base font-medium"
              />
              <Button
                variant="link"
                className="text-xs uppercase !p-0 !h-auto text-black absolute right-3 top-3 underline"
              >
                Max amount
              </Button>
            </div>
          </div>
          <div className="mb-6">
            <Label className="uppercase text-text pb-2">address</Label>
            <Input
              type="text"
              value="0x19fd3...fkskcsW"
              className="text-black text-base font-medium"
            />
          </div>
          <p className="text-sm font-medium flex gap-3 text-black-secondary bg-blue-50 p-3">
            <IconInfoCircleFilled className="size-5 flex-shrink-0" />
            Please note that crypto withdrawals can take up to 24 h to process.
            Thank you for your understanding and patience.
          </p>
          <div className="border-t border-b py-4 my-6">
            <div className="font-medium flex gap-2 items-center justify-between pb-2 sm:pb-4">
              <h3 className="text-base">Amount to withdraw:</h3>
              <h3 className="text-base font-semibold text-right">2,055.5 USDC</h3>
            </div>
            <div className="font-medium flex gap-2 items-center justify-between">
              <p className="text-sm text-text">Transaction fee:</p>
              <p className="text-sm text-text text-right">0.00 USDC</p>
            </div>
          </div>
          <Button size="lg" className="rounded-xl w-full max-sm:h-12 max-sm:text-base">Withdraw</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawDialog;
