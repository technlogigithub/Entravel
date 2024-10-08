import Location from "../BookingForm/Location";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <div className="bg-hero-pattern w-full h-[700px] 2xl:h-[100vh] bg-center bg-cover bg-no-repeat">
      <div className="pt-20 px-5 md:px-8 lg:px-12 xl:px-20 flex flex-col justify-center items-center h-full relative">
        <div className="flex flex-col justify-center items-center max-md:text-center">
          <h1 className="tracking-[-5%] text-primary">
            Travel with{" "}
            <span className="tracking-[-2%] font-extrabold">crypto </span>
          </h1>
          <p className="text-2xl text-primary-extraLight pt-7 max-md:hidden">
            and save money
          </p>

          <form>
            <div className="flex bg-white max-w-[1067px] rounded-full py-4 relative px-10">
              <Location />
            </div>
          </form>
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
