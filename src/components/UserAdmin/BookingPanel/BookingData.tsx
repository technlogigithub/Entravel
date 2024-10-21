

export interface BookingPanelItemsProps {
    imageUrl: string;
    altTag: string;
    hotelName: string;
    description: string,
    price: string,
    duration: string,
    isConfirmed?: boolean
}

export const bookingPanelItems: BookingPanelItemsProps[] = [
    {
        imageUrl:"/property_img.jpg",
        altTag:"result property",
        hotelName:"Millennium Hilton New York One",
        description:"Manhattan, New York City | 2.5 km from center ",
        price:"$348",
        duration:"Fri, Oct 4 — Fri, Oct 11",
        isConfirmed:true
    },
    {
        imageUrl:"/property_img.jpg",
        altTag:"result property",
        hotelName:"Millennium Hilton New York One",
        description:"Manhattan, New York City | 2.5 km from center ",
        price:"$348",
        duration:"Fri, Oct 4 — Fri, Oct 11",
        isConfirmed:false
    },
    {
        imageUrl:"/property_img.jpg",
        altTag:"result property",
        hotelName:"Millennium Hilton New York One",
        description:"Manhattan, New York City | 2.5 km from center ",
        price:"$348",
        duration:"Fri, Oct 4 — Fri, Oct 11",
        isConfirmed:true
    },  
]