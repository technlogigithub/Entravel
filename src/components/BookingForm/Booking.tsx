import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { IconSearch } from "@tabler/icons-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import GuestSelector from "./GuestSelector";

// Define type for destination options
interface DestinationOptions {
  [key: string]: {
    items: {
      title?: string;
      name: string;
    }[];
  };
}

const destinationOptions: DestinationOptions = {
  Destinations: {
    items: [
      { name: "Amsterdam, Netherlands" },
      { name: "Amsterdam Centraal, Stationsplein, Amsterdam" },
    ],
  },
  Hotel: {
    items: [
      { title: "W Amsterdam", name: "Amsterdam, Netherlands" },
      { title: "Fletcher Hotel Amsterdam", name: "Amsterdam, Netherlands" },
    ],
  },
};

const Booking = () => {
  const [locationSearch, setLocationSearch] = useState<string>(
    "Amsterdam, Netherlands"
  );
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [guestSearch, setGuestSearch] = useState<string>(
    "1 Room / 2 Adults, No children"
  );
  const [isGuestDropdown, setIsGuestDropdown] = useState<boolean>(false);
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const handleInputClick = () => {
    setIsDropdown(!isDropdown); // Open dropdown on input click
    setIsGuestDropdown(false);
  };

  const handleGuestClick = () => {
    setIsGuestDropdown(!isGuestDropdown); // Open dropdown on input click
    setIsDropdown(false); // Close the dropdown
  }

  const handleOptionClick = (location: string) => {
    setLocationSearch(location); // Set clicked option to input value
    setIsDropdown(false); // Close the dropdown
  };

  console.log(setGuestSearch)
  return (
    <div className="md:flex gap-4 xl:gap-2 w-full max-lg:items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 flex-grow items-center">
        {/* Location input */}
        <div>
          <div className="relative flex flex-col md:h-[60px] justify-center">
            <Label htmlFor="location" className="uppercase text-left">
              Location
            </Label>
            <Button
              variant="ghost"
              className="w-full border-none px-0 !bg-transparent text-black justify-start max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis text-base md:text-xs lg:text-sm xl:text-base h-auto p-0 hover:text-black"
              onClick={handleInputClick}
              type="button"
            >
              {locationSearch}
            </Button>
            {isDropdown && (
              <div className="absolute left-6 -bottom-7 z-10 size-0 border-x-[10px] border-b-[10px] border-transparent border-b-white"></div>
            )}
          </div>
          {isDropdown && (
            <div className="p-5 bg-white shadow-sm absolute top-[92px] lg:top-24 left-10 rounded-md w-[500px] z-50">
              {Object.entries(destinationOptions).map(
                ([key, value], index, array) => (
                  <div key={key}>
                    <h6 className="uppercase text-gray-500 text-xs">{key}</h6>{" "}
                    {/* Category Title */}
                    <ul className="mt-1.5">
                      {value.items.map((item) => (
                        <li key={item.name}>
                          <Button
                            variant="link"
                            onClick={() => handleOptionClick(item.name)}
                            className="px-0 pt-2 h-auto min-h-auto pb-0 text-base flex-col text-left items-start"
                          >
                            {/* Conditionally render title */}
                            {item.title && (
                              <h6 className="text-[17px] pb-2 pt-1">
                                {item.title}
                              </h6>
                            )}
                            <p className={cn(item.title && "font-normal mb-3")}>
                              {item.name}
                            </p>
                          </Button>
                        </li>
                      ))}
                    </ul>
                    {/* Render Separator if this is not the last group */}
                    {index !== array.length - 1 && (
                      <Separator className="my-5" />
                    )}
                  </div>
                )
              )}
            </div>
          )}
        </div>
          <Separator className="block md:hidden my-5" />
        {/* Check-in and Check-out */}
        <div className="flex flex-col md:h-[60px] justify-center">
            <Label htmlFor="checkin" className="uppercase  text-left">
              Check in - Check out
            </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                   variant="ghost"
                    className={cn(
                      "w-full border-none px-0 !bg-transparent text-black justify-start text-base md:text-xs lg:text-sm xl:text-base h-auto p-0 hover:text-black",
                      !date && "text-muted-foreground"
                    )}
                  >
                    
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, "LLL dd, y")} -{" "}
                          {format(date.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(date.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                  <Separator className="mt-5 mb-2"/>
                  <p className="text-sm text-center pb-3">4 (nights stay)</p>
                </PopoverContent>
              </Popover>
        </div>
        <Separator className="block md:hidden my-5" />
        {/* Guests Form */}
        <div>
          <div className="relative flex flex-col md:h-[60px] justify-center">
            <Label htmlFor="Guests" className="uppercase text-left">
            Guests
            </Label>
            <Button
              variant="ghost"
              className="w-full border-none px-0 !bg-transparent text-black justify-start max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis text-base md:text-xs lg:text-sm xl:text-base h-auto p-0 hover:text-black"
              onClick={handleGuestClick}
              type="button"
            >
              {guestSearch}
            </Button>
            {isGuestDropdown && (
              <div className="absolute left-6 -bottom-7 z-10 size-0 border-x-[10px] border-b-[10px] border-transparent border-b-white"></div>
            )}
          </div>
          {isGuestDropdown && (
            <div className="p-5 bg-white shadow-sm absolute top-[92px] lg:top-24 left-auto rounded-md w-[300px] z-50">
             <GuestSelector />
            </div>
          )}
        </div>
      </div>

      {/* Search Button */}
      <Button className="text-lg md:text-base lg:text-lg gap-2 px-4 lg:px-11 py-1 lg:py-5 h-auto min-h-auto rounded-xl lg:min-w-[181px] flex-shrink-0 max-md:h-16 max-lg:h-12 max-md:w-full max-md:mt-10">
        <IconSearch className="size-6 md:size-4 lg:size-6" /> Search
      </Button>
    </div>
  );
};

export default Booking;
