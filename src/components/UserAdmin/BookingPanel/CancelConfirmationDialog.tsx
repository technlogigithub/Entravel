import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
} from "@/components/ui/dialog";
import { FC } from "react";

interface CancelConfirmationDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }

const CancelConfirmationDialog:FC<CancelConfirmationDialogProps> = ({open, setOpen}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[90%] sm:max-w-[456px] overflow-y-auto max-h-[90%] max-sm:p-4 p-7">
        <div className="text-center">
          <h2 className="text-[22px] font-semibold pb-5">
            Your booking was cancelled
          </h2>
          <p className="text-sm font-normal">
            We’ve sent you an email confirming your cancellation to{" "}
            <span className="font-medium">youremail@gmail.com.</span>{" "}
          </p>
          <div className="flex gap-4 mt-12 max-2xs:flex-wrap">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl w-full bg-gray-dark shadow-none max-sm:order-2"
            >
              Check summary
            </Button>
            <DialogClose asChild>
              <Button size="lg" className="rounded-xl w-full shadow-none">
                Ok
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CancelConfirmationDialog;
