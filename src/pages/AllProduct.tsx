import FilterPopver from "@/components/FilterPopver";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import SortingSelect from "@/components/SortingSelect";
import { allProduct } from "@/db";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const [sortedProducts, setSortedProducts] = useState(allProduct);
  const [sortType, setSortType] = useState<string>("newest");

  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [appliedColors, setAppliedColors] = useState<string[]>([]);

  const handleSort = (ev: string) => {
    setSortType(ev);
  };

  const handleApplyFilter = () => {
    setAppliedColors(selectedColors);
  };

  const clearFilter = () => {
    setAppliedColors([]);
    setSelectedColors([]);
  };

  let updatedProducts = allProduct;
  useEffect(() => {
    if (appliedColors.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        appliedColors.includes(product.color)
      );
    }

    if (sortType === "priceLowToHigh") {
      updatedProducts = [...updatedProducts].sort((a, b) => a.price - b.price);
    } else if (sortType === "priceHighToLow") {
      updatedProducts = [...updatedProducts].sort((a, b) => b.price - a.price);
    }

    setSortedProducts(updatedProducts);
  }, [sortType, appliedColors]);

  return (
    <>
      <div className="w-full py-2 px-10">
        <div className="flex items-center gap-6 justify-start sm:justify-end">
          <FilterPopver
            selectedColors={selectedColors}
            onColorChange={setSelectedColors}
            onApplyFilter={handleApplyFilter}
            clearFilter={clearFilter}
          />
          <SortingSelect onChangeState={handleSort} />
        </div>
      </div>
      <MaxWidthWrapper className="pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-4 gap-y-10">
          {sortedProducts &&
            sortedProducts.map((product) => (
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
