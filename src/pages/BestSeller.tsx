import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import tee1 from "@/assets/tee/tee1.webp";
import tee1back from "@/assets/tee/tee1-back.webp";
import tee2 from "@/assets/tee/tee2.webp";
import tee2back from "@/assets/tee/tee2-back.webp";
import polo1 from "@/assets/tee/polo1.webp";
import polo1back from "@/assets/tee/polo1-back.webp";
import polo2 from "@/assets/tee/polo2.webp";
import polo2back from "@/assets/tee/polo2-back.webp";
import polo3 from "@/assets/tee/polo3.webp";
import polo3back from "@/assets/tee/polo3-back.webp";
import bottom1 from "@/assets/tee/bottom1.webp";
import bottom1back from "@/assets/tee/bottom1-back.webp";
import ProductCard from "@/components/ProductCard";

const bestSeller = [
  { img: [tee1, tee1back], name: "SKEW YA Navy Jersey Tee", price: 610000 },
  {
    img: [polo1, polo1back],
    name: "FLAGSTAFF Oversized Brown Polo",
    price: 630000,
    isBestSeller: false,
  },
  {
    img: [polo2, polo2back],
    name: "FLAGSTAFF Oversized Cream Polo",
    price: 630000,
    isBestSeller: true,
  },
  {
    img: [polo3, polo3back],
    name: "FLAGSTAFF Oversized Black Polo",
    price: 630000,
    isBestSeller: true,
  },
  {
    img: [bottom1, bottom1back],
    name: "BUTTON Cargo Black Pants",
    price: 1180000,
    isBestSeller: true,
  },
  {
    img: [tee2, tee2back],
    name: "FULLTIME JOB White T-shirt",
    price: 530.0,
    isBestSeller: false,
  },
];

const BestSeller = () => {
  return (
    <MaxWidthWrapper className="pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-x-6 gap-y-6">
        {bestSeller &&
          bestSeller
            .filter((value) => value.isBestSeller === true)
            .map((product, i) => (
              <ProductCard
                img={product.img}
                key={i}
                name={product.name}
                price={product.price}
              />
            ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default BestSeller;
