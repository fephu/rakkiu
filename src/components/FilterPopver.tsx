import { Filter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { colors } from "@/db";
import { LuDot } from "react-icons/lu";

interface FilterPopverProps {
  selectedColors: string[];
  onColorChange: (color: string[]) => void;
  onApplyFilter: () => void;
  clearFilter: () => void;
}

const FilterPopver = ({
  selectedColors,
  onColorChange,
  onApplyFilter,
  clearFilter,
}: FilterPopverProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="h-8 relative">
        <div className="flex items-center gap-1">
          <span className="tracking-wide text-sm sm:text-base">Filter</span>

          <Filter className="size-4 text-muted-foreground" />
        </div>
        {selectedColors.length > 0 && (
          <LuDot className="absolute -top-2.5 -right-5 size-10 text-red-600" />
        )}
      </PopoverTrigger>
      <PopoverContent className="rounded-none">
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-xs tracking-wide font-semibold">
            Color
          </h1>
          <div className="grid grid-cols-3 gap-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="all"
                className="rounded-none size-3"
                checked={selectedColors.length === 0}
              />
              <label
                htmlFor="all"
                className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                All
              </label>
            </div>
            {colors.map((color) => (
              <div className="flex items-center space-x-2" key={color.value}>
                <Checkbox
                  className="rounded-none size-3"
                  value={color.value}
                  onCheckedChange={(checked) => {
                    return checked
                      ? onColorChange([...selectedColors, color.value])
                      : onColorChange(
                          selectedColors.filter((cl) => cl !== color.value)
                        );
                  }}
                  checked={selectedColors.includes(color.value)}
                />
                <label
                  htmlFor={color.value}
                  className="text-xs leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {color.label}
                </label>
              </div>
            ))}
          </div>

          {/* <h1 className="uppercase text-xs tracking-wide font-semibold">
            Material
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="all"
                className="rounded-none size-3"
                defaultChecked
              />
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
          </div> */}
          <div className="flex flex-col items-center gap-2 justify-center">
            <span className="text-xs">
              You can select several options at once.
            </span>

            <div className="flex items-center gap-3">
              <Button
                className="h-8 rounded-none font-normal px-4 text-xs"
                onClick={() => {
                  setIsOpen(false);
                  onApplyFilter();
                }}
              >
                Apply
              </Button>
              <Button
                className="h-8 rounded-none px-4 text-xs"
                variant={"outline"}
                onClick={clearFilter}
              >
                Clear
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default FilterPopver;
