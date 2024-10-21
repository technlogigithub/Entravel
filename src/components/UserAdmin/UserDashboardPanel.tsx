import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingPanel from "./BookingPanel/BookingPanel";

const UserDashboardPanel = () => {
  return (

      <Tabs defaultValue="bookings" className="md:flex xl:gap-20 max-xlg:flex-wrap">
      <div className='xlg:basis-44 xl:basis-64 flex-shrink-0 max-xlg:w-full'>
        <TabsList className="h-auto flex-wrap max-xlg:bg-white max-xlg:shadow-two max-md:-mx-6 max-xlg:-mx-10 max-xlg:flex max-md:px-6 max-xlg:px-10 rounded-none">
          <TabsTrigger value="bookings" className="xlg:w-full justify-start max-md:p-2 md:py-3.5">Bookings</TabsTrigger>
          <TabsTrigger value="favourites" className="xlg:w-full justify-start max-md:p-2 md:py-3.5">Favourites</TabsTrigger>
          <TabsTrigger value="walletbalance" className="xlg:w-full justify-start max-md:p-2 md:py-3.5">Wallet balance</TabsTrigger>
          <TabsTrigger value="personalinformation" className="xlg:w-full justify-start max-md:p-2 md:py-3.5">Personal information</TabsTrigger>
          <TabsTrigger value="accountsettings" className="xlg:w-full justify-start max-md:p-2 md:py-3.5">Account settings</TabsTrigger>
        </TabsList>
        </div>
        <div className='xlg:basis-[calc(100%_-_176px)] xl:basis-[calc(100%_-_256px)]'>
        <TabsContent value="bookings">
          <BookingPanel/>
        </TabsContent>
        <TabsContent value="favourites">Change your password here.</TabsContent>
        </div>
      </Tabs>
  );
};

export default UserDashboardPanel;
