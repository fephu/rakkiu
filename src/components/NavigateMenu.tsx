import { menus } from "@/db";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const features = ["lookbook", "news", "video"];

const NavigateMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(navigationMenuTriggerStyle(), "px-2")}
          >
            <span className="text-base font-normal">SHOP</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[300px]">
              <Link to={"/all"} className="px-4 py-2 text-sm" reloadDocument>
                ALL
              </Link>
              <Link to={"/new"} className="px-4 py-2 text-sm" reloadDocument>
                NEW
              </Link>
              <Link
                to={"/collections/ss24"}
                className="px-4 py-2 text-sm"
                reloadDocument
              >
                COLLECTIONS
              </Link>
              {menus.map((item) => (
                <Link
                  to={`/${item.value}`}
                  key={item.value}
                  className="px-4 py-2 text-sm"
                  reloadDocument
                >
                  {item.label}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/best-seller"
            className={cn(navigationMenuTriggerStyle(), "px-2")}
          >
            <span className="text-base font-normal">BEST SELLER</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(navigationMenuTriggerStyle(), "px-2")}
          >
            <span className="text-base font-normal">FEATURES</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex flex-col w-[300px]">
              {features.map((item) => (
                <Link
                  to={`/${item}`}
                  className="uppercase px-4 py-2 text-sm"
                  reloadDocument
                  key={item}
                >
                  {item}
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigateMenu;
