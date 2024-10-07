import { platformBlackName, platformName } from "@/constants/data";
import Container from "../shared/Container";

const EntravelOffer = () => {
  return (
    <Container>
      <h3 className="px-12">With Entravel you get</h3>
      <div className="flex gap-4 mt-20 px-3 max-xl:flex-wrap">
        <div className="basis-full xl:basis-3/4">
          <div className="card-shadow bg-white rounded-sm p-2">
            <div className="flex gap-12 min-h-56">
              <div className="basis-2/5">
                <img src="/travel_one.jpg" alt="travel_one" />
              </div>
              <div className="flex flex-col basis-3/5 justify-between min-h-56 pr-9 py-7">
                <h2 className="text-[90px] flex-1 leading-none font-medium">
                  -70%
                </h2>
                <h5 className="text max-w-[406px]">
                  Up to 70% cheaper hotel prices than the regular price.
                </h5>
              </div>
            </div>
          </div>
          {/* Seocnd Section */}
          <div className="flex gap-4 mt-4 max-xl:flex-wrap">
            <div className="basis-full xl:basis-3/5 card-shadow bg-white rounded-sm overflow-hidden px-8 py-6">
              <h4 className="flex-1 mb-[83px] max-w-[450px]">
                Crypto-native global hotel booking platform
              </h4>
              
              <div className="flex flex-wrap">
                {platformBlackName.map((item:any) => (
                    <div className="text-base font-medium flex justify-center items-center gap-2 py-2 bg-black text-white shadow-two rounded-full border border-transparent w-[142px]" key={item.id}>
                   {item.icon} {item.title}
                </div>
                ))}
              </div>
              <div className="flex flex-wrap">
                {platformName.map((item:any) => (
                    <div className="text-base font-medium flex justify-center items-center gap-2 p-2 border border-black shadow-two rounded-full w-[142px]" key={item.id}>
                   {item.icon} {item.title}
                </div>
                ))}
              </div>
            </div>
            {/* Second Right Section */}
            <div className="basis-full xl:basis-2/5 card-shadow bg-white rounded-sm overflow-hidden px-8 py-6 flex flex-col">
            <div className="flex-grow">
              <h4 className="text-[32px] leading-tight font-medium pb-6">
                1 million hotels globally
              </h4>
              <p>
                Our users can choose between more than 1 million hotels
                worldwide.
              </p>
              </div>
              <div className="mt-16">
                <img
                  src="/global_hotels.png"
                  alt="global_hotels"
                  className="w-[131px] h-[127px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="basis-full xl:basis-1/4 max-xl:grid max-xl:grid-cols-2 max-xl:gap-4">
          <div className="card-shadow bg-white rounded-sm overflow-hidden">
            <img
              src="/nft_img.png"
              alt="travel_one"
              className="h-[305px] w-full"
            />
            <h4 className="p-8">
              NFT pre- and public sale
            </h4>
          </div>
          {/* Seocnd Section */}
          <div className="card-shadow bg-white rounded-sm overflow-hidden px-8 py-6 xl:mt-4 max-xl:flex-col max-xl:flex">
            <p className="font-18 pb-12 max-xl:flex-grow">
              We offer the largest discounts primarily on 4-5 star hotels.
            </p>
            <div className="flex">
              <h2 className="text-[90px] leading-none font-medium">5</h2>
              <img src="/star.png" alt="star" className="w-[184px] h-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EntravelOffer;
