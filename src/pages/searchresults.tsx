import Booking from "@/components/BookingForm/Booking"
import Filter from "@/components/SearchResults/Filters/Filter"
import SearchResultList from "@/components/SearchResults/SearchResultList/SearchResultList"

const SearchResults = () => {
  return (
    <div className="pt-20 bg-white min-h-[calc(100vh_-_266px)]">
      <div className="px-20 py-2 shadow-four"><Booking isInner={true}/></div>
      <div className="flex gap-9 py-9 px-20">
          <div className="basis-1/5">
            <Filter/>
          </div>
          <div className="basis-4/5">
            <SearchResultList/>
          </div>
      </div>
    </div>
  )
}

export default SearchResults