import { FiFilter } from "react-icons/fi";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const FilterDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} className="rounded-none">
          <FiFilter className="size-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="left" className="rounded-none">
        <h1 className="px-2">Filter</h1>
        <div className="flex flex-col"></div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FilterDropdown;
