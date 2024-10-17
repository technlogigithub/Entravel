import { FC, useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { IconPencil, IconSearch, IconX } from "@tabler/icons-react";
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
import { useNavigate } from "react-router-dom";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

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

interface BookingItemProps {
  isInner?: boolean;
  locationSearch: string;
  setLocationSearch: React.Dispatch<React.SetStateAction<string>>;
  guestSearch: string;
  setGuestSearch: React.Dispatch<React.SetStateAction<string>>;
  isDropdown: boolean;
  setIsDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  onInputClick: () => void;
  isGuestDropdown: boolean;
  setIsGuestDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookingItem: FC<BookingItemProps> = ({
  isInner,
  locationSearch,
  setLocationSearch,
  guestSearch,
  setGuestSearch,
  isDropdown,
  setIsDropdown,
  onInputClick,
  isGuestDropdown,
  setIsGuestDropdown,
}) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  const navigate = useNavigate();

  const handleGuestClick = () => {
    setIsGuestDropdown(!isGuestDropdown); // Open dropdown on input click
    setIsDropdown(false); // Close the dropdown
  };

  const handleOptionClick = (location: string) => {
    setLocationSearch(location); // Set clicked option to input value
    setIsDropdown(false); // Close the dropdown
  };

  const handleRedirectSearch = () => {
    navigate("/search-result");
  };

  console.log(setGuestSearch);
  return (
    <>
      <div
        className={cn(
          "md:flex gap-4 xl:gap-2 w-full max-lg:items-center",
          isInner && "items-center py-2"
        )}
      >
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
                onClick={onInputClick}
                type="button"
              >
                {locationSearch}
              </Button>
              {isDropdown && (
                <div className="absolute left-6 -bottom-7 z-10 size-0 border-x-[10px] border-b-[10px] border-transparent border-b-white"></div>
              )}
            </div>
            {isDropdown && (
              <div className="p-5 bg-white shadow-sm absolute top-[92px] lg:top-24 left-10 rounded-md w-[500px] z-30">
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
                              className="group px-0 pt-2 h-auto min-h-auto pb-0 text-base flex-col text-left items-start text-primary hover:text-blue"
                            >
                              {/* Conditionally render title */}
                              {item.title && (
                                <h6 className="text-[17px] pb-2 pt-1">
                                  {item.title}
                                </h6>
                              )}
                              <p
                                className={cn(
                                  item.title &&
                                    "font-normal mb-3 group:hover:text-blue"
                                )}
                              >
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
                  // initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                />
                <Separator className="mt-5 mb-2" />
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
              <div className="p-5 bg-white shadow-sm absolute top-[92px] lg:top-24 left-auto rounded-md w-[300px] z-30">
                <GuestSelector />
              </div>
            )}
          </div>
        </div>

        {/* Search Button */}
        <Button
          className={cn(
            "gap-2  h-auto min-h-auto rounded-xl  flex-shrink-0 max-md:h-16 max-lg:h-12 max-md:w-full max-md:mt-10",
            isInner
              ? "text-base py-3 px-6 font-medium"
              : "text-lg md:text-base lg:text-lg px-4 lg:px-11 py-1 lg:py-5 lg:min-w-[181px]"
          )}
          onClick={handleRedirectSearch}
        >
          <IconSearch className="size-6 md:size-4 lg:size-6" /> Search
        </Button>
      </div>
    </>
  );
};

const Booking = ({ isInner }: { isInner?: boolean }) => {
  const [locationSearch, setLocationSearch] = useState<string>(
    "Amsterdam, Netherlands"
  );
  const [guestSearch, setGuestSearch] = useState<string>(
    "1 Room / 2 Adults, No children"
  );
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const [isGuestDropdown, setIsGuestDropdown] = useState<boolean>(false);
  const [showSearchPanel, setShowSearchPanel] = useState<boolean>(false);

  const handleInputClick = () => {
    setIsDropdown(!isDropdown); // Open dropdown on input click
    setIsGuestDropdown(false);
  };

  const handleOpenFilter = () => {
    setShowSearchPanel(true);
  };
  return (
    <>
      {/* Search Page result for mobile version */}
      {isInner && (
        <div className="flex justify-between gap-2 items-center md:hidden py-3">
          <div>
            <h3 className="text-sm font-medium">{locationSearch}</h3>
            <div className="flex items-center mt-1">
              <p className="text-xs">10 Jul - 13 Jul</p>
              <Separator
                orientation="vertical"
                className="mx-2 bg-text-light h-3 my-0"
              />
              <p className="text-xs">{guestSearch}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="p-1 h-auto rounded-full"
            onClick={handleOpenFilter}
          >
            <IconPencil className="size-5" />
          </Button>
        </div>
      )}

      {/* Search Page result for mobile version */}
      <div className={cn(isInner ? "hidden md:block" : "block w-full")}>
        <BookingItem
          isInner={isInner}
          onInputClick={handleInputClick}
          isDropdown={isDropdown}
          setIsDropdown={setIsDropdown}
          setLocationSearch={setLocationSearch}
          setGuestSearch={setGuestSearch}
          locationSearch={locationSearch}
          guestSearch={guestSearch}
          isGuestDropdown={isGuestDropdown}
          setIsGuestDropdown={setIsGuestDropdown}
        />
      </div>
      {showSearchPanel && (
        <Drawer
          open={showSearchPanel}
          onOpenChange={() => setShowSearchPanel(false)}
          direction="left"
          dismissible={false}
        >
          <DrawerContent>
            <Button
              size="icon"
              onClick={() => setShowSearchPanel(false)}
              className="w-6 h-6 min-h-6 rounded-full shadow-none flex self-end bg-transparent text-black hover:text-blue hover:bg-transparent"
            >
              <IconX className="size-6" />
            </Button>
            <div className="max-h-[100vh_-_50px] overflow-y-auto -mx-4 px-4">
              <BookingItem
                isInner={isInner}
                onInputClick={handleInputClick}
                isDropdown={isDropdown}
                setIsDropdown={setIsDropdown}
                setLocationSearch={setLocationSearch}
                setGuestSearch={setGuestSearch}
                locationSearch={locationSearch}
                guestSearch={guestSearch}
                isGuestDropdown={isGuestDropdown}
                setIsGuestDropdown={setIsGuestDropdown}
              />
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
};

export default Booking;
