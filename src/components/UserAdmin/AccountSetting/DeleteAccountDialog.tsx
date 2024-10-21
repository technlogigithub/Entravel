import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
} from "@/components/ui/dialog";
import { IconAlertTriangle } from "@tabler/icons-react";
import { FC } from "react";

interface DeleteAccountDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
  }


const DeleteAccountDialog:FC<DeleteAccountDialogProps> = ({open, setOpen}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
    <DialogContent className="max-w-[90%] sm:max-w-[456px] overflow-y-auto max-h-[90%] max-sm:p-4 p-7">
      <div className="text-center">
        <div className="w-10 h-10 rounded-full flex justify-center items-center bg-red-200 mx-auto mb-6"><IconAlertTriangle className="text-red-500 size-6" /></div>
        <h2 className="text-[22px] font-semibold pb-5">
        Are you sure you want to delete account?
        </h2>
        <p className="text-sm font-normal">
        Your booking will be cancelled immediately and you will receive your refund to your original payment method within 10 business days.
        </p>
        <div className="grid grid-cols-1 2xs:grid-cols-2 gap-4 mt-8">
        <DialogClose asChild>
            <Button size="lg" variant="secondary"
              className="rounded-xl w-full bg-gray-dark shadow-none max-sm:order-2">
            Back to settings
            </Button>
          </DialogClose>
          <Button
            size="lg"
            variant="secondary"
            className="rounded-xl w-full bg-red-extradark text-white shadow-none "
          >
            Delete
          </Button>
          
        </div>
      </div>
    </DialogContent>
  </Dialog>
  )
}

export default DeleteAccountDialog