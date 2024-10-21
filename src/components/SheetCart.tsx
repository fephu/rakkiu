import { BiShoppingBag } from "react-icons/bi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { GoTrash } from "react-icons/go";
import { Ghost, Minus, Plus } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";

const SheetCart = () => {
  const { items, removeItem, decreaseQuantity, total, increaseQuantity } =
    useCart();

  const itemCount = items.length;

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center gap-1">
          <BiShoppingBag className="size-6 sm:size-7 cursor-pointer" />
          {itemCount !== 0 && <div className="">{itemCount}</div>}
        </div>
      </SheetTrigger>
      <SheetContent className="px-0">
        {items.length !== 0 ? (
          <div className="flex flex-col h-full pb-10">
            <h1 className="text-center text-lg uppercase font-semibold border-b border-gray-300 h-10">
              Cart
            </h1>
            <ScrollArea>
              {items.map((item) => (
                <div className="flex justify-between border-b border-gray-200 pr-4">
                  <img
                    src={item.product.image[0]}
                    alt="Product image"
                    className="w-1/3 object-cover"
                  />
                  <div className="flex flex-col gap-2 py-8 px-2 w-full">
                    <span className="line-clamp-1">{item.product.name}</span>
                    <span className="text-sm text-muted-foreground">
                      Size {item.product.size}
                    </span>
                    <div className="flex items-center justify-between">
                      <span>{formatPrice(item.product.price)}đ</span>
                      <div className="flex items-center gap-2 border">
                        <Button
                          variant={"ghost"}
                          size={"sm"}
                          className="rounded-none h-8 px-2"
                          onClick={() =>
                            decreaseQuantity(item.product.id, item.product.size)
                          }
                        >
                          <Minus className="size-4 cursor-pointer" />
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          variant={"ghost"}
                          size={"sm"}
                          className="rounded-none h-8 px-2"
                          onClick={() =>
                            increaseQuantity(item.product.id, item.product.size)
                          }
                        >
                          <Plus className="size-4 cursor-pointer" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="py-8">
                    <GoTrash
                      className="size-5 cursor-pointer"
                      onClick={() =>
                        removeItem(item.product.id, item.product.size)
                      }
                    />
                  </div>
                </div>
              ))}
            </ScrollArea>
            <div className="mx-auto my-6">
              <span>Subtotal: {formatPrice(total)}đ</span>
            </div>
            <div className="flex flex-col gap-4 px-4">
              <Link
                to={"/cart"}
                className={buttonVariants({
                  className:
                    "rounded-none w-full uppercase font-normal tracking-wide text-sm h-8",
                })}
                reloadDocument
              >
                View Cart
              </Link>

              <Link
                to={"/checkout"}
                className={buttonVariants({
                  className:
                    "rounded-none w-full uppercase font-normal tracking-wide text-sm h-8",
                })}
                reloadDocument
              >
                Checkout
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 w-full h-full gap-4">
            <Ghost className="size-12" />
            <span className="">No products in the cart.</span>
            <Link
              to={"/all"}
              className={buttonVariants({
                className:
                  "rounded-none uppercase font-normal text-sm gap-2 border-gray-900",
                size: "sm",
              })}
              reloadDocument
            >
              Continue shopping
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
