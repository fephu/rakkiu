import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SizeGuide from "@/components/SizeGuide";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import ProductCard from "@/components/ProductCard";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { allProduct, quantityOfProduct } from "@/db";
import { formatPrice } from "@/lib/utils";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import ProductCarousel from "@/components/ProductCarousel";

const ProductDetail = () => {
  const { addItem } = useCart();
  const [model, setModel] = useState<string>("");

  const handleStateChange = (newState: string) => {
    setModel(newState);
  };

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams();

  const product = allProduct.find(
    (prod) => prod.name.toLowerCase().replace(/\s/g, "-") === id
  );

  const [message, setMessage] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleChangeSize = (e: any) => {
    setSelectedSize(e.target.value);
    const notSoldOut = quantityOfProduct.find(
      (item) => item.id === product?.id && item.size === e.target.value
    );

    if (notSoldOut) {
      setMessage("In stock");
    } else {
      setMessage("Out of stock");
    }
  };

  const onAddItem = ({
    description,
    id,
    image,
    name,
    price,
  }: {
    id: string;
    description: string;
    image: string[];
    name: string;
    price: number;
  }) => {
    setIsLoading(true);
    if (selectedSize === "-1" || selectedSize === "") {
      alert("Please select the size.");
      setIsLoading(false);
    } else {
      if (message === "Out of stock") {
        alert("Out of stock");
        setIsLoading(false);
      } else {
        addItem({
          id: id,
          image: image,
          description: description,
          price: price,
          name: name,
          size: selectedSize,
        });
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {model !== "" && (
        <div className="fixed top-0 inset-x-0 w-full h-screen flex justify-center items-center bg-white z-[999]">
          <ProductCarousel
            images={(product && product.img) ?? []}
            onChangeState={handleStateChange}
          />
        </div>
      )}
      {product && (
        <MaxWidthWrapper className="relative flex flex-col sm:flex-row">
          <div className="relative w-full">
            <div className="sticky top-48 flex flex-col gap-2 pb-10 pt-10 sm:pt-0">
              <span className="font-semibold">{product.name}</span>
              <span className="text-sm">{product.description}</span>
              <span className="text-sm">100% cotton.</span>
            </div>
          </div>
          <div className="max-w-3xl mx-auto flex flex-row md:flex-col justify-center pb-10 gap-8 overflow-y-scroll mt-0 sm:mt-14">
            {product.img.map((src) => (
              <img
                src={src}
                alt="Product image"
                className="cursor-pointer"
                loading="lazy"
                key={src}
                onClick={() => {
                  setModel(src);
                }}
              />
            ))}
          </div>

          <div className="relative w-full pl-0 sm:pl-10">
            <div className="sticky top-48 flex flex-col gap-2 w-full pb-10">
              <span>{formatPrice(product.price)} đ</span>
              <SizeGuide />

              <select
                name="size"
                id="size"
                className="border border-gray-900 w-3/4 rounded-none p-2 uppercase text-sm h-9"
                value={selectedSize}
                onChange={handleChangeSize}
              >
                <option value={-1} className="p-2 uppercase rounded-none">
                  Select a size
                </option>
                {product.sizes.map((size) => (
                  <option value={size} key={size} className="p-2">
                    {size}
                  </option>
                ))}
              </select>

              {message !== "" && (
                <span className="mt-2 text-xs">{message}</span>
              )}

              <Button
                className="uppercase rounded-none mt-2 w-fit text-sm px-8"
                onClick={() =>
                  onAddItem({
                    id: product.id,
                    description: product.description,
                    image: product.img,
                    name: product.name,
                    price: product.price,
                  })
                }
              >
                {isLoading ? (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                ) : (
                  <span>Add to cart</span>
                )}
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      )}
      <MaxWidthWrapper>
        <div className="flex flex-col py-10 border-t">
          <h1 className="uppercase text-lg pl-8">Related products</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-8 gap-y-6">
            {allProduct &&
              allProduct.map((product, i) => {
                if (i > 4) {
                  return;
                }
                return (
                  <ProductCard
                    key={i}
                    img={product.img}
                    name={product.name}
                    price={product.price}
                    id={product.id}
                  />
                );
              })}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ProductDetail;
