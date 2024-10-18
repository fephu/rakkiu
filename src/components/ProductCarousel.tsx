import { useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { Pause, Play, X } from "lucide-react";

interface ProductCarouselProps {
  images: string[];
  onChangeState: (newState: string) => void;
}

const ProductCarousel = ({ images, onChangeState }: ProductCarouselProps) => {
  const plugin = useRef(Autoplay({ delay: 3000, playOnInit: false }));
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const toggleAutoplay = () => {
    if (plugin.current.isPlaying()) {
      setIsPlaying(false);
      plugin.current.stop();
      plugin.current.reset();
    } else {
      setIsPlaying(true);
      plugin.current.play();
    }
  };
  return (
    <>
      <div className="absolute top-4 right-4 flex items-center bg-white z-50 border border-gray-500">
        <Button variant={"ghost"} size={"sm"} onClick={toggleAutoplay}>
          {isPlaying ? (
            <Pause className="size-6" />
          ) : (
            <Play className="size-6" />
          )}
        </Button>
        <Button
          variant={"ghost"}
          size={"sm"}
          onClick={() => {
            setIsPlaying(false);
            onChangeState("");
          }}
        >
          <X className="size-6" />
        </Button>
      </div>

      <Carousel plugins={[plugin.current]}>
        <CarouselContent>
          {images &&
            images.map((item, i) => (
              <CarouselItem key={i}>
                <img
                  src={item}
                  alt=""
                  className="w-full sm:w-1/2 mx-auto object-cover"
                />
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
    </>
  );
};

export default ProductCarousel;
