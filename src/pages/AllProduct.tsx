import FilterPopver from "@/components/FilterPopver";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import SortingSelect from "@/components/SortingSelect";
import { allProduct } from "@/db";

const AllProduct = () => {
  return (
    <>
      <div className="w-full py-2 px-10">
        <div className="flex items-center gap-6 justify-start sm:justify-end">
          <FilterPopver />
          <SortingSelect />
        </div>
      </div>
      <MaxWidthWrapper className="pb-10">
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
    </>
  );
};

export default AllProduct;
