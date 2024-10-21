import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bookingPanelItems, BookingPanelItemsProps } from "./BookingData";
import { Badge } from "@/components/ui/badge";
import { IconCircleCheck, IconCircleX, IconLoader } from "@tabler/icons-react";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FC } from "react";

interface BookingPanelProps {
  upcomingTab?: boolean;
  isCancelled?: boolean;
}
const BookingSection: FC<BookingPanelProps> = ({
  upcomingTab = true,
  isCancelled,
}) => {
  const navigate = useNavigate();
  const handleRedirectBookingDetails = () =>{
    navigate('/user-booking-detail')
  }
  return (
    <>
      {bookingPanelItems.map((item: BookingPanelItemsProps) => (
        <div
          key={item.hotelName}
          className="bg-white border border-input p-4 md:p-5 rounded mb-6"
        >
          <div className="flex gap-4 items-stretch max-xlg:items-start max-md:flex-wrap">
            <div className="md:basis-44 flex items-center justify-center overflow-hidden rounded">
              <img src={item.imageUrl} alt={item.altTag} className="w-full" />
            </div>

            <div className="md:basis-[calc(100%_-_176px)] flex w-full flex-col">
              {/* Top Description */}
              <div className="w-full flex justify-between gap-6">
                <div>
                  <div className="flex gap-2 items-center pb-2">
                    <h4 className="text-xl font-medium md:font-semibold">
                      {item.hotelName}
                    </h4>
                    {/* Desktop Code Start */}
                    <div className="max-md:hidden">
                      {upcomingTab && (
                        <>
                          {item.isConfirmed ? (
                            <Badge className="flex gap-2 items-center text-sm bg-green-100 text-green capitalize font-medium px-3 py-1 hover:bg-green-100 shadow-none">
                              <IconCircleCheck className="size-5" /> Confirmed
                            </Badge>
                          ) : (
                            <Badge className="flex gap-2 items-center text-sm bg-orange-50 text-black capitalize font-medium px-3 py-1 hover:bg-green-100 shadow-none">
                              <IconLoader className="size-5 text-orange-500" />{" "}
                              Booking is processing
                            </Badge>
                          )}
                        </>
                      )}
                    </div>
                    {/* Desktop Code End */}
                  </div>
                  <p className="text-xs font-medium">{item.description}</p>
                </div>
                {/* Desktop Code Start */}
                <div className="flex gap-4 items-start max-md:hidden">
                  {isCancelled && (
                    <div className="self-center">
                      <Badge className="flex gap-2 items-center text-sm bg-red-50 text-red-extradark capitalize font-medium px-3 py-1 hover:bg-green-100 shadow-none">
                        <IconCircleX className="size-5" /> Cancelled
                      </Badge>
                    </div>
                  )}
                  <div className="text-right">
                    <p className="text-xs font-medium text-text">
                      {isCancelled ? "Your Refund" : "Price:"}
                    </p>
                    <h4 className="text-3xl font-semibold pt-0.5 text-black">
                      {item.price}
                    </h4>
                  </div>
                </div>
                {/* Desktop Code End */}
              </div>

              <div className="text-sm flex gap-6 items-center mt-6 max-md:flex-wrap">
                <p>{item.duration}</p>
                <p className="flex gap-3 items-center">
                  <span className="inline-flex w-1 h-1 bg-primary rounded-s-full"></span>
                  Free cancellation (limited time)
                </p>
              </div>

              {/* Mobile Price Code Start */}
              <div className="flex gap-4 items-start justify-between md:hidden mt-7 flex-wrap">
                <div className="order-2 self-center">
                  {isCancelled && (
                    <div className="self-center">
                      <Badge className="flex gap-2 items-center text-sm bg-red-50 text-red-extradark capitalize font-medium px-3 py-1 hover:bg-green-100 shadow-none">
                        <IconCircleX className="size-5" /> Cancelled
                      </Badge>
                    </div>
                  )}

                  {upcomingTab && (
                    <>
                      {item.isConfirmed ? (
                        <Badge className="flex gap-2 items-center text-sm bg-green-100 text-green capitalize font-medium px-3 py-1 hover:bg-green-100 shadow-none">
                          <IconCircleCheck className="size-5" /> Confirmed
                        </Badge>
                      ) : (
                        <Badge className="flex gap-2 items-center text-sm bg-orange-50 text-black capitalize font-medium px-3 py-1 hover:bg-green-100 shadow-none">
                          <IconLoader className="size-5 text-orange-500" />{" "}
                          Booking is processing
                        </Badge>
                      )}
                    </>
                  )}
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-text">
                    {isCancelled ? "Your Refund" : "Price:"}
                  </p>
                  <h4 className="text-3xl font-semibold pt-0.5 text-black">
                    {item.price}
                  </h4>
                </div>
              </div>
              {/* Mobile Price Code End */}
            </div>
          </div>
          {upcomingTab && (
            <>
              <Separator className="w-auto h-[1px] my-5 md:-mx-5" />
              <div className="flex justify-center 2xs:justify-between gap-5 items-center max-2xs:flex-wrap">
                <div className="text-base grid 2xs:flex gap-5 2xs:gap-10 max-md:order-2 max-2xs:text-center">
                  <Link to="/" className="text-blue">
                    View voucher
                  </Link>
                  <Link to="/" className="text-blue">
                    View invoice
                  </Link>
                </div>
                <Button size="lg" className="rounded-xl !px-6 max-2xs:w-full" onClick={handleRedirectBookingDetails}>
                  Booking details
                </Button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};
const BookingPanel = () => {
  return (
    <div>
      <p className="text-base font-medium xlg:hidden pb-4 text-black mt-6">
        Bookings
      </p>
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger
            value="upcoming"
            className="border-b border-input data-[state=active]:border-b-2 data-[state=active]:border-black px-4 py-2.5"
          >
            Upcoming
          </TabsTrigger>
          <TabsTrigger
            value="completed"
            className="border-b border-input data-[state=active]:border-b-2 data-[state=active]:border-black px-4 py-2.5"
          >
            Completed
          </TabsTrigger>
          <TabsTrigger
            value="cancelled"
            className="border-b border-input data-[state=active]:border-b-2 data-[state=active]:border-black px-4 py-2.5"
          >
            Cancelled
          </TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <div className="mt-6">
            <BookingSection />
          </div>
        </TabsContent>
        <TabsContent value="completed">
          <div className="mt-6">
            <BookingSection />
          </div>
        </TabsContent>
        <TabsContent value="cancelled">
          <div className="mt-6">
            <BookingSection upcomingTab={false} isCancelled={true} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingPanel;
