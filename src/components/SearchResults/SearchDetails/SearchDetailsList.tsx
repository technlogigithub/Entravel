import { IconCocktail, IconKidsFriendly, IconSwimingPool } from "@/components/iocns/Icons";
import { IconWifi } from "@tabler/icons-react";

// Define types for the facility information
interface Facility {
    label: string;
    icon?: any;
  }
  
  // Define type for amenities items
  interface AmenitiesItem {
    isRefund: boolean;
    roomType: string;
    facilities: Facility[]; // Change to accept only Facility objects
    price: number;
    totalPrice: number;
    totalDuration: number;
  }
  
  // Define type for hotel information
  interface Hotel {
    hotelName: string;
    hotelImageUrl: string;
    hotelMobileImageUrl: string;
    amenitiesTitles: string[];
    amenitiesItems: AmenitiesItem[];
    iselected: boolean;
  }
  
  // Define type for hotel lists
  export const hotelLists: Hotel[] = [
    {
      hotelName: "Cheapest Room: Double deluxe",
      hotelImageUrl: "/hotel.jpg",
      hotelMobileImageUrl: "/mobile_detial.jpg",
      amenitiesTitles: ["Room type", "Facility information", "Price for stay"],
      amenitiesItems: [
        {
          isRefund: true,
          roomType: "Room only",
          facilities: [
            { label: "Free Internet", icon:  <IconWifi/> },
            { label: "Swimming pool", icon: <IconSwimingPool/> },
            { label: "Kids Friendly", icon:  <IconKidsFriendly/> },
            { label: "Cocktails", icon: <IconCocktail/> },
          ],
          price: 179,
          totalPrice: 179,
          totalDuration: 1,
        },
      ],
      iselected: true,
    },
    {
      hotelName: "Superior, one queen and one full bed",
      hotelImageUrl: "/hotel.jpg",
      hotelMobileImageUrl: "/mobile_detial.jpg",
      amenitiesTitles: ["Room type", "Facility information", "Price for stay"],
      amenitiesItems: [
        {
          isRefund: false,
          roomType: "Room with Breakfast",
          facilities: [
            { label: "Free Internet", icon: <IconWifi/> },
            { label: "Swimming pool", icon: <IconSwimingPool/> },
          ],
          price: 90,
          totalPrice: 180,
          totalDuration: 2,
        },
      ],
      iselected: false,
    },
  ];
  
  export const attractions: string[] = [
    "Distances are displayed to the nearest 0.1 mile and kilometer",
    "One World Trade Center - 0.3 km / 0.2 mi",
    "The Oculus - 0.8 km / 0.5 mi",
    "National September 11 Memorial - 0.9 km / 0.6 mi",
    "Wall Street - 1.1 km / 0.7 mi",
    "New York Stock Exchange - 1.3 km / 0.8 mi",
    "Battery Park - 1.6 km / 1 mi",
    "Brooklyn Bridge - 2.1 km / 1.3 mi",
    "Hudson River Park - 2.2 km / 1.4 mi",
    "Washington Square Park - 2.7 km / 1.7 mi",
    "Manhattan Bridge - 2.8 km / 1.7 mi",
    "5th Avenue - 2.9 km / 1.8 mi",
  ];



  

  // Hotel Facility Data
  export const facilitiesData = {
    "facilities": [
      {
        "icon": "IconWifi",
        "title": "Internet",
        "details": ["Free Wi-Fi in rooms", "Wi-Fi in public areas"]
      },
      {
        "icon": "IconPool",
        "title": "Swimming pool",
        "details": ["Indoor pool", "Kids pool", "Outdoor pool", "Pool bar", "Salt water pool"]
      },
      {
        "icon": "IconWellness",
        "title": "Wellness Area",
        "details": ["Jacuzzi", "Massage", "Sauna", "Solarium", "Steam Bath", "Turkish Bath", "Hamam", "Barber/Beauty Salon"]
      },
      {
        "icon": "IconKids",
        "title": "Kids Friendly",
        "details": ["Babysitting service", "Child care", "Games room"]
      },
      {
        "icon": "IconParking",
        "title": "Parking",
        "details": ["Car parking", "Garage"]
      },
      {
        "icon": "IconFood",
        "title": "Food & Drink",
        "details": ["Cafe", "Pool bar", "Restaurant", "Breakfast in room all day", "Lobby Bar"]
      }
    ]
  }