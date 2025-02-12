import { BiUser } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const user = {
    name: "Tuan Phu",
    email: "phupt@gmail.com",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <BiUser className="size-6 sm:size-7 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="rounded-none">
        {user ? (
          <>
            <DropdownMenuLabel>
              {user.name} - {user.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-none">
              <Link to={"/sign-up"}>My Order</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-none">
              <Link to={"/sign-in"}>Sign out</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem className="rounded-none">
              <Link to={"/sign-up"} reloadDocument>
                Sign Up
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-none">
              <Link to={"/sign-in"} reloadDocument>
                Sign In
              </Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
