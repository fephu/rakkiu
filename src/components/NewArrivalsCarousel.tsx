import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./ProductCard";

import tee1 from "@/assets/tee/tee1.webp";
import tee1back from "@/assets/tee/tee1-back.webp";
import polo1 from "@/assets/tee/polo1.webp";
import polo1back from "@/assets/tee/polo1-back.webp";
import polo2 from "@/assets/tee/polo2.webp";
import polo2back from "@/assets/tee/polo2-back.webp";
import polo3 from "@/assets/tee/polo3.webp";
import polo3back from "@/assets/tee/polo3-back.webp";
import bottom1 from "@/assets/tee/bottom1.webp";
import bottom1back from "@/assets/tee/bottom1-back.webp";

const newArrivals = [
  { img: [tee1, tee1back], name: "SKEW YA Navy Jersey Tee", price: 610000 },
  {
    img: [polo1, polo1back],
    name: "FLAGSTAFF Oversized Brown Polo",
    price: 630000,
  },
  {
    img: [polo2, polo2back],
    name: "FLAGSTAFF Oversized Cream Polo",
    price: 630000,
  },
  {
    img: [polo3, polo3back],
    name: "FLAGSTAFF Oversized Black Polo",
    price: 630000,
  },
  {
    img: [bottom1, bottom1back],
    name: "BUTTON Cargo Black Pants",
    price: 1180000,
  },
];

const NewArrivalsCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {newArrivals &&
          newArrivals.map((item, i) => (
            <CarouselItem key={i} className="basis-1/2 lg:basis-1/3">
              <ProductCard img={item.img} name={item.name} price={item.price} />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default NewArrivalsCarousel;
