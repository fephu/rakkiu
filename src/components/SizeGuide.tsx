import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import sizeGuide from "@/assets/size-guide.webp";

const SizeGuide = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"link"}
          className="w-fit underline px-0 uppercase font-semibold text-xs"
          size={"sm"}
        >
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl px-20">
        <DialogTitle></DialogTitle>
        <img
          src={sizeGuide}
          alt="Size guide image"
          className="w-full h-full object-cover"
        />
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuide;
