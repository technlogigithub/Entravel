import {
  IconAvalance,
  IconUsdt,
} from "@/components/iocns/Icons";
import ReadMore from "@/components/shared/ReadMore";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { bookingDetailsInfo } from "@/constantdata";
import { cn } from "@/lib/utils";
import {
  IconBed,
  IconCircleCheck,
  IconCopy,
  IconStarFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CancelBookingDialog from "./CancelBookingDialog";

interface paymentInfoProps {
  label: string;
  value: string;
  icon?: any;
}

interface GuestInfoProps {
  label: string;
  value: string;
  icon?: any;
}

const guestsInfo: GuestInfoProps[] = [
  {
    label: "Full name",
    value: "Mariia Ulitina",
  },
  {
    label: "E-Mail",
    value: "test1@gmail.com",
  },
  {
    label: "Mobile",
    value: "+450546984305",
  },
  {
    label: "Special requests",
    value: "Travel with a cat. Need a sleep place for my pet.",
  },
  {
    label: "Preferable bed",
    value: "Double",
    icon: IconBed,
  },
];

const paymentInfo: paymentInfoProps[] = [
  {
    label: "Payment method",
    value: "Pay with crypto",
  },
  {
    label: "Currency",
    value: "USDT",
    icon: IconUsdt,
  },
  {
    label: "Blockchain",
    value: "Avalanche",
    icon: IconAvalance,
  },
];

const cancelText =
  "This is a refundable booking. It will be possible to cancel or amend your booking prior to 15 July 2021 23:59 GMT. Please note that refunds will";

const bookingText =
  "Any cancellation received within 1 day prior to the arrival date will incur the first night's charge. Failure to arrive at your hotel or property will be";

const BookingConfirmationDetail = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };
  return (
    <div className="lg:max-w-[1366px] mx-auto px-6 md:px-10 2xlg:px-12 py-7 flex gap-4 lg:gap-8 max-md:flex-wrap">
      {/* Left Panel Start */}
      <div className="basis-full md:basis-[63%]">
        <div className="bg-white border border-input p-5 rounded mb-4">
          <div className="flex justify-between gap-5 items-start max-md:flex-wrap">
            <div className="text-black max-md:order-2 max-md:basis-full">
              <h2 className="text-xl font-semibold text-black">
                Your booking is confirmed
              </h2>
              <p className="text-sm font-medium pt-4 pb-6">
                You're all set! We've sent your confirmation email
                to youremail@gmail.com
              </p>
              <div className="flex flex-col gap-3 max-w-80">
                <div>
                  <div className="flex justify-between gap-2">
                    <h6 className="text-sm font-normal text-black">
                      Confirmation number:{" "}
                      <span className="font-medium pl-2">497654346753</span>
                    </h6>
                    <Button
                      variant="link"
                      className="h-auto p-0 rounded text-black"
                      onClick={() => copyToClipboard("497654346753")}
                    >
                      <IconCopy className="size-5" />
                    </Button>
                  </div>
                  {copied && (
                    <p className="text-sm text-green-600">
                      Copied to clipboard!
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex justify-between gap-2">
                    <h6 className="text-sm font-normal text-black">
                      Booking reference:{" "}
                      <span className="font-medium pl-2">99689483845</span>
                    </h6>
                    <Button
                      variant="link"
                      className="h-auto p-0 rounded text-black"
                      onClick={() => copyToClipboard("99689483845")}
                    >
                      <IconCopy className="size-5" />
                    </Button>
                  </div>
                  {copied && (
                    <p className="text-sm text-green-600">
                      Copied to clipboard!
                    </p>
                  )}
                </div>
              </div>
            </div>
            <Badge className="flex gap-2 items-center text-sm bg-green-100 text-green capitalize font-medium px-3 py-1 hover:bg-green-100 shadow-none">
              <IconCircleCheck className="size-5" /> Confirmed
            </Badge>
          </div>
          <Separator className="my-5" />
          <div className="text-base grid 2xs:flex gap-5 2xs:gap-10 max-md:order-2 max-2xs:text-center">
            <Link to="/" className="text-blue">
              View voucher
            </Link>
            <Link to="/" className="text-blue">
              View invoice
            </Link>
          </div>
        </div>

        <div className="bg-white border border-input p-4 md:p-5 rounded mb-4">
          <div className="flex gap-4 md:gap-8 items-stretch max-xlg:items-start max-md:flex-wrap">
            <div className="md:basis-56 flex items-center justify-center overflow-hidden rounded">
              <img src="/property_img.jpg" alt="property" className="w-full" />
            </div>

            <div className="md:basis-[calc(100%_-_224px)] flex w-full flex-col">
              {/* Top Description */}
              <div className="w-full flex flex-col justify-between gap-3 md:gap-6 h-full">
                <div>
                  <p className="text-sm font-medium text-green pb-3">
                    73 | Excellent
                  </p>
                  <h4 className="text-base font-semibold">
                    Millennium Hilton New York One
                  </h4>
                  <p className="text-xs font-medium text-textExtraLight">
                    55 Church Street, Financial District, New York (NY), United
                    States
                  </p>
                </div>

                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 - 2 }).map((_, index) => (
                    <IconStarFilled
                      className="size-[14px] text-yellow"
                      key={`empty-${index}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-5 md:hidden" />
          {/* Duration Time Start */}
          <div className="grid grid-cols-3 gap-8 md:mt-8">
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
          {/* Duration Time End */}
          <Separator className="mt-6 mb-6 md:mb-11" />
          {/* Facility Start */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 md:pb-6">
            {bookingDetailsInfo.map((item) => (
              <div className="flex flex-col gap-2" key={item.label}>
                <h6 className="text-sm md:text-xs font-medium md:font-semibold text-text">
                  {item.label}:
                </h6>
                <p
                  className={cn(
                    "text-base font-medium flex items-center gap-2",
                    item.isGreenText ? "text-green" : "text-black"
                  )}
                >
                  {item.icon &&<span className="min-w-6">{item.icon}</span>} {item.value}
                </p>
              </div>
            ))}
          </div>
          {/* Facility End */}
        </div>

        {/* Guest Info */}
        <div className="px-4 md:px-6 pt-5 pb-7 border border-input rounded flex flex-col bg-white mb-4">
          <div className="mb-4">
            <h6 className="text-base font-semibold pb-4 text-black">
              Guests Information
            </h6>
            <p className="text-sm text-text font-medium">
              1 Room: Double Deluxe Room
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {guestsInfo.map((item) => (
              <div className="flex gap-2 items-center" key={item.value}>
                <p className="text-text font-medium text-sm basis-1/2 sm:basis-1/3">
                  {item.label}:
                </p>
                <h6 className="font-normal text-black text-sm basis-1/2 sm:basis-2/3 flex items-center gap-2">
                  {item.icon && <item.icon className="text-text" />}{" "}
                  {item.value}
                </h6>
              </div>
            ))}
          </div>
        </div>

        {/* Cancel Info */}
        <div className="px-4 md:px-6 py-8 border border-input rounded flex flex-col justify-center items-center bg-white mb-5">
          <div className="mb-8">
            <h6 className="text-base font-semibold pb-1 text-black">
              Cancellation policy & hotel comments
            </h6>
            <p className="text-sm text-text font-medium">
              <ReadMore text={cancelText} maxLength={150} />
            </p>
          </div>
          <div>
            <h6 className="text-base font-semibold pb-1 text-black">
              Booking Remarks
            </h6>
            <p className="text-sm text-text font-medium">
              <ReadMore text={bookingText} maxLength={150} />
            </p>
          </div>
        </div>

        <div className="px-4 md:px-6 py-6 border border-input rounded flex justify-between gap-4 bg-white mb-5">
          <div>
            <h6 className="text-base font-semibold pb-5 text-black">Price</h6>
            <p className="text-sm text-text font-medium">
              Including taxes and 8% VAT
            </p>
          </div>
          <div>
            <h2 className="text-[26px] font-semibold text-black pb-2">$348</h2>
            <p className="text-sm text-text font-medium">$116 per night</p>
          </div>
        </div>

        {/* Payment Info */}
        <div className="px-4 md:px-6 py-6 border border-input rounded flex flex-col bg-white mb-5">
          <h6 className="text-base font-semibold pb-4 text-black">
            Payment info
          </h6>
          <div className="flex flex-col gap-3">
            {paymentInfo.map((item) => (
              <div className="flex gap-2 items-center" key={item.value}>
                <p className="text-text font-medium text-sm basis-1/2 sm:basis-1/3">
                  {item.label}:
                </p>
                <h6 className="font-normal text-black text-sm basis-1/2 sm:basis-2/3 flex items-center gap-2">
                  {item.icon && <item.icon className="text-text" />}{" "}
                  {item.value}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Right Panel Start */}
      <div className="basis-full md:basis-[37%] max-md:hidden">
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
       <CancelBookingDialog/>
      </div>
    </div>
  );
};

export default BookingConfirmationDetail;
