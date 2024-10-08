import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {  IconCurrencyDollar } from "@tabler/icons-react";
import CurrencyMenu from "./CurrencyMenu";



const CurrencyDialog = () => {


  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className="gap-2.5 text-black px-0">
            <IconCurrencyDollar className="size-4" />
            USD
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[1000px]">
          <DialogHeader>
            <DialogTitle>All currencies</DialogTitle>
          </DialogHeader>
         <CurrencyMenu isMobileMenu={false}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CurrencyDialog;
