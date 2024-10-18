import Booking from "@/components/BookingForm/Booking";
import { IconGuarantee } from "@/components/iocns/Icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { IconHeart, IconMapPin, IconStarFilled } from "@tabler/icons-react";
import { attractions, hotelLists } from "./SearchDetailsList";
import { cn } from "@/lib/utils";
import Review from "@/components/shared/Review";
import { Link } from "react-router-dom";

const rating = 0;
const SearchDetailComponent = () => {
  return (
    <div className="pt-6 max-w-[950px] mx-auto mb-0 px-6 md:px-10 lg:px-0">
      <Breadcrumb className="max-md:hidden">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/search-results">
              New York (2098)
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Wyndham Garden Brooklyn Sunset Park</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Top Image */}
      <div className="flex gap-1 sm:gap-2  md:mt-5 mb-6 max-sm:flex-wrap">
        <div className="basis-full sm:basis-1/2 lg:basis-3/5 relative">
          <img
            src="/details.jpg"
            alt="details"
            className="h-full object-cover w-full max-sm:rounded overflow-hidden"
          />
          <Button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white flex items-center justify-center p-0 text-black hover:text-white">
            <IconHeart className="size-4" />
          </Button>
        </div>
        <div className="grid gap-1 sm:gap-2 sm:row-span-2 basis-full sm:basis-1/2 lg:basis-2/5 max-sm:grid-cols-4">
          <div className="sm:h-52 overflow-hidden">
            <img
              src="/details_two.jpg"
              alt="details"
              className="h-full object-cover max-lg:w-full max-sm:rounded overflow-hidden"
            />
          </div>
          <div className="grid gap-1 sm:gap-2 sm:h-48 overflow-hidden grid-cols-3 sm:grid-cols-2 max-sm:col-span-3">
            <img
              src="/details_three.jpg"
              alt="details"
              className="sm:col-start-1 sm:col-end-2 self-stretch object-cover w-full sm:hidden max-sm:rounded overflow-hidden"
            />
            <div className="relative imageOverlay">
              <img
                src="/details.jpg"
                alt="details"
                className="sm:col-start-3 sm:col-end-4 self-stretch object-cover h-full max-sm:rounded overflow-hidden"
              />
              <Button
                variant="ghost"
                className="bg-transparent text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-sm sm:text-base hover:bg-transparent hover:text-white px-2 whitespace-normal leading-tight"
              >
                See all 28 images
              </Button>
            </div>
            {/* <div> */}
            <Link to="/" className="flex self-stretch">
              <img
                src="/map_location.jpg"
                alt="map"
                className="sm:col-start-3 sm:col-end-4 self-stretch object-cover"
              />
            </Link>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* Heading Start */}
      <div className="grid sm:flex gap-3 items-center justify-between border-b border-dotted border-textExtraLight mb-5 pb-6 md:pb-8">
        <div className="max-sm:mb-4">
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 - rating }).map((_, index) => (
              <IconStarFilled
                className="size-[14px] text-yellow"
                key={`empty-${index}`}
              />
            ))}
          </div>
          <h4 className="text-xl sm:text-[26px] font-medium sm:font-semibold pb-2">
            Wyndham Garden Brooklyn Sunset Park
          </h4>
          <p className="text-sm text-textExtraLight flex gap-1 items-center">
            <IconMapPin className="text-textExtraLight opacity-50 max-sm:hidden" />{" "}
            55 Church Street, Financial District, New York (NY), United States
            10007 | 2.5 km from center
          </p>
        </div>
        <Review isRatingFirst={true} />
      </div>

      {/* Form Start */}
      <div className="mb-5 md:mb-11">
        <h4 className="text-xl mb-5">Availability</h4>
        <div className="shadow-five px-6 py-2 rounded-full bg-white border border-gray-100 max-md:hidden">
          <Booking isInner={true} />
        </div>
      </div>

      {/* Hotel List */}
      {hotelLists.map((item, index) => (
        <div
          className={cn(
            "border  rounded-md bg-white mb-4 md:mb-6",
            item.iselected ? "border-green" : "border-input"
          )}
          key={index}
        >
          <div
            className={cn(
              "flex justify-between gap-4 border-b border-input px-4 md:px-6 py-3 md:py-4 rounded-t-md overflow-hidden",
              item.iselected ? "bg-green" : "bg-white"
            )}
          >
            <h3
              className={cn(
                "text-base font-medium md:font-semibold",
                item.iselected && "text-white"
              )}
            >
              {item.hotelName}
            </h3>
            <div
              className={cn(
                "text-xs font-semibold flex gap-2 items-center max-md:hidden",
                item.iselected ? "text-white" : "text-green"
              )}
            >
              <IconGuarantee
                className={cn(item.iselected ? "fill-white" : "fill-green")}
              />{" "}
              Price guarantee
            </div>
          </div>
          <div className="flex justify-between gap-4 p-4 md:p-6 max-sm:flex-wrap">
            <div className="sm:w-[202px] sm:rounded overflow-hidden object-cover">
              <img
                src={item.hotelImageUrl}
                alt={item.hotelName}
                className="w-full max-sm:hidden"
              />
              <img
                src={item.hotelMobileImageUrl}
                alt={item.hotelName}
                className="w-full sm:hidden rounded-lg"
              />
            </div>
            <div className="basis-full sm:basis-[calc(100%_-_202px)]">
              <div className="grid grid-cols-3 gap-2 px-4 text-black-secondary font-medium max-sm:hidden">
                {item.amenitiesTitles.map((title) => (
                  <h5 className="text-sm" key={title}>
                    {title}
                  </h5>
                ))}
              </div>
              <div className="sm:px-4 sm:border border-dotted border-input rounded sm:mt-3 py-0 sm:py-4">
                {item.amenitiesItems.map((amenitie, amenityIndex) => (
                  <div
                    className="grid sm:grid-cols-3 sm:gap-2 text-sm font-medium text-black-secondary"
                    key={amenityIndex}
                  >
                    {/* Mobile View Benefits List Start */}
                    <div className="sm:hidden max-sm:border-b border-input max-sm:pb-4 max-sm:-mx-4 max-sm:px-4">
                      <p className="text-xs text-textExtraLight mb-2">
                        Benefits
                      </p>
                      <ul className="grid gap-2 grid-cols-2 text-black">
                        {amenitie.facilities?.map((facility, facilityIndex) => (
                          <li className="flex gap-2" key={facilityIndex}>
                            <p className="min-w-6">{facility.icon}</p>
                            <p className="text-sm font-normal">
                              {facility.label}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="sm:hidden mt-4">
                      <p className="text-xs text-textExtraLight mb-1">
                       What’s includes
                      </p>
                      <h4 className="text-base font-medium text-black">{amenitie.roomType}</h4>
                      {amenitie.isRefund && (
                        <p className="text-green text-xs">Refundable</p>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:hidden mb-4">
                    <p className="font-normal max-sm:text-sm">All taxes and fees included</p>
                    <p className="font-normal max-sm:text-text-light">
                      + excludes 30$ taxes & fees (incl. VAT){" "}
                    </p>
                  </div>
                    {/* Mobile View Benefits List End */}

                    <div className="flex flex-col gap-2 max-sm:hidden">
                      <h4 className="text-base">{amenitie.roomType}</h4>
                      {amenitie.isRefund && (
                        <p className="text-green">Refundable</p>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 max-sm:hidden">
                      <ul className="flex gap-2 flex-col">
                        {amenitie.facilities?.map((facility, facilityIndex) => (
                          <li className="flex gap-2" key={facilityIndex}>
                            <p className="text-sm font-normal">
                              {facility.label}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col sm:gap-2">
                      <h3 className="text-[26px] sm:text-xl font-semibold max-sm:leading-none">
                        ${amenitie.price}
                      </h3>
                      <p className="text-text-light font-normal max-sm:text-xs">
                        price per night{" "}
                        <span className="flex text-black sm:text-primary pt-1 font-medium max-sm:text-sm">
                          ${amenitie.totalPrice} for {amenitie.totalDuration}{" "}
                          night
                        </span>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="grid sm:grid-cols-3 gap-2 text-sm font-medium text-black-secondary sm:mt-7">
                  <div className="hidden sm:flex flex-col sm:gap-2 col-span-2">
                    <p className="font-normal max-sm:text-sm">All taxes and fees included</p>
                    <p className="font-normal max-sm:text-text-light">
                      + excludes 30$ taxes & fees (incl. VAT){" "}
                    </p>
                  </div>
                
                  <div className="flex flex-col gap-2 max-sm:mt-8">
                    <Button className="w-full rounded-xl max-sm:text-lg max-sm:h-12" size="lg">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-end max-sm:mb-8">
        <Button
          variant="secondary"
          size="lg"
          className="bg-gray rounded-xl shadow-none"
        >
          Show more rooms
        </Button>
      </div>

      {/* Bottom Section */}
      <div>
        <div className="max-sm:hidden">
          <h5 className="text-xl font-semibold mb-7">Reviews</h5>
          <Review isRatingFirst={true} />
        </div>
        <div>
          {/* About the hotel */}
          <div className="flex gap-6 md:gap-20 border-t-2 border-dotted border-extraLight pt-8 mt-8 max-sm:flex-wrap">
            <div className="basis-full sm:basis-[180px]">
              <h2 className="text-xl font-semibold">About the hotel</h2>
            </div>
            <div className="basis-full sm:basis-[calc(100%_-_180px)]">
              <div className="overflow-hidden rounded-lg mb-7">
                <img src="/map_location.jpg" alt="map_location" />
              </div>
              <div className="mb-9">
                <h6 className="text-base">Location</h6>
                <p className="text-sm pt-1">
                  Conrad New York Downtown is centrally located in New York, a
                  4-minute walk from One World Trade Center and 10 minutes by
                  foot from The Oculus. This 5-star hotel is 0.9 mi (1.4 km)
                  from National September 11 Memorial and 2.7 mi (4.4 km) from
                  Hudson River Park.
                </p>
              </div>
              <div className="mb-9">
                <h6 className="text-base">Attractions</h6>
                <ul className="text-sm pl-4 pb-1">
                  {attractions.map((item: string) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDetailComponent;
