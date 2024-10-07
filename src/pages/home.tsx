import Banner from "@/components/Landing/Banner";
import BiggestDiscount from "@/components/Landing/BiggestDiscount";
import Discount from "@/components/Landing/Discount";
import EfforlessBooking from "@/components/Landing/EfforlessBooking";
import EntravelOffer from "@/components/Landing/EntravelOffer";
import MemberClub from "@/components/Landing/MemberClub";

const Home = () => {
  return (
    <>
      <Banner />
      <EfforlessBooking />
      <EntravelOffer/>
      <BiggestDiscount/>
      <MemberClub/>
      <Discount/>
    </>
  );
};

export default Home;
