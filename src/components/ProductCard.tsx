import { quantityOfProduct } from "@/db";
import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  img: string[];
  name: string;
  price: number;
}

const ProductCard = ({ id, img, name, price }: ProductCardProps) => {
  const isSoldOut = quantityOfProduct.find((item) => item.id === id);

  return (
    <Link
      to={`/product/${name.toLowerCase().replace(/\s/g, "-")}`}
      className="flex flex-col items-center text-center relative"
      reloadDocument
    >
      <div className="relative flex items-center justify-center w-full z-0 img-container">
        <img
          src={img[0]}
          loading="lazy"
          alt="Image product"
          className="w-full default-img"
        />
        <img
          loading="lazy"
          src={img[1]}
          alt="Image product"
          className="w-full absolute top-0 opacity-0 hover-img"
        />
      </div>

      {!isSoldOut && (
        <div className="absolute left-0 bottom-14">
          <span className="bg-black text-white px-2 py-1 rounded-md uppercase text-[0.65rem]">
            Sold out
          </span>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <span className="text-gray-900 text-xs sm:text-sm line-clamp-1">
          {name}
        </span>

        <span className="text-xs sm:text-sm">{formatPrice(price)} đ</span>
      </div>
    </Link>
  );
};

export default ProductCard;
