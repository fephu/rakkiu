import { CartItem, useCart } from "@/hooks/use-cart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./ui/button";
import { HiArrowLongLeft } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import { formatPrice } from "@/lib/utils";

interface ProductCartTableProps {
  products: CartItem[];
}

const ProductCartTable = ({ products }: ProductCartTableProps) => {
  const { decreaseQuantity, addItem, removeItem } = useCart();

  return (
    <Table className="border border-gray-900">
      <TableHeader>
        <TableRow className="border-gray-900">
          <TableHead className="uppercase font-normal text-center text-gray-900">
            Product
          </TableHead>

          <TableHead className="uppercase text-center font-normal text-gray-900">
            Price
          </TableHead>
          <TableHead className="uppercase text-center font-normal text-gray-900">
            Quantity
          </TableHead>
          <TableHead className="uppercase text-center font-normal text-gray-900">
            Total
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow>
            <TableCell className="flex items-center gap-4">
              <GoTrash
                className="size-5 cursor-pointer"
                onClick={() =>
                  removeItem(product.product.id, product.product.size)
                }
              />
              <img
                src={product.product.image[0]}
                alt="Product image"
                className="w-1/4"
              />

              <div className="flex flex-col gap-2">
                <span className="text-sm sm:text-base">
                  {product.product.name}
                </span>
                <span>Size {product.product.size}</span>
              </div>
            </TableCell>
            <TableCell>{formatPrice(product.product.price)}đ</TableCell>
            <TableCell>
              <div className="flex items-center gap-2 border border-gray-900">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="rounded-none h-8 px-2"
                  onClick={() =>
                    decreaseQuantity(product.product.id, product.product.size)
                  }
                >
                  <Minus className="size-4 cursor-pointer" />
                </Button>
                <span>{product.quantity}</span>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="rounded-none h-8 px-2"
                  onClick={() => addItem(product.product)}
                >
                  <Plus className="size-4 cursor-pointer" />
                </Button>
              </div>
            </TableCell>
            <TableCell>
              {formatPrice(product.product.price * product.quantity)}đ
            </TableCell>
          </TableRow>
        ))}
        <div className="px-4 py-4">
          <Link
            to={"/all"}
            className={buttonVariants({
              variant: "outline",
              className:
                "uppercase rounded-none border-gray-900 text-sm font-normal tracking-wide gap-2",
            })}
          >
            <HiArrowLongLeft className="size-4" />
            Continue shopping
          </Link>
        </div>
      </TableBody>
    </Table>
  );
};

export default ProductCartTable;
