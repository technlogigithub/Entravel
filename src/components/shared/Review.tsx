import { cn } from "@/lib/utils";
import { IconChevronRight } from "@tabler/icons-react";
import { FC, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "../ui/progress";

interface isRatingFirstProps {
  isRatingFirst?: boolean;
  isSmall?: boolean;
  isArrow?: boolean;
}

const reviewListItems = [
  {
    id: 1,
    label: "Vibe",
    value: 8,
  },
  {
    id: 2,
    label: "Location",
    value: 9,
  },
  {
    id: 3,
    label: "Service",
    value: 10,
  },
  {
    id: 4,
    label: "Comfort",
    value: 9,
  },
  {
    id: 5,
    label: "Food",
    value: 10,
  },
  {
    id: 6,
    label: "Breakfast",
    value: 9,
  },
];

const ReviewPopover = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(70), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="bg-transparent hover:bg-transparent hover:text-primary text-xs sm:text-sm max-sm:font-normal h-auto p-0 "
        >
          <p className="max-sm:hidden">876 reviews</p>
          <IconChevronRight className="sm:hidden" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full sm:w-[394px]" align="end">
        <div className="flex justify-between gap-2  items-start flex-wrap">
          <Review isRatingFirst={true} isSmall={true} isArrow={false} />
          <Button
            variant={"ghost"}
            className="bg-transparent hover:bg-transparent hover:text-blue text-xs sm:text-sm max-sm:font-normal h-auto p-0 pt-1"
          >
            Read all reviews
          </Button>
        </div>
        <ul className="mt-7 grid grid-cols-1 3xs:grid-cols-2 gap-2 3xs:gap-8 pb-4">
          {reviewListItems.map((item) => (
            <li key={item.id} className="-mb-3 last:mb-0 max-3xs:mb-2">
              <div className="text-sm font-medium flex justify-between gap-1 pb-1.5 3xs:pb-3">
                <h6 className="font-medium">{item.label}</h6>
                <p className="font-semibold">{item.value}/10</p>
              </div>
              <Progress value={progress} className="w-full" />
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
};

const Review: FC<isRatingFirstProps> = ({
  isRatingFirst = false,
  isSmall = false,
  isArrow = true,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex  gap-3 items-start sm:items-center">
          <div
            className={cn(isRatingFirst ? "text-left order-2" : "text-right")}
          >
            <h5
              className={cn(
                "text-green  font-semibold",
                isSmall ? "text-base" : "text-base sm:text-xl"
              )}
            >
              Excellent
            </h5>
            <div className="max-sm:hidden">
              <ReviewPopover />
            </div>
            <p className="text-sm sm:hidden">876 reviews</p>
          </div>
          <div
            className={cn(
              "relative bg-green text-white  font-medium  rounded-md flex items-center justify-center rounded-es-none",
              isSmall
                ? "text-base py-2 px-3"
                : "text-base sm:text-xl py-2 sm:py-1.5 px-3 sm:px-4"
            )}
          >
            9.4
            <div className="absolute -bottom-[11px] left-[1.5px] w-0 h-0 border-l-[14px] border-l-transparent border-t-[18px] border-t-green rotate-[272deg]"></div>
          </div>
        </div>
        {isArrow && (
          <>
            <div className="sm:hidden">
              <ReviewPopover />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Review;
