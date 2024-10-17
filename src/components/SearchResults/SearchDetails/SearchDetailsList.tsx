export const hotelLists = [
    {
        hotelName:"Cheapest Room: Double deluxe",
        hotelImageUrl:"/hotel.jpg",
        amenitiesTitles:["Room type", "Facility information", "Price for stay"],
        amenitiesItems:[
            {
                isRefund:true,
                roomType:"Room only",
                facilities:["Free Internet", "TV", "Minibar"],
                price:179,
                totalPrice:179,
                totalDuration:1
            }
        ],
        iselected:true
    },
    {
        hotelName:"Superior, one queen and one full bed",
        hotelImageUrl:"/hotel.jpg",
        amenitiesTitles:["Room type", "Facility information", "Price for stay"],
        amenitiesItems:[
            {
                isRefund:false,
                 roomType:"Room with Breakfast",
                 facilities:["Free Internet", "TV", "Minibar", "Breakfast"],
                 price:90,
                 totalPrice:180,
                 totalDuration:2
            }
        ],
        iselected:false
    }
]