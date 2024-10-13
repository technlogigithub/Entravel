import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PriceRangeSlider from "./PriceRangeSlider";
import { Label } from "@/components/ui/label";
import PapularFilter from "./PapularFilter";
import { IconStarFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import DistanceSlider from "./DistanceSlider";
import HotelRating from "./HotelRating";
import MealPlan from "./MealPlan";
import { Checkbox } from "@/components/ui/checkbox";
import Facilities from "./Facilities";
import PropertyTypes from "./PropertyTypes";

const starList = [1, 2, 3, 4, 5];
const Filter = () => {
  const [activeStar, setActiveStar] = useState<number | null>(null);
  return (
    <div>
      <div className="relative max-h-96 w-full overflow-hidden">
        <img src="/map.jpg" alt="map" />
        <Button className="bg-bgOpacity bg-opacity-50 shadow-none min-w-32 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full">
          Show map
        </Button>
      </div>
      <div className="flex justify-between items-center border-b border-input pb-3 my-8">
        <h2 className="text-lg font-semibold pr-2">Filter</h2>
        <Button variant="link" className="p-0 underline h-auto text-primary hover:text-blue">
          Clear all
        </Button>
      </div>
      {/* Search By Hotel Name */}
      <div className="my-8">
        <Label className="text-base font-semibold mb-5 text-black">
          Search by hotel name
        </Label>
        <Input placeholder="Hotel name" className="rounded-lg" />
      </div>
      {/* Price  Range Slider */}
      <div className="my-8">
        <PriceRangeSlider min={0} max={1000} />
      </div>
      {/* Popular filters */}
      <div className="my-8">
        <PapularFilter />
      </div>

      {/* Stars Filter */}
      <div className="my-8">
        <Label className="text-base font-semibold mb-5 text-black">Stars</Label>
        <div className="flex gap-2">
          {starList.map((item, index) => (
            <Button
              key={index}
              variant="secondary"
              className={cn(
                "gap-1 border border-input shadow-none rounded-full px-3 py-1 w-[52px] h-8 hover:bg-gray-light hover:text-text",
                activeStar === item && "bg-gray-light text-text"
              )}
              onClick={() => setActiveStar(item)}
            >
              {item}
              <IconStarFilled className="size-4 text-yellow" />
            </Button>
          ))}
        </div>
      </div>

      {/* Distance from city center */}
      <div className="my-8">
        <DistanceSlider />
      </div>

      {/* Hotel rating */}
      <div className="my-8">
        <HotelRating />
      </div>

      {/* Meal plan */}
      <div className="my-8">
        <MealPlan />
      </div>

      {/* Cancellation policy */}
      <div className="my-8">
        <Label className="text-base font-semibold mb-5 text-black">
          Cancellation policy
        </Label>
        <div className="flex flex-col gap-5">
          <div className="flex items-center space-x-3">
            <Checkbox id="Refundable" />
            <Label
              htmlFor="Refundable"
              className="text-sm font-normal leading-none cursor-pointer m-0 text-black"
            >
              Refundable
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <Checkbox id="Non-refundable" />
            <Label
              htmlFor="Non-refundable"
              className="text-sm font-normal leading-none cursor-pointer m-0 text-black"
            >
              Non-refundable
            </Label>
          </div>
      </div>
      </div>

       {/* Facilities */}
       <div className="my-8">
        <Facilities />
      </div>
       {/* Property types */}
       <div className="my-8">
        <PropertyTypes />
      </div>
    </div>
  );
};

export default Filter;
