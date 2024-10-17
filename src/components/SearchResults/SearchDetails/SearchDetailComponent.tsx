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
import { IconMapPin, IconStarFilled } from "@tabler/icons-react";
import { hotelLists } from "./SearchDetailsList";
import { cn } from "@/lib/utils";
import Review from "@/components/shared/Review";

const rating = 0;
const SearchDetailComponent = () => {
  return (
    <div className="pt-6 max-w-[950px] mx-auto mb-6">
      <Breadcrumb>
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
      <div className="flex gap-1 mt-5 mb-6">
        <div className="basis-3/5">
          <img
            src="/details.jpg"
            alt="details"
            className="h-full object-cover"
          />
        </div>
        <div className="grid gap-1 row-span-2 basis-2/5">
          <div className="h-52 overflow-hidden">
            <img
              src="/details_two.jpg"
              alt="details"
              className="h-full object-cover"
            />
          </div>
          <div className="grid gap-1 h-48 overflow-hidden">
            <img
              src="/details_three.jpg"
              alt="details"
              className="col-start-1 col-end-2 self-stretch object-cover"
            />
            <img
              src="/details.jpg"
              alt="details"
              className="col-start-3 col-end-4 self-stretch object-cover"
            />
          </div>
        </div>
      </div>
      {/* Heading Start */}
      <div className="flex gap-3 items-center justify-between border-b border-dotted border-textExtraLight mb-5 pb-8">
        <div>
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 - rating }).map((_, index) => (
              <IconStarFilled
                className="size-[14px] text-yellow"
                key={`empty-${index}`}
              />
            ))}
          </div>
          <h4 className="text-[26px] font-semibold pb-2">
            Wyndham Garden Brooklyn Sunset Park
          </h4>
          <p className="text-sm text-textExtraLight flex gap-1 items-center">
            <IconMapPin className="text-textExtraLight opacity-50" /> 55 Church
            Street, Financial District, New York (NY), United States 10007 | 2.5
            km from center
          </p>
        </div>
        <Review/>
      </div>

      {/* Form Start */}
      <div className="mb-11">
        <h4 className="text-xl mb-5">Availability</h4>
        <div className="shadow-five px-6 py-2 rounded-full bg-white border border-gray-100">
          <Booking isInner={true} />
        </div>
      </div>

      {/* Hotel List */}
      {hotelLists.map((item, index) => (
        <div
          className={cn("border  rounded-md bg-white mb-6", item.iselected ? "border-green" : "border-input")}
          key={index}
        >
          <div className={cn("flex justify-between gap-4 border-b border-input px-6 py-4 rounded-t-md overflow-hidden", item.iselected ? "bg-green" : "bg-white")}>
            <h3 className={cn("text-base font-semibold", item.iselected && "text-white")}>{item.hotelName}</h3>
            <div className={cn("text-xs font-semibold flex gap-2 items-center", item.iselected ? "text-white" : "text-green")}>
              <IconGuarantee className={cn(item.iselected ? "fill-white" : "fill-green")}/> Price guarantee
            </div>
          </div>
          <div className="flex justify-between gap-4 p-6">
            <div className="w-[202px] rounded overflow-hidden object-cover">
              <img
                src={item.hotelImageUrl}
                alt={item.hotelName}
                className="w-full"
              />
            </div>
            <div className="basis-[calc(100%_-_202px)]">
              <div className="grid grid-cols-3 gap-2 px-4 text-black-secondary  font-medium">
                {item.amenitiesTitles.map((title) => (
                  <h5 className="text-sm" key={title}>
                    {title}
                  </h5>
                ))}
              </div>
              <div className="px-4 border border-dotted border-input rounded mt-3 py-4">
                {item.amenitiesItems.map((amenitie) => (
                  <div className="grid grid-cols-3 gap-2  text-sm font-medium text-black-secondary">
                    <div className="flex flex-col gap-2">
                      <h4 className="text-base">{amenitie.roomType}</h4>
                      {amenitie.isRefund && <p className="text-green">Refundable </p>}
                    </div>
                    <div className="flex flex-col gap-2">
                      {amenitie.facilities.map((facility) => (
                        <p key={facility}>{facility}</p>
                      ))}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold">${amenitie.price}</h3>
                      <p className="text-text-light font-normal">
                        price per night{" "}
                        <span className="flex text-primary pt-1 font-medium">
                          ${amenitie.totalPrice} for {amenitie.totalDuration} night
                        </span>
                      </p>
                    </div>
                  </div>
                ))}

                <div className="grid grid-cols-3 gap-2  text-sm font-medium text-black-secondary mt-7">
                  <div className="flex flex-col gap-2 col-span-2">
                    <p className="font-normal">All taxes and fees included</p>
                    <p className="font-normal">
                      + excludes 30$ taxes & fees (incl. VAT){" "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button className="w-full rounded-xl" size="lg">
                      Book now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-end"><Button variant="secondary" size="lg" className="bg-gray rounded-xl shadow-none">Show more rooms</Button></div>

      {/* Bottom Section */}
      <div>
        <h5 className="text-xl font-semibold mb-7">Reviews</h5>
        <Review isRatingFirst={true}/>
        <div>
          <div className="grid grid-cols-4 gap-4">
            <div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SearchDetailComponent;
