import { Button } from "../ui/button";
import Booking from "../BookingForm/Booking";

const Banner = () => {
  return (
    <div className="bg-hero-pattern w-full h-[100vh] bg-center bg-cover bg-no-repeat">
      <div className="pt-20 md:pb-28 px-5 md:px-8 lg:px-12 xl:px-20 flex flex-col justify-center items-center h-full relative">
        <div className="flex flex-col justify-center items-center max-md:text-center max-md:w-full">
          <h1 className="tracking-[-5%] max-sm:max-w-xs text-blackDark">
            Travel with{" "}
            <span className="tracking-[-2%] font-extrabold">crypto </span>
          </h1>
          <p className="text-2xl text-primary-extraLight pt-7 max-md:hidden">
            and save money
          </p>


            <div className="flex bg-white w-4xl xl:w-[1084px] rounded-2xl md:rounded-full py-6 md:py-1 relative pl-6 md:pl-8 xl:pl-11 pr-6 gap-5 mt-16 md:mt-20 items-center max-md:w-full">
              <Booking />
            </div>
        </div>
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 max-md:hidden">
          <Button
            size="lg"
            className="px-5 py-2 gap-2 bg-white/50 rounded-full"
          >
            <img src="/icons/Travel_with.png" alt="diamond" /> Invite-Only
            Membership
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
