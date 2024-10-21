import { Filter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { colors } from "@/db";

const FilterPopver = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="h-8">
        <div className="flex items-center gap-1">
          <span className="tracking-wide text-sm sm:text-base">Filter</span>
          <Filter className="size-4 text-muted-foreground" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="rounded-none">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-xs tracking-wide font-semibold">
            Color
          </h1>
          <div className="grid grid-cols-3 gap-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="all" className="rounded-none size-3" />
              <label
                htmlFor="all"
                className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All
              </label>
            </div>
            {colors.map((color) => (
              <div className="flex items-center space-x-2">
                <Checkbox id={color.value} className="rounded-none size-3" />
                <label
                  htmlFor={color.value}
                  className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {color.label}
                </label>
              </div>
            ))}
          </div>

          <h1 className="uppercase text-xs tracking-wide font-semibold">
            Material
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="all" className="rounded-none size-3" />
              <label
                htmlFor="all"
                className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="black" className="rounded-none size-3" />
              <label
                htmlFor="black"
                className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Cotton
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 justify-center">
            <span className="text-xs">
              You can select several options at once.
            </span>

            <div className="flex items-center gap-3">
              <Button className="h-8 rounded-none font-normal px-4 text-xs">
                Apply
              </Button>
              <Button
                className="h-8 rounded-none px-4 text-xs"
                variant={"outline"}
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopver;
