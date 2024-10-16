import MaxWidthWrapper from "./MaxWidthWrapper";

// Icon
import MobileNav from "./MobileNav";
import logoImg from "@/assets/logo.png";
import NavigateMenu from "./NavigateMenu";
import { Link } from "react-router-dom";
import SheetCart from "./SheetCart";
import SearchCommand from "./SearchCommand";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 inset-x-0 h-20 bg-white/75 backdrop-blur-lg transition-all z-50">
        <Link to="/" className="flex items-center justify-center z-[100]">
          <div className="fixed top-0 cursor-pointer">
            <img src={logoImg} alt="Logo" className="w-40" />
          </div>
        </Link>
        <MaxWidthWrapper>
          <div className="flex items-center justify-between h-20">
            <div className="hidden sm:block">
              <NavigateMenu />
            </div>

            {/* Mobile Nav */}
            <div className="flex sm:hidden">
              <MobileNav />
            </div>
            <div className="flex items-center gap-4">
              <SearchCommand />
              <SheetCart />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default Navbar;
