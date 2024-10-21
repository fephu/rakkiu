import { Link } from "react-router-dom";

interface LookbookCardProps {
  title: string;
  img: string;
  isAvaible: boolean;
  value: string;
}

const LookbookCard = ({ title, img, isAvaible, value }: LookbookCardProps) => {
  return (
    <Link
      to={`/lookbook/${value}`}
      className="cursor-pointer flex flex-col gap-2 w-full h-full"
    >
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover object-center"
      />

      <div className="flex flex-col gap-1">
        <span className="text-lg line-clamp-2">{title}</span>
        {isAvaible && (
          <span className="uppercase text-xs">
            SS22 Available in-store and online 2024.
          </span>
        )}
      </div>
    </Link>
  );
};

export default LookbookCard;
