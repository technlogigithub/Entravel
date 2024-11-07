import { IconAvalance, IconSuitcase, IconUsdt } from "../iocns/Icons";
import { Button } from "../ui/button";
import { IconBed, IconExclamationCircleFilled } from "@tabler/icons-react";
import ReadMore from "../shared/ReadMore";
import { FC } from "react";
import CompletePaymentDialog from "./CompletePaymentDialog";
import AfterPaymentBookingInfo from "./AfterPaymentBookingInfo";
import { useNavigate } from "react-router-dom";
interface GuestInfoProps {
  label: string;
  value: string;
  icon?: any;
}

interface paymentInfoProps {
  label: string;
  value: string;
  icon?: any;
}
interface ConfirmBookingProps {
  isBookingConfirm: boolean;
  onFinishPayment: () => void;
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
  {
    label: "Payment address",
    value: "0x19fd3...fkskcsW",
  },
];

const cancelText =
  "This is a refundable booking. It will be possible to cancel or amend your booking prior to 15 July 2021 23:59 GMT. Please note that refunds will";

const bookingText =
  "Any cancellation received within 1 day prior to the arrival date will incur the first night's charge. Failure to arrive at your hotel or property will be";

const ConfirmBooking: FC<ConfirmBookingProps> = ({
  isBookingConfirm,
  onFinishPayment,
}) => {
  const navigate = useNavigate();
  const handleRedirectAdminPanel = () => {
    navigate("/user-booking-details");
  };
  return (
    <div className="lg:max-w-[1366px] mx-auto px-6 md:px-10 2xlg:px-12 py-8 flex gap-4 lg:gap-8 max-md:flex-wrap">
      {/* Left Panel Start */}
      <div className="basis-full md:basis-1/2 lg:basis-[63%]">
        {isBookingConfirm ? (
          <div className="px-6 p-6 border border-green rounded flex flex-col justify-center items-center bg-white mb-5 text-center">
            <IconSuitcase />
            <h4 className="text-lg md:text-2xl font-medium pt-6 pb-2">
              Thank you for booking with Entravel!
            </h4>
            <p className="text-[17px] text-green font-semibold pb-4">
              Your booking is confirmed
            </p>
            <p className="text-sm leading-6 pb-3">
              You will receive an email confirmation once the booking is
              completed. <br /> If you do not receive an email within maximum 5
              minutes, please contact our support.
            </p>
            <Button variant="link" className="text-black hover:text-blue">
              Contact support
            </Button>
          </div>
        ) : (
          <div className="px-6 p-6 border border-red-dark rounded flex flex-col justify-center items-center bg-white mb-5 text-center">
            <IconExclamationCircleFilled className="text-red-dark size-9" />
            <h4 className="text-lg md:text-2xl font-medium pt-5 pb-2">
              Booking not completed
            </h4>
            <p className="text-[17px] text-red-dark font-medium pb-4">
              Your booking is not completed due to insufficient payment
            </p>
            <p className="text-sm leading-6 pb-6 md:pb-3">
              Looks like you started the payment process, but didn't finish.
              Please complete your payment soon to secure your booking. If you
              need any assistance, our support team is here to help.
            </p>
            <div className="flex gap-6 items-center flex-wrap max-lg:justify-center">
              <CompletePaymentDialog onFinishPayment={onFinishPayment} />
              <Button variant="link" className="text-black hover:text-blue">
                Contact support
              </Button>
            </div>
          </div>
        )}

        <div className="md:hidden mb-5">
          <AfterPaymentBookingInfo />
        </div>

        {/* Guest Info */}
        <div className="px-5 md:px-6 pt-5 pb-7 border border-input rounded flex flex-col bg-white mb-5">
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
        <div className="px-5 md:px-6 py-8 border border-input rounded flex flex-col justify-center items-center bg-white mb-5">
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

        {/* Payment Info */}
        <div className="px-6 py-8 border border-input rounded flex flex-col bg-white mb-5">
          <div className="mb-4">
            <h6 className="text-base font-semibold pb-4 text-black">
              Payment info
            </h6>
          </div>
          <div className="flex flex-col gap-4">
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
          <div className="mt-10">
            <Button
              size="lg"
              className="inline-flex"
              onClick={handleRedirectAdminPanel}
            >
              Manage booking
            </Button>
          </div>
        </div>
      </div>
      {/* Left Panel End */}
      {/* Right Panel Start*/}
      <div className="basis-full md:basis-1/2 lg:basis-[37%] max-md:hidden">
        <AfterPaymentBookingInfo />
      </div>
    </div>
  );
};

export default ConfirmBooking;
