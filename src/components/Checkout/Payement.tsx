import { IconHelp, IconStarFilled } from "@tabler/icons-react";
import { Separator } from "../ui/separator";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import PaymentForm from "./PaymentForm";
import { useState } from "react";
import PaymentLoader from "./PaymentLoader";

const rating = 2;

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


const Payement = () => {
  const [loader, setLoader] = useState(false);
  const handleLoadLoader = () => {
    setLoader(true)
  };
  return (
    <>
    {loader ? (
      <PaymentLoader />
    ) : (
 <>
      <div className="text-base font-medium bg-white shadow-three px-6 md:px-10 2xlg:px-20 py-3 flex justify-center">
        Time left to finish payment:{" "}
        <span className="pl-0.5 font-bold">19:59</span>
      </div>
      <div className="max-w-5xl mx-auto px-6 md:px-10 2xlg:px-12 py-8 flex gap-16">
        {/* Left Panel Start */}
        <div className="basis-[55%]">
          <div className="overflow-hidden rounded">
            <img src="./checkout_img.jpg" alt="checkout-banner" />
          </div>

            <div className="border-b border-dotted border-textExtraLight mb-5 pb-4 mt-6">
              <div className="max-sm:mb-4">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 - rating }).map((_, index) => (
                    <IconStarFilled
                      className="size-[14px] text-yellow"
                      key={`empty-${index}`}
                    />
                  ))}
                </div>
                <h4 className="text-xl sm:text-[26px] font-medium pb-1">
                  Millennium Hilton New York One
                </h4>
                <p className="text-sm text-textExtraLight flex gap-1 items-center">
                  Manhattan, New York City
                </p>
                <div className="flex justify-between gap-2 items-center mt-5">
                  <div className="text-sm font-medium">
                    <p className="text-green">Check-in</p>
                    <h4 className="text-lg font-medium py-1.5">4 October</h4>
                    <p>Friday</p>
                  </div>
                  <div className="text-sm font-medium">
                    <p className="text-green">Check-out</p>
                    <h4 className="text-lg font-medium py-1.5">12 October</h4>
                    <p>Monday</p>
                  </div>
                  <Separator className="h-11 w-[1px] bg-input" />
                  <div className="text-sm font-medium">
                    <p className="text-green">Nights</p>
                    <h4 className="text-lg font-medium py-1.5">8</h4>
                    <p>Total stays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step one of 3 */}
            <div>
              
                <PaymentForm onFinish={handleLoadLoader}/>
            </div>
        </div>
         {/* Left Panel End */}

        {/* Right Panel Start*/}
        <div className="basis-[45%]">
          <div className="bg-white border border-input p-5 rounded mb-6">
            <h4 className="text-xl font-medium">Booking info:</h4>
            <div className="mt-4">
              {bookingInfo.map((info) => (
                <div className="flex justify-between text-sm font-medium gap-2 pb-4 last:pb-0">
                  <p className="text-text">{info.label}:</p>
                  <h6
                    className={cn(
                      "font-normal text-sm",
                      info?.isGreen ? "text-green" : "text-primary"
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
                <p className="flex items-center gap-1"><IconHelp className="size-4 text-blue" /> Excluded taxes and charges:</p>
                <h6>$2,200</h6>
              </div>

          </div>
          <div className="bg-white border border-input p-5 rounded">
              <h5 className="text-base pb-1.5">Contact information</h5>
              <p className="text-sm mb-5">For any booking assistance, please contact our customer services team <Link to="/" className="text-blue">here.</Link>  or call us on:</p>
              <div className="flex justify-between text-sm font-medium gap-2 pb-4">
                <p className="text-text">Worldwide:</p>
                <Link to="/" className="text-blue font-normal text-sm">+45 89 87 87 14</Link>
              </div>
              <div className="flex justify-between text-sm font-medium gap-2">
                <p className="text-text">United States:</p>
                <Link to="/" className="text-blue font-normal text-sm"> +1 855-409-8242</Link>
              </div>
          </div>
        </div>
         {/* Right Panel End */}
      </div>
    </>
  )}
  </>
  );
};

export default Payement;
