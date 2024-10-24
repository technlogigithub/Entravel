import Container from "../shared/Container";
import { Button } from "../ui/button";
import imagesData from "../../constants/images.json";

const BiggestDiscount = () => {
  return (
    <Container classNames="overflow-hidden">
      <div className="block md:flex justify-between items-end px-6 md:px-12 ">
        <h3 className="max-w-xl max-md:mb-4">Destinations with the biggest discounts</h3>
        <Button size="lg" className="max-md:hidden rounded-xl">View all</Button>
      </div>
      <div className="mt-12 md:mt-10 grid grid-cols-6 gap-4 pl-3 w-[1200px] sm:w-[1000px] lg:w-[1180px] xl:w-[1570px] min-[1500px]:w-[1900px] 3xl:w-[2150px] relative">
      {imagesData.images.map((column:any, columnIndex:number) => (
        <div key={columnIndex} className="flex gap-4 flex-col relative ">
          {column.map((image:any, imageIndex:number) => (
            <div className="relative bg-overlay h-full">
            <img key={imageIndex} src={image.src} alt={image.alt} className="w-full rounded-md h-full"/>
            <p className="font-semibold bg-black/15 rounded-full px-4 py-2 text-white absolute left-5 bottom-5">{image.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
    </Container>
  );
};

export default BiggestDiscount;
