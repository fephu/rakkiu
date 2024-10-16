import { formatPrice } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ProductCardProps {
  img: string[];
  name: string;
  price: number;
}

const ProductCard = ({ img, name, price }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${name.toLowerCase().replace(/\s/g, "-")}`}
      className="flex flex-col items-center text-center"
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

      <div className="flex flex-col gap-1">
        <span className="text-gray-900 text-sm line-clamp-1">{name}</span>

        <span className="text-sm">{formatPrice(price)} đ</span>
      </div>
    </Link>
  );
};

export default ProductCard;
