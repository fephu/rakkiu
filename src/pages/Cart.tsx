import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCartTable from "@/components/ProductCartTable";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { IoIosPricetag } from "react-icons/io";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  name: z.string(),
});

const Cart = () => {
  const { items, total } = useCart();

  const [appliedVouchers, setAppliedVouchers] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  const validVouchers: { [key: string]: number } = {
    new44: 5,
    customer: 10,
  };

  const discounted = appliedVouchers.reduce(
    (total, code) => total + (validVouchers[code] || 0),
    0
  );

  const applyVoucher = (data: z.infer<typeof FormSchema>) => {
    if (appliedVouchers.includes(data.name)) {
      setMessage("Mã giảm giá đã được áp dụng");
      return;
    }

    if (validVouchers[data.name]) {
      setAppliedVouchers([...appliedVouchers, data.name]);
      setMessage(
        `Mã giảm giá hợp lệ! Bạn được giảm ${validVouchers[data.name]}%`
      );
    } else {
      setMessage("Discount price is not valid");
    }
  };

  return (
    <MaxWidthWrapper className="py-6">
      <div className="flex items-center gap-1 justify-center w-full">
        <Link
          to={"/cart"}
          className="uppercase text-xs text-gray-950 font-semibold"
        >
          shopping cart
        </Link>
        <ChevronRight className="size-4 text-muted-foreground" />
        <Link
          to={"/checkout"}
          className="uppercase text-xs text-muted-foreground"
        >
          Checkout details
        </Link>
        <ChevronRight className="size-4 text-muted-foreground" />
        <span className="uppercase text-xs text-muted-foreground">
          order complete
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 mt-6">
        <div className="col-span-1 sm:col-span-2">
          <ProductCartTable products={items} />
        </div>
        <div className="border border-gray-900 px-6 py-4 col-span-1 w-full h-fit">
          <h1 className="text-base uppercase border-b border-gray-900 h-8 tracking-tight">
            Cart totals
          </h1>

          <div className="flex flex-col py-8 gap-8 border-b border-gray-900">
            <div className="flex items-center justify-between">
              <span className="text-sm">Total</span>
              <span className="text-sm">{formatPrice(total)}đ</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Shipping</span>
              <span className="text-sm text-muted-foreground">
                Shipping options will be updated during checkout.
              </span>
            </div>

            {appliedVouchers.length > 0 && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Discount</span>
                  {appliedVouchers.map((voucher) => (
                    <span className="text-sm">-{validVouchers[voucher]}%</span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm">
                    -{formatPrice((total * discounted) / 100)}đ
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-between py-4">
            <span className="text-sm">Order total</span>
            <span className="text-sm">
              {formatPrice(total * (1 - discounted / 100))}đ
            </span>
          </div>

          <Link
            to={"/checkout"}
            className={buttonVariants({
              className: "rounded-none font-normal uppercase w-full",
            })}
          >
            Proceed to checkout
          </Link>

          <div className="pt-8 flex flex-col gap-4">
            <div className="flex items-center gap-4 border-b border-gray-900 h-10">
              <span className="uppercase text-sm">voucher</span>

              <div
                onClick={() => applyVoucher({ name: "new44" })}
                className="flex items-center text-sm gap-1 border border-gray-200 p-1 rounded-sm cursor-pointer"
              >
                <IoIosPricetag className="size-4" />
                new44
              </div>
            </div>

            <form
              onSubmit={form.handleSubmit(applyVoucher)}
              className="flex flex-col gap-4"
            >
              {message === "Discount price is not valid" ? (
                <span className="text-xs text-red-600">{message}</span>
              ) : (
                <span className="text-xs text-green-600">{message}</span>
              )}
              <Input
                {...form.register("name")}
                placeholder="Code"
                className="rounded-none border-gray-400"
              />
              <Button
                className="rounded-none font-normal uppercase w-full"
                type="submit"
              >
                apply voucher
              </Button>
            </form>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Cart;
