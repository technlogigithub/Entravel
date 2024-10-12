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
import { cn } from "@/lib/utils";



const CurrencyDialog = ({isBlack}: {isBlack?: boolean}) => {


  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className={cn("gap-2.5 text-black px-0", isBlack && "text-white")}>
            <IconCurrencyDollar className="size-4" />
            USD
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[700px] lg:max-w-[1000px]">
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
