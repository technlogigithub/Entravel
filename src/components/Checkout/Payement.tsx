import { IconStarFilled } from "@tabler/icons-react";
import { Separator } from "../ui/separator";
import PaymentForm from "./PaymentForm";
import { useState } from "react";
import PaymentLoader from "./PaymentLoader";
import { IconShieldCheck } from "../iocns/Icons";
import BookingInfo from "./BookingInfo";

const rating = 2;



const ConfirmationAlert = () => {
  return (
    <div className="rounded bg-green gap-3 px-3 py-2 flex items-center w-full">
      <IconShieldCheck />
      <div className="text-[13px]">
        <p className="font-semibold text-white">Well done</p>
        <p className="text-white font-normal">This is the properly’s lowest priced room</p>
      </div>
    </div>
  );
};

const Payement = () => {
  const [loader, setLoader] = useState(false);
  const handleLoadLoader = () => {
    setLoader(true);
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

          <div className="max-w-4xl lg:max-w-5xl mx-auto px-6 md:px-10 2xlg:px-12 my-6 md:py-8 flex gap-6 lg:gap-16 max-md:flex-wrap">
            {/* Mobile View to show confirmation popup */}
            <div className="md:hidden"><ConfirmationAlert /></div>

            {/* Left Panel Start */}
            <div className="basis-full md:basis-[55%]">
              {/* Mobile Step One  Start */}
              <div className="md:hidden">
                <div className="w-6 h-6 flex justify-center items-center rounded-full border-2 border-primary text-sm font-semibold mb-1.5">
                  1
                </div>
                <h3 className="text-base font-medium pb-1">
                  Hotel Details
                </h3>
                <p className="text-sm text-text pb-4">
                Please check your booking details
                </p>
              </div>
              {/* Mobile Step One End */}
              <div className="overflow-hidden rounded">
                <img src="./checkout_img.jpg" alt="checkout-banner" />
              </div>

              <div className="md:border-b border-dotted border-textExtraLight md:mb-5 pb-6 md:pb-4 mt-6">
                <div>
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
                      <h4 className="text-base md:text-lg font-medium py-1.5">4 October</h4>
                      <p>Friday</p>
                    </div>
                    <div className="text-sm font-medium">
                      <p className="text-green">Check-out</p>
                      <h4 className="text-base md:text-lg font-medium py-1.5">12 October</h4>
                      <p>Monday</p>
                    </div>
                    <Separator className="h-11 w-[1px] bg-input m-0" />
                    <div className="text-sm font-medium">
                      <p className="text-green">Nights</p>
                      <h4 className="text-base md:text-lg font-medium py-1.5">8</h4>
                      <p>Total stays</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:hidden mb-6"><BookingInfo/></div>

              {/* Step one of 3 */}
              <div>
                <PaymentForm onFinish={handleLoadLoader} />
              </div>
            </div>
            {/* Left Panel End */}

            {/* Right Panel Start*/}
            <div className="basis-full md:basis-[45%] max-md:hidden">
              <BookingInfo/>
            </div>
            {/* Right Panel End */}
          </div>
        </>
      )}
    </>
  );
};

export default Payement;
