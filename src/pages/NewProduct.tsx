import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { allProduct } from "@/db";

const NewProduct = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-4 gap-y-10">
        {allProduct &&
          allProduct.map((product, i) => {
            if (i > 6) {
              return;
            }

            return (
              <ProductCard
                key={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                isNew={true}
              />
            );
          })}
      </div>
    </MaxWidthWrapper>
  );
};

export default NewProduct;
