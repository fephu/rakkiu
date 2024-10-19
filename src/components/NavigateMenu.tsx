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
import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";

const features = ["lookbook", "news", "video"];

const NavigateMenu = () => {
  const [isCollection, setIsCollection] = useState<boolean>(false);
  const [isCollaboration, setIsCollaboration] = useState<boolean>(false);

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
            <ul className="flex flex-col w-[200px]">
              <Link to={"/all"} className="px-4 py-2 text-sm" reloadDocument>
                ALL
              </Link>
              <Link to={"/new"} className="px-4 py-2 text-sm" reloadDocument>
                NEW
              </Link>
              <div
                className="pl-4 pr-2 py-2 text-sm relative flex items-center justify-between cursor-pointer"
                onMouseEnter={() => setIsCollection(true)}
                onMouseLeave={() => setIsCollection(false)}
              >
                <span>COLLECTIONS</span>
                <FaCaretRight />
                {isCollection && (
                  <div
                    className={`absolute left-[100%] top-2 flex justify-center bg-white border w-[100px] flex-col`}
                  >
                    <Link
                      to={"/collection/ss24"}
                      className="px-4 py-2 text-sm"
                      reloadDocument
                    >
                      SS24
                    </Link>
                    <Link
                      to={"/collection/fw23"}
                      className="px-4 py-2 text-sm"
                      reloadDocument
                    >
                      FW23
                    </Link>
                    <Link
                      to={"/collection/fw22"}
                      className="px-4 py-2 text-sm"
                      reloadDocument
                    >
                      FW22
                    </Link>
                    <Link
                      to={"/collection/ss21"}
                      className="px-4 py-2 text-sm"
                      reloadDocument
                    >
                      SS21
                    </Link>
                  </div>
                )}
              </div>
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
              <div
                className="pl-4 pr-2 py-2 text-sm relative flex items-center justify-between cursor-pointer"
                onMouseEnter={() => setIsCollaboration(true)}
                onMouseLeave={() => setIsCollaboration(false)}
              >
                <span>COLLABORATION</span>
                <FaCaretRight />
                {isCollaboration && (
                  <div
                    className={`absolute left-[100%] top-2 flex justify-center bg-white border w-[220px] flex-col`}
                  >
                    <Link
                      to={"/collection/ss24"}
                      className="px-4 py-2 text-sm"
                      reloadDocument
                    >
                      GREAT MINDS THINK ALIKE
                    </Link>
                    <Link
                      to={"/collection/fw23"}
                      className="px-4 py-2 text-sm"
                      reloadDocument
                    >
                      LENINN
                    </Link>
                    <Link
                      to={"/collection/fw22"}
                      className="px-4 py-2 text-sm"
                      reloadDocument
                    >
                      SUPREME COMMUNITY VN
                    </Link>
                    <Link
                      to={"/collection/ss21"}
                      className="px-4 py-2 text-sm"
                      reloadDocument
                    >
                      TOKYO TEAM
                    </Link>
                  </div>
                )}
              </div>
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
                  key={item}
                  className="uppercase px-4 py-2 text-sm"
                  reloadDocument
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
