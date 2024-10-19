import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { allProduct } from "@/db";
import { useParams } from "react-router-dom";

const CollectionList = () => {
  const { id } = useParams();

  return (
    <MaxWidthWrapper className="pb-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-4 gap-y-10">
        {allProduct &&
          allProduct
            .filter((product) => product.collection === id)
            .map((product) => (
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

export default CollectionList;
