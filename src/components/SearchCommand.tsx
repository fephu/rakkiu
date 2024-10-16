import { useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { BiSearch } from "react-icons/bi";
import { allProduct } from "@/db";
import { Link } from "react-router-dom";
import { formatPrice } from "@/lib/utils";

const SearchCommand = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <BiSearch
        className="size-8 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandEmpty>No results found.</CommandEmpty>
        {isOpen ? (
          <CommandList>
            {allProduct.map((product) => (
              <CommandItem>
                <Link
                  to={`/product/${product.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  className="flex items-center gap-2"
                  reloadDocument
                >
                  <img
                    src={product.img[0]}
                    alt="Product image"
                    className="w-1/4"
                  />
                  <div className="flex flex-col gap-2">
                    <span>{product.name}</span>
                    <span>{formatPrice(product.price)}đ</span>
                  </div>
                </Link>
              </CommandItem>
            ))}
          </CommandList>
        ) : (
          <div></div>
        )}
      </CommandDialog>
    </>
  );
};

export default SearchCommand;
