interface Feature {
    label: string;
}
interface ImageProps {
    imageUrl: string;
    altTag: string;
}
interface resultItemsProps {
    propertyImages: ImageProps[],
    hotelName: string;
    rating: number;
    hotelStatus: string;
    reviews: number;
    totalRating: number,
    description: string,
    off?: number,
    features?: Feature[],
    originalPrice: number,
    offerPrice: number,
    totalPrice: number,
    days: number,
    isBlur?: boolean
}
export const resultItems: resultItemsProps[] = [
    {
        propertyImages:[
            {
                imageUrl:"/property_img.jpg",
                altTag:"result property",
            },
            {
                imageUrl:"/property_img1.jpg",
                altTag:"result property"
            },
            {
                imageUrl:"/property_img2.jpg",
                altTag:"result property"
            }
        ],
        hotelName:"Kimpton De Witt Amsterdam, an IHG Hotel",
        rating:0,
        hotelStatus:"Excellent",
        reviews:876,
        totalRating:9.4,
        description:"Nieuwezijds Voorburgwal 5, 1012 RC Amsterdam, Netherlands 1.8 km from point of interest ·",
        off:-20,
        features:[
            {label:"Taxes included"},
            {label:"Pay with crypto"}
        ],
        originalPrice:426,
        offerPrice:242,
        totalPrice:762,
        days:3,
    },
    {
        propertyImages:[
            {
                imageUrl:"/property_img.jpg",
                altTag:"result property"
            },
            {
                imageUrl:"/property_img1.jpg",
                altTag:"result property"
            },
            {
                imageUrl:"/property_img2.jpg",
                altTag:"result property"
            }
        ],
        hotelName:"Kimpton De Witt Amsterdam, an IHG Hotel One",
        rating:2,
        hotelStatus:"Good",
        reviews:76,
        totalRating:8.4,
        description:"Nieuwezijds Voorburgwal 5, 1012 RC Amsterdam, Netherlands 1.8 km from point of interest · Nieuwezijds Voorburgwal 5, 1012 RC Amsterdam, Netherlands 1.8 km from point of interest ·",
        features:[
            {label:"Taxes included"},
            {label:"Pay with crypto"}
        ],
        originalPrice:326,
        offerPrice:142,
        totalPrice:562,
        days:2
    },
    {
        propertyImages:[
            {
                imageUrl:"/property_img.jpg",
                altTag:"result property"
            },
            {
                imageUrl:"/property_img1.jpg",
                altTag:"result property"
            },
            {
                imageUrl:"/property_img2.jpg",
                altTag:"result property"
            }
        ],
        hotelName:"Kimpton De Witt Amsterdam, an IHG Hotel Two",
        rating:2,
        hotelStatus:"Good",
        reviews:76,
        totalRating:8.4,
        description:"Nieuwezijds Voorburgwal 5, 1012 RC Amsterdam, Netherlands 1.8 km from point of interest · Nieuwezijds Voorburgwal 5, 1012 RC Amsterdam, Netherlands 1.8 km from point of interest ·",
        features:[
            {label:"Taxes included"},
            {label:"Pay with crypto"}
        ],
        originalPrice:326,
        offerPrice:142,
        totalPrice:562,
        days:2,
        isBlur:true
    },
    {
        propertyImages:[
            {
                imageUrl:"/property_img.jpg",
                altTag:"result property"
            },
            {
                imageUrl:"/property_img1.jpg",
                altTag:"result property"
            },
            {
                imageUrl:"/property_img2.jpg",
                altTag:"result property"
            }
        ],
        hotelName:"Kimpton De Witt Amsterdam, an IHG Hotel Three",
        rating:2,
        hotelStatus:"Good",
        reviews:76,
        totalRating:8.4,
        description:"Nieuwezijds Voorburgwal 5, 1012 RC Amsterdam, Netherlands 1.8 km from point of interest · Nieuwezijds Voorburgwal 5, 1012 RC Amsterdam, Netherlands 1.8 km from point of interest ·",
        features:[
            {label:"Taxes included"},
            {label:"Pay with crypto"}
        ],
        originalPrice:326,
        offerPrice:142,
        totalPrice:562,
        days:2
    }
]