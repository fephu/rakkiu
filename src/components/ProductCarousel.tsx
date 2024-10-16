import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ProductCarouselProps {
  images: string[];
}

const ProductCarousel = ({ images }: ProductCarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 3000, active: true }));

  return (
    <Carousel plugins={[plugin.current]}>
      <CarouselContent>
        {images &&
          images.map((item, i) => (
            <CarouselItem key={i}>
              <img src={item} alt="" className=" w-full sm:w-1/2 mx-auto" />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious
        variant={"ghost"}
        className="hidden sm:flex left-2 size-12"
      />
      <CarouselNext
        variant={"ghost"}
        className=" hidden sm:flex right-2 size-12"
      />
    </Carousel>
  );
};

export default ProductCarousel;
