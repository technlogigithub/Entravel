
interface ImageProps {
    imageUrl: string;
    altTag: string;
}
interface favouritesItemsProps {
    propertyImages: ImageProps[],
    hotelName: string;
    rating: number;
    hotelStatus: string;
    reviews: number;
    totalRating: number,
    description: string
}

export const favouritesItems: favouritesItemsProps[] = [
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
    },
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
    },
]