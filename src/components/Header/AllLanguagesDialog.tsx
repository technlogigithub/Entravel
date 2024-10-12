import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GlobeIcon } from "@radix-ui/react-icons";
import AllLangaugeMenu from "./AllLangaugeMenu";
import { cn } from "@/lib/utils";




const AllLanguagesDialog = ({isBlack}: {isBlack?: boolean}) => {


  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="link" className={cn("gap-2.5 text-black px-0", isBlack && "text-white")}>
            <GlobeIcon className="w-4 h-4" />
            English
          </Button>
        </DialogTrigger>
        <DialogContent className="md:max-w-[700px] lg:max-w-[1000px]">
          <DialogHeader>
            <DialogTitle>All languages</DialogTitle>
          </DialogHeader>
          <AllLangaugeMenu isMobileMenu={false}/>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllLanguagesDialog;
