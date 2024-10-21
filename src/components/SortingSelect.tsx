import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface SortingSelectProps {
  onChangeState: (newState: string) => void;
}

const SortingSelect = ({ onChangeState }: SortingSelectProps) => {
  return (
    <div className="flex items-center gap-1">
      <span className="tracking-wide text-sm sm:text-base">Sort by:</span>
      <Select defaultValue="newest" onValueChange={onChangeState}>
        <SelectTrigger className="w-fit text-sm sm:text-base text-muted-foreground border-none h-8 px-1 bg-transparent">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="center" className="w-[200px]">
          <SelectItem value="newest" className="text-sm">
            Newest
          </SelectItem>
          <SelectItem value="priceHighToLow" className="text-sm">
            Price - High to Low
          </SelectItem>
          <SelectItem value="priceLowToHigh" className="text-sm">
            Price - Low to High
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortingSelect;
