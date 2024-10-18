import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { allProduct } from "@/db";

const AllProduct = () => {
  return (
    <MaxWidthWrapper className="pb-10">
      {/* <div className="fixed top-22 right-10 z-[49]">
        <FilterDropdown />
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-4 gap-y-10">
        {allProduct &&
          allProduct.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
            />
          ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default AllProduct;
