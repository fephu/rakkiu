import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/ProductCard";
import { allProduct } from "@/db";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { category } = useParams();

  const productByCategory = allProduct.filter((product) => {
    return product.category === category;
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {category && category.charAt(0).toUpperCase() + category.substring(1)}{" "}
          - RAKKIU
        </title>
      </Helmet>

      <MaxWidthWrapper className="pb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-6 gap-y-6">
          {productByCategory.map((product) => (
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
    </>
  );
};

export default ProductCategory;
