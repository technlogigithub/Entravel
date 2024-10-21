import { IconHeartLock } from "@/components/iocns/Icons";
import { Button } from "@/components/ui/button";
import OwlCarousel from "react-owl-carousel";
import { favouritesItems } from "./FavouritesData";
import {IconHeartFilled, IconStarFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Favourites = () => {
    const [isHotelSearch, setIsHotelSearch] = useState(false);
  const options = {
    loop: false,
    margin: 0,
    nav: true,
    items: 1,
  };

  const handleHotelSearch = () => {
    setIsHotelSearch(true);
  }
  return (
    <>
      {!isHotelSearch ? (
        <div className="flex flex-col items-center lg:max-w-96 mx-auto text-center justify-center max-xlg:mt-10">
          <IconHeartLock />
          <h2 className="text-lg font-medium text-black pt-6 pb-3">
            You have no favourite hotels yet{" "}
          </h2>
          <p className="text-text text-sm mb-6">
            There are no booking here, please find hotels and book it on search.
          </p>
          <Button className="rounded-xl px-6" onClick={handleHotelSearch}>Search hotels</Button>
        </div>
      ) : (
        <>
          {favouritesItems.map((item) => (
            <div
              key={item.hotelName}
              className="p-4 border border-input rounded bg-white mb-5 max-xlg:mt-5"
            >
              <div className="flex gap-4 items-stretch max-xlg:items-start max-md:flex-wrap">
                <div className="md:basis-[250px] xlg:basis-[320px] 2xxl:basis-[420px] flex items-center justify-center overflow-hidden">
                  <div className="w-[280px] 4xs:w-[325px] 3xs:w-[340px] 2xs:w-[300px] 2xxl:w-[400px] overflow-hidden block relative">
                    <OwlCarousel
                      className="owl-theme section hotelCarousel relative"
                      autoplay={false}
                      {...options}
                    >
                      {/* Carousel item */}
                      {item.propertyImages.map((image, index) => (
                        <div
                          className="w-full h-auto relative overflow-hidden"
                          key={index}
                        >
                          <img
                            src={image.imageUrl}
                            alt={image.altTag}
                            className="w-full"
                          />
                         
                        </div>
                      ))}
                    </OwlCarousel>
                    <Button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center p-0 text-black hover:text-white z-10">
                            <IconHeartFilled className="size-4 text-red-500" />
                          </Button>
                  </div>
                  
                </div>
                {/* Result Decription */}

                <div className="md:basis-[calc(100%_-_250px)] xlg:basis-[calc(100%_-_320px)] 2xxl:basis-[calc(100%_-_420px)] flex w-full flex-col justify-between max-xlg:gap-6">
                  <Link
                    to="/search-deatils"
                    className="p-0 h-auto w-full bg-transparent shadow-none hover:bg-transparent text-black"
                  >
                    {/* Top Description */}
                    <div className="w-full flex-grow">
                      <div className="flex justify-between gap-4 items-start">
                        <div>
                          <h4 className="text-lg font-semibold md:font-medium pb-2">
                            {item.hotelName}
                          </h4>
                          <div className="max-md:flex gap-2 items-center max-md:flex-wrap">
                            <div className="flex items-center gap-1">
                              {Array.from({ length: 5 - item.rating }).map(
                                (_, index) => (
                                  <IconStarFilled
                                    className="size-[14px] text-yellow"
                                    key={`empty-${index}`}
                                  />
                                )
                              )}
                            </div>
                            <div className="flex md:hidden gap-2 items-center">
                              <div className="relative bg-green text-white text-sm font-medium py-1.5 px-2 rounded-full flex items-center justify-center leading-none">
                                {item.totalRating}
                                <div className="absolute -bottom-[11px] left-[1.5px] w-0 h-0 border-l-[14px] border-l-transparent border-t-[18px] border-t-green rotate-[272deg] max-md:hidden"></div>
                              </div>

                              <h5 className="text-sm font-medium">
                                {item.hotelStatus}
                              </h5>
                              <p className="text-xs text-text">
                                ( {item.reviews} reviews)
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* Desktop text start */}
                        <div className="hidden md:flex  gap-3 items-start">
                          <div className="text-right">
                            <h5 className="text-green text-base font-semibold pb-0.5">
                              {item.hotelStatus}
                            </h5>
                            <p className="text-xs text-text">
                              {item.reviews} reviews
                            </p>
                          </div>
                          <div className="relative bg-green text-white text-base font-medium py-1.5 px-2.5 rounded-md flex items-center justify-center">
                            {item.totalRating}
                            <div className="absolute -bottom-[11px] left-[1.5px] w-0 h-0 border-l-[14px] border-l-transparent border-t-[18px] border-t-green rotate-[272deg]"></div>
                          </div>
                        </div>
                        {/* Desktop text End */}
                      </div>
                      <div className="text-sm pt-2.5 md:max-w-[520px] block items-start md:flex">
                        <p
                          className="line-clamp-2 flex-1 max-md:mb-1"
                          title={item.description}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-end">
                    <Button size="lg" variant="outline" className="border-black !px-6 rounded-xl !bg-transparent shadow-none hover:!bg-black hover:text-white max-2xs:w-full">Check availability</Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Favourites;
