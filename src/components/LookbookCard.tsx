import { Link } from "react-router-dom";

interface LookbookCardProps {
  title: string;
  img: string;
  description: string;
}

const LookbookCard = ({ title, img, description }: LookbookCardProps) => {
  return (
    <Link
      to={"/lookbook/homebody"}
      className="cursor-pointer flex flex-col gap-2 w-full h-full"
    >
      <img
        src={img}
        alt=""
        className="w-full h-3/4 object-cover object-center"
      />

      <div className="flex flex-col">
        <span className="text-lg line-clamp-2">{title}</span>
        {description === "" && <span>...</span>}
      </div>
    </Link>
  );
};

export default LookbookCard;
