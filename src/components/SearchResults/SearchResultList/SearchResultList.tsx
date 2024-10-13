import { IconSort } from "@/components/iocns/Icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IconCheck, IconStarFilled, IconHeart } from "@tabler/icons-react";
import { useState } from "react";
import { resultItems } from "./data";
import { Separator } from "@/components/ui/separator";
import OwlCarousel from "react-owl-carousel";
import ResultSkelton from "@/components/Skelton/ResultSkelton";

const sortMenuList = [
  {
    label: "Best",
  },
  {
    label: "Rating",
  },
  {
    label: "Distance to point of interest",
  },
  {
    label: "Price: Low to high",
  },
  {
    label: "Price: High to low",
  },
];
const SortMenu = () => {
  const [selectedSort, setSelectedSort] = useState(sortMenuList[0]);
  const handleSelectSort = (selectedItem: { label: string }) => {
    setSelectedSort(selectedItem);
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="text-lg font-semibold gap-1.5 rounded-xl shadow-none bg-gray-light"
          >
            <IconSort />
            Sort by: {selectedSort.label}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-52 p-0" align="end">
          <ul className="flex flex-col gap-2 py-2">
            {sortMenuList.map((item) => (
              <li key={item.label}>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-none"
                  onClick={() => {
                    handleSelectSort(item);
                  }}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
const SearchResultList = () => {
    const options = {
        loop: false,
        margin: 0,
        nav: true,
        items: 1,
      };
  return (
    <div>
      <p className="text-text">Amsterdam, Netherlands</p>
      <div className="flex justify-between mt-2 items-center">
        <h2 className="text-xl font-medium">126 hotels available</h2>
        <SortMenu />
      </div>
      {/* Result List of results */}
      {resultItems.map((item) => (
        <div key={item.hotelName}>
          <div className="flex gap-4 mt-5 items-stretch">
            <div className="basis-[320px] 2xxl:basis-[420px] flex items-center justify-center overflow-hidden">
              <div className="w-[300px] 2xxl:w-[400px] overflow-hidden block">
                <OwlCarousel
                  className="owl-theme section hotelCarousel relative"
                  autoplay={false}
                  {...options}
                >
                  {/* Carousel item */}
                  {item.propertyImages.map((image, index) => (
                      <div className="w-full h-auto relative rounded-xl overflow-hidden" key={index}>
                        <img src={image.imageUrl} alt={image.altTag} className="w-full" />
                        <Button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center p-0 text-black hover:text-white">
                            <IconHeart className="size-4"/>
                        </Button>
                     </div>
                  ))}
                </OwlCarousel>
              </div>
            </div>
            {/* Result Decription */}
            <div className="basis-[calc(100%_-_320px)] 2xxl:basis-[calc(100%_-_420px)] flex w-full flex-col">
              {/* Top Description */}
              <div className="w-full flex-grow">
                <div className="flex justify-between gap-4 items-start">
                  <div>
                    <h4 className="text-lg font-medium pb-2">
                      {item.hotelName}
                    </h4>
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
                  </div>
                  <div className="flex  gap-3 items-start">
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
                </div>
                <div className="text-sm pt-2.5 max-w-[520px] flex items-start">
                  <p className="line-clamp-2 flex-1" title={item.description}>
                    {item.description}
                  </p>
                  <Button
                    variant="link"
                    className="h-auto min-h-auto p-0 pl-1 flex-shrink-0"
                  >
                    Show on map
                  </Button>
                </div>
                {item.off && (
                  <div className="flex justify-end mt-0.5 font-semibold h-auto">
                    <p className="text-sm bg-primary text-white py-1 px-3 rounded-full uppercase">
                      {item.off}% off
                    </p>
                  </div>
                )}
              </div>
              {/* Bottom Description */}
              <div className="flex justify-between gap-4 mt-2">
                <ul className="flex gap-3 self-end">
                  {(item.features ?? []).map((feature, index) => (
                    <li className="flex items-center gap-1" key={index}>
                      <IconCheck className="size-4 text-green" />
                      <p className="text-[13px] font-medium">{feature.label}</p>
                    </li>
                  ))}
                </ul>
                <div className="text-right">
                  <div className="flex gap-2">
                    <h4 className="text-2xl text-disabled font-medium">
                      <s>${item.originalPrice}</s>
                    </h4>
                    <h4 className="text-[26px] font-semibold text-green">
                      ${item.offerPrice}
                    </h4>
                  </div>
                  <p>price per night</p>
                  <p className="text-[13px] font-medium pt-1">
                    ${item.totalPrice} for {item.days} nights
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
        </div>
      ))}
        <ResultSkelton/>
        <Separator className="my-6" />
        <ResultSkelton/>
    </div>
  );
};

export default SearchResultList;
