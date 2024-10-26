import { platformName } from "@/constants/data";
import Container from "../shared/Container";
import { IconUsdcColor, IconUstdColor } from "../iocns/Icons";

const EntravelOffer = () => {
  return (
    <Container>
      <h3 className="px-3 md:px-12">With Entravel you get</h3>
      <p className="font-18 text-black md:max-w-[507px] md:justify-self-end !font-normal px-3 max-md:mt-6 block md:hidden">
        Enjoy unbeatable hotel booking deals with Entravel - where{" "}
        <span className="font-semibold">invitation-only membership</span>{" "}
        unlocks a world of privileges.
      </p>
      <div className="flex gap-4 mt-12 md:mt-20 px-3 max-xl:flex-wrap">
        <div className="basis-full xl:basis-3/4 flex flex-col">
          <div className="card-shadow bg-white rounded-sm p-2">
            <div className="flex gap-10 md:gap-12 md:min-h-56 max-md:flex-wrap">
              <div className="basis-full md:basis-2/5">
                <img src="/travel_one.jpg" alt="travel_one" />
              </div>
              <div className="flex flex-col basis-full md:basis-3/5 justify-between md:min-h-56 md:pr-9 md:py-7 max-md:px-2 max-md:pb-4">
                <h2 className="text-[80px] md:text-[90px] flex-1 leading-none font-medium max-md:mb-2">
                  -70%
                </h2>
                <h5 className="font-18 md:max-w-[406px] max-md:leading-6">
                  Up to 70% cheaper hotel prices than the regular price.
                </h5>
              </div>
            </div>
          </div>
          {/* Mobile image view */}
          <div className="card-shadow bg-white rounded-sm overflow-hidden mt-4 block md:hidden">
            <img
              src="/nft_img.png"
              alt="travel_one"
              className="h-[305px] w-full"
            />
            <h4 className="p-6 sm:p-8">NFT pre- and public sale</h4>
          </div>

          {/* Seocnd Section */}
          <div className="flex gap-4 mt-4 max-xl:flex-wrap flex-grow">
            <div className="basis-full xl:basis-3/5 card-shadow bg-white rounded-sm overflow-hidden px-6 md:px-10 py-8 md:py-9 flex flex-col">
              <h4 className="text-[30px] md:text-[40px] font-medium flex-1 mb-6 md:mb-8 max-w-[350px]">
                Payment via crypto, Visa & Mastercard
              </h4>

              <div className="md:bg-blue-50 rounded-xl md:p-4 grid md:grid-cols-2 max-md:gap-3">
                <div className="md:pr-3 max-md:bg-blue-50 max-md:rounded-xl max-md:p-4">
                  <div className="bg-white rounded-xl py-4 px-6 text-base font-semibold flex items-center gap-6 justify-center">
                    <p className="flex items-center gap-1.5">
                      {" "}
                      <IconUstdColor /> USDT
                    </p>
                    <p className="flex items-center gap-1.5">
                      <IconUsdcColor /> USDC
                    </p>
                  </div>
                  <div className="flex justify-center mt-7 gap-2 flex-wrap :px-4 max-w-[280px] mx-auto">
                    {platformName.map((item: any) => (
                      <div key={item.id}>{item.icon}</div>
                    ))}
                  </div>
                </div>

                <div className="md:border-l md:border-gray-200 md:pl-3 max-md:bg-blue-50 max-md:rounded-xl max-md:p-4 flex flex-col justify-center max-md:min-h-[200px]">
                  <div className="bg-white rounded-xl py-4 px-6 text-base font-semibold flex items-center gap-6 justify-center">
                    <img src="/visa.png" alt="Visa" className="h-9" />
                    <img
                      src="/mastercard.png"
                      alt="Mastercard"
                      className="h-9"
                    />
                  </div>
                  <div className="flex-grow flex justify-center items-center">
                    <img src="/stripe.png" alt="stripe" className="h-5" />
                  </div>
                </div>
              </div>

              {/*   <div className="flex flex-wrap">
                {platformName.map((item:any) => (
                    <div className="text-base font-medium flex justify-center items-center gap-2  py-1.5 md:py-2 border border-black shadow-two rounded-full w-[142px]" key={item.id}>
                   {item.icon} {item.title}
                </div>
                ))}
              </div> */}
            </div>
            {/* Second Right Section */}
            <div className="basis-full xl:basis-2/5 card-shadow bg-white rounded-sm overflow-hidden px-6 md:px-8 py-8 md:py-6 flex flex-col">
              <div className="flex-grow">
                <h4 className="text-[32px] leading-tight font-medium pb-6">
                  1 million hotels globally
                </h4>
                <p className="font-medium">
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
        <div className="basis-full xl:basis-1/4 max-xl:grid max-sm:grid-cols-1 max-xl:grid-cols-2 max-xl:gap-4 xl:flex xl:flex-col">
          <div className="card-shadow bg-white rounded-sm overflow-hidden max-md:hidden">
            <img
              src="/nft_img.png"
              alt="travel_one"
              className="h-[305px] w-full"
            />
            <h4 className="p-6 sm:p-8">NFT pre- and public sale</h4>
          </div>
          {/* Seocnd Section */}
          <div className="card-shadow bg-white rounded-sm overflow-hidden px-8 py-6 xl:mt-4 max-xl:flex-col max-xl:flex xl:flex-grow">
            <p className="font-18 pb-12 max-xl:flex-grow">
              We offer the largest discounts primarily on 4-5 star hotels.
            </p>
            <div className="flex">
              <h2 className="text-[90px] leading-none font-medium">5</h2>
              <img src="/star.png" alt="star" className="w-[175px] h-8" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EntravelOffer;
