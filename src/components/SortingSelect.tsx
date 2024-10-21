import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SortingSelect = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="tracking-wide text-sm sm:text-base">Sort by:</span>
      <Select defaultValue="newest">
        <SelectTrigger className="w-fit text-sm border-none h-8 px-1 bg-transparent">
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="center" className="w-[200px]">
          <SelectItem value="newest" className="text-sm">
            Newest
          </SelectItem>
          <SelectItem value="dark" className="text-sm">
            Price - High to Low
          </SelectItem>
          <SelectItem value="system" className="text-sm">
            Price - Low to High
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortingSelect;
