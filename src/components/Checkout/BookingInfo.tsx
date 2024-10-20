import { cn } from "@/lib/utils";
import { IconHelp } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const bookingInfo = [
  {
    label: "Dates",
    value: "Oct 4, 2024 -   Oct 12, 2024",
  },
  {
    label: "Nights",
    value: "6 nights",
  },
  {
    label: "Rooms",
    value: "1 room",
  },
  {
    label: "Guests",
    value: "2 adults + 1 children",
  },
  {
    label: "Child ages",
    value: "3 years old",
  },
  {
    label: "Room type",
    value: "Double deluxe",
  },
  {
    label: "Meal Plan",
    value: "Breakfast included",
  },
  {
    label: "Booking Type",
    value: "Refundable",
    isGreen: true,
  },
];
const BookingInfo = () => {
  return (
    <>
      <div className="bg-white border border-input p-5 rounded mb-6">
        <h4 className="text-xl font-medium">Booking info:</h4>
        <div className="mt-4">
          {bookingInfo.map((info) => (
            <div className="flex justify-between text-sm font-medium gap-2 pb-4 last:pb-0">
              <p className="text-text">{info.label}:</p>
              <h6
                className={cn(
                  "font-normal text-sm",
                  info?.isGreen ? "text-green" : "text-black"
                )}
              >
                {info.value}{" "}
              </h6>
            </div>
          ))}
        </div>
        <div className="border-t border-b border-dotted border-textExtraLight mt-6 mb-4 py-4">
          <div className="flex justify-between text-sm font-medium gap-2 pb-4">
            <p className="text-text">Included taxes and charges:</p>
            <h6 className="font-normal text-sm">$1.23</h6>
          </div>
          <div className="flex justify-between font-medium gap-2 items-center">
            <p className="text-base">Your total price:</p>
            <h6 className="font-semibold text-[22px]">$2,200</h6>
          </div>
        </div>

        <div className="flex justify-between font-normal text-sm gap-2 items-center">
          <p className="flex items-center gap-1">
            <IconHelp className="size-4 text-blue" /> Excluded taxes and
            charges:
          </p>
          <h6>$2,200</h6>
        </div>
      </div>
      <div className="bg-white border border-input p-5 rounded">
        <h5 className="text-base pb-1.5">Contact information</h5>
        <p className="text-sm mb-5">
          For any booking assistance, please contact our customer services team{" "}
          <Link to="/" className="text-blue">
            here.
          </Link>{" "}
          or call us on:
        </p>
        <div className="flex justify-between text-sm font-medium gap-2 pb-4">
          <p className="text-text">Worldwide:</p>
          <Link to="/" className="text-blue font-normal text-sm">
            +45 89 87 87 14
          </Link>
        </div>
        <div className="flex justify-between text-sm font-medium gap-2">
          <p className="text-text">United States:</p>
          <Link to="/" className="text-blue font-normal text-sm">
            {" "}
            +1 855-409-8242
          </Link>
        </div>
      </div>
    </>
  );
};

export default BookingInfo;
