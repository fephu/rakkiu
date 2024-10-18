import { BiMenu } from "react-icons/bi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { menus } from "@/db";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <BiMenu className="size-6" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <div className="flex flex-col gap-4 mt-2">
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-semibold">shop</h1>
            <ul className="flex flex-col pl-4 gap-4">
              <Link to={`/all`} reloadDocument>
                ALL
              </Link>
              <Link to={`/new`} reloadDocument>
                NEW
              </Link>
              {menus.map((item) => (
                <Link to={`/${item.value}`} key={item.value} reloadDocument>
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
          <h1 className="uppercase font-semibold">Best seller</h1>
          <div className="flex flex-col gap-4">
            <h1 className="uppercase font-semibold">Features</h1>
            <ul className="flex flex-col gap-4 pl-4">
              <Link to={"/lookbook"}>LOOKBOOK</Link>
              <Link to={"/news"}>NEWS</Link>
              <Link to={"/video"}>VIDEO</Link>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
