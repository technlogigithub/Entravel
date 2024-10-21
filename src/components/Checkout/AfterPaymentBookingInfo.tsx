
import { Link } from "react-router-dom";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { IconStarFilled } from "@tabler/icons-react";
import { bookingDetailsInfo } from "@/constantdata";
import { cn } from "@/lib/utils";

const AfterPaymentBookingInfo = () => {
  return (
    <>
      <div className="bg-white border border-input rounded mb-6">
        <div className="max-md:px-4 max-md:pt-6">
          <img
            src="/details_two.jpg"
            alt="details_two"
            className="h-64 w-full rounded object-cover overflow-hidden"
          />
        </div>
        <div className="p-4 md:p-5">
          <Badge className="bg-green-100 text-green-50 shadow-none text-sm font-medium px-2 py-1.5">
            73 | Excellent
          </Badge>

          <div className="border-b border-solid border-input mb-5 pb-4 mt-6">
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
              <Separator className="w-full h-[1px] bg-input mt-5 max-md:mb-5" />

              <div className="flex justify-between gap-3 md:gap-2 items-center mt-5">
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
                  <h4 className="text-base font-medium pt-1.5 text-black">2</h4>
                </div>
              </div>
          </div>

          <div className="flex flex-col gap-5">
            {bookingDetailsInfo.map((item) => (
              <div className="flex flex-col gap-2" key={item.label}>
              <h6 className="text-sm md:text-xs font-medium md:font-semibold text-text">{item.label}:</h6>
              <p className={cn("text-base font-medium flex items-center gap-2", item.isGreenText ? "text-green" : "text-black")}>
                {item.icon} {item.value}
              </p>
            </div>
            ))}
          </div>
          <Separator className="w-full h-[1px] bg-input my-5" />

          <div className="flex flex-col gap-2 pb-3">
            <h6 className="text-sm md:text-xs font-medium md:font-semibold text-text">Total charged:</h6>
            <p className="text-[28px] font-semibold text-black">$120</p>
          </div>
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

export default AfterPaymentBookingInfo;
