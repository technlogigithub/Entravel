import { IconCoffeeCup } from "./components/iocns/Icons";

interface bookingDetailsInfoProps {
    label: string;
    value: string;
    isGreenText?: boolean,
    icon?: any
}

export const bookingDetailsInfo:bookingDetailsInfoProps[] = [
    {
        label:"1 Room",
        value:"Double Deluxe Room"
    },
    {
        label:"Guests",
        value:"2 Adults + 2 Children"
    },
    {
        label:"Child age(s)",
        value:"3 years old, 5 years old"
    },
    {
        label:"Meal plan",
        value:"Breakfast included",
        icon:<IconCoffeeCup/>
    },
    {
        label:"Booking type",
        value:"Refundable",
        isGreenText:true
    }
]