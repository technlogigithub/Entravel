import { bookingFeatureItem } from "@/constants/data";
import Card from "../shared/Card";
import Container from "../shared/Container";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { IconArrowRight } from "@tabler/icons-react";

const EfforlessBooking = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 items-end padding-48">
        <h3>
          Effortless booking, <br />
          exclusive savings
        </h3>
        <p className="font-18 text-black max-w-[507px] justify-self-end !font-normal">
          Enjoy unbeatable hotel booking deals with Entravel - where{" "}
          <span className="font-semibold">invitation-only membership</span>{" "}
          unlocks a world of privileges.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 px-3 mt-[72px]">
        {bookingFeatureItem.map((item) => (
          <Card key={item.id} classNames="even:bg-blue-50">
            <div className="flex items-center pb-10">
              <Badge variant="white">{item.title}</Badge>
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img src={item.imageUrl} alt={item.imgTitle} />
              </div>
            </div>
            <p className="font-18">{item.text}</p>
            {item.isButton && <Button variant="link" className="text-base mt-11 p-0">Learn more <IconArrowRight className="size-5 ml-1"/></Button>}
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default EfforlessBooking;
