import Booking from "@/components/BookingForm/Booking";
import Filter from "@/components/SearchResults/Filters/Filter";
import SearchResultList from "@/components/SearchResults/SearchResultList/SearchResultList";

const SearchResults = () => {
  return (
    <div className="pt-16 md:pt-20 bg-white min-h-[calc(100vh_-_266px)]">
      <div className="px-6 md:px-10 2xlg:px-20 shadow-four relative">
        <Booking isInner={true} />
      </div>
      <div className="flex gap-9 py-4 md:py-9 px-6 md:px-10 2xlg:px-20 max-2xlg:flex-wrap">
        <div className="2xlg:basis-1/5 max-2xlg:hidden">
          <Filter />
        </div>
        <div className="basis-full 2xlg:basis-4/5">
          
          <SearchResultList />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
