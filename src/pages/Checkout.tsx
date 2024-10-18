import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import qrCode from "@/assets/qrcode.svg";

const Checkout = () => {
  const { items, total, discount } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  return (
    <MaxWidthWrapper className="py-6">
      <div className="flex items-center gap-1 justify-center">
        <Link
          to={"/cart"}
          className="uppercase text-xs text-gray-950 text-muted-foreground"
        >
          shopping cart
        </Link>
        <ChevronRight className="size-4 text-muted-foreground" />
        <Link to={"/checkout"} className="uppercase text-xs font-semibold">
          Checkout details
        </Link>
        <ChevronRight className="size-4 text-muted-foreground" />
        <span className="uppercase text-xs text-muted-foreground">
          order complete
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-8 mt-6">
        <div className="col-span-1 sm:col-span-2 border border-gray-900 p-4">
          <h1 className="text-base uppercase h-10 tracking-tight">
            billing details
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Label className="font-normal text-xs" htmlFor="">
                  Full name <span className="text-red-900 text-sm">*</span>
                </Label>
                <Input className="border-gray-900 rounded-none" />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="font-normal text-xs" htmlFor="">
                  Email <span className="text-red-900 text-sm">*</span>
                </Label>
                <Input className="border-gray-900 rounded-none" />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="font-normal text-xs" htmlFor="">
                  Address <span className="text-red-900 text-sm">*</span>
                </Label>
                <Input
                  className="border-gray-900 rounded-none text-xs"
                  placeholder="VD: so 20, ngo 90 Cau Giay, Ha Noi"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="font-normal text-xs" htmlFor="">
                  Zip code (Optional)
                </Label>
                <Input
                  className="border-gray-900 rounded-none text-xs"
                  placeholder="* Overseas shipping required"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <Label className="font-normal text-xs" htmlFor="">
                  Phone <span className="text-red-900 text-sm">*</span>
                </Label>
                <Input className="border-gray-900 rounded-none" />
              </div>
              <div className="flex flex-col gap-1">
                <Label className="font-normal text-xs" htmlFor="">
                  Name of facebook{" "}
                  <span className="text-red-900 text-sm">*</span>
                </Label>
                <Input className="border-gray-900 rounded-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1 col-span-1 sm:col-span-2">
              <Label className="font-normal text-xs">
                Order notes (Optional)
              </Label>
              <Textarea className="resize-none border-gray-900 rounded-none text-xs" />
            </div>
          </div>
        </div>
        <div className="border border-gray-900 px-6 py-4 col-span-1 w-full h-fit">
          <h1 className="text-base uppercase h-8 tracking-tight">Your order</h1>

          <div className="flex items-center justify-between border-b border-gray-900 h-12 text-xs">
            <span className="uppercase">Product</span>
            <span className="uppercase">Total</span>
          </div>

          {items.map((item) => (
            <div className="pt-4 text-xs flex items-center justify-between">
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span>{formatPrice(item.product.price * item.quantity)}đ</span>
            </div>
          ))}
          <div className="py-4 text-xs flex items-center justify-between">
            <span>Total</span>
            <span>{formatPrice(total)}đ</span>
          </div>
          {discount > 0 && (
            <div className="pb-4 text-xs flex items-center justify-between">
              <span>Discount</span>
              <span>-{discount}%</span>
            </div>
          )}
          <div className="pb-4 text-xs flex items-center justify-between border-b border-gray-900">
            <span>Shipping</span>
            <span className="text-blue-600 max-w-52 text-end">
              Vietnam: Recipient pays for shipping service at the time of
              delivery.
            </span>
          </div>
          <div className="py-4 text-xs flex items-center justify-between border-b border-gray-900">
            <span>Order total</span>
            <span>{formatPrice(total * (1 - discount / 100))}đ</span>
          </div>

          <div className="py-4 px-2 text-xs flex flex-col gap-2 border-b border-gray-900">
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="cash" id="cash" className="size-3.5" />
                <Label htmlFor="cash" className="text-xs font-normal">
                  Cash
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="payment"
                  id="payment"
                  className="size-3.5"
                />
                <Label htmlFor="payment" className="text-xs font-normal">
                  Payment (Scan QR code)
                </Label>
              </div>
            </RadioGroup>

            {paymentMethod === "payment" && (
              <img src={qrCode} alt="QR code" className="w-1/2" />
            )}
          </div>

          <Button className="uppercase rounded-none w-full font-normal">
            place order
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Checkout;
