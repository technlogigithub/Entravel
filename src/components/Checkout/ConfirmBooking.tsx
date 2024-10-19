import { Separator } from "@radix-ui/react-dropdown-menu";
import { IconCoffeeCup, IconSuitcase } from "../iocns/Icons";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { IconStarFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const ConfirmBooking = () => {
  return (
    <div className="max-w-[1366px] mx-auto px-6 md:px-10 2xlg:px-12 py-8 flex gap-8">
      {/* Left Panel Start */}
      <div className="basis-[63%]">
        <div className="px-6 pb-9 pt-6 border border-green rounded flex flex-col justify-center items-center bg-white">
          <IconSuitcase />
          <h4 className="text-2xl font-medium pt-6 pb-2">
            Thank you for booking with Entravel!
          </h4>
          <p className="text-[17px] text-green font-semibold pb-4">
            Your booking is confirmed
          </p>
          <p className="text-sm leading-6 pb-6">
            You will receive an email confirmation once the booking is
            completed. If you do not receive an email within maximum 5 minutes,
            please contact our support.
          </p>
          <Button variant="link">Contact support</Button>
        </div>
      </div>
      {/* Left Panel End */}
      {/* Right Panel Start*/}
      <div className="basis-[37%]">
        <div className="bg-white border border-input rounded mb-6">
          <div>
            <img
              src="/details_two.jpg"
              alt="details_two"
              className="h-64 w-full rounded object-cover overflow-hidden"
            />
          </div>
          <div className="p-5">
            <Badge className="bg-green-100 text-green-50 shadow-none text-sm font-medium px-2 py-1.5">
              73 | Excellent
            </Badge>

            <div className="border-b border-solid border-input mb-5 pb-4 mt-6">
              <div className="max-sm:mb-4">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 - 1 }).map((_, index) => (
                    <IconStarFilled
                      className="size-[14px] text-yellow"
                      key={`empty-${index}`}
                    />
                  ))}
                </div>
                <h4 className="text-base font-semibold pb-1">
                  Millennium Hilton New York One
                </h4>
                <p className="text-xs text-textExtraLight flex gap-1 items-center font-medium">
                  Manhattan, New York City
                </p>
                <Separator className="w-full h-[1px] bg-input mt-5" />

                <div className="flex justify-between gap-2 items-center mt-5">
                  <div className="text-xs font-semibold">
                    <p className="text-text">Check-in:</p>
                    <h4 className="text-base font-medium pt-1.5 text-black">
                      15 March 2018
                    </h4>
                    <p className="text-sm font-normal">2:00-7:00 PM</p>
                  </div>
                  <div className="text-xs font-semibold">
                    <p className="text-text">Check-out:</p>
                    <h4 className="text-base font-medium pt-1.5 text-black">
                      15 March 2018
                    </h4>
                    <p className="text-sm font-normal">2:00-7:00 PM</p>
                  </div>
                  <div className="text-xs font-semibold">
                    <p className="text-text">Nights:</p>
                    <h4 className="text-base font-medium pt-1.5 text-black">
                      2
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <h6 className="text-xs font-semibold text-text">1 Room:</h6>
                <p className="text-base font-medium">Double Deluxe Room</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-xs font-semibold text-text">Guests:</h6>
                <p className="text-base font-medium">2 Adults + 2 Children</p>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-xs font-semibold text-text">
                  Child age(s):
                </h6>
                <p className="text-base font-medium">
                  3 years old, 5 years old
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-xs font-semibold text-text">Meal plan:</h6>
                <p className="text-base font-medium flex items-center gap-2">
                  <IconCoffeeCup /> Breakfast included{" "}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h6 className="text-xs font-semibold text-text">
                  Booking type:
                </h6>
                <p className="text-base font-medium text-green">Refundable</p>
              </div>
            </div>
            <Separator className="w-full h-[1px] bg-input my-5" />

            <div className="flex flex-col gap-2 pb-3">
              <h6 className="text-xs font-semibold text-text">
                Total charged:
              </h6>
              <p className="text-[28px] font-semibold text-black">$120</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-input p-5 rounded">
          <h5 className="text-base pb-1.5">Contact information</h5>
          <p className="text-sm mb-5">
            For any booking assistance, please contact our customer services
            team{" "}
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
      </div>
    </div>
  );
};

export default ConfirmBooking;
