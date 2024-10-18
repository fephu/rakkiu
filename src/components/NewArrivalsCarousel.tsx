import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./ProductCard";

import { allProduct } from "@/db";

const NewArrivalsCarousel = () => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {allProduct &&
          allProduct.map((item, i) => (
            <CarouselItem key={i} className="basis-1/2 lg:basis-1/3">
              <ProductCard
                img={item.img}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default NewArrivalsCarousel;
