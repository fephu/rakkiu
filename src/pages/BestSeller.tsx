import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import ProductCard from "@/components/ProductCard";
import { allProduct } from "@/db";

const BestSeller = () => {
  return (
    <MaxWidthWrapper className="pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-6 gap-y-6">
        {allProduct &&
          allProduct
            // .filter((value) => value.isBestSeller === true)
            .map((product, i) => (
              <ProductCard
                img={product.img}
                key={i}
                name={product.name}
                price={product.price}
                id={product.id}
              />
            ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default BestSeller;
