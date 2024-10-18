import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { buttonVariants } from "@/components/ui/button";
import { allProduct } from "@/db";
import { useState } from "react";
import { Link } from "react-router-dom";

const Collections = () => {
  const [active] = useState<string>("SS24");

  return (
    <MaxWidthWrapper>
      <div className="w-full flex items-center gap-10 justify-center pt-6">
        <Link
          to="/collections/ss24"
          className={buttonVariants({
            variant: "outline",
            className:
              active === "ss24" ? "rounded-none bg-gray-200" : "rounded-none",
          })}
        >
          SS24
        </Link>
        <Link
          to="/collections/fw23"
          className={buttonVariants({
            variant: "outline",
            className:
              active === "fw23" ? "rounded-none bg-gray-200" : "rounded-none",
          })}
        >
          FW23
        </Link>
        <Link
          to="/collections/FW22"
          className={buttonVariants({
            variant: "outline",
            className:
              active === "fw22" ? "rounded-none bg-gray-200" : "rounded-none",
          })}
        >
          FW22
        </Link>

        <Link
          to="/collections/ss21"
          className={buttonVariants({
            variant: "outline",
            className:
              active === "ss21" ? "rounded-none bg-gray-200" : "rounded-none",
          })}
        >
          SS21
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-4 gap-y-10 mt-8">
        {allProduct &&
          allProduct.map((product) => (
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              id={product.id}
            />
          ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Collections;
