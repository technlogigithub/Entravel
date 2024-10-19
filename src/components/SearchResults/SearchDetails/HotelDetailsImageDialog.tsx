import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import ImageGallery from "react-image-gallery";

const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

const HotelDetailsImageDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button variant="outline">Edit Profile</Button> */}
        <Button
          variant="ghost"
          className="bg-transparent text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-sm sm:text-base hover:bg-transparent hover:text-white px-2 whitespace-normal leading-tight"
        >
          See all 29 images
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[90%] md:max-w-[700px] xl:max-w-5xl overflow-hidden p-0">
      <ImageGallery items={images} />
      </DialogContent>
    </Dialog>
  );
};
export default HotelDetailsImageDialog;
